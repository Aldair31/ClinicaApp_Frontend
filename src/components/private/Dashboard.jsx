import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import InitScreen from '../private/InitScreen';
import '../../sass/Dashboard.sass';
import '../../sass/Scroll.sass';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pacientes from './Pacientes';
import Consultas from './Consultas';
import Error404 from '../Error404';
// import Consultas from '../private/Consultas';
import Vacunas from '../private/Vacunas';
// Citas
import { NavLink } from 'react-router-dom';
import Citas from './Citas';
import Filiacion from './Filiacion';
import Responsables from './Responsables';
import NuevaCita from './NuevaCita';
import DatosF from './DatosF';
// DatosF
// Error404
const Dashboard = ({ usuario, logout }) => {
	console.log(usuario);
	return (
		<>
			<BrowserRouter>
				<Header />
				<div className="contenedor_dashboard">
					<div className="menu_cont">
						<div className="menu">
							

							{usuario.rol === 'Doctor' ? (
								<>
									<div className="itemLong">
										<NavLink className="item" to="/" exact>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
												fill-rule="evenodd"
												clip-rule="evenodd"
											>
												<path d="M19 22h2v-11.931c-1.16-.753-2.515-1.509-3.815-2.052.329-.544.574-1.189.697-1.877 1.821.75 3.499 1.753 5.118 2.86v13h1v2h-24v-2h1v-13c1.615-1.084 3.298-2.08 5.122-2.83.137.664.387 1.293.728 1.863-1.36.563-2.614 1.267-3.839 2.04l-.011.007v11.92h2v-5h14v5zm-12 1h3v-4h-3v4zm4 0h2v-4h-2v4zm3 0h3v-4h-3v4zm-9-7h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-12-3h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-5-13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m1 4v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
											</svg>
										</NavLink>
										Inicio
									</div>
									<div className="itemLong">
										<NavLink
											className="item"
											to="/vacunas"
										>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
												fill-rule="evenodd"
												clip-rule="evenodd"
											>
												<path d="M22.971 17.322l-.721.72c-.322.322-.846.322-1.168 0l-1.568-1.568-2.005 2.005 1.568 1.568c.322.322.323.845 0 1.168l-.721.72 1.031 1.065 4.613-4.649-1.029-1.029zm-16.38-10.567l-5.591-5.755h2.581l4.436 4.372c.914-.692 2.303-1.458 3.388-1.45l7.632 7.632c.324.323.846.323 1.169 0l.601-.6 1.405 1.405-8.64 8.641-1.406-1.405.602-.601c.322-.323.322-.846 0-1.169l-7.634-7.633c-.008-1.085.764-2.523 1.457-3.437zm7.433 9.492l.703.704 3.44-3.441-7.429-7.43c-1.378.591-2.938 2.152-3.441 3.441l1.806 1.806 1.716-1.718.694.693-1.717 1.718.721.721 1.716-1.718.694.693-1.718 1.717.708.708 1.716-1.717.694.692-1.717 1.718.721.72 1.716-1.717.694.693-1.717 1.717zm-12.305-12.691c1.046 1.56 1.717 2.536 1.717 3.485 0 .949-.768 1.718-1.717 1.718-.95 0-1.719-.769-1.719-1.718s.673-1.925 1.719-3.485z" />
											</svg>
										</NavLink>
										Vacunas
									</div>

									<div className="itemLong">
										<NavLink
											className="item"
											to="/consultas"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M17 3v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1zm-12 1c.553 0 1-.448 1-1v-2c0-.552-.447-1-1-1-.553 0-1 .448-1 1v2c0 .552.447 1 1 1zm13 13v-3h-1v4h3v-1h-2zm-5 .5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5-4.5 2.019-4.5 4.5zm11 0c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-14.237 3.5h-7.763v-13h19v1.763c.727.33 1.399.757 2 1.268v-9.031h-3v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-9v1c0 1.316-1.278 2.339-2.658 1.894-.831-.268-1.342-1.111-1.342-1.984v-.91h-3v21h11.031c-.511-.601-.938-1.273-1.268-2z" />
											</svg>
										</NavLink>
										Consultas
									</div>
								</>
							) : null}

							{usuario.rol === 'Secretaria' ? (
								<>
									<div className="itemLong">
										<NavLink className="item" to="/" exact>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
												fill-rule="evenodd"
												clip-rule="evenodd"
											>
												<path d="M19 22h2v-11.931c-1.16-.753-2.515-1.509-3.815-2.052.329-.544.574-1.189.697-1.877 1.821.75 3.499 1.753 5.118 2.86v13h1v2h-24v-2h1v-13c1.615-1.084 3.298-2.08 5.122-2.83.137.664.387 1.293.728 1.863-1.36.563-2.614 1.267-3.839 2.04l-.011.007v11.92h2v-5h14v5zm-12 1h3v-4h-3v4zm4 0h2v-4h-2v4zm3 0h3v-4h-3v4zm-9-7h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-12-3h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-5-13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m1 4v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
											</svg>
										</NavLink>
										Inicio
									</div>
									<div className="itemLong">
										<NavLink
											className="item"
											to="/nueva-cita"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm5.184 1.975v2.569c0 4.106-6 2.456-6 2.456s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm-13-3.975h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm17-2.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" />
											</svg>
										</NavLink>
										Nueva cita
									</div>
									<div className="itemLong">
										<NavLink
											className="item"
											to="/filiacion"
										>
											<svg
												width="24"
												height="24"
												xmlns="http://www.w3.org/2000/svg"
												fill-rule="evenodd"
												clip-rule="evenodd"
											>
												<path d="M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z" />
											</svg>
										</NavLink>
										Filiacion
									</div>
									<div className="itemLong">
										<NavLink
											className="item"
											to="/responsables"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
											>
												<path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
											</svg>
										</NavLink>
										Responsables
									</div>
								</>
							) : null}

							<div className="itemLong">
								<button
									className="item"
									onClick={() => {
										logout();
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path d="M0 2v20h14v-2h-12v-16h12v-2h-14zm18 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z" />
									</svg>
								</button>
								Salir
							</div>
						</div>
					</div>
					<>
						<Switch>
							<Route path="/" exact component={InitScreen} />
							
							<Route
								path="/pacientes"
								component={Pacientes}
							/>

							<Route
								path="/consultas"
								component={Consultas}
							/>
							<Route path="/vacunas" component={Vacunas} />
							<Route
								path="/nueva-cita"
								component={NuevaCita}
							/>
							<Route path="/citas" component={Citas} />
							<Route
								path="/responsables"
								component={Responsables}
							/>
							<Route
								path="/filiacion"
								component={Filiacion}
							/>
							<Route
								path='/datos-f/:id'
								component={DatosF}
							/>
								
							<Error404 component={Error404} />
						</Switch>
					</>
				</div>
			</BrowserRouter>
		</>
	);
};

const mapStateToProps = (state) => ({
	usuario: state.usuario,
});
const mapDispatchToProps = (dispatch) => ({
	logout(usuario) {
		dispatch({
			type: 'LOGOUT_OK',
			usuario,
		});
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default Dashboard;
