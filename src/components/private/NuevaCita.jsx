import React from 'react';
import '../../sass/Cita.sass';
import FormCita from './extras/FormCita';
// import {BrowserRouter} from 'react-router-dom'
const NuevaCita = () => {
	return (
		<>
			<div className="nuevaCita">
				<div><h2>Nueva cita</h2> </div>
				<FormCita/>
			</div>
		</>
	);
};

export default NuevaCita;
