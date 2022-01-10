import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import url from '../../../keys/backend_keys';
import { Link } from 'react-router-dom';

import useHistClinica from '../../../hooks/useHistClinica'


const HistoriasClinicas = () => {
	const { id } = useParams();
	const [datos, setDatos] = useState([]);
	useEffect(() => {
		fetch(`${url}/HistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data) => setDatos(data));
	}, []);

	let {fechaNac} = useHistClinica()

	let fechaNacimiento = []

	for (let item in fechaNac){
		fechaNacimiento[item] = moment(fechaNac[0]).format()
	}

	const ModalNuevaHistClinica = () => {
		const [nuevaHistClinica, setnuevaHistClinica] = useState({})
		const handleChangeNuevo = (e) => {
			setnuevaHistClinica({
				...nuevaHistClinica,
				[e.target.name]: e.target.value,
			})
		}

		return (
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
				}}
			>
				<form
					style={{
                        background: '#ffffff',
                        padding: '2px',
                        borderRadius: '6px',
                    }}
				>
					<div className='contenedorFormModal'>
						{/* <div className='tituloModal'>
							<h3>
								NUEVA HISTORIA CLÍNICA
							</h3>
						</div> */}
						<h3>
							NUEVA HISTORIA CLÍNICA
						</h3>
						<div className='formularioModal'>
							<p>
								<label>Fecha </label>
								<input 
									type="date"
									name='fecha'
									onChange={handleChangeNuevo}
									// value={moment(nuevaHistClinica.fecha).format('YYYY-MM-DD')}
									value={nuevaHistClinica.fecha}
								></input>
							</p>
							<p>
								<label>Hora  </label>
								<input
									type='time'
									name='hora'
									onChange={handleChangeNuevo}
									// value={moment(nuevaHistClinica.hora).format('HH:mm')}
									value={nuevaHistClinica.hora}
								/>
							</p>
							<p>
								<button
									onClick={(e) => {
										e.preventDefault();
										fetch(`${url}/HistClinica/new`, {
											headers: {
												'Content-Type': 'application/json',
											},
											method: 'POST',
											body: JSON.stringify({
												nuevaHistClinica,
												fecha: moment(
													new Date(
														`${nuevaHistClinica.fecha} ${nuevaHistClinica.hora}`
													)
												).format(),
												id_Historia: id,
											}),
										})
										.then((resp) => resp.json())
										.then((data) => {
											if(data.ok){
												alert('Se Registró la Historia Clínica Correctamente')
												setDatos([
													...datos,
													{
														_id:data.histClinica._id ,
														fecha: moment(
															new Date(
																`${nuevaHistClinica.fecha} ${nuevaHistClinica.hora}`
															)
														).format(),
														id_Historia: id,
													}
												])
											}
											else{
												alert("Por favor, asegurese de completar los campos")
											}
										})
									}}
								>AGREGAR</button>
							</p>
						</div>
					</div>
				</form>
				<button
                    onClick={() => {
                        setForm(false);
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

	const [form, setForm] = useState(false);
	const onForm = () => {
		setForm(!form);
	};

	return (
		<div>
			<div className="list">
				<h2>
					<span onClick={onForm}>Agregar Nueva Historia Clínica</span>
				</h2>
				{form && <ModalNuevaHistClinica/>}
				<div className="citas">
					{datos.map((item) => {
						return (
							<>
								{item.id_Historia === id ? (
									<div key={item._id} className="cita">
										<h3>Historia Clinica</h3>
										<p>
											Fecha : {moment(item.fecha).format('DD/MM/YYYY')}
										</p>
										<p>
											Edad de consulta : {(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).years()} a {(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).months()} m {(moment.duration(moment(item.fecha).diff(moment(fechaNacimiento[0])))).days()} d
										</p>
										<p>
											Diagnostico: {item.diagnostico}
										</p>
										<p>
											Tratamiento: {item.tratamiento}
										</p>
										<p>
											Examenes Auxiliares: {item.examenesAuxiliares}
										</p>
										<Link to={`/historia-clinica/${item._id}`}>
											<p className="ver">
												Ver
											</p>
										</Link>
									</div>
								) : null}
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HistoriasClinicas;
