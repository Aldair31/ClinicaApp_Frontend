import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
const FormResponsable = () => {
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					email: '',
					dni: '',
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
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log('Formulario enviado');
					console.log(valores);
				}}
			>
				{({ errors }) => (
					<Form className="formulario">
						{/* <div> */}
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
						{/* </div> */}
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
							<label>DNI Paciente</label>
						</div>
						<div>
							<Field type="text" name="dni"></Field>
							<ErrorMessage
								name="dni"
								component={() => (
									<div className="msj_error_login">
										<span>
											<i className="fas fa-times-circle"></i>
										</span>
										<span>{errors.dni}</span>
									</div>
								)}
							/>
						</div>
						<button type="submit">Enviar</button>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default FormResponsable;
