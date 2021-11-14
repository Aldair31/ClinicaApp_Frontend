import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import url from '../../../keys/backend_keys';
import { Link } from 'react-router-dom';

import useHistClinica from '../../../hooks/useHistClinica'


const HistoriasClinicas = () => {
	const { id } = useParams();
	const [datos, setDatos] = useState([]);
	useEffect(() => {
		fetch(`${url}/HistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data) => setDatos(data));
	}, []);

	let {fechaHistoria, fechaNac, pesoPaciente} = useHistClinica()

	//console.log(moment(fechaNac[0]))
	//console.log(moment(fechaNac[0]).format())

	let fechaNacimiento = []

	for (let item in fechaNac){
		fechaNacimiento[item] = moment(fechaNac[0]).format()
	}

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
											Fecha : {moment(item.fecha).format('DD/MM/YYYY')}
										</p>
										<p>
											Edad esperada : {moment(item.fecha).diff(fechaNacimiento[0], 'months')} meses
										</p>
										<p>
											Diagnostico: {item.diagnostico}
										</p>
										<p>
											Tratamiento: {item.tratamiento}
										</p>
										<p>
											Examenes Auxiliares: {item.examenesAuxiliares}
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
