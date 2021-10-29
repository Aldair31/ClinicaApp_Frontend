import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import url from '../../../keys/backend_keys';
// import '../../../sass/Dashboard.sass';
// import Antecedentes from './Antecedentes';
// import ExamenFisico from './ExamenFisico';

const HistoriasClinicas = () => {
	const { id } = useParams();
	const [datos, setDatos] = useState([]);
	useEffect(() => {
		fetch(`${url}/HistClinica`)
			.then((resp) => resp.json())
			.then((data) => {
				setDatos(data);
				// console.log('datos aldair diaz');
				console.log(data);
				console.log(id);
			});
	}, []);
	// const [citas, setCitas] = useCita([]);

	// const [citas, setCitas] = useState([]);
	// useEffect(() => {
	// 	fetch(`${url}/Historia`)
	// 		.then((resp) => {
	// 			return resp.json();
	// 		})
	// 		.then((datos) => {
	// 			console.log('respuesta');
	// 			console.log(datos);
	// 			setCitas(datos);
	// 		});
	// }, []);

	// const componentes = [
	// 	<Antecedentes id={id} key="antecedentes" />,
	// 	<ExamenFisico id={id} key="examenFisico" />,
	// ];

	// const [componente, setComponente] = useState('antecedentes');
	// const clickEvent = (e) => {
	// 	setComponente(e.target.innerHTML.toLowerCase());
	// };

	return (
		<div>
			<p>
				<button
					style={{
						marginTop: '22px',
						marginBottom: '22px',
						cursor: 'pointer',
						color: 'crimson',
						border: 'none',
						background: 'transparent'
					}}
				>
					Nueva H. Clínica
				</button>
			</p>
			<div className="list">
				{/* <h2>Historia clínica</h2> */}
				{/* <div>
					<div className="citas">
						{citas.map((item) => {
							return (
								<>
									{item._id === id ? (
										<div
											key={item._id}
											className="cita"
										>
											<h3>Datos de Filiación</h3>
											<p>
												Dirección: {item.direccion}
											</p>
											<p>DNI: {item.dni_paciente}</p>
											<p>
												Nombre:{' '}
												{item.nombres_paciente}
											</p>
											<p>
												Referencia:{' '}
												{item.referencia}
											</p>
										</div>
									) : null}
								</>
							);
						})}
					</div>
				</div> */}
				<div className="citas">
					{datos.map((item) => {
						console.log('*********');
						console.log(item.id_Historia);
						console.log('*********');
						return (
							<>
								{item.id_Historia === id ? (
									<div key={item._id} className="cita">
										<h3>Historia Clinica</h3>
										<p>
											Fecha:{' '}
											{moment(item.fecha_nac).format(
												'DD-MM-YYYY'
											)}
										</p>
										<p>
											Diagnostico: {item.diagnostico}
										</p>
										<p>
											Tratamiento: {item.tratamiento}
										</p>
										<p>
											Examenes Auxiliares:{' '}
											{item.examenesAuxiliares}
										</p>
										{/* <NavLink to={`/historia/${item._id}`}>
											<p className="ver">
													Antecedentes
											</p>
										</NavLink> */}
									</div>
								) : null}
							</>
						);
					})}
				</div>
				{/* <div className="Botones">
					<button onClick={clickEvent}>Antecedentes</button>
					<button onClick={clickEvent}>Examen Fisico</button>
					{componentes.map((item) => (
						<div
							className={
								componente === item.key ? '' : 'none'
							}
						>
							{item}
						</div>
					))}
				</div> */}
				<div></div>
			</div>
		</div>
	);
};

export default HistoriasClinicas;
