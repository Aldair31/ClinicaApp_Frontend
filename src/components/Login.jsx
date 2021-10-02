import React from 'react';
import FormLogin from './includes/FormLogin';
import '../sass/Login.sass';

function Login() {
	return (
		<>
			<div className="Contenedor_logueo">
				<div className="imagen_logueo">
					<img
						className="img_logueo"
						src="https://i.ibb.co/k4V5DQ4/img-doctora.jpg"
						alt="Login"
						width=""
						height=""
					/>
				</div>
				<div className="formulario">
					<FormLogin/>
				</div>
			</div>
		</>
	);
}

export default Login;