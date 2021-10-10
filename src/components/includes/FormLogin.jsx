import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import consumLogin from '../../functions/login';
import './../../sass/Login.sass';

const FormLogin = ({usuario,logearUsuario}) => {
	const consumirLogin = async (body) => {
		let resultado = await consumLogin(body);
		console.log('Resultado');
		if(resultado.ok){
			console.log('Ok (y)');
			logearUsuario(resultado)
			console.log(resultado);
		}
		else{
			console.log('No ok :(');
			console.log(resultado);
			alert('Ha ingresado datos inválidos')
		}
	};
	return (
		<>
			<Formik
				initialValues={{
					dni: '',
					password: '',
				}}
				validate={(valores) => {
					let errores = {};
					if (!valores.dni) {
						errores.dni = 'Por favor ingrese su DNI';
					} else if (!/^[0-9]{8,8}$/.test(valores.dni)) {
						errores.dni =
							'El DNI sólo puede contener 8 números.';
					}
					if (!valores.password) {
						errores.password =
							'Por favor ingrese su contraseña';
					} else if (
						!/^[a-zA-Z0-9_.+-]+$/.test(valores.password)
					) {
						errores.password =
							'La contraseña tiene caracteres no válidos';
					}
					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log('Formulario enviado');
					console.log(valores);
					consumirLogin(valores);
				}}
			>
				{({ errors }) => (
					<div className="formulario">
						<Form className="logueo">
							<h2>Iniciar Sesión</h2>
							<div>
								<div className="user_input">
									<i className="far fa-user"></i>
									<Field
										type="text"
										id="dni"
										name="dni"
										placeholder="Ingresa tu DNI"
										autoComplete="off"
									></Field>
								</div>

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
							<div>
								<div className="password_input">
									<i className="fas fa-lock"></i>
									<Field
										type="password"
										id="password"
										name="password"
										placeholder="Ingresa tu contraseña"
									></Field>
								</div>
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
							<button className="enviar" type="submit">
								Enviar
							</button>
						</Form>
					</div>
				)}
			</Formik>
		</>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});
const mapDispatchToProps = (dispatch) => ({
	logearUsuario(usuario) {
		dispatch({
			type: 'LOGIN_OK',
			usuario,
		});
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
