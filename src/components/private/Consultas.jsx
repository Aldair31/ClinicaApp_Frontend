import React, { useState, useEffect } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/LC.sass';
// NavLink
// import ListadosCitas from './extras/ListadosCitas';
import url from '../../keys/backend_keys';
import {Link} from 'react-router-dom'

const Consultas = () => {
	function buscarTermino(term){
		return function(x){
			return (x.nombres_paciente.toUpperCase()).includes(term) || !term
			// return x.dni_paciente.includes(term) || !term
		}
	}
	
	const [citas, setCitas] = useState([]);
	useEffect(() => {
		fetch(`${url}/Historia`)
			.then((resp) => {
				return resp.json();
			})
			.then((datos) => {
				console.log('respuesta');
				console.log(datos);
				setCitas(datos);
			});
	}, []);

	const [termino, setTermino] = useState("")
	// const handleChange = (e)=>{
	// 	setTermino({
	// 		...Hc,
	// 		[e.target.name]: e.target.value
	// 	})
	// 	//setHc(e.target.value)
	// }
	return (
		<>
			<div className="list">
				<h2>Listado de Pacientes</h2>
				<div 
					style={{border:'2px solid #aba7a7', borderRadius: '10px', padding:'5px 0', width:'45%'}}
				>
					<i 
						class="fas fa-search" 
						style={{padding:'0px 10px'}}>
					</i>
					<input 
						type="search" 
						placeholder='Buscar por nombre' 
						style={{borderStyle:'none', fontFamily:'Poppins', fontWeight:'700', outline:'0', width:'90%', textTransform:'uppercase'}}
						name='termino'
						onChange={e => setTermino(e.target.value)}>
					</input>
				</div>
				<div className="citas">
					{citas.filter(buscarTermino(termino.toUpperCase())).map((item) => {
						return (
							<div key={item._id} className="cita">
								{/* <p>Dirección: {item.direccion}</p> */}
								<p><b>-DNI:</b> {item.dni_paciente}</p>
								<p style={{textTransform:'uppercase'}}><b>-Nombre:</b> {item.nombres_paciente}</p>
								<p style={{textTransform:'uppercase'}}><b>-Referencia:</b> {item.referencia}</p>
								{/* <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)'}}>
									<p style={{width:'70%', textAlign:'center'}}><b>-DNI: </b></p>
									<p style={{marginLeft:'-30%'}}>{item.dni_paciente}</p>
								</div>
								<div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)'}}>
									<p style={{width:'70%', textAlign:'center'}}><b>-Nombre: </b></p>
									<p style={{marginLeft:'-30%'}}>{item.nombres_paciente}</p>
								</div>
								<div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)'}}>
									<p style={{width:'70%', textAlign:'center'}}><b>-Referencia: </b></p>
									<p style={{marginLeft:'-30%'}}>{item.referencia}</p>
								</div> */}
								<p>
									<Link to={`datos-f/${item._id}`}>
										<strong
											style={{
												textDecoration: 'underline',
												cursor: 'pointer',
											}}
										>
											-Ver más
										</strong>
										{item.post}
									</Link>
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Consultas;
