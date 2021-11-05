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
				console.log('hist. clniica');
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
	return (
		<div >
            <h2 className="titulo-hc">Historia clínica</h2>
			<form className="cont">
                <h3>Datos de la H.clínica</h3>
				<label>Anamnesis *</label>
                <input placeholder="" value={Hc.anamnesis} name="anamnesis" onChange={handleChange}/>
                <label>Exámenes auxiliares</label>
                <input placeholder="Ex. auxiliares" value={Hc.examenesAuxiliares} name="examenesAuxiliares" onChange={handleChange}/>
                <label>Tratamiento</label>
                <input placeholder="Tratamiento" value={Hc.tratamiento} name="tratamiento" onChange={handleChange}/>
                <label>Diagnóstico</label>
                <input placeholder="Diagnóstico" value={Hc.diagnostico} name="diagnostico" onChange={handleChange}/>
                <h3>Examen físico</h3>
                <label>Peso</label>
                <input placeholder="Peso" type="number" min="0" value={Hc.peso} name="peso" onChange={handleChange}/>
                <label>Talla</label>
                <input placeholder="Talla" type="number" min="0" value={Hc.talla} name="talla" onChange={handleChange}/>
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
