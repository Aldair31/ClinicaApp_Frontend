import React, { useState, useEffect } from 'react';
import '../../sass/Dashboard.sass';
import url from '../../keys/backend_keys';
const Consultas = (props) => {
	const [tiene, setTiene] = useState(false);
	const [vacunas, setVacunas] = useState({
		bcg: 1,
	});
	const handleChange = (e) => {
		setVacunas({
			...vacunas,
			[e.target.name]: e.target.value,
		});
	};
	useEffect(() => {
		console.log('solicitando vacunas');
		fetch(`${url}/Vacuna/${props.match.params.id}`)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.length > 0) {
					setVacunas(data[0]);
					setTiene(true);
				}
				console.log(data);
			});
	}, []);
	const handleClick = (e) => {
		alert('click');
		e.preventDefault();
		if (tiene) {
			fetch(`${url}/Vacuna/${vacunas._id}`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'PUT',
				body: JSON.stringify(vacunas),
			})
				.then((resp) => resp.json())
				.then((data) => {
					console.log(data);
					if (data.ok) {
						alert('datos registrados');
					}
				});
		} else {
			fetch(`${url}/Vacuna/new`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify({
					...vacunas,
					id_Historia: props.match.params.id,
				}),
			})
				.then((resp) => resp.json())
				.then((data) => {
					console.log(data);
					if (data.ok) {
						setTiene(true)
						alert('datos registrados');
					}
				});
		}
	};

	return (
		<>
			<div className="list">
				<h2>Listado de Vacunas</h2>
				<form className="cont">
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>Recién nacido</div>
						<br />
						<div>
							<label>BCG</label>
							<select
								name="bcg"
								onChange={handleChange}
								value={vacunas.bcg}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Hepatitis B</label>
							<select
								name="hepatb"
								onChange={handleChange}
								value={vacunas.hepatb}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>2 meses</div>
						<br />
						<div>
							<label>DPT</label>
							<select
								name="dpt"
								onChange={handleChange}
								value={vacunas.dpt}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Neumococo</label>
							<select
								name="neumococo"
								onChange={handleChange}
								value={vacunas.neumococo}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Rotavirus</label>
							<select
								name="rotavirus"
								onChange={handleChange}
								value={vacunas.rotavirus}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Hepatitis B</label>
							<select
								name="hepatb2"
								onChange={handleChange}
								value={vacunas.hepatb2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>4 Meses</div>
						<br />
						<div>
							<label>DPT</label>
							<select
								name="dpt2"
								onChange={handleChange}
								value={vacunas.dpt2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Neumococo</label>
							<select
								name="neumococo2"
								onChange={handleChange}
								value={vacunas.neumococo2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Rotavirus</label>
							<select
								name="rotavirus2"
								onChange={handleChange}
								value={vacunas.rotavirus2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Hepatitis B</label>
							<select
								name="hepatb3"
								onChange={handleChange}
								value={vacunas.hepatb3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>6 Meses</div>
						<br />
						<div>
							<label>DPT</label>
							<select
								name="dpt3"
								onChange={handleChange}
								value={vacunas.dpt3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Neumococo</label>
							<select
								name="neumococo3"
								onChange={handleChange}
								value={vacunas.neumococo3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Rotavirus</label>
							<select
								name="rotavirus3"
								onChange={handleChange}
								value={vacunas.rotavirus3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Hepatitis B</label>
							<select
								name="hepatb4"
								onChange={handleChange}
								value={vacunas.hepatb4}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>7 Meses</div>
						<br />
						<div>
							<label>Influenza</label>
							<select
								name="influenza"
								onChange={handleChange}
								value={vacunas.influenza}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>8 Meses</div>
						<br />
						<div>
							<label>Influenza</label>
							<select
								name="influenza2"
								onChange={handleChange}
								value={vacunas.influenza2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>9 Meses</div>
						<br />
						<div>
							<label>Meningococo</label>
							<select
								name="meningococo"
								onChange={handleChange}
								value={vacunas.meningoco}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>1 Año</div>
						<br />
						<div>
							<label>SPR</label>
							<select
								name="spr"
								onChange={handleChange}
								value={vacunas.spr}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Varicela</label>
							<select
								name="varicela"
								onChange={handleChange}
								value={vacunas.varicela}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Meningococo</label>
							<select
								value={vacunas.hepata}
								name="meningococo2"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>1 Año y 1 Mes</div>
						<br />
						<div>
							<label>Hepatitis A</label>
							<select
								name="hepata"
								onChange={handleChange}
								value={vacunas.hepata}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>1 Año y 3 Meses</div>
						<br />
						<div>
							<label>Fiebre Amarila</label>
							<select
								name="famarilla"
								onChange={handleChange}
								value={vacunas.famarilla}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>1 Año y 6 Meses</div>
						<br />
						<div>
							<label>DPT</label>
							<select
								name="dpt4"
								onChange={handleChange}
								value={vacunas.dpt4}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>SPR</label>
							<select
								name="spr2"
								onChange={handleChange}
								value={vacunas.spr2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Varicela</label>
							<select
								value={vacunas.varicela2}
								name="varicela2"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>1 Año y 7 Meses</div>
						<br />
						<div>
							<label>Hepatitis A</label>
							<select
								name="hepata2"
								onChange={handleChange}
								value={vacunas.hepata2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>2 Años</div>
						<br />
						<div>
							<label>Neumococo</label>
							<select
								value={vacunas.neumococo4}
								name="neumococo4"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>Influenza</label>
							<select
								value={vacunas.influenza3}
								name="influenza3"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>4 Años</div>
						<br />
						<div>
							<label>DPT</label>
							<select name="dpt5" value={vacunas.dpt5}>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<label>SPR</label>
							<select
								name="spr3"
								onChange={handleChange}
								value={vacunas.spr3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>9 Años</div>
						<br />
						<div>
							<label>Papilomavirus</label>
							<select
								value={vacunas.papilomavirus}
								name="papilomavirus"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>9 Años y 6 Meses</div>
						<br />
						<div>
							<label>Papilomavirus</label>
							<select
								value={vacunas.papilomavirus2}
								name="papilomavirus2"
								onChange={handleChange}
							>
								<option value="2">No </option>
								<option value="1">Sí</option>
							</select>
						</div>
					</div>
					<div
						style={{
							border: '2px solid #383838',
							padding: '10px',
							borderRadius: '8px',
							marginBottom: '12px',
						}}
					>
						<div>
							<label>Otros</label>
							<textarea
								value={vacunas.otros}
								onChange={handleChange}
								name="otros"
								id=""
								cols="30"
								rows="10"
							></textarea>
						</div>
					</div>
					<div>
						<button
							style={{ width: '100%' }}
							onClick={handleClick}
						>
							Actualizar
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Consultas;
