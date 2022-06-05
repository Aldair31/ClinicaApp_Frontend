import React, {useState} from 'react'
import useCita from '../../hooks/useCita';
import '../../sass/Dashboard.sass';
import moment from 'moment';
import { Link } from 'react-router-dom';
import url from '../../keys/backend_keys';
import FormCita from './extras/FormCita';

const MisCitasSecretaria = () => {
    let [datos_af, loading, set_datos_af] = useCita();
	const switchMotivo = (valor) => {
		switch (valor) {
			case 1:
				return 'Vacuna';
			case 2:
				return 'Consulta pediátrica';
			default:
				return 'Control de crecimiento';
		}
	};

	const [fecha, setFecha] = useState({fechaCita: moment().format('YYYY-MM-DD')})
	const handleChange = (e) =>{
		setFecha({
			...fecha,
			[e.target.name]: e.target.value
		})
	}
	let CitasHoy = []
	for (let item in datos_af) {
		if(moment(datos_af[item].fecha).format('DD/MM/YYYY')==moment(fecha.fechaCita).format('DD/MM/YYYY')){
			CitasHoy.push(datos_af[item])
		}
	}

	CitasHoy.sort((a,b) => new Date(a.fecha) - new Date(b.fecha))
	
	for(let item in CitasHoy){
		CitasHoy[item].numero = parseInt(item)+1
	}

	const [state, setState] = useState(false)
	const ModalNuevaCita = ({datos}) =>{
		return(
			<div
				style={{
					background: '#00000039',
					position: 'absolute',
					top: '0',
					left: '0',
					height: '100vh',
					width: '100%',
					zIndex:'3',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div className="nuevaCita">
					<FormCita item={datos}/>
				</div>
				<button
					onClick={() => {
						setState(false);
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
						className="fas fa-times"
						style={{ fontSize: '19px' }}
					></i>
				</button>
			</div>
		)
	}

	const [dataItem, setDataItem] = useState({})

	return (
		<>
			<div className="list">
				{/* <h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
					</svg>
					&nbsp;&nbsp;CITAS DE {moment(fecha.fechaCita).format('DD/MM/YYYY')}
				</h2> */}
				<section className='opcionesCita'>
					<div className='selectorFecha'>
						<div style={{display: 'flex', alignItems: 'center'}}><b>CITAS DE: </b></div>
						<input 
							// style={{height:'6.3vh'}}
							type="date" 
							name="fechaCita" 
							// value={fecha.fechaCita != '' ? moment(fecha.fechaCita).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')}
							value={fecha.fechaCita}
							onChange={handleChange}
						></input>
					</div>
				</section>
				{state && <ModalNuevaCita datos={dataItem}/>}
				{loading !== null ? (
					CitasHoy.length > 0 ? (
						<div className='ScrollTable'>
							<table>
								<thead>
									<tr>
										<th>N°</th>
										<th>Hora</th>
										<th>PACIENTE</th>
										<th>RESPONSABLE</th>
										<th>MOTIVO</th>
										<th></th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{CitasHoy.map((item) => (
										<tr key={item._id}>
											<td>{item.numero}</td>
											<td>{moment(item.fecha).format('LT')}</td>
											<td className='nombPac'>{item.nombre_paciente}</td>
											<td className='respons'>{item.responsable}</td>
											<td>{switchMotivo(item.motivo)}</td>
											<td>
                                                <i 
                                                    className="fas fa-trash-alt" 
                                                    style={{color: 'red', cursor: 'pointer'}}
													onClick={(e) => {
														e.preventDefault()
														var rpta = window.confirm("¿Está seguro de eliminar la Cita?")
														if(rpta){
															fetch(`${url}/Cita/${item._id}`, {
																headers: {
																	'Content-Type': 'application/json'
																},
																method: 'DELETE'
															})
															.then((resp) => resp.json())
															.then((data) => {
																if(data.ok){
																	alert('Cita eliminada')
																	set_datos_af(datos_af.filter((datos) => datos._id != item._id))
																}
															})
															.catch((err) => {
																console.log(err);
															});
														}
													}}
                                                >
                                                </i>
                                            </td>
											<td>
                                                <i 
                                                    className="fas fa-pen" 
                                                    style={{color: 'blue', cursor: 'pointer'}}
													onClick = {() => {
														setState(true)
														setDataItem({
															_id: item._id,
															nombre_paciente: item.nombre_paciente,
															dni_paciente: item.DNI,
															responsable: item.responsable,
															telefono: item.telefono,
															motivo: item.motivo,
															hora: moment(item.fecha).format('HH:mm'),
															fecha: moment(item.fecha).format('YYYY-MM-DD'),
															condicion: item.condicion,
														})
													}}
                                                >
                                                </i>
                                            </td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : 
					(
						<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '85%', height: '60vh'}}>
							<div>
								<h2>LO SENTIMOS, NO HAY CITAS REGISTRADAS DEL DÍA {moment(fecha.fechaCita).format('DD/MM/YYYY')}</h2>
								{/* <img 
									src='https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/6041f96dd994118e5aa5b7e4_603dda4daa5db80f2a70a468_Discovery-01-1.png'
									style={{height: '60vh'}}
								>
								</img> */}
							</div>
						</div>
					)
				) : null}
			</div>
		</>
	);
}

export default MisCitasSecretaria