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
		<>
			<h2 style={{ marginBottom: '26px', marginTop: '31px' }}>Tus hijos</h2>
			<div style={{ marginTop: '31px', display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(4, 1fr)' }}>
				{hijos.map((item) => {
					return (
						// <div
						// 	style={{
						// 		marginBottom: '15px',
						// 		padding: '18px',
						// 		borderRadius: '12px',
						// 		maxWidth: '430px',
						// 		background: '#F4F4F4',
						// 		textTransform:'uppercase'
						// 	}}
						// >
						// 	<Link to={`/hijo/${item._id}`}>{item.nombres_paciente}</Link>
						// </div>
						<div class="card-hijo">
							<div class="card-details">
								<p class="text-title">{item.nombres_paciente}</p>
								{/* <p class="text-body">Here are the details of the card</p> */}
							</div>
							<button class="card-button">
								<Link to={`/hijo/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>Ver info	</Link>
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(MisHijos);
// export default MisHijos
