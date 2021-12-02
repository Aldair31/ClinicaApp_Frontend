import React, { useEffect,useState } from 'react';
import url from '../../keys/backend_keys';
import { useParams } from 'react-router';
import '../../sass/HistoriaClinica.sass'
const HistoriaClinica = () => {
	const [Hc, setHc] = useState({})
	let { id } = useParams();
	useEffect(() => {
		fetch(`${url}/HistClinica/id/${id}`)
			.then((resp) => resp.json())
			.then((data)=>{
				/*console.log('hist.clinica');
				console.log(data);*/
				setHc(data)
			})
	}, []);
	const handleChange = (e)=>{
		setHc({
			...Hc,
			[e.target.name]: e.target.value
		})
	}
	return (
		<div >
            <h2 className="titulo-hc">Historia clínica</h2>
			<form className="cont">
                <h3>Datos de la H.clínica</h3>
				<h3>Anamnesis *</h3>
				<textarea
					rows="10"
					cols="50"
					placeholder="Anámnesis"
					name="anamnesis"
					value={Hc.anamnesis}
					onChange={handleChange}
				></textarea>
                <h3>Examen físico</h3>
                <label>Peso</label>
                <input placeholder="Peso" type="number" min="0" value={Hc.peso} name="peso" onChange={handleChange}/>
                <label>Talla</label>
                <input placeholder="Talla" type="number" min="0" value={Hc.talla} name="talla" onChange={handleChange}/>
				<label>IMC</label>
                <input placeholder="IMC" type="text" min="0" readonly="" value={Math.round((Hc.peso/(Math.pow((Hc.talla/100),2)))*1000)/1000} name="IMC" onChange={handleChange}/>
                <label>Temperatura</label>
                <input placeholder="Temperatura" type="number" min="0" value={Hc.temperatura} name="temperatura" onChange={handleChange}/>
                <label>Apreciación General</label>
                <input placeholder="Apreciación General" value={Hc.apreciancionG} name="apreciancionG" onChange={handleChange}/>
                <label>Aparato CV</label>
                <input placeholder="Aparato CV" value={Hc.aparatoCV} name="aparatoCV" onChange={handleChange}/>
                <label>Abdomen</label>
                <input placeholder="Abdomen" value={Hc.abdomen} name="abdomen" onChange={handleChange}/>
                {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}
                <label>TCSC</label>
                <input placeholder="TCSC" value={Hc.tcsc} name="tcsc" onChange={handleChange}/>
                <label>Orofaringe</label>
                <input placeholder="Orofaringe" value={Hc.orofaringe} name="orofaringe" onChange={handleChange}/>
                <label>Aparato resp.</label>
                <input placeholder="Aparato Resp." value={Hc.aparatoResp} name="aparatoResp" onChange={handleChange}/>
                <label>Aparato GU.</label>
                <input placeholder="Aparato GU" value={Hc.aparatoGU} name="aparatoGU" onChange={handleChange}/>
                <label>Abdomen</label>
                <input placeholder="Abdomen" value={Hc.abdomen} name="abdomen" onChange={handleChange}/>
                <label>Neurológico</label>
                <input placeholder="Neurológico" value={Hc.neurologico} name="neurologico" onChange={handleChange}/>
				<h3>Diagnóstico</h3>
				<textarea
					rows="10"
					cols="50"
					placeholder="Diagnóstico"
					name="diagnostico"
					value={Hc.diagnostico}
					onChange={handleChange}
				></textarea>
				<h3>Exámenes auxiliares</h3>
				<textarea
					rows="10"
					cols="50"
					placeholder="Ex. auxiliares"
					name="examenesAuxiliares"
					value={Hc.examenesAuxiliares}
					onChange={handleChange}
				></textarea>
				<h3>Tratamiento</h3>
				<textarea
					rows="10"
					cols="50"
					placeholder="Tratamiento"
					name="tratamiento"
					value={Hc.tratamiento}
					onChange={handleChange}
				></textarea>
				<button onClick={(e)=>{
					e.preventDefault()
					fetch(`${url}/HistClinica/${id}`, {
						headers: {
							'Content-Type': 'application/json',
						},
						method: 'PUT',
						body: JSON.stringify(
							Hc
						),
					})
						.then((resp) => resp.json())
						.then((datos) => {
							console.log(datos);
							if(datos.ok){
								alert('datos actualizados')
							}
						})
						.catch((err) => {
							console.log(err);
							// rej(err);
						});
				}}>
					Actualizar
				</button>
            </form>
		</div>
	);
};

export default HistoriaClinica;
