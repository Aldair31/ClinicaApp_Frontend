import React, { useEffect, useState } from 'react';
import url from '../../../keys/backend_keys';
const HistoriasClinicas = ({ id }) => {
	const [datos, setDatos] = useState([]);
	useEffect(() => {
		fetch(`${url}/HistClinica`)
			.then((resp) => resp.json())
			.then((data) => {
				setDatos(data);
			});
	}, []);
	return (
		<div>
             {console.log(datos)}
			Historias clinicas <div>
				
			</div>
		</div>
	);
};

export default HistoriasClinicas;
