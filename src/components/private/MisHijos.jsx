import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import url from '../../keys/backend_keys';
const MisHijos = ({ usuario }) => {
	const [hijos, setHijos] = useState([]);
	const uid = usuario.uid;
	useEffect(() => {
		fetch(`${url}/api/auth/${uid}`)
			.then((resp) => resp.json())
			.then((datos) => {
				setHijos(datos.hijos);
			});
	}, [uid]);
	return (
		<div>
			{hijos.map((item) => {
				return <div>{item.nombres_paciente}</div>;
			})}
		</div>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(MisHijos);
// export default MisHijos
