import React from 'react';
import useAfiliacion from '../../hooks/useAfiliacion';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../../sass/DatosF.sass';
import { Link } from 'react-router-dom';
import FormFiliacion from './extras/FormFiliacion';
//MARQUITO QUIERE QUE HAGAS UN SORTEO :V
//TU PATITA MEMERSON
const DatosF = ({ usuario }) => {
	const [datos_af, loading] = useAfiliacion();
	const { id } = useParams();
	const rol = usuario.rol;
	return (
		<div>
			{loading === false ? (
				<div className="datos_h_af">
					{datos_af
						.filter((item) => item._id === id)
						.map((item) => (
							<>
								<h2>
									Datos de filiación&nbsp;&nbsp;
									{rol === 'Doctor' ? (
										<p>
											<Link
												to={`/historias-clinicas/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver H. clínicas
											</Link>
											&nbsp;&nbsp;
											<Link
												to={`/antecedentes/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver antecedentes
											</Link>
											&nbsp;&nbsp;
											<Link
												to={`/vacunas/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver vacunas
											</Link>
											&nbsp;&nbsp;
											<Link
												to={`/GraficoDeCrecimiento/${id}`}
												style={{
													fontSize: '16px',
													cursor: 'pointer',
													color: 'crimson',
												}}
											>
												Ver Gráfico de Crecimiento
											</Link>
											
										</p>
									) : null}
								</h2>
								<FormFiliacion item={item} />
							</>
						))}
				</div>
			) : null}
		</div>
	);
};
const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(DatosF);
