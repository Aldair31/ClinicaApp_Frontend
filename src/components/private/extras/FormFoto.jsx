import React from 'react';
import { useState } from 'react';
import url from '../../../keys/backend_keys';
import axios from 'axios';

const FormFoto = ({ id, setForm, setFotos, fotos }) => {
	const [state, setEstado] = useState({ file: null });

	const subirArchivo = (e) => {
		let file = e.target.files[0];
		setEstado({ file: file });
		console.log(file);
	};

	const consumirArchivo = (id) => {
		let file = state.file;
		let formdata = new FormData();
		formdata.append('foto', file);
		console.log(formdata);
		axios({
			url: `${url}/Fotos/files`,
			method: 'POST',
			data: formdata,
			headers: {
				id,
			},
		}).then((res) => {
			console.log('....');
			console.log(res);
			console.log('.....');
			fetch(`${url}/Fotos/${id}`)
				.then((resp) => resp.json())
				.then((dat) => setFotos(dat));
		});
	};
	return (
		<div
			className="contenedor_perfil"
			style={{
				background: '#0000006e',
				width: '100%',
				height: '100vh',
				position: 'absolute',
				top: '0px',
				left: '0px',
				zIndex: '33',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				// marginTop:'-80px'
			}}
		>
			<div
				className="cerrarForm"
				style={{
					background: '#ffffff',
					padding: '12px',
					position: 'absolute',
					top: '0px',
					right: '0px',
					cursor: 'pointer',
				}}
				onClick={() => {
					setForm(false);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
				</svg>
			</div>
			<form
				method="post"
				encType="multipart/form-data"
				style={{
					background: '#ffffff',
					padding: '20px',
					borderRadius: '15px',
				}}
			>
				<div>
					<br />
					<label>
						Subir foto de perfil
						<br />
						<br />
					</label>
					<p style={{ textAlign: 'center' }}>
						<label
							for="inputfileuser"
							style={{
								textAlign: 'center',
								color: '#58C5E3',
							}}
						>
							<i
								class="fas fa-cloud-upload-alt"
								style={{
									fontSize: '28px',
									cursor: 'pointer',
								}}
							></i>
						</label>
					</p>
					<input
						style={{
							display: 'none',
						}}
						type="file"
						name="foto"
						id="inputfileuser"
						accept="image/*"
						onChange={(e) => subirArchivo(e)}
					></input>
				</div>
				<br />
				<button
					type="button"
					onClick={() => consumirArchivo(id)}
					style={{
						width: '100%',
						padding: '7px',
						border: 'none',
						background: '#50B4A1',
						color: 'white',
						cursor: 'pointer',
					}}
				>
					Enviar
				</button>
			</form>
		</div>
	);
};

export default FormFoto;