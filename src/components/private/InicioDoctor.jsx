import React from 'react';
import useCita from '../../hooks/useCita';
import '../../sass/Dashboard.sass';
import moment from 'moment';
import { Link } from 'react-router-dom';
const InicioDoctor = () => {
	let [datos_af, loading] = useCita();
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

	let CitasHoy = []
	for (let item in datos_af) {
		if(moment(datos_af[item].fecha).format('DD/MM/YYYY')==moment().format('DD/MM/YYYY')){
			CitasHoy.push(datos_af[item])
		}
	}

	(CitasHoy.sort(function(a, b){return b - a})).reverse()

	console.log("D: ", datos_af)
	console.log("eC: ", CitasHoy)
	return (
		<>
			<div className="list">
				<h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
					</svg>
					&nbsp;&nbsp;Consultas de hoy {moment().format('DD/MM/YYYY')}
				</h2>
				{loading !== null ? (
					<div className='ScrollTable'>
						<table>
							<thead>
								<tr>
									<th>DNI</th>
									<th>PACIENTE</th>
									<th>RESPONSABLE</th>
									<th>MOTIVO</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{CitasHoy.map((item) => (
									<tr>
										<td>{item.DNI}</td>
										<td>{item.nombre_paciente}</td>
										<td>{item.responsable}</td>
										<td>{switchMotivo(item.motivo)}</td>
										<td>
											<Link to={`/datos-f/${item.id_Historia}`}>
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
				) : null}
			</div>
		</>
	);
};

export default InicioDoctor;
