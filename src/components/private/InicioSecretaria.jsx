import React from 'react';
import { Check } from './extras/Check';
import '../../sass/Dashboard.sass'
const InicioSecretaria = () => {
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
				<div className="tableList">
					<div className="listado">
						<div className="filaListado encabListado">
							<div className="datoListado">Paciente</div>
							<div className="datoListado">DNI</div>
							<div className="datoListado">Hora</div>
							<div className="datoListado">Atentido</div>
							<div className="datoListado">Cancelar</div>
						</div>
						<div className="filaListado">
							<div className="datoListado">
								Daniel Ramírez Huayanay
							</div>
							<div className="datoListado">72269428</div>
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
							<div className="datoListado">72269428</div>
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
							<div className="datoListado">72269428</div>
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
							<div className="datoListado">72269428</div>
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
							<div className="datoListado">72269428</div>
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
							<div className="datoListado">72269428</div>
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
				<div className="list">
					<h2>
						<svg
							width="24"
							height="24"
							xmlns="http://www.w3.org/2000/svg"
							fill-rule="evenodd"
							clip-rule="evenodd"
						>
							<path d="M12.185 4l2.113-4 1.359.634-1.817 3.366h4.199c0 .922 1.092 1.618 1.961 1.618v1.382h-1l-2 17h-10l-2.02-17h-.98v-1.382c.87 0 2-.697 2-1.618h6.185zm-5.185 3l1.735 15h6.53l1.735-15h-10zm3.75 10.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm2.727-2.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-2.977-3c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
						</svg>
						&nbsp;&nbsp;Opciones rápidas
					</h2>
				</div>
				<div className="opcionesRapidas">
					<div className="opRapida">Nuevo paciente</div>
					<div className="opRapida">
						Programar citas para consultas
					</div>
					<div className="opRapida">Programar vacunas</div>
				</div>
			</div>
		</>
	);
};

export default InicioSecretaria;
