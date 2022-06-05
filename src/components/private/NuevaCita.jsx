import React, { useEffect, useState } from 'react';
import useCita from '../../hooks/useCita';
import '../../sass/Cita.sass';
import '../../sass/Dashboard.sass';
import FormCita from './extras/FormCita';
import moment from 'moment';
import { Link } from 'react-router-dom';
import InicioDoctor from './InicioDoctor';
import consumNuevaCita from '../../functions/citas';

// import {BrowserRouter} from 'react-router-dom'
const NuevaCita = () => {
	const [state, setState] = useState(false)
	const ModalNuevaCita = () =>{
		return(
			<div
				style={{
					background: '#00000039',
					position: 'absolute',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100%',
					zIndex:'3',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div className="nuevaCita">
					<FormCita/>
				</div>
				<button
					onClick={() => {
						setState(false);
					}}
					style={{
						position: 'absolute',
						top: '0',
						right: '0',
						border: 'none',
						padding: '18px',
						cursor: 'pointer',
					}}
				>
					<i
						className="fas fa-times"
						style={{ fontSize: '19px' }}
					></i>
				</button>
			</div>
		)
	}

	const item2 = {
		nombre_paciente: 'david',
		fecha: '2022-06-02T21:30:00.000Z'
	}

	return (
		<>
			<div>
				{/* {state && <ModalNuevaCita/>}
				<div style={{position: 'relative', zIndex: '2', width: '20%'}}>
					<section className='opcionesCita'>
						<div className="agregarCita" onClick={() => {setState(true)}}>
							<i className="fa-regular fa-circle-plus"></i>
							<p>NUEVA CITA</p>
						</div>
					</section>
				</div>
				<div style={{marginTop: '-55px', position: 'relative', zIndex: '1'}}>
					<InicioDoctor/>
				</div> */}
				{/* <div style={{marginBottom:'20px', marginTop:'20px' , position:'absolute'}}><h2>Nueva cita</h2> </div> */}
				<div className="nuevaCita">
					<FormCita/>
				</div>
			</div>
		</>
	);
};

export default NuevaCita;
