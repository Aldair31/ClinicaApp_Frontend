import React, { useState, useEffect } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/LC.sass';
// NavLink
// import ListadosCitas from './extras/ListadosCitas';
import url from '../../keys/backend_keys';


const Consultas = () => {
	const [citas, setCitas] = useState([]);
	useEffect(() => {
		fetch(`${url}/Historia`)
			.then((resp) => {
				return resp.json();
			})
			.then((datos) => {
				console.log('respuesta');
				console.log(datos);
				setCitas(datos);
			});
	}, []);
	return (
		<>
			<div className="list">
				<h2>Listado de consultas</h2>
				<div className="citas">
					{citas.map((item) => {
						return (
							<div key={item._id} className="cita">
								<p>Dirección: {item.direccion}</p>
								<p>DNI: {item.dni_paciente}</p>
								<p>Nombre: {item.nombres_paciente}</p>
								<p>Referencia: {item.referencia}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Consultas;
