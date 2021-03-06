import React, { useState, useEffect } from 'react';
import '../../sass/Dashboard.sass';
import '../../sass/LC.sass';
import url from '../../keys/backend_keys';
import {Link} from 'react-router-dom'
// import '../../sass/Recetas.sass'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Consultas = () => {
	// function buscarTermino(term){
	// 	return function(x){
	// 		return (x.nombres_paciente.toUpperCase()).includes(term) || !term
	// 		// return x.dni_paciente.includes(term) || !term
	// 	}
	// }
	
	const [citas, setCitas] = useState([]);
	useEffect(() => {
		fetch(`${url}/Historia`)
			.then((resp) => {
				return resp.json();
			})
			.then((datos) => {
				setCitas(datos);
			});
	}, []);

	citas.sort((a, b) => {
		return (a.nombres_paciente.toLowerCase() < b.nombres_paciente.toLowerCase()) ? -1 : 1
	})
		
	for(let item in citas){
		citas[item].numero = parseInt(item)+1
	}

	// const [termino, setTermino] = useState("")
	// const handleChange = (e)=>{
	// 	setTermino({
	// 		...Hc,
	// 		[e.target.name]: e.target.value
	// 	})
	// 	//setHc(e.target.value)
	// }

	//FUNCIÓN PARA BUSCAR
    const [buscar, setBuscar] = useState('')
    const [paginaActual, setPaginaActual] = useState(0)
    const datosFiltrados = () =>{
        if(buscar.length === 0)
            return citas.slice(paginaActual, paginaActual+5)

        const filtrado = citas.filter(item => (item.nombres_paciente.toLowerCase()).includes(buscar.toLowerCase()))

        return filtrado.slice(paginaActual, paginaActual+5)
    }

    const [pagina, setPagina] = useState(0)
    const paginaSiguiente = () =>{
        if(citas.filter(item => (item.nombres_paciente.toLowerCase()).includes(buscar.toLowerCase())).length > paginaActual + 5){
            setPaginaActual(paginaActual+5)
            setPagina(pagina+1)
        }
    }

    const paginaAnterior = () =>{
        if(paginaActual>0){
            setPaginaActual(paginaActual-5)
            setPagina(pagina-1)
        }
    }

    const buscarT = ({target}) =>{
        setPaginaActual(0)
        setPagina(0)
        setBuscar(target.value)
    }

	return (
		<>
			{/* <div className="listPacientes">
				<h2>Listado de Pacientes</h2>
				<div 
					style={{border:'2px solid #aba7a7', borderRadius: '10px', padding:'5px 0', width:'45%', marginBottom:'20px'}}
				>
					<i 
						className="fas fa-search" 
						style={{padding:'0px 10px'}}>
					</i>
					<input 
						type="search" 
						placeholder='Buscar por nombre' 
						style={{borderStyle:'none', fontFamily:'Poppins', fontWeight:'700', outline:'0', width:'90%', textTransform:'uppercase'}}
						name='termino'
						onChange={e => setTermino(e.target.value)}
						autoComplete='off'
					>
					</input>
				</div>
				<div className='ScrollTable'>
					<table>
						<thead>
							<tr>
								<th>DNI</th>
								<th>NOMBRE</th>
								<th>REFERENCIA</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{citas.filter(buscarTermino(termino.toUpperCase())).sort().map((item) => (
								<tr>
									<td style={{textTransform: 'uppercase'}}>{item.dni_paciente}</td>
									<td style={{textTransform: 'uppercase'}}>{item.nombres_paciente}</td>
									<td style={{textTransform: 'uppercase'}}>{item.referencia}</td>
									<td>
										<Link to={`datos-f/${item._id}`}>
											<strong
												style={{
													textDecoration: 'underline',
													cursor: 'pointer',
												}}
											>
												<i className="fas fa-external-link-alt"></i>
											</strong>
											{item.post}
										</Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div> */}
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<h2>Listado de Pacientes</h2>
				<div 
					style={{border:'2px solid #aba7a7', borderRadius: '10px', padding:'5px 0', width:'40%', marginBottom:'20px', float:'right', marginRight:'10%'}}
				>
					<i 
						className="fas fa-search" 
						style={{padding:'0px 10px'}}>
					</i>
					<input 
						type="search" 
						placeholder='Buscar por nombre' 
						style={{borderStyle:'none', fontFamily:'Poppins', fontWeight:'700', outline:'0', width:'90%', textTransform:'uppercase'}}
						name='buscar'
						value={buscar}
						onChange={buscarT}
						autoComplete='off'
					>
					</input>
				</div>
			</div>
			<div className="listadoPacientesPaginacion">
				<div className='encabezadoPaginacion'>
					<strong>PACIENTE</strong>
					<strong>REFERENCIA</strong>
					<i></i>
				</div>
				{
					datosFiltrados().map((item) => (
						<div key={item._id} className="contenedorDatosPaciente">
							<div className='contenidoDatosPaciente'>
								<div className='nombrePaciente'>
									<p><b>{item.numero}.      </b><i className="fa-regular fa-address-book"></i></p>
									<p>{item.nombres_paciente}</p>
								</div>
								{/* <p className='dniPac'>{item.dni_paciente}</p> */}
								<em className='referenciaPac'>{item.referencia}</em>
							</div>
							<Link to={`datos-f/${item._id}`}>
								<strong
									style={{
										textDecoration: 'underline',
										cursor: 'pointer',
									}}
								>
									<i className="fas fa-external-link-alt"></i>
								</strong>
								{item.post}
							</Link>
						</div>
					))
				}
			</div>
			{
				datosFiltrados().length>0 ?
					<div className="paginacionPacientes">
						<button onClick={paginaAnterior}>
							<i className="fa-solid fa-angle-left"></i>
						</button>
						<p>{pagina+1}</p>
						<button onClick={paginaSiguiente}>
							<i className="fa-solid fa-angle-right"></i>
						</button>
					</div>
				: null
			}
		</>
	);
};

export default Consultas;
