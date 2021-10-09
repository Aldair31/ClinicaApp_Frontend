import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';

const FormResponsable = ({ datos, set_datos }) => {
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					email: '',
					dni: '',
					password: '',
				}}
				validate={(valores) => {
					let errores = {};
					if (!valores.nombre) {
						errores.nombre = 'Por favor ingrese su nombre';
					} else if (
						!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)
					) {
						errores.nombre =
							'EL nombre sólo puede contener letras y espacios';
					}
					if (!valores.email) {
						errores.email = 'Por favor ingrese su correo';
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							valores.email
						)
					) {
						errores.email = 'Por favor ingresa un correo';
					}
					if (!valores.dni) {
						errores.dni = 'Por favor ingrese el DNI';
					} else if (!/^[0-9]{8,8}$/.test(valores.dni)) {
						errores.dni =
							'El DNI sólo puede contener 8 números.';
					}
					if (!valores.password) {
						errores.password = 'Por favor ingrese su clave';
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();

					fetch(`${url}/api/auth/new`, {
						headers: {
							'Content-Type': 'application/json',
						},
						method: 'POST',
						body: JSON.stringify({
							...valores,
							rol: 'Apoderado',
						}),
					})
						.then((resp) => {
							return resp.json();
						})
						.then((data) => {
							if (data.ok) {
								console.log('-----data-----');
								console.log(data);
								console.log('--------------');
								alert('Registrado con éxito');
								console.log('--------');
								console.log(valores);
								console.log('---------');
								set_datos([
									...datos,
									{
										dni: valores.dni,
										_id: data.uid,
										nombre: valores.nombre,
										email: valores.email,
									},
								]);
							} else {
								alert(data.msg);
							}
							return data;
						});
				}}
			>
				{({ errors }) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<div>
								<Field
									type="text"
									id="nombre"
									name="nombre"
									placeholder="Ejemplo: John Farroñan"
								></Field>
								<ErrorMessage
									name="nombre"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.nombre}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<div>
								<Field
									type="password"
									id="password"
									name="password"
								></Field>
								<ErrorMessage
									name="password"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.password}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<div>
							<label htmlFor="email">Correo</label>
							<div>
								<Field
									type="text"
									id="correo"
									name="email"
									placeholder="Ejemplo: janet@gmail.com"
								></Field>
								<ErrorMessage
									name="email"
									component={() => (
										<div className="msj_error_login">
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.email}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<div>
							<label>DNI</label>
							{/* </div> */}
							<div>
								<Field type="text" name="dni"></Field>
								<ErrorMessage
									name="dni"
									component={() => (
										<div
											className="msj_error_login"
											// style={{ margin: '0' }}
										>
											<span>
												<i className="fas fa-times-circle"></i>
											</span>
											<span>{errors.dni}</span>
										</div>
									)}
								/>
							</div>
						</div>
						<button
							type="submit"
							style={{
								padding: '10px',
								border: 'none',
								margin: 'auto',
							}}
						>
							Enviar
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormResponsable;
