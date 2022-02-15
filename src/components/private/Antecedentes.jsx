import React, { useEffect, useState } from 'react';
import url from '../../keys/backend_keys';
import { useParams } from 'react-router-dom';
import '../../sass/DatosF.sass';
import '../../sass/Antecedentes.sass';
const Antecedentes = ({id}) => {
	// const { id } = useParams();
	const [nuevo, setNuevo] = useState(null);
	const [antecedentes, setAntecedentes] = useState({});
	const handleChange = (e) => {
		setAntecedentes({
			...antecedentes,
			[e.target.name]: e.target.value,
		});
	};
	useEffect(() => {
		fetch(`${url}/Antecedentes/${id}`)
			.then((resp) => resp.json())
			.then((data) => {
				console.log('antecedentes');
				console.log(data);
				if (data.length > 0) {
					setNuevo(false);
					setAntecedentes(data[0])
				} else {
					setNuevo(true);

				}
			});
	}, []);
	return (
		<div style={{width:'95%'}}>
			<h2 className="titulo-ant">Antecedentes del paciente</h2>
			<form className="cont-ant">
				<h3>Familiares</h3>
				<div className='row1'>
					<div>
						<label>Asma Bronquial</label>
						<select
							name="asmaBronquialFam"
							onChange={handleChange}
							value={antecedentes.asmaBronquialFam}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>
						<label>Diabetes</label>
						<select
							name="diabetes"
							onChange={handleChange}
							value={antecedentes.diabetes}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>
						<label>Epilepsia</label>
						<select
							name="epilepsia"
							onChange={handleChange}
							value={antecedentes.epilepsia}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				
				
				{/* <input placeholder="Asma Bronquial" /> */}
				
				
				<label>Otros</label>
				<textarea
					rows="3"
					cols="50"
					placeholder="Ingrese otros antecedentes"
					name="Otros"
					value={antecedentes.Otros}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<h3>Natales</h3>
				<div className='row1'>
					<div>
						<label>Peso al nacer</label>
						<input
							placeholder="Peso al nacer"
							type="number"
							min="0"
							name="peso_al_nacer"
							onChange={handleChange}
							value={antecedentes.peso_al_nacer}
						/>
					</div>
					<div>
						<label>Tipo de Parto</label>
						<select
							name="tipoDeParto"
							onChange={handleChange}
							value={antecedentes.tipoDeParto}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="1">Vaginal</option>
							<option value="2">Cesárea</option>
						</select>
					</div>
					<div>
						<label>Edad Gestacional</label>
						<input
						name="edadGestacional"
							placeholder="Edad Gestacional"
							value={antecedentes.edadGestacional}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='row2'>
					<div className='row2_1'>
						<label>Apgar1</label>
						<input
							placeholder="Apgar1"
							type="number"
							name="apgar1"
							value={antecedentes.apgar1}
							onChange={handleChange}
						/>
					</div>
					<div className='row2_2'>
						<label>Apgar5</label>
						<input
							placeholder="Apgar5"
							type="number"
							name="apgar5"
							onChange={handleChange}
							value={antecedentes.apgar5}
						/>
					</div>
				</div>
				
				<label>Complicaciones</label>
				<textarea
					rows="3"
					cols="25"
					placeholder="Ingrese algunas complicaciones"
					name="complicaciones"
					value={antecedentes.complicaciones}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				{/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}
				<h3>Patológicos</h3>
				<label>Alergias</label>
				<textarea
					rows="3"
					cols="25"
					placeholder="Ingrese algunas alergias"
					name="alergia"
					value={antecedentes.alergia}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<div className='row3'>
					<div>
						<label>Asma Bronquial</label>
						{/* <input placeholder="Asma Bronquial" /> */}
						<select
							name="asmaBronquialPat"
							onChange={handleChange}
							value={antecedentes.asmaBronquialPat}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>
						<label>Nebulización</label>
						{/* <input placeholder="Nebulización" /> */}
						<select
							name="nebulizacion"
							onChange={handleChange}
							value={antecedentes.nebulizacion}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				<div className='row4'>
					<div>
						<label>Intervención Quirúrgica</label>
						<select
							name="intervencionQuirurgica"
							onChange={handleChange}

							value={antecedentes.intervencionQuirurgica}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
					<div>	
						<label>Reacción Adversa</label>
						<select
							name="reaccionAdversaMed"
							onChange={handleChange}
							value={antecedentes.reaccionAdversaMed}
						>
							<option value="" selected>-- Seleccione --</option>
							<option value="true">Sí</option>
							<option value="false">No</option>
						</select>
					</div>
				</div>
				
				
				
				<label>Enfermedades Anteriores</label>
				<textarea
					rows="3"
					cols="25"
					placeholder="Ingrese algunas enfermedades"
					name="enfAnteriores"
					value={antecedentes.enfAnteriores}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<button
					onClick={(e) => {
						e.preventDefault();
						if(nuevo){
							fetch(`${url}/Antecedentes/new`,{
								headers: {
									'Content-Type': 'application/json',
								},
								method: 'POST',
								body: JSON.stringify({
									...antecedentes,
									id_Historia: id
								}),
							}).then((resp) =>resp.json()).then((data)=>{
								if(data.ok){
									alert('datos registrados')
								}
							})
						}
						else{
							fetch(`${url}/Antecedentes/${antecedentes._id}`,{
								headers: {
									'Content-Type': 'application/json',
								},
								method: 'PUT',
								body: JSON.stringify({
									...antecedentes
								}),
							}).then((resp) =>resp.json()).then((data)=>{
								if(data.ok){
									alert('datos actualizados')
								}
							})
						}
					}}
				>
					{nuevo ? 'Crear' : 'Actualizar'}
				</button>
			</form>
		</div>
	);
};

export default Antecedentes;
