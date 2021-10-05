import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import consumNuevaCita from '../../../functions/citas';
import moment from 'moment';
// consumNuevaCita
const FormCita = () => {
	const consumirNuevaCita = async (body) => {
		console.log(body);
		let resultado = await consumNuevaCita(body);
		console.log('Resultado: ');
		console.log(resultado);
		if(resultado.ok ===false){
			alert(resultado.msg)
		}
		else{
			alert('Registro exitoso')
		}
	};
	return (
		<>
			<Formik
				initialValues={{
					nombre_paciente: '',
					dni_paciente: '',
					responsable: '',
					telefono: '',
					fecha_nac: '',
					motivo:'3',
					sexo:'2',
					hora:'',
					fecha:'',
					condicion:"1"
				}}
				validate={(valores) => {
					let errores = {};
					if (!valores.nombre_paciente) {
						errores.nombre_paciente =
							'Por favor ingrese su nombre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
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
						!/^[a-zA-ZÀ-ÿ\s]{1,60}$/.test(valores.responsable)
					) {
						errores.nombre =
							'EL nombre del responsable sólo puede contener letras y espacios';
					}
					if (!valores.dni_paciente) {
						errores.dni_paciente = 'Por favor ingrese el DNI';
					} else if (!/^[0-9]{8,8}$/.test(valores.dni_paciente)) {
						errores.dni_paciente =
							'El DNI sólo puede contener 8 números.';
					}
					if (!valores.telefono) {
						errores.telefono = 'Por favor ingrese el teléfono';
					} else if (!/^[0-9]{9,9}$/.test(valores.telefono)) {
						errores.telefono =
							'El teléfono sólo puede contener 9 números.';
					}
					if(''===valores.fecha_nac){
						errores.fecha_nac='Por favor, ingrese una fecha de nacimiento'
					}
					if(''===valores.fecha){
						errores.fecha='Por favor, ingrese una fecha de la cita'
					}
					if(''===valores.hora){
						errores.hora='Por favor, ingrese una hora de la cita'
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log('Formulario enviado');
					console.log(valores);
					console.log('.------------');
					consumirNuevaCita(
						{nombre_paciente: valores.nombre_paciente, 
						fecha_nac: valores.fecha_nac, 
						fecha: moment(new Date(`${valores.fecha} ${valores.hora}`)).subtract(5, 'hours').format(),
						sexo: valores.sexo, 
						responsable: valores.responsable, 
						telefono: valores.telefono, motivo: valores.motivo,
						condicion: valores.condicion,
						DNI: valores.dni_paciente})
				}}
			>
				{({ errors }) => (
					<Form className="formulario">
						<div>
							<label>Nombre del paciente</label>
							<Field
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
						<div>
							<label>Fecha de nacimiento</label>
							<Field name="fecha_nac" type="date"></Field>
						</div>
						<ErrorMessage
							name="fecha_nac"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.fecha_nac}</span>
								</div>
							)}
						/>
						<div>
							<label>Sexo</label>
							<Field name="sexo" as="select">
								<option value="2">Mujer</option>
								<option value="1">Hombre</option>
							</Field>
						</div>
						<div>
							<label>DNI Paciente</label>
							<Field type="text" name="dni_paciente"></Field>
						</div>
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
						<div>
							<label>Responsable</label>
							<Field type="text" name="responsable"></Field>
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
						<div>
							<label>Teléfono</label>
							<Field type="text" name="telefono"></Field>
							{/* <input type="text" /> */}
						</div>
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
						<div>
							<label>Motivo</label>
							<Field name="motivo" as="select">
								<option value="1">Vacuna</option>
								<option value="2">
									Consulta pediátrica
								</option>
								<option value="3">
									Control de crecimiento
								</option>
							</Field>
						</div>
						<div>
							<label>Fecha</label>
							<Field name="fecha" type="date"></Field>
							{/* <input type="date" /> */}
						</div>
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
						<div>
							<label>Hora</label>
							<Field name="hora" type="time"></Field>
						</div>
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
						<div>
							<label>Condición</label>
							<Field name="condicion" as="select">
								<option value="1">Nuevo</option>
								<option value="2">Continuador</option>
							</Field>
						</div>
						<div>
							<input
								type="submit"
								className="agregar"
								value="Agregar cita"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormCita;
