import React, { useEffect, useState } from 'react';
import url from '../../keys/backend_keys';
import { useParams} from 'react-router-dom';
import FormAntecedentes from './extras/FormAntecedentes';
import '../../sass/Cita.sass';
const Antecedentes = () => {
	const { id } = useParams();
	const [antecedente, setAntecedente]= useState([]);
    const [state, setState] = useState(false);
	useEffect(() => {
		fetch(`${url}/Antecedentes`)
			.then((resp) => resp.json())
			.then((data) => {
				setAntecedente(data);
				console.log(data)
			});
	}, []);

	return (
		<div>
			<div className="list">
				<div className="citas">
					{antecedente.map((item) => {
						return (
							<>
								{item.id_Historia===id? (
									<div key={item._id} className="cita">
										
										<h3>Antecedentes Familiares</h3>
										<p>Asma Bronquial Familiar: {item.asmaBronquialFam ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Diabetes: {item.diabetes ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Epilepsia: {item.epilepsia ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Otros: {item.otros}</p>
                                        <h3>Antecedentes Natales</h3>
                                        <p>Peso al Nacer: {item.peso_al_nacer}</p>
                                        <p>Tipo de Parto: {item.tipoDeParto}</p>
                                        <p>Apgar 1': {item.apgar1}</p>
                                        <p>Apgar 5': {item.apgar5}</p>
                                        <p>Edad Gestacional: {item.edadGestacional}</p>
                                        <p>Complicaciones: {item.complicaciones}</p>
                                        <h3>Antecedentes Patológico</h3>
                                        <p>Asma Bronquial: {item.asmaBronquialPat ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Nebulización: {item.nebulizacion ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Intervención Quirúrgica: {item.intervencionQuirurgica ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Reacción Adversa a Médicamentos: {item.reaccionAdversaMed}</p>
                                        <p>Enfermedades Anteriores: {item.enfAnteriores}</p>
										{/* <p>
											<Link to={`/datos-antecedentes/${id}`}>
												<strong>-</strong>
												<strong
													style={{
														textDecoration: 'underline',
														cursor: 'pointer',
													}}
												>
													Ver más
												</strong>
												{item.post}
											</Link>
										</p> */}
                                        <div >
                                            {state ? (
                                            <>
                                            <div>
                                                <FormAntecedentes  item={item}/>
                                            </div>
                                            <div>
                                                <button
                                                onClick={() => {
                                                    setState(false);
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
                                                        class="fas fa-times"
                                                        style={{ fontSize: '19px' }}
                                                    ></i>
                                                </button>
                                            </div>
                                            </>): null}   
                                        </div>
                                        <br />
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setState(true);
                                                }}
                                                style={{
                                                    padding: '9px',
                                                    color: 'white',
                                                    border: 'none',
                                                    background: '#3ec4ab',
                                                    marginBottom: '11px',
                                                    borderRadius: '11px',
                                                    cursor: 'pointer',
                                                }}
                                            >
                                                Ver mas
                                                
                                            </button>
                                            
                                        </div>
                                        
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

export default Antecedentes;
