import React, { useState, useEffect } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/Vacunas.sass';
import url from '../../keys/backend_keys';
import moment from 'moment';

import { useParams } from 'react-router';
const Consultas = (props) => {
	const [tiene, setTiene] = useState(false);
	const [vacunas, setVacunas] = useState({});
	const handleChange = (e) => {
		setVacunas({
			...vacunas,
			[e.target.name]: e.target.value,
		});
	};
	// let vacunabcg
	// if(vacunas.fechabcg!=null){
	// 	vacunabcg = moment(moment(vacunas.fechabcg).add(5, 'hours')).format('YYYY-MM-DD')
	// }

	let Dvacunas=[]
	let { id } = useParams();
	/*for(let i=0; i<vacunas.length; i++){
		if(typeof(vacunas[i])=='date'){
			Dvacunas[i]=vacunas[i]
		}
	}*/
	for(let item in vacunas){
		if(vacunas[item]!=id){
			if(vacunas[item]!=vacunas._id){
				if(typeof(vacunas[item])==='string'){
					Dvacunas[item]=moment(moment(vacunas[item]).add(5, 'hours')).format('YYYY-MM-DD')
				}
			}
		}
	}
	console.log("****", Dvacunas.fechahepatb)
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
		//alert('click');
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
					<div className='vacunas'>
						<div className='title'>RECIÉN NACIDO</div>
						<br />
						<div className='vacunasM'>
							<label>BCG</label>
							<select
								name="bcg"
								onChange={handleChange}
								value={vacunas.bcg}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							{console.log("FECHITA", vacunas.fechahepatb)}
							<input name="fechabcg" onChange={handleChange} value={Dvacunas.fechabcg} type="date"></input>
							<label>Hepatitis B</label>
							<select
								name="hepatb"
								onChange={handleChange}
								value={vacunas.hepatb}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb" onChange={handleChange} value={Dvacunas.fechahepatb} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>2 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>DPT</label>
							<select
								name="dpt"
								onChange={handleChange}
								value={vacunas.dpt}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt" onChange={handleChange} value={Dvacunas.fechadpt} type="date"></input>
							<label>Neumococo</label>
							<select
								name="neumococo"
								onChange={handleChange}
								value={vacunas.neumococo}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo" onChange={handleChange} value={Dvacunas.fechaneumococo} type="date"></input>
						</div>
						<div className='vacunasM'>
							<label>Rotavirus</label>
							<select
								name="rotavirus"
								onChange={handleChange}
								value={vacunas.rotavirus}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fecharotavirus" onChange={handleChange} value={Dvacunas.fecharotavirus} type="date"></input>
							<label>Hepatitis B</label>
							<select
								name="hepatb2"
								onChange={handleChange}
								value={vacunas.hepatb2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb2" onChange={handleChange} value={Dvacunas.fechahepatb2} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>4 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>DPT</label>
							<select
								name="dpt2"
								onChange={handleChange}
								value={vacunas.dpt2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt2" onChange={handleChange} value={Dvacunas.fechadpt2} type="date"></input>
							<label>Neumococo</label>
							<select
								name="neumococo2"
								onChange={handleChange}
								value={vacunas.neumococo2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo2" onChange={handleChange} value={Dvacunas.fechaneumococo2} type="date"></input>
						</div>
						<div className='vacunasM'>
							<label>Rotavirus</label>
							<select
								name="rotavirus2"
								onChange={handleChange}
								value={vacunas.rotavirus2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fecharotavirus2" onChange={handleChange} value={Dvacunas.fecharotavirus2} type="date"></input>
							<label>Hepatitis B</label>
							<select
								name="hepatb3"
								onChange={handleChange}
								value={vacunas.hepatb3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb3" onChange={handleChange} value={Dvacunas.fechahepatb3} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>6 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>DPT</label>
							<select
								name="dpt3"
								onChange={handleChange}
								value={vacunas.dpt3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt3" onChange={handleChange} value={Dvacunas.fechadpt3} type="date"></input>
							<label>Neumococo</label>
							<select
								name="neumococo3"
								onChange={handleChange}
								value={vacunas.neumococo3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo3" onChange={handleChange} value={Dvacunas.fechaneumococo3} type="date"></input>
						</div>
						<div className='vacunasM'>
							<label>Rotavirus</label>
							<select
								name="rotavirus3"
								onChange={handleChange}
								value={vacunas.rotavirus3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fecharotavirus3" onChange={handleChange} value={Dvacunas.fecharotavirus3} type="date"></input>
							<label>Hepatitis B</label>
							<select
								name="hepatb4"
								onChange={handleChange}
								value={vacunas.hepatb4}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepatb4" onChange={handleChange} value={Dvacunas.fechahepatb4} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>7 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Influenza</label>
							<select
								name="influenza"
								onChange={handleChange}
								value={vacunas.influenza}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechainfluenza" onChange={handleChange} value={Dvacunas.fechainfluenza} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>8 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Influenza</label>
							<select
								name="influenza2"
								onChange={handleChange}
								value={vacunas.influenza2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechainfluenza2" onChange={handleChange} value={Dvacunas.fechainfluenza2} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>9 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Meningococo</label>
							<select
								name="meningococo"
								onChange={handleChange}
								value={vacunas.meningoco}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechameningococo" onChange={handleChange} value={Dvacunas.fechameningococo} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO</div>
						<br />
						<div className='vacunasM'>
							<label>SPR</label>
							<select
								name="spr"
								onChange={handleChange}
								value={vacunas.spr}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaspr" onChange={handleChange} value={Dvacunas.fechaspr} type="date"></input>
							<label>Varicela</label>
							<select
								name="varicela"
								onChange={handleChange}
								value={vacunas.varicela}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechavaricela" onChange={handleChange} value={Dvacunas.fechavaricela} type="date"></input>
							</div>
							<div className='vacunasM'>
							<label>Meningococo</label>
							<select
								value={vacunas.hepata}
								name="meningococo2"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechameningococo2" onChange={handleChange} value={Dvacunas.fechameningococo2} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 1 MES</div>
						<br />
						<div className='vacunasM'>
							<label>Hepatitis A</label>
							<select
								name="hepata"
								onChange={handleChange}
								value={vacunas.hepata}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepata" onChange={handleChange} value={Dvacunas.fechahepata} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 3 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Fiebre Amarila</label>
							<select
								name="famarilla"
								onChange={handleChange}
								value={vacunas.famarilla}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechafamarilla" onChange={handleChange} value={Dvacunas.fechafamarilla} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 6 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>DPT</label>
							<select
								name="dpt4"
								onChange={handleChange}
								value={vacunas.dpt4}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt4" onChange={handleChange} value={Dvacunas.fechadpt4} type="date"></input>
							<label>SPR</label>
							<select
								name="spr2"
								onChange={handleChange}
								value={vacunas.spr2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaspr2" onChange={handleChange} value={Dvacunas.fechaspr2} type="date"></input>
							</div>
							<div className='vacunasM'>
							<label>Varicela</label>
							<select
								value={vacunas.varicela2}
								name="varicela2"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechavaricela2" onChange={handleChange} value={Dvacunas.fechavaricela2} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>1 AÑO y 7 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Hepatitis A</label>
							<select
								name="hepata2"
								onChange={handleChange}
								value={vacunas.hepata2}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechahepata2" onChange={handleChange} value={Dvacunas.fechahepata2} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>2 AÑOs</div>
						<br />
						<div className='vacunasM'>
							<label>Neumococo</label>
							<select
								value={vacunas.neumococo4}
								name="neumococo4"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaneumococo4" onChange={handleChange} value={Dvacunas.fechaneumococo4} type="date"></input>
							<label>Influenza</label>
							<select
								value={vacunas.influenza3}
								name="influenza3"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechainfluenza3" onChange={handleChange} value={Dvacunas.fechainfluenza3} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>4 AÑOS</div>
						<br />
						<div className='vacunasM'>
							<label>DPT</label>
							<select name="dpt5" value={vacunas.dpt5}>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechadpt5" onChange={handleChange} value={Dvacunas.fechadpt5} type="date"></input>
							<label>SPR</label>
							<select
								name="spr3"
								onChange={handleChange}
								value={vacunas.spr3}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechaspr3" onChange={handleChange} value={Dvacunas.fechaspr3} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>9 AÑOS</div>
						<br />
						<div className='vacunasM'>
							<label>Papilomavirus</label>
							<select
								value={vacunas.papilomavirus}
								name="papilomavirus"
								onChange={handleChange}
							>
								<option value="2">No</option>
								<option value="1">Sí</option>
							</select>
							<input name="fechapapilomavirus" onChange={handleChange} value={Dvacunas.fechapapilomavirus} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>9 AÑOS y 6 MESES</div>
						<br />
						<div className='vacunasM'>
							<label>Papilomavirus</label>
							<select
								value={vacunas.papilomavirus2}
								name="papilomavirus2"
								onChange={handleChange}
							>
								<option value="2">No </option>
								<option value="1">Sí</option>
							</select>
							<input name="fechapapilomavirus2" onChange={handleChange} value={Dvacunas.fechapapilomavirus2} type="date"></input>
						</div>
					</div>
					<div className='vacunas'>
						<div className='title'>OTROS</div>
						<div>
							<textarea
								style={{
									resize: 'none',
									width: '100%'
								}}
								value={vacunas.otros}
								onChange={handleChange}
								name="otros"
								id=""
								cols="20"
								rows="3"
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
