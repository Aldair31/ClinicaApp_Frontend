import React, { useState, useEffect } from 'react';
import '../../sass/Galeria.sass';
import FormFoto from './extras/FormFoto';
import url from '../../keys/backend_keys';
import {Link, useHistory } from 'react-router-dom';
import '../../sass/Redirecciones.sass'

const Hijo = (props) => {
	const [form, setForm] = useState(false);
	const [fotos, setFotos] = useState([]);
	const [modal, setModal] = useState(false);
	const [idFoto, setIdFoto] = useState(null);
	const history = useHistory()



	const id = props.match.params.id;
	useEffect(() => {
		fetch(`${url}/Fotos/${id}`)
			.then((resp) => resp.json())
			.then((dat) => setFotos(dat));
	}, [id]);
	const Modal = ({ url }) => {
		return (
			<div
				style={{
					height: '100vh',
					width: '100%',
					background: '#0000009d',
					position: 'absolute',
					top: '0px',
					left: '0px',
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<p style={{
					position: 'absolute',
					top: '0px',
					textAlign:'center',
					width: '100%',
					padding: '11px'
				}}>
					<button 
						onClick={()=>{
							setModal(false)
						}}
					style={{
						cursor: 'pointer',
						color: "#ffffff",
						background: 'transparent',
						border: 'none'
					}}>Cerrar</button>
				</p>
				<img
					style={{
						maxWidth: '600px',
						with: '80%',
						margin: 'auto',
						position: 'relative'
						,
						zIndex: '22'
					}}
					alt={url}
					src={url}
				></img>
			</div>
		);
	};
	return (
		<div>
			{modal && <Modal url={`${url}/Fotos/album/${idFoto}`} />}
			{form && (
				<FormFoto
					id={props.match.params.id}
					setForm={setForm}
					setFotos={setFotos}
					foto={fotos}
				/>
			)}
			<h2 style={{ marginTop: '19px' }}>Hijo</h2>
			<br />
			<p>
				Observa mi crecimiento progresivo
			</p>
			<br />
			<p style={{ marginBottom: '16px' }}>
				<div>
					<Link
						to={`/DesarrolloIntegral/${id}`}
						style={{
							fontSize: '16px',
							cursor: 'pointer',
							color: 'crimson',
						}}
					>
						<b>Ver Desarrollo Integral del Niño</b>
					</Link>
				</div>
			</p>
			<p style={{ marginBottom: '16px' }}>
				<div>
				<Link
					to={`/GraficoDeCrecimiento/${id}`}
					style={{
						fontSize: '16px',
						cursor: 'pointer',
						color: 'crimson',
					}}
				>
					<b>Ver Gráfico de Crecimiento</b>
				</Link>
				</div>
			</p>
			<p style={{ marginBottom: '16px' }}>
				<div>
				<Link
					to={`/CartillaVacunacion/${id}`}
					style={{
						fontSize: '16px',
						cursor: 'pointer',
						color: 'crimson',
					}}
				>
					<b>Ver Cartilla de Vacunación</b>
				</Link>
				</div>
			</p>
			
			{/* <p style={{ marginBottom: '16px' }}>
				<strong
					style={{ cursor: 'pointer', color: '#50B4A1' }}
					onClick={() => {
						setForm(true);
						setIdFoto()
					}}
				>
					Nueva foto
				</strong>
			</p> */}
			<section>
				{
					<div className="galeria">
						{fotos.map((item) => (
							<div
								key={item.nombre}
								clave={item.nombre}
								onClick={(e) => {
									setModal(true);
									console.log(e.target);
									setIdFoto(
										e.target.getAttribute('clave')
									);
								}}
							>
								<img
									className="foto"
									width="100%"
									height="200px"
									clave={item.nombre}
									alt=""
									src={`${url}/Fotos/album/${item.nombre}`}
								/>
							</div>
						))}
					</div>
				}
			</section>
			<div className='boton_Redireccion'>
				<button onClick={()=>{history.push(`/mis-hijos`)}}>
					<i class="fas fa-angle-left"></i>
				</button>	
			</div>
		</div>
	);
};

export default Hijo;
