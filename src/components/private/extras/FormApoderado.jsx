import { useState } from 'react';
import axios from 'axios';
import url from '../../../keys/backend_keys';
import { connect } from 'react-redux';

const FormApoderado = (usuario) => {
	const [state, setEstado] = useState({ file: null });
	const subirArchivo = (e) => {
		// console.log(e.target.files, "$$$$");console.log(e.target.files, "$$$$");
		let file = e.target.files[0];
		setEstado({ file: file });
		console.log(file);
	};

	const consumirArchivo = (usuario) => {
		let file = state.file;
		let formdata = new FormData();
		formdata.append('avatar', file);
		// formdata.append('name', 'avatar')
		console.log('Subido');
    console.log('usuario id:'+usuario.uid);
		axios({
			url: `${url}/api/auth/files`,
			method: 'POST',
			data: formdata,
			headers: {
				id: usuario.usuario.uid,
			},
		}).then((res) => {
			console.log(res);
		});
	};
	return (
		<div className="contenedor_perfil">
			{console.log('----------')}
			{console.log(usuario)}
			{console.log('----------')}
			<form method="post" encType="multipart/form-data">
				<div>
					{/* <label>Seleccione archivo</label> */}
					<i className="far fa-user"></i>
					<br />
					<input
						type="file"
						name="avatar"
						onChange={(e) => subirArchivo(e)}
					></input>
				</div>
				<br />
				<button
					type="button"
					onClick={() => consumirArchivo(usuario)}
				>
					Subir
				</button>
			</form>
		</div>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});
export default connect(mapStateToProps)(FormApoderado);
// export default FormApoderado;
