import React from 'react';
import '../../sass/Cita.sass';
import FormCita from './extras/FormCita';
// import {BrowserRouter} from 'react-router-dom'
const NuevaCita = () => {
	return (
		<>
			<div>
				<div style={{marginBottom:'20px', marginTop:'20px' , position:'absolute'}}><h2>Nueva cita</h2> </div>
				<div className="nuevaCita">
					
					<FormCita/>
				</div>
			</div>
		</>
	);
};

export default NuevaCita;
