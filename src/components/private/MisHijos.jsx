import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
		<div style={{ marginTop: '31px' }}>
			<h2 style={{ marginBottom: '26px' }}>Tus hijos</h2>
			{hijos.map((item) => {
				return (
					<div
						style={{
							marginBottom: '15px',
							padding: '18px',
							borderRadius: '12px',
							maxWidth: '430px',
							background: '#F4F4F4',
							textTransform:'uppercase'
						}}
					>
						<Link to={`/hijo/${item._id}`}>{item.nombres_paciente}</Link>
					</div>
				);
			})}
		</div>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(MisHijos);
// export default MisHijos
