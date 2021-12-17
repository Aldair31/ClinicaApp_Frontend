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
				console.log('hist.clinica');
				console.log(data);
				setHc(data)
			})
	}, []);
	const handleChange = (e)=>{
		setHc({
			...Hc,
			[e.target.name]: e.target.value
		})
	}
	Hc.imc = Math.round((Hc.peso/(Math.pow((Hc.talla/100),2)))*1000)/1000
	return (
		<div >
            <h2 className="titulo-hc">Historia clínica</h2>
			<form className="cont">
                <h3>Datos de la H.clínica</h3>
				<h3>Anamnesis *</h3>
				<textarea
					rows="3"
					cols="50"
					placeholder="Anámnesis"
					name="anamnesis"
					value={Hc.anamnesis}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
                <h3>Examen físico</h3>
				<div className='fila1'>
					<label>Peso (kg)</label>
					<input id='fila2' placeholder="Peso" type="number" min="0" value={Hc.peso} name="peso" onChange={handleChange}/>
					<label id='f2'>Talla (cm)</label>
					<input placeholder="Talla" type="number" min="0" value={Hc.talla} name="talla" onChange={handleChange}/>
					
				</div>
				<div className="fila1">
					<label>IMC (kg/m2)</label>
					<input id='fila3' placeholder="IMC" type="text" min="0" readonly="" value={Hc.imc} name="imc" onChange={handleChange}/>
					<label id='f3'>PC (cm)</label>
					<input placeholder="PC" type="number" min="0" value={Hc.pc} name="pc" onChange={handleChange}/>
				</div>

				<div className='fila1'>
					<label>FR (Resp/min)</label>
					<input id='fila4' placeholder="FR" type="number" min="0" value={Hc.fr} name="fr" onChange={handleChange}/>
					<label id='f4'>FC (latidos/min)</label>
					<input placeholder="FC" type="number" min="0" value={Hc.fc} name="fc" onChange={handleChange}/>
					
				</div>
				<div className="fila1">
					<label>Sat.O2 (%)</label>
					<input id='fila5' placeholder="Sat.O2" type="number" min="0" value={Hc.saturacion} name="saturacion" onChange={handleChange}/>
					<label id='f5'>T° (°C)</label>
					<input placeholder="T°" type="number" min="0" value={Hc.temperatura} name="temperatura" onChange={handleChange} />
				</div>
				
               
                {/* <label>Temperatura</label>
                <input placeholder="Temperatura" type="number" min="0" value={Hc.temperatura} name="temperatura" onChange={handleChange}/> */}
                <div style={{marginTop:'25px'}}>
				<label>Apreciación General</label>
                <textarea rows="3" cols="50" placeholder="Apreciación General" value={Hc.apreciacionG} name="apreciacionG" onChange={handleChange} style={{resize:'none'}}/>
				</div>
				<label>Piel y TCSC</label>
                <textarea rows="3" cols="50" placeholder="TCSC" value={Hc.tcsc} name="tcsc" onChange={handleChange} style={{resize:'none'}}/>
				<label>Orofaringe</label>
                <textarea rows="3" cols="50" placeholder="Orofaringe" value={Hc.orofaringe} name="orofaringe" onChange={handleChange} style={{resize:'none'}}/>
				<label>Oidos</label>
                <textarea rows="3" cols="50" placeholder="Oídos" value={Hc.oidos} name="oidos" onChange={handleChange} style={{resize:'none'}}/>
				<label>Aparato CV</label>
                <textarea rows="3" cols="50" placeholder="Aparato CV" value={Hc.aparatoCV} name="aparatoCV" onChange={handleChange} style={{resize:'none'}}/>
                <label>Aparato resp.</label>
                <textarea rows="3" cols="50" placeholder="Aparato Resp." value={Hc.aparatoResp} name="aparatoResp" onChange={handleChange} style={{resize:'none'}}/>
				<label>Abdomen</label>
                <textarea rows="3" cols="50" placeholder="Abdomen" value={Hc.abdomen} name="abdomen" onChange={handleChange} style={{resize:'none'}}/>
                {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}
                
                
               
                <label>Aparato GU.</label>
                <textarea rows="3" cols="50" placeholder="Aparato GU" value={Hc.aparatoGU} name="aparatoGU" onChange={handleChange} style={{resize:'none'}}/>
               
                <label>Neurológico</label>
                <textarea rows="3" cols="50" placeholder="Neurológico" value={Hc.neurologico} name="neurologico" onChange={handleChange} style={{resize:'none'}}/>
				<h3>Diagnóstico</h3>
				<textarea
					rows="3"
					cols="50"
					placeholder="Diagnóstico"
					name="diagnostico"
					value={Hc.diagnostico}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<h3>Exámenes auxiliares</h3>
				<textarea
					rows="3"
					cols="50"
					placeholder="Ex. auxiliares"
					name="examenesAuxiliares"
					value={Hc.examenesAuxiliares}
					onChange={handleChange}
					style={{resize:'none'}}
				></textarea>
				<h3>Tratamiento</h3>
				<textarea
					rows="3"
					cols="50"
					placeholder="Tratamiento"
					name="tratamiento"
					value={Hc.tratamiento}
					onChange={handleChange}
					style={{resize:'none'}}
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
