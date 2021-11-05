import React, { useState } from 'react';
import '../../sass/Dashboard.sass';
import url from '../../keys/backend_keys';
const Consultas = () => {
	const [vacunas, setVacunas] = useState([]);

	const handleChange = (e) => {
		// setAntecedentes({
		// 	...antecedentes,
		// 	[e.target.name]: e.target.value,
		// });
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
							<select name="bcg">
								<option>Sí</option>
								<option>No</option>
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
							<select name="dpt">
								<option>Sí</option>
								<option>No</option>
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
							<label>Idem</label>
							<select name="idem">
								<option>Sí</option>
								<option>No</option>
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
							<label>Idem</label>
							<select name="idem2">
								<option>Sí</option>
								<option>No</option>
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
							<label>Idem</label>
							<select name="idem">
								<option>Sí</option>
								<option>No</option>
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
							<label>Idem</label>
							<select name="idem2">
								<option>Sí</option>
								<option>No</option>
							</select>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Consultas;
