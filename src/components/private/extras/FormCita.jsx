import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import consumNuevaCita from '../../../functions/citas';
import moment from 'moment';
import getFecha from '../../../functions/fecha'
import consumCitaActualizada from '../../../functions/citaActualizada';
// consumNuevaCita
const FormCita = ({item, datos_af, set_datos_af, setState}) => {
	const consumirNuevaCita = async (body) => {
		let resultado = await consumNuevaCita(body);
		if (resultado.ok === false) {
			alert(resultado.msg);
			return false;
		} else {
			alert('Cita Registrada');
			return resultado;
		}
	};

	const consumirCitaActualizada = async (body) => {
		let resultado = await consumCitaActualizada(body);
		if (resultado.ok){
			alert("Cita actualizada")
			return resultado
		}
	}

	const insertarDatos = (valores) => {
		set_datos_af([
			...datos_af,
			{
				_id: valores._id,
				nombre_paciente: valores.nombre_paciente,
				fecha: moment(valores.fecha).format(),
				responsable: valores.responsable,
				telefono: valores.telefono,
				motivo: valores.motivo,
				condicion: valores.condicion,
				DNI: valores.DNI,
			},
		])
	}

	const actualizarDatos = (valores) => {
		set_datos_af([
			datos_af.map((dato) => {
				if(dato._id == item._id){
					dato.nombre_paciente = valores.nombre_paciente
					dato.fecha = moment(valores.fecha).format()
					dato.responsable = valores.responsable
					dato.telefono = valores.telefono
					dato.motivo = valores.motivo
					dato.condicion = valores.condicion
					dato.DNI = valores.DNI
				}
			})
		])
		set_datos_af([
			...datos_af
		])
	}

	return (
		<div>
			<div><h2>Registro de Citas</h2></div>
			<br />
			<br />
			<Formik
				initialValues={
					(item != undefined && Object.keys(item).length != 0) ? {
						nombre_paciente: item.nombre_paciente,
						dni_paciente: item.dni_paciente,
						responsable: item.responsable,
						telefono: item.telefono,
						motivo: item.motivo,
						hora: item.hora,
						fecha: moment(item.fecha).format('YYYY-MM-DD'),
						condicion: item.condicion,
					} : {
						nombre_paciente: '',
						dni_paciente: '',
						responsable: '',
						telefono: '',
						//fecha_nac: '',
						motivo: '3',
						//sexo: '1',
						hora: '',
						fecha: '',
						condicion: '1',
					}
				}
				validate={(valores) => {
					let errores = {};
					if (!valores.nombre_paciente) {
						errores.nombre_paciente =
							'Por favor ingrese su nombre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,60}$/.test(
							valores.nombre_paciente
						)
					) {
						errores.nombre_paciente =
							'El nombre sólo puede contener letras y espacios';
					}
					if (!valores.responsable) {
						errores.responsable =
							'Por favor ingrese el nombre del responsable';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,60}$/.test(
							valores.responsable
						)
					) {
						errores.responsable =
							'EL nombre del responsable sólo puede contener letras y espacios';
					}
					if (!valores.dni_paciente) {
						errores.dni_paciente = 'Por favor ingrese el DNI';
					} else if (
						!/^[0-9]{8,8}$/.test(valores.dni_paciente)
					) {
						errores.dni_paciente =
							'El DNI sólo puede contener 8 números.';
					}
					if (!valores.telefono) {
						errores.telefono = 'Ingrese el teléfono';
					} else if (!/^[0-9]{9,9}$/.test(valores.telefono)) {
						errores.telefono =
							'El teléfono sólo puede contener 9 números.';
					}
					/*if ('' === valores.fecha_nac) {
						errores.fecha_nac =
							'Por favor, ingrese una fecha de nacimiento';
					}*/
					if ('' === valores.fecha) {
						errores.fecha =
							'Por favor, ingrese una fecha';
					}
					if ('' === valores.hora) {
						errores.hora =
							'Ingrese una hora';
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					if(item != undefined && Object.keys(item).length != 0){
						consumirCitaActualizada({
							_id: item._id,
							nombre_paciente: valores.nombre_paciente,
							fecha: moment(
								new Date(
									`${valores.fecha} ${valores.hora}`
								)
							).format(),
							responsable: valores.responsable,
							telefono: valores.telefono,
							motivo: valores.motivo,
							condicion: valores.condicion,
							DNI: valores.dni_paciente,
						})
						.then((data) => (data.ok && (actualizarDatos(data.Cita), setState(false))))
					} else{
						consumirNuevaCita({
							nombre_paciente: valores.nombre_paciente,
							//fecha_nac: moment(valores.fecha_nac).format(),
							fecha: moment(
								new Date(
									`${valores.fecha} ${valores.hora}`
								)
							).format(),
							//sexo: valores.sexo,
							responsable: valores.responsable,
							telefono: valores.telefono,
							motivo: valores.motivo,
							condicion: valores.condicion,
							DNI: valores.dni_paciente,
						})
						.then((data) => (data.ok && (insertarDatos(data.cita), setState(false))))
					}
				}}
			>
				{({ errors }) => (
					<Form style={{height:'90%'}}>
						<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', justifyContent:'space-between' , width:'100%'}}>
							<div>
								<div>
									<label><b>Nombre del paciente</b></label>
									<Field
										style={{width:'125%', textTransform:'uppercase'}}
										type="text"
										name="nombre_paciente"
									></Field>
								</div>
								<ErrorMessage
									name="nombre_paciente"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.nombre_paciente}</span>
										</div>
									)}
								/>
							</div>
							<div>
								<div>
									<label style={{marginLeft:'150px'}}><b>DNI Paciente</b></label>
									<Field type="text" name="dni_paciente" style={{marginLeft:'150px', width:'61%'}}></Field>
								</div>
								<div style={{marginLeft:'150px'}}>
									<ErrorMessage
										name="dni_paciente"
										component={() => (
											<div className="msj_error_login">
												<span>
													<i className="fas fa-times-circle"></i>
												</span>
												<span>{errors.dni_paciente}</span>
											</div>
										)}
									/>
								</div>
							</div>
						</div>
						<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', justifyContent:'space-between' , width:'100%'}}>
							<div>
								<div>
									<label><b>Responsable</b></label>
									<Field type="text" name="responsable" style={{width:'125%', textTransform:'uppercase'}}></Field>
								</div>
								<ErrorMessage
									name="responsable"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.responsable}</span>
										</div>
									)}
								/>
							</div>
							<div>
								<div>
									<label style={{marginLeft:'150px'}}><b>Teléfono</b></label>
									<Field type="text" name="telefono" style={{marginLeft:'150px', width:'61%'}}></Field>
								</div>
								<div style={{marginLeft:'150px'}}>
									<ErrorMessage
										name="telefono"
										component={() => (
											<div className="msj_error_login">
												<span>
													<i className="fas fa-times-circle"></i>
												</span>
												<span>{errors.telefono}</span>
											</div>
										)}
									/>
								</div>
							</div>
						</div>
						<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', width:'100%'}}>
							<div>
								<div>
									<label><b>Fecha</b></label>
									<Field name="fecha" type="date" min={item === undefined ? getFecha() : ''} style={{width:'125%'}}></Field>
								</div>
								<div>
									<ErrorMessage
										name="fecha"
										component={() => (
											<div className="msj_error_login">
												<span>
													<i className="fas fa-times-circle"></i>
												</span>
												<span>{errors.fecha}</span>
											</div>
										)}
									/>
								</div>
							</div>
							<div style={{marginLeft:'150px'}}>
								<div>
									<label><b>Hora</b></label>
									<Field name="hora" type="time" style={{width:'100%'}}></Field>
								</div>
								<div>
									<ErrorMessage
										name="hora"
										component={() => (
											<div className="msj_error_login">
												<span>
													<i className="fas fa-times-circle"></i>
												</span>
												<span>{errors.hora}</span>
											</div>
										)}
									/>
								</div>
							</div>
						</div>	
						<div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', width:'100%'}}>
							<div>
								<label><b>Motivo</b></label>
								<Field name="motivo" as="select" style={{width:'125%'}}>
									<option value="1">Vacuna</option>
									<option value="2">
										Consulta pediátrica
									</option>
									<option value="3">
										Control de crecimiento
									</option>
								</Field>
							</div>
							{
								(item != undefined && Object.keys(item).length != 0) ? null :
								<div style={{marginLeft:'150px'}}>
									<label><b>Condición</b></label>
									<Field name="condicion" as="select" style={{width:'100%'}}>
										<option value="1">Nuevo</option>
										<option value="2">Continuador</option>
									</Field>
								</div>
							}
						</div>
						<div style={{display:'flex', justifyContent:'center'}}>
							<button type="submit" className="agregar" style={{width:'20%'}}>
								{(item != undefined && Object.keys(item).length != 0) ? 'ACTUALIZAR' : 'AGREGAR'}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormCita;
