import React from 'react';
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
import getFecha from '../../../functions/fecha';
// import getFecha  from '../../../functions/fecha';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
const FormFiliacion = ({ item }) => {
	let fechaNac = ''
	if(item.fecha_nac != null){
		fechaNac = moment(item.fecha_nac).format('YYYY-MM-DD')
	}
	const [Hc, setHc] = useState({})
	let { id } = useParams();
	useEffect(() => {
		fetch(`${url}/Historia/id/${id}`)
			.then((resp) => resp.json())
			.then((data)=>{
				/*console.log('hist.clinica');
				console.log(data);
				console.log(id)*/
				setHc(data)
			})
	}, []);
	const handleChange = (e)=>{
		setHc({
			...Hc,
			[e.target.name]: e.target.value
		})
		//setHc(e.target.value)
	}
	console.log("Fecha:", moment(Hc.fecha_nac).format('DD/MM/YYYY'))
	Hc.edad = (moment.duration(moment().diff(moment(Hc.fecha_nac)))).years() + ' años ' + (moment.duration(moment().diff(moment(Hc.fecha_nac)))).months() + ' meses ' + (moment.duration(moment().diff(moment(Hc.fecha_nac)))).days() + ' días'
	return (
		// <div>
		// 	<label>Edad</label>
		// 	<input type="text" value={(moment.duration(moment().diff(moment(Hc.fecha_nac)))).years() + ' años ' + (moment.duration(moment().diff(moment(Hc.fecha_nac)))).months() + ' meses ' + (moment.duration(moment().diff(moment(Hc.fecha_nac)))).days() + ' días'} name="Edad" onChange={handleChange} />
		// 	<label>Fecha de Nacimiento</label>
		// 	<input type="date" value={moment(Hc.fecha_nac).format('YYYY-MM-DD')} name="fecha_nac" onChange={handleChange} />
		// </div>
		<>
			<Formik
				initialValues={{
					nombres_paciente: item.nombres_paciente,
					dni_paciente: item.dni_paciente,
					//fecha_nac: fechaNac,
					// fecha_nac: moment(item.fecha_nac).format('YYYY-MM-DD'),
					//edad : (moment.duration(moment().diff(moment(item.fecha_nac)))).years() + ' años ' + (moment.duration(moment().diff(moment(item.fecha_nac)))).months() + ' meses ' + (moment.duration(moment().diff(moment(item.fecha_nac)))).days() + ' días',
					sexo : item.sexo,
					lugar_nac: item.lugar_nac,
					direccion: item.direccion,
					nombre_madre: item.nombre_madre,
					ocupacion_madre: item.ocupacion_madre,
					telefono_madre: item.telefono_madre,
					nombre_padre: item.nombre_padre,
					telefono_padre: item.telefono_padre,
					ocupacion_padre: item.ocupacion_padre,
					numero_hijo: item.numero_hijo,
					referencia: item.referencia,
				}}
				validate={(valores) => {
					let errores = {};
					if (!valores.nombres_paciente) {
						errores.nombres_paciente =
							'Por favor ingrese su nombre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.nombres_paciente
						)
					) {
						errores.nombres_paciente =
							'El nombre sólo puede contener letras y espacios';
					}
					if (!valores.dni_paciente) {
						errores.dni_paciente = 'Por favor ingrese el DNI';
					} else if (
						!/^[0-9]{8,8}$/.test(valores.dni_paciente)
					) {
						errores.dni_paciente =
							'El DNI sólo puede contener 8 números.';
					}
					if ('' === valores.fecha_nac) {
						errores.fecha_nac =
							'Por favor, ingrese una fecha de nacimiento';
					}
					/*if ('' === valores.lugar_nac) {
						errores.lugar_nac =
							'Por favor, ingrese un lugar de nacimiento';
					}
					if ('' === valores.direccion) {
						errores.direccion =
							'Por favor, ingrese una dirección';
					}
					if (!valores.telefono_madre) {
						errores.telefono_madre =
							'Por favor ingrese el teléfono de la madre';
					} else if (
						!/^[0-9]{9,9}$/.test(valores.telefono_madre)
					) {
						errores.telefono_madre =
							'El teléfono sólo puede contener 9 números.';
					}
					if (!valores.telefono_padre) {
						errores.telefono_padre =
							'Por favor ingrese el teléfono del padre';
					} else if (
						!/^[0-9]{9,9}$/.test(valores.telefono_padre)
					) {
						errores.telefono_padre =
							'El teléfono sólo puede contener 9 números.';
					}
					if ('' === valores.ocupacion_madre) {
						errores.ocupacion_madre =
							'Por favor, ingrese una ocupación';
					}
					if ('' === valores.ocupacion_padre) {
						errores.ocupacion_padre =
							'Por favor, ingrese una ocupación';
					}
					if (!valores.nombre_padre) {
						errores.nombre_padre =
							'Por favor ingrese el nombre del padre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre_padre)
					) {
						errores.nombre_padre =
							'El nombre sólo puede contener letras y espacios';
					}
					if (!valores.nombre_madre) {
						errores.nombre_madre =
							'Por favor ingrese el nombre de la madre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre_madre)
					) {
						errores.nombre_madre =
							'El nombre sólo puede contener letras y espacios';
					}
					if (!valores.referencia) {
						errores.referencia =
							'Por favor ingrese el nombre de referencia';
					}*/
					return errores;
				}}
				// onSubmit={(valores, { resetForm }) => {
				// 	// resetForm();
				// 	fetch(`${url}/Historia/${item._id}`, {
				// 		headers: {
				// 			'Content-Type': 'application/json',
				// 		},
				// 		method: 'PUT',
				// 		body: JSON.stringify({
				// 			...valores,
				// 			fecha_nac : moment(valores.fecha_nac).format(),
				// 			id: item._id,
				// 		}),
				// 	})
				// 		.then((resp) => resp.json())
				// 		.then((data) => {
				// 			if (data.ok) {
				// 				alert('Actualizado correctamente');
				// 				console.log(data);
				// 				/*const { evento } = data;
				// 				console.log(evento);*/
				// 				return data;
				// 			}
				// 		})
				// 		.then((e) => {		
				// 			/*valores.direccion = e.direccion;
				// 			valores.nombres_paciente = e.nombres_paciente;
				// 			valores.dni_paciente = e.dni_paciente;
				// 			valores.lugar_nac = e.lugar_nac;
				// 			//valores.fecha_nac = moment(e.fecha_nac).add(5, 'days').calendar();
				// 			valores.numero_hijo = e.numero_hijo;
				// 			valores.ocupacion_madre = e.ocupacion_madre;
				// 			valores.ocupacion_padre = e.ocupacion_padre;
				// 			valores.referencia = e.referencia;
				// 			valores.telefono_madre = e.telefono_madre;
				// 			valores.telefono_padre = e.telefono_padre;
				// 			valores.nombre_madre = e.nombre_madre;
				// 			valores.nombre_padre = e.nombre_padre;*/
				// 		});
				// }}
			>
				{({ errors }) => (
					<Form>
						
						<div>
							<label>Nombre</label>
							<Field type="text" name="nombres_paciente" value={Hc.nombres_paciente} onChange={handleChange}></Field>
						</div>
						<ErrorMessage
							name="nombres_paciente"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.nombres_paciente}</span>
								</div>
							)}
						/>
						<div>
							<label>DNI</label>
							<Field type="text" name="dni_paciente" value={Hc.dni_paciente} onChange={handleChange}></Field>
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
							<label>Fecha de nacimiento</label>
							<input 
							type="date" 
							name="fecha_nac" 
							max={getFecha()}
							//value={(moment(Hc.fecha_nac).add(5, 'hours')).format('YYYY-MM-DD')}
							value={moment(Hc.fecha_nac).format('YYYY-MM-DD')}
							onChange={handleChange}
							></input>
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
						{/* <div>
							<label>Edad</label>
                			<input type="text" name="edad" value={(moment.duration(moment().diff(moment(item.fecha_nac)))).years() + ' años ' + (moment.duration(moment().diff(moment(item.fecha_nac)))).months() + ' meses ' + (moment.duration(moment().diff(moment(item.fecha_nac)))).days() + ' días'} readOnly>
							</input>
						</div> */}
						<label>Edad</label>
            			{/* <input readonly="" name="fecha_nac" onChange={handleChange}/> */}
						<Field 
							type="text"
							name = "edad"
							value={Hc.edad}
						></Field>
						<div>
							<label>Sexo</label>
							<Field name="sexo" as="select" value={Hc.sexo} onChange={handleChange}>
								<option value="2">Mujer</option>
								<option value="1">Hombre</option>
							</Field>
						</div>
						<div>
							<label>Lugar de nacimiento</label>
							<Field type="text" name="lugar_nac" value={Hc.lugar_nac} onChange={handleChange}></Field>
						</div>
						<ErrorMessage
							name="lugar_nac"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.lugar_nac}</span>
								</div>
							)}
						/>
						<div>
							<label>Dirección</label>
							<Field type="text" name="direccion" value={Hc.direccion} onChange={handleChange}></Field>
						</div>
						<ErrorMessage
							name="direccion"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.direccion}</span>
								</div>
							)}
						/>
						<div>
							<label>Nombre madre</label>
							<Field type="text" name="nombre_madre" value={Hc.nombre_madre} onChange={handleChange}></Field>
						</div>
						<ErrorMessage
							name="nombre_madre"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.nombre_madre}</span>
								</div>
							)}
						/>
						<div>
							<label>Ocupación madre</label>
							<Field
								type="text"
								name="ocupacion_madre"
								value={Hc.ocupacion_madre} onChange={handleChange}
							></Field>
						</div>
						<ErrorMessage
							name="ocupacion_madre"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.ocupacion_madre}</span>
								</div>
							)}
						/>
						<div>
							<label>Teléfono madre</label>
							<Field
								type="text"
								name="telefono_madre"
								value={Hc.telefono_madre} onChange={handleChange}
							></Field>
						</div>
						<ErrorMessage
							name="telefono_madre"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.telefono_madre}</span>
								</div>
							)}
						/>
						<div>
							<label>Nombre padre</label>
							<Field type="text" name="nombre_padre" value={Hc.nombre_padre} onChange={handleChange}></Field>
						</div>
						<ErrorMessage
							name="nombre_padre"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.nombre_padre}</span>
								</div>
							)}
						/>
						<div>
							<label>Ocupación padre</label>
							<Field
								type="text"
								name="ocupacion_padre"
								value={Hc.ocupacion_padre} onChange={handleChange}
							></Field>
						</div>
						<ErrorMessage
							name="ocupacion_padre"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.ocupacion_padre}</span>
								</div>
							)}
						/>
						<div>
							<label>Teléfono padre</label>
							<Field
								type="text"
								name="telefono_padre"
								value={Hc.telefono_padre} onChange={handleChange}
							></Field>
						</div>
						<ErrorMessage
							name="telefono_padre"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.telefono_padre}</span>
								</div>
							)}
						/>
						<div>
							<label>Referencia</label>
							<Field type="text" name="referencia" value={Hc.referencia} onChange={handleChange}></Field>
						</div>
						<ErrorMessage
							name="referencia"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.referencia}</span>
								</div>
							)}
						/>
						<div>
							<label>Num. hijo</label>
							<Field
								type="number"
								name="numero_hijo"
								min="1"
								value={Hc.numero_hijo} onChange={handleChange}
							></Field>
						</div>
						<ErrorMessage
							name="numero_hijo"
							component={() => (
								<div className="msj_error_login">
									<span>
										<i className="fas fa-times-circle"></i>
									</span>
									<span>{errors.numero_hijo}</span>
								</div>
							)}
						/>
						{/* <button type="submit" className="actualizar">
							Actualizar
						</button> */}
						<button className='actualizar' onClick={(e)=>{
							e.preventDefault()
							fetch(`${url}/Historia/${id}`, {
								headers: {
								'Content-Type': 'application/json',
							},
							method: 'PUT',
							body: JSON.stringify({
								...Hc,
								fecha_nac : moment(Hc.fecha_nac).format()
								//fecha_nac : (moment(Hc.fecha_nac).add(5, 'hours')).format('YYYY-MM-DD')
							}),
							})
							.then((resp) => resp.json())
							.then((datos) => {
								console.log(datos);
								if(datos.ok){
									alert('datos actualizados')
								}
							})
							.catch((err) => {
								console.log(err);
								// rej(err);
							});
						}}>
					Actualizar
				</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormFiliacion;
