import React from 'react';
// import moment from 'moment';
import '../../../sass/DatosF.sass';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
const FormAntecedentes = ({ item }) => {
	console.log('******')
	console.log(item)
	console.log('******')
	return (
		<>	
		<div 
		style={{
						background: '#00000039',
						position: 'absolute',
						top: '0',
						left: '0',
						height: '100vh',
						width: '100%',
	
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
		}}>
			<div
			style={{
				background: '#ffffff',
				padding: '8px',
				width:'50%',
				borderRadius: '6px',
			}}>
				<div className='datos_h_af'>
				<Formik
				initialValues={{
					asmaBronquialFam: item.asmaBronquialFam,
					diabetes: item.diabetes,
					epilepsia: item.epilepsia,
					otros: item.otros,
					peso_al_nacer: item.peso_al_nacer,
					tipoDeParto: item.tipoDeParto,
					apgar1: item.apgar1,
					apgar5: item.apgar5,
					edadGestacional: item.edadGestacional,
					complicaciones: item.complicaciones,
					asmaBronquialPat: item.asmaBronquialPat,
					nebulizacion: item.nebulizacion,
					intervencionQuirurgica: item.intervencionQuirurgica,
					reaccionAdversaMed:item.reaccionAdversaMed,
					enfAnteriores:item.enfAnteriores
				}}
				validate={(valores) => {
					let errores = {};
					// if ('' === valores.asmaBronquialFam) {
					// 	errores.asmaBronquialFam =
					// 		'Por favor, ingrese una Opcion';
					// }
					// if ('' === valores.diabetes) {
					// 	errores.diabetes =
					// 		'Por favor, ingrese una Opcion';
					// }
					// if ('' === valores.epilepsia) {
					// 	errores.epilepsia =
					// 		'Por favor, ingrese una Opcion';
					// }
					if (!valores.otros) {
						errores.otros =
							'Por favor ingrese otros';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.otros
						)
					) {
						errores.otros =
							'Otros solo puede contener letras y espacios';
					}
					if (!valores.peso_al_nacer) {
						errores.peso_al_nacer = 'Por favor ingrese Peso al nacer';
					} else if (
						!/^[0-9]*$/.test(valores.peso_al_nacer)
					) {
						errores.peso_al_nacer =
							'El peso al nacer sólo puede contener números.';
					}
					// if ('' === valores.tipoDeParto) {
					// 	errores.tipoDeParto =
					// 		'Por favor, ingrese una Opcion';
					// }
					if (!valores.apgar1) {
						errores.apgar1 = 'Por favor ingrese el Apgar1';
					} else if (
						!/^[0-9]*$/.test(valores.apgar1)
					) {
						errores.apgar1 =
							'El apgar1 sólo puede contener números.';
					}
					if (!valores.apgar5) {
						errores.apgar5 = 'Por favor ingrese el Apgar5';
					} else if (
						!/^[0-9]*$/.test(valores.apgar5)
					) {
						errores.apgar5 =
							'El apgar5 sólo puede contener números.';
					}
					if (!valores.edadGestacional) {
						errores.edadGestacional = 'Por favor ingrese el Edad Gestacional';
					} else if (
						!/^[0-9]*$/.test(valores.edadGestacional)
					) {
						errores.edadGestacional =
							'El Edad Gestacional sólo puede contener números.';
					}
					if (!valores.complicaciones) {
						errores.complicaciones =
							'Por favor ingrese Complicaciones';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
							valores.complicaciones
						)
					) {
						errores.complicaciones =
							'Complicaciones solo puede contener letras y espacios';
					}
					// if ('' === valores.asmaBronquialPat) {
					// 	errores.asmaBronquialPat=
					// 		'Por favor, ingrese una opcion';
					// }
					// if ('' === valores.nebulizacion) {
					// 	errores.nebulizacion=
					// 		'Por favor, ingrese una Opcion';
					// }
					// if ('' === valores.intervencionQuirurgica) {
					// 	errores.intervencionQuirurgica =
					// 		'Por favor, ingrese una Opcion';
					// }
					if (!valores.reaccionAdversaMed) {
						errores.reaccionAdversaMed =
							'Por favor ingrese Reaccion Adversa a Medicamentos';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.reaccionAdversaMed)
					) {
						errores.reaccionAdversaMed =
							'Reaccion Adversa a Medicamentos sólo puede contener letras y espacios';
					}
					if (!valores.enfAnteriores) {
						errores.enfAnteriores =
							'Por favor ingrese Enfermedades Anteriores';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.enfAnteriores)
					) {
						errores.enfAnteriores =
							'Enfermedades Anteriores sólo puede contener letras y espacios';
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					// resetForm();
					console.log('valores')
					console.log(valores)
					console.log(item._id)
					fetch(`${url}/Antecedentes/${item._id}`, {
						headers: {
							'Content-Type': 'application/json',
						},
						method: 'PUT',
						body: JSON.stringify({
							...valores,
							id_Historia: item.id_Historia
							// fecha_nac: moment(new Date(`${valores.fecha}`)).add(1, 'days').format(),
							// id: item._id,
						}),
					})
						.then((resp) => resp.json())
						.then((data) => {
							if (data.ok) {
								alert('Actualizado correctamente');
								// console.log(data);
								// const { evento } = data;
								// console.log(evento);
								// return evento;
							}
							console.log(data)
						})
						// .then((e) => {
							// valores.asmaBronquialFam = e.asmaBronquialFam;
							// valores.diabetes = e.diabetes;
							// valores.epilepsia = e.epilepsia;
							// console.log(valores.otros)
							// valores.otros = e.otros,
							// console.log(e),
							// valores.peso_al_nacer = e.peso_al_nacer;
							// valores.tipoDeParto = e.tipoDeParto;
							// valores.apgar1 = e.apgar1;
							// valores.apgar5 = e.apgar5;
							// valores.edadGestacional = e.edadGestacional;
							// valores.complicaciones = e.complicaciones;
							// valores.asmaBronquialPat = e.asmaBronquialPat;
							// valores.nebulizacion = e.nebulizacion;
							// valores.intervencionQuirurgica = e.intervencionQuirurgica;
							// valores.reaccionAdversaMed = e.reaccionAdversaMed;
							// valores.enfAnteriores = e.enfAnteriores;
						// });
				}}
			>
				{({ errors }) => (
					<Form >
							<div>
								<label>Asma Bronquial Familiar: </label>
								<Field name="asmaBronquialFam" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							{/* <ErrorMessage
								name="asmaBronquialFam"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.asmaBronquialFam}</span>
									</div>
								)}
							/> */}
							<div>
								<label>Diabetes: </label>
								<Field name="diabetes" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							<br />
							{/* <ErrorMessage
								name="diabetes"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.diabetes}</span>
									</div>
								)}
							/> */}
							<div>
								<label>Epilepsia: </label>
								<Field name="epilepsia" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							{/* <ErrorMessage
								name="epilepsia"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.epilepsia}</span>
									</div>
								)}
							/> */}
							<br />
							<div>
								<label>Otros</label>
								<Field type="text" name="otros"></Field>
							</div>
							<ErrorMessage
								name="otros"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.otros}</span>
									</div>
								)}
							/>
							<div>
								<label>Peso al Nacer</label>
								<Field type="Number" name="peso_al_nacer"></Field>
							</div>
							<ErrorMessage
								name="peso_al_nacer"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.peso_al_nacer}</span>
									</div>
								)}
							/>
							<br />
							<div>
								<label>Tipo de Parto: </label>
								<Field name="tipoDeParto" as="select">
									<option value="0">Parto Normal</option>
									<option value="1">Parto por Cesaria</option>
								</Field>
							</div>
							{/* <ErrorMessage
								name="tipoDeParto"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.tipoDeParto}</span>
									</div>
								)}
							/> */}
							<br />
							<div>
								<label>Apgar al Minuto</label>
								<Field
									type="Number"
									name="apgar1"
								></Field>
							</div>
							<ErrorMessage
								name="apgar1"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.apgar1}</span>
									</div>
								)}
							/>
							<div>
								<label>Apgar a los 5 minutos</label>
								<Field
									type="Number"
									name="apgar5"
								></Field>
							</div>
							<ErrorMessage
								name="apgar5"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.apgar5}</span>
									</div>
								)}
							/>
							<div>
								<label>Edad Gestacional</label>
								<Field
									type="Number"
									name="edadGestacional"
								></Field>
							</div>
							<ErrorMessage
								name="edadGestacional"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.edadGestacional}</span>
									</div>
								)}
							/>
							<div>
								<label>Complicaciones</label>
								<Field
									type="text"
									name="complicaciones"
								></Field>
							</div>
							<ErrorMessage
								name="complicaciones"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.complicaciones}</span>
									</div>
								)}
							/>
							<br />
							<div>
								<label>Asma Bronquial Patológico: </label>
								<Field name="asmaBronquialPat" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							{/* <ErrorMessage
								name="asmaBronquialPat"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.asmaBronquialPat}</span>
									</div>
								)}
							/> */}
							<br />
							<div>
								<label>Nebulización: </label>
								<Field name="nebulizacion" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							{/* <ErrorMessage
								name="nebulizacion"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.nebulizacion}</span>
									</div>
								)}
							/> */}
							<br />
							<div>
								<label>Intervención Quirúrgica: </label>
								<Field name="intervencionQuirurgica" as="select">
									<option value="true">Si</option>
									<option value="false">No</option>
								</Field>
							</div>
							{/* <ErrorMessage
								name="intervencionQuirurgica"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.intervencionQuirurgica}</span>
									</div>
								)}
							/> */}
							<br />
							<div>
								<label>Reaccion Adversa Medica</label>
								<Field
									type="text"
									name="reaccionAdversaMed"
								></Field>
							</div>
							<ErrorMessage
								name="reaccionAdversaMed"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.reaccionAdversaMed}</span>
									</div>
								)}
							/>
							<div>
								<label>Enfermedades Anteriores</label>
								<Field
									type="text"
									name="enfAnteriores"
								></Field>
							</div>
							<ErrorMessage
								name="enfAnteriores"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.enfAnteriores}</span>
									</div>
								)}
							/>
							<button type="submit" className="actualizar"
							>
								Actualizar
							</button>
						
					</Form>
				)}
			</Formik>
				</div>
			</div>
		</div>
			
			
		</>
	);
};

export default FormAntecedentes;
