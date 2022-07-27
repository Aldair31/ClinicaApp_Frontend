import React, { useEffect, useState } from 'react';
import url from '../../keys/backend_keys';
const Hijos = ({ match }) => {
	const [usuario, setUsuario] = useState({ nombre: 'cargando' });
	const idUser = match.params.id;
	const [state, setState] = useState(false);
	useEffect(() => {
		fetch(`${url}/api/auth/${idUser}`)
			.then((resp) => resp.json())
			.then((datosUsuario) => setUsuario(datosUsuario));
	}, [idUser]);
	const agregarHijo = (dni) => {
		fetch(`${url}/Historia/${dni}`)
			.then((resp) => resp.json())
			// .then((datos) => datos)
			.then((datos) => {
				fetch(`${url}/Historia/${datos._id}`, {
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'PUT',
					body: JSON.stringify({
						...datos,
						id_Usuario: match.params.id,
					}),
				})
					.then((resp) => resp.json())
					.then((datos) => {
						if(datos.ok){
							setUsuario({
								...usuario,
								hijos: [...usuario.hijos, datos.evento],
							});
							alert('Agregado correctamente')
						}else{
							alert('Datos incorrectos')
						}
					});
			});
	};
	const FormAgregarHijo = () => {
		return (
			<div
				style={{
					background: '#00000039',
					position: 'absolute',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<form
					style={{
						background: '#ffffff',
						padding: '11px',
						borderRadius: '6px',
					}}
					onSubmit={(e) => {
						e.preventDefault();
						agregarHijo(
							document.querySelector('#inputdni').value
						);
					}}
				>
					<br />
					<p style={{textAlign:'center'}}>
						<b>Ingrese N° de DNI</b>
					</p>
					<br />
					<p>
						<input
							id="inputdni"
							placeholder="DNI del paciente"
							pattern="^[0-9]{8,8}$"
							style={{
								padding: '5px',
								border:'2px solid',
								borderRadius:'6px'
							}}
						/>
					</p>
					<br />
					<p style={{textAlign:'center'}}>
						<button style={{backgroundColor:'#0194E1', border:'2px solid', padding:'5px', borderRadius:'6px'}}>Aceptar</button>
					</p>
					<br />
				</form>
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
		);
	};

	return (
		<>
			<section>
				{state ? <FormAgregarHijo /> : null}
				<h3 style={{ marginTop: '33px' }}>
					Hijos del usuario: {usuario.nombre}
				</h3>
				<br />
				<button
					onClick={() => {
						setState(true);
					}}
					style={{
						backgroundColor: '#222',
						padding: '9px',
						border: '2px solid #929292',
						marginBottom: '11px',
						borderRadius: '11px',
						cursor: 'pointer',
						color: '#fff',
					}}
				>
					Agregar
				</button>
				<br />
				<>
					{usuario.hijos && (
						<div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)'}}>
							{usuario.hijos.map((item) => (
								<div
									style={{
										padding: '11px',
										background: '#f4f4f4',
										borderRadius: '11px',
										marginRight: '10px',
										marginBottom:'10%',
										width:'90%'
									}}
									key={item._id}
								>
									<br />
									<div>
										<b>Referencia:</b> {item.referencia}
									</div>
									<br />
									<div>
										<b>Nombre:</b> {item.nombres_paciente}
									</div>
									<br />
									<div><b>DNI:</b> {item.dni_paciente}</div>
								</div>
							))}
						</div>
					)}
				</>
			</section>
		</>
	);
};
export default Hijos;
