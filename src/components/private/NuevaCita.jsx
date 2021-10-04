import React from 'react';
import '../../sass/Cita.sass';
import FormCita from './extras/FormCita';

const NuevaCita = () => {
	return (
		<>
			<div className="nuevaCita">
				<h2>Nueva cita</h2>
				<FormCita/>
			</div>
		</>
	);
};

export default NuevaCita;
