import React from 'react';
// import { Check } from './extras/Check';
import useCita from '../../hooks/useCita';
import '../../sass/Dashboard.sass'
const InicioSecretaria = () => {
	let [datos_af, loading] = useCita();
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
					&nbsp;&nbsp;Citas
				</h2>
				{/* nombre_paciente: '',
				dni_paciente: '',
				responsable: '',
				telefono: '',
				fecha_nac: '',
				motivo:'3',
				sexo:'2',
				hora:'',
				fecha:'',
				condicion:"1" */}
				{loading !== null ? (
				<div className="datos_filiacion">
					{datos_af.map((item) => (
						<div className="dato_filiacion" key={item._id}>
							<p>
								<strong>-DNI del paciente: </strong>
								{item.DNI}
							</p>
							<p>
								<strong>-Nombres del paciente: </strong>
								{item.nombre_paciente}
							</p>
							<p>
								<strong>-Responsable: </strong>
								{item.responsable}
							</p>
							<p>
								<strong>-Telefono: </strong>
								{item.telefono}
							</p>
							{/* <p> */}
								{/* <strong>-Motivo: </strong>
								<span>
											switch (item.motivo) {
												case '1':
													return
														'Vacuna'
													break;
												case '2':
													return
														'Consulta Pediatrica'
													break;
												default:
													return
														'Control de Crecimiento'
													break;
											}	
										
									
									
								</span> */}
							{/* </p> */}
							<p>
								<strong>-Sexo: </strong>
								<span>
									{item.sexo === 1 ? 
										'Hombre'
										: 'Mujer' }
								</span>
							</p>
							<p>
								<strong>-Condición: </strong>
								<span>
									{item.condicion === 1 ? 
										'Continuador'
										: 'Nuevo' }
								</span>
							</p>

						</div>
					))}
				</div>
			) : null}



			</div>
		</>
	);
};

export default InicioSecretaria;
