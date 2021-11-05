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
							<label>Hepatitis B</label>
							<select name="hepatb">
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
							<label>Neumococo</label>
							<select name="neumococo">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>Rotavirus</label>
							<select name="rotavirus">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>Hepatitis B</label>
							<select name="hepatb2">
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
						<div>7 Meses</div>
						<br />
						<div>
							<label>Influenza</label>
							<select name="influenza">
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
						<div>8 Meses</div>
						<br />
						<div>
							<label>Influenza</label>
							<select name="influenza2">
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
						<div>9 Meses</div>
						<br />
						<div>
							<label>Meningococo</label>
							<select name="meningococo">
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
						<div>1 Año</div>
						<br />
						<div>
							<label>SPR</label>
							<select name="spr">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>Varicela</label>
							<select name="varicela">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>Meningococo</label>
							<select name="meningococo2">
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
						<div>1 Año y 1 Mes</div>
						<br />
						<div>
							<label>Hepatitis A</label>
							<select name="hepata">
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
						<div>1 Año y 3 Meses</div>
						<br />
						<div>
							<label>Fiebre Amarila</label>
							<select name="famarilla">
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
						<div>1 Año y 6 Meses</div>
						<br />
						<div>
							<label>DPT</label>
							<select name="dpt2">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>SPR</label>
							<select name="spr2">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>Varicela</label>
							<select name="varicela2">
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
						<div>1 Año y 7 Meses</div>
						<br />
						<div>
							<label>Hepatitis A</label>
							<select name="hepata2">
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
						<div>2 Años</div>
						<br />
						<div>
							<label>Neumococo</label>
							<select name="neumococo2">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>Influenza</label>
							<select name="influenza3">
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
						<div>4 Años</div>
						<br />
						<div>
							<label>DPT</label>
							<select name="dpt3">
								<option>Sí</option>
								<option>No</option>
							</select>
							<label>SPR</label>
							<select name="spr3">
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
						<div>9 Años</div>
						<br />
						<div>
							<label>Papilomavirus</label>
							<select name="papilomavirus">
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
						<div>9 Años y 6 Meses</div>
						<br />
						<div>
							<label>Papilomavirus</label>
							<select name="papilomavirus2">
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
						
						<div>
							<label>Otros</label>
							<textarea name="otros" id="" cols="30" rows="10">

							</textarea>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Consultas;
