import React from 'react';
import useAfiliacion from '../../hooks/useAfiliacion';
import '../../sass/DatosF.sass';
import moment from 'moment';

const DatosF = (props) => {
	const [datos_af, loading] = useAfiliacion();
	console.log(props.match.params);
	return (
		<div>
			{loading === false ? (
				<div className="datos_h_af">
					{datos_af
						.filter(
							(item) => item._id === props.match.params.id
						)
						.map((item) => (
							<>
								<h2>Datos de filiación</h2>
								<form>
									<div>
										<label>Nombre</label>
										<input
											type="text"
											value={item.nombres_paciente}
										/>
									</div>
									<div>
										<label>DNI</label>
										<input
											type="text"
											value={item.dni_paciente}
										/>
									</div>
									<div>
										<label>Fecha de nacimiento</label>
										<input
											type="date"
											value={moment(
												item.fecha_nac
											).format('YYYY-MM-DD')}
										/>
									</div>
									<div>
										<label>Lugar de nacimiento</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Dirección</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Nombre madre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Ocupación madre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Teléfono madre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Ocupación madre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Ocupación padre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Teléfono padre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Ocupación padre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Referencia</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Ocupación padre</label>
										<input type="text" value={''} />
									</div>
									<div>
										<label>Num. hijo</label>
										<input type="number" value="1" />
									</div>
                                    <button type='submit' className='actualizar'>
                                        Actualizar
                                    </button>
								</form>
							
							
							</>
						))}
				</div>
			) : null}
		</div>
	);
};

export default DatosF;
