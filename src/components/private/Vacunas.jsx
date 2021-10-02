import React, { useState } from 'react';
import { Check } from './extras/Check';
import '../../sass/Dashboard.sass';
const Consultas = () => {
	let [mostrandoFormNuevo, cambiarMostrandoFormNuevo] = useState(false);
	const mostrarFormNuevo = () => {
		return (
			<div className="modalPaciente">
				<div className="contenedorForms">
					<form>
                        <div>
							<label>Paciente</label>
							<br />
							<input
								type="text"
								placeholder="Ingrese Paciente"
							/>
						</div>
						<div>
							<label>Fecha</label>
							<br />
							<input
								type="Date"
								placeholder=""
							/>
						</div>
						<div>
							<label>Hora</label>
							<br />
							<input
								type="Time"
								placeholder=""
							/>
						</div>
						
						<div>
							<input
								type="submit"
								value="Agregar Cita para Vacuna"
							/>
						</div>
					</form>    
                </div>
				<div
					className="cerrarForm"
					onClick={() => {
						cambiarMostrandoFormNuevo(false);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
					</svg>
				</div>
			</div>
		);
	};
	return (
		<>
			{mostrandoFormNuevo ? mostrarFormNuevo() : null}
			<div className="list">
				<h2>
					Listado de Vacunas&nbsp;&nbsp;&nbsp;&nbsp;
					<span
						onClick={() => {
							cambiarMostrandoFormNuevo(true);
						}}
					>
						Agregar nueva
					</span>
				</h2>
				<div className="tableList tableBig">
					<div className="listado">
						<div className="filaListado encabListado">
							<div className="datoListado">Paciente</div>
							<div className="datoListado">Vacuna</div>
							<div className="datoListado">Hora</div>
							<div className="datoListado">Atentido</div>
							<div className="datoListado">Cancelar</div>
						</div>
						<div className="filaListado">
							<div className="datoListado">
								Daniel Ramírez Huayanay
							</div>
							<div className="datoListado">Vacuna contra la influenza</div>
							<div className="datoListado">7:00 am</div>
							<div className="datoListado atendido">
								<div className="cuadro">
									<Check />
								</div>
							</div>
							<div className="datoListado cancelar">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
								</svg>
							</div>
						</div>
						<div className="filaListado">
							<div className="datoListado">
								Juan Celi Falen
							</div>
							<div className="datoListado">Vacuna contra la Influenza</div>
							<div className="datoListado">7:00 am</div>
							<div className="datoListado atendido">
								<div className="cuadro"></div>
							</div>
							<div className="datoListado cancelar">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
								</svg>
							</div>
						</div>
						<div className="filaListado">
							<div className="datoListado">
								Emerson Perales Villanueva
							</div>
							<div className="datoListado">Vacuna contra la Influenza</div>
							<div className="datoListado">7:00 am</div>
							<div className="datoListado atendido">
								<div className="cuadro"></div>
							</div>
							<div className="datoListado cancelar">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
								</svg>
							</div>
						</div>
						<div className="filaListado">
							<div className="datoListado">
								Emerson Gustabo Perales
							</div>
							<div className="datoListado">Vacuna contra la Influenza</div>
							<div className="datoListado">7:00 am</div>
							<div className="datoListado atendido">
								<div className="cuadro"></div>
							</div>
							<div className="datoListado cancelar">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
								</svg>
							</div>
						</div>
						<div className="filaListado">
							<div className="datoListado">
								Emerson Gustabo Villanueva
							</div>
							<div className="datoListado">Vacuna contra la Influenza</div>
							<div className="datoListado">7:00 am</div>
							<div className="datoListado atendido">
								<div className="cuadro"></div>
							</div>
							<div className="datoListado cancelar">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
								</svg>
							</div>
						</div>
						<div className="filaListado">
							<div className="datoListado">
								Adrian Idrogo Colmenares
							</div>
							<div className="datoListado">Vacuna contra la Influenza</div>
							<div className="datoListado">7:00 am</div>
							<div className="datoListado atendido">
								<div className="cuadro"></div>
							</div>
							<div className="datoListado cancelar">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Consultas;




// import React from 'react'

// const Vacunas = () => {
//     return (
//         <div>
//             <h2>Vacunas</h2>
//         </div>
//     )
// }

// export default Vacunas


