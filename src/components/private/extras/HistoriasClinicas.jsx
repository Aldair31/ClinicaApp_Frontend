import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import url from '../../../keys/backend_keys';
import { Link } from 'react-router-dom';


const HistoriasClinicas = () => {
	const { id } = useParams();
	const [datos, setDatos] = useState([]);
	useEffect(() => {
		fetch(`${url}/HistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data) => setDatos(data));
	}, []);

	return (
		<div>
			<div className="list">
				<div className="citas">
					{datos.map((item) => {
						return (
							<>
								{item.id_Historia === id ? (
									<div key={item._id} className="cita">
										<h3>Historia Clinica</h3>
										<p>
											Fecha:{' '}
											{/*moment(
												moment(item.fecha).format(
													'DD/MM/YYYY'
												),
												'DD/MM/YYYY'
											)
												.add(1, 'days')
												.calendar()*/
												moment(item.fecha).format('DD/MM/YYYY')}
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
										<Link to={`/historia-clinica/${item._id}`}>
											<p className="ver">
												Ver
											</p>
										</Link>
									</div>
								) : null}
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HistoriasClinicas;
