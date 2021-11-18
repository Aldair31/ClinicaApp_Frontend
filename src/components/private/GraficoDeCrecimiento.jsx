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
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiño0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad (0-36 meses)
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
												Ver Gráfica Talla - Edad (0-36 meses)
											</Link>
										</p>
                                        
									) : null}
									{item.sexo === 2 ? (
										<p>
											<Link
												to={`/GraficoDeCrecimientoPesoEdadNiña0a36/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfica Peso - Edad (0-36 meses)
                                                
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
												Ver Gráfica Talla - Edad (0-36 meses)
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
