import React, { useEffect,useState } from 'react';
import url from '../../keys/backend_keys';
import { useParams } from 'react-router';
import '../../sass/HistoriaClinica.sass';
import Antecedentes from './Antecedentes';
import { Link, Switch, Route} from 'react-router-dom';
import FormFiliacion from './extras/FormFiliacion';
import Vacunas from './Vacunas'
import '../../sass/Cita.sass';
import '../../sass/DatosF.sass';
import moment from 'moment';
import useHistClinica from '../../hooks/useHistClinica'

// import '../../sass/Antecedentes.sass';
const HistoriaClinica = () => {
	const [Hc, setHc] = useState({})
	

	let { id } = useParams();
	useEffect(() => {
		fetch(`${url}/HistClinica/id/${id}`)
			.then((resp) => resp.json())
			.then((data)=>{
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

	//EDAD CONSULTA
	const [datos, setGrafica] = useState([]);

	useEffect(() => {
		fetch(`${url}/HistClinica/idPaciente/id/${id}`)
			.then((resp) =>{
				return resp.json();
			})
			
			.then((data) =>{
				setGrafica(data)
			});
			
	}, []);

	console.log("DATASASOS: ", datos.nombres_paciente)

	const ModalAntecedente = () => {
		// {location}
		// const { state = {} } = location;
 		// const { modal } = state;
        const [estado, setEstado] = useState(false);
        return (
            <>
			{/* <div className={modal ? "modal" : undefined}>
				{modal && <Link to="/">Close</Link>}
				<div>
					Bienvenido
				</div>
			</div> */}
				<div >
					{estado ? (
					<>
					<div
					 style={{
						background: '#00000039',
						position: 'absolute',
						top: '0',
						left: '0',
						height: '100vh',
						width: '100%',
						zIndex:'2',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<div style={{
						width:'65%',
                        background: '#ffffff',
                        padding: '0.5px',
                        borderRadius: '6px',
                    }}>
						<div style={{width:'110%', marginLeft:'2.75%', marginBottom:'2.75%'}}>
							<Antecedentes id={Hc.id_Historia}/>
						</div>
						
						{/* <FormFiliacion/> */}
						</div>
						
					
						<button
						onClick={() => {
							setEstado(false);
						}}
						style={{
							position: 'absolute',
							top: '0',
							right: '0',
							border: 'none',
							padding: '18px',
							cursor: 'pointer',
						}}
						>
							<i
								class="fas fa-times"
								style={{ fontSize: '19px' }}
							></i>
						</button>
					</div>
					</>): null}   
				</div>
				{/* <br /> */}
				<div>
					<button
						onClick={() => {
							setEstado(true);
						}}
						style={{
							border:'0',
							fontSize: '16px',
							cursor: 'pointer',
							color: 'crimson',
							backgroundColor:'transparent',
							textDecoration:'underline',
							
						}}
					>
						<strong>VER ANTECEDENTES</strong>
						
						
					</button>
					
				</div>
			</>
        );
    }
	const ModalFiliación = () => {
		// {location}
		// const { state = {} } = location;
 		// const { modal } = state;
        const [modal, setModal] = useState(false);
        return (
            <>
			{/* <div className={modal ? "modal" : undefined}>
				{modal && <Link to="/">Close</Link>}
				<div>
					Bienvenido
				</div>
			</div> */}
				<div >
					{modal ? (
					<>
					<div
					 style={{
						background: '#00000039',
						position: 'absolute',
						top: '0',
						left: '0',
						height: '100vh',
						width: '100%',
						zIndex:'2',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<div style={{
						width:'80%',
                        background: '#ffffff',
                        padding: '15px',
                        borderRadius: '6px',
						
                    }}>
						<h3 style={{textAlign:'center', marginBottom:'20px',fontSize: '25px'}}>DATOS DE FILIACIÓN</h3>
						<div className="datos_h_af" style={{width:'100%', height:'100vh', marginTop:'0px'}}>
							
							<div style={{}}>
								<FormFiliacion item={Hc.id_Historia}/>
							</div>
							
					
						</div>

						
						{/* <FormFiliacion/> */}
						</div>
						
					
						<button
						onClick={() => {
							setModal(false);
						}}
						style={{
							position: 'absolute',
							top: '0',
							right: '0',
							border: 'none',
							padding: '18px',
							cursor: 'pointer',
						}}
						>
							<i
								class="fas fa-times"
								style={{ fontSize: '19px' }}
							></i>
						</button>
					</div>
					</>): null}   
				</div>
				{/* &nbsp;&nbsp; */}
				{/* <br /> */}
				<div>
					<button
						onClick={() => {
							setModal(true);
						}}
						style={{
							border:'0',
							fontSize: '16px',
							cursor: 'pointer',
							color: 'crimson',
							backgroundColor:'transparent',
							textDecoration:'underline'
						}}
					>
						<strong>VER FILIACIÓN</strong> 
						
					</button>
					
				</div>
			</>
        );
    }
	const ModalVacuna = () => {
        const [modal, setModal] = useState(false);
        return (
            <>
			
				<div >
					{modal ? (
					<>
					<div
					 style={{
						background: '#00000039',
						position: 'absolute',
						top: '0',
						left: '0',
						height: '100vh',
						width: '100%',
						zIndex:'2',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<div style={{
						width:'82%',
                        background: '#ffffff',
                        padding: '4px',
                        borderRadius: '6px',
                    }}>
						<div style={{width:'98%', marginLeft:'3.5%'}}>
							<Vacunas id={Hc.id_Historia}/>
						</div>
						
						{/* <FormFiliacion item={Hc.id_Historia}/> */}
						{/* <FormFiliacion/> */}
						</div>
						
					
						<button
						onClick={() => {
							setModal(false);
						}}
						style={{
							position: 'absolute',
							top: '0',
							right: '0',
							border: 'none',
							padding: '18px',
							cursor: 'pointer',
						}}
						>
							<i
								class="fas fa-times"
								style={{ fontSize: '19px' }}
							></i>
						</button>
					</div>
					</>): null}   
				</div>

				{/* <br /> */}
				<div>
					<button
						onClick={() => {
							setModal(true);
						}}
						style={{
							border:'0',
							fontSize: '16px',
							cursor: 'pointer',
							color: 'crimson',
							backgroundColor:'transparent',
							textDecoration:'underline'
						}}
					>
						<strong>VER VACUNA</strong> 
						
					</button>
					
				</div>

				
			</>
        );
    }
	return (
		<div>
            <h2 className="titulo-hc">Historia clínica</h2>
			
			<div style={{backgroundColor:'#f4f4f4',padding:'10px', width:'90%'}}>
				<div style={{ maxWidth:'88%',display:'flex', justifyContent:'space-around', marginLeft:'3%', marginTop:'10px'}}>
					<div><ModalFiliación/></div>
					<div><ModalAntecedente/></div>
					<div><ModalVacuna/></div>
					<div>
					<Link 
						to={`/agregar-receta/${id}`}
						style={{
							fontSize: '16px',
							cursor: 'pointer',
							color: 'crimson',

						}}
					>
						<b>AGREGAR RECETA</b>
					</Link>
				</div>
				</div>
			</div>
			
			
			<form className="cont">
				<div className='NombreEdad'>
					<div>
						<label><b>Paciente: </b> {datos.nombres_paciente}</label>
					</div>
					{/* <div>
						<label><b>Referencia: </b> {datos.referencia}</label>
					</div> */}
					<div>
						<label><b>Edad de Consulta: </b>{(moment.duration(moment(Hc.fecha).diff(moment(datos.fecha_nac)))).years()} a {(moment.duration(moment(Hc.fecha).diff(moment(datos.fecha_nac)))).months()} m {(moment.duration(moment(Hc.fecha).diff(moment(datos.fecha_nac)))).days()} d
							
						</label>
						{/* <p>
							{(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).years()} a {(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).months()} m {(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).days()} d
						</p> */}
					</div>
					{/* <NombreYFecha/> */}
				</div>
                {/* <h3>Datos de la H.clínica</h3> */}
				
				{/* <Link
				to={{
					pathname: `/antecedentes/${Hc.id_Historia}`,
					state: { modal: true },
				}}
				className="link"
				>
				View Photo
				</Link>
				<Switch>
					<Route path='/antecedentes/:Hc.id_Historia' component={Modal} />
				</Switch> */}
				
					{/* <Link
						to={`/historias-clinicas/${id}`}
						style={{
							fontSize: '16px',
							cursor: 'pointer',
							color: 'crimson',
						}}
					>
						Ver H. clínicas
					</Link>
					&nbsp;&nbsp; */}
					{/* <Link
						to={`/antecedentes/${Hc.id_Historia}`}
						style={{
							fontSize: '17px',
							cursor: 'pointer',
							color: 'crimson',
						}}
					>
						Ver antecedentes
					</Link>
					&nbsp;&nbsp; */}
					{/* <Link
						to={`/vacunas/${id}`}
						style={{
							fontSize: '17px',
							cursor: 'pointer',
							color: 'crimson',
						}}
					>
						Ver vacunas
					</Link> */}
					{/* &nbsp;&nbsp;
					<Link
						to={`/GraficoDeCrecimiento/${id}`}
						style={{
							fontSize: '17px',
							cursor: 'pointer',
							color: 'crimson',
						}}
					>
						Ver Gráfico de Crecimiento
					</Link> */}
				
				{/* <br />
				<br /> */}
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
