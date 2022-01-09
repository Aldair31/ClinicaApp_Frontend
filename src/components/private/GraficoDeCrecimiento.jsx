import React from 'react'
import useCita from '../../hooks/useCita';
import '../../sass/Dashboard.sass';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAfiliacion from '../../hooks/useAfiliacion';

const GraficoDeCrecimiento = () => {
	let [datos_af, loading] = useAfiliacion();
	const { id } = useParams();
	return (
		<div>
			<div className="datos_filiacion">
				{datos_af.map((item) => {
					console.log("**")
					console.log(item)
					return (
						<>
							{item._id===id?  (
								<div key={item._id} className="cita">
									<div className="dato_filiacion" key={item._id}>
										
									{item.sexo === 1 ? (
										<p>
											<h3>De 0 a 36 meses</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
											</Link>
                                            <br></br>
                                            <br></br>
                                            <Link
												to={`/GraficoDeCrecimientoTallaEdadNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPCNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica PC - Edad
											</Link>
											<br></br>
                                            <br></br>
											<h3>De 2 a 20 años</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiño2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoTallaEdadNiño2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoIMCNiños2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica IMC
											</Link>
											<br></br>
                                            <br></br>
											<h3>Mayores a 7kg y 77cm</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiño/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link>
										</p>
                                        
									) : null}
									{item.sexo === 2 ? (
										<p>
											<h3>De 0 a 36 meses</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
                                                
											</Link>
                                            <br></br>
                                            <br></br>
                                            <Link
												to={`/GraficoDeCrecimientoTallaEdadNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoPCNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica PC - Edad
											</Link>
											<br></br>
                                            <br></br>
											<h3>De 2 a 20 años</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiña2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad
                                                
											</Link>
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoTallaEdadNiña2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Talla - Edad
											</Link>	
											<br></br>
                                            <br></br>
											<Link
												to={`/GraficoDeCrecimientoIMCNiñas2a20/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica IMC
											</Link>	
											<br></br>
                                            <br></br>
											<h3>Mayores a 7kg y 77cm</h3>
											<Link
												to={`/GraficoDeCrecimientoPesoTallaNiña/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Talla
											</Link>
										</p>
									) : null}
									</div>
								</div>
							) : null}
						</>
					);
				})}	
			</div>
		</div>
	)
}

export default GraficoDeCrecimiento
