import React, { useEffect, useState } from 'react';
import url from '../../keys/backend_keys';
import { useParams } from 'react-router-dom';

import '../../sass/Antecedentes.sass';
const Antecedentes = () => {
	const { id } = useParams();
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
		<div>
			<h2 className="titulo-hc">Antecedentes del paciente</h2>
			<form className="cont">
				<h3>Familiares</h3>
				<label>Asma Bronquial</label>
				<select
					name="asmaBronquialFam"
					onChange={handleChange}
					value={antecedentes.asmaBronquialFam}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				{/* <input placeholder="Asma Bronquial" /> */}
				<label>Diabetes</label>
				<select
					name="diabetes"
					onChange={handleChange}
					value={antecedentes.diabetes}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				<label>Epilepsia</label>
				<select
					name="epilepsia"
					onChange={handleChange}
					value={antecedentes.epilepsia}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				<label>Otros</label>
				<textarea
					rows="10"
					cols="50"
					placeholder="Ingrese otros antecedentes"
					name="Otros"
					value={antecedentes.Otros}
					onChange={handleChange}
				></textarea>
				<h3>Natales</h3>
				<label>Peso al nacer</label>
				<input
					placeholder="Peso al nacer"
					type="number"
					min="0"
					name="peso_al_nacer"
					onChange={handleChange}
					value={antecedentes.peso_al_nacer}
				/>
				<label>Tipo de Parto</label>
				<select
					name="tipoDeParto"
					onChange={handleChange}
					value={antecedentes.tipoDeParto}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				<label>Apgar1</label>
				<input
					placeholder="Apgar1"
					type="number"
					name="apgar1"
					value={antecedentes.apgar1}
					onChange={handleChange}
				/>
				<label>Apgar5</label>
				<input
					placeholder="Apgar5"
					type="number"
					name="apgar5"
					onChange={handleChange}
					value={antecedentes.apgar5}
				/>
				<label>Edad Gestacional</label>
				<input
				name="edadGestacional"
					placeholder="Edad Gestacional"
					value={antecedentes.edadGestacional}
					onChange={handleChange}
				/>
				<label>Complicaciones</label>
				<input
					placeholder="Complicaciones"
					onChange={handleChange}
					name="complicaciones"
					value={antecedentes.complicaciones}
				/>
				{/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}
				<h3>Patológicos</h3>
				<label>Asma Bronquial</label>
				{/* <input placeholder="Asma Bronquial" /> */}
				<select
					name="asmaBronquialPat"
					onChange={handleChange}
					value={antecedentes.asmaBronquialPat}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				<label>Nebulización</label>
				{/* <input placeholder="Nebulización" /> */}
				<select
					name="nebulizacion"
					onChange={handleChange}
					value={antecedentes.nebulizacion}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				<label>Intervención Quirúrgica</label>
				<select
					name="intervencionQuirurgica"
					onChange={handleChange}

					value={antecedentes.intervencionQuirurgica}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				<label>Reacción Adversa</label>
				<select
					name="reaccionAdversa"
					onChange={handleChange}
					value={antecedentes.reaccionAdversaMed}
				>
					<option value="1">Sí</option>
					<option value="2" selected>
						No
					</option>
				</select>
				<label>Enfermedades Anteriores</label>
				<input
					placeholder="Enfermedades anteriores"
					onChange={handleChange}
					name="enfAnteriores"
					value={antecedentes.enfAnteriores}
				/>
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
