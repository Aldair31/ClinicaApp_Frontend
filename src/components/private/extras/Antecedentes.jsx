import React, { useEffect, useState } from 'react';
import url from '../../../keys/backend_keys';
const Antecedentes = ({ id }) => {
	const [antecedente, setAntecedente]= useState([]);
	useEffect(() => {
		fetch(`${url}/Antecedentes`)
			.then((resp) => resp.json())
			.then((data) => {
				setAntecedente(data);
			});
	}, []);

	return (
		<div>
			<div className="list">
				<div className="citas">
					{antecedente.map((item) => {
                        console.log("*HOLA*")
                        
						console.log(item)
						return (
							<>
								{item.id_Historia===id? (
									<div key={item._id} className="cita">
										<h3>Antecedentes</h3>
										<p>Asma Bronquial Familiar: {item.asmaBronquialFam ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Diabetes: {item.diabetes ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Epilepsia: {item.epilepsia ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Otros: {item.otros}</p>
                                        <p>Peso al Nacer: {item.peso_al_nacer}</p>
                                        <p>Tipo de Parto: {item.tipoDeParto}</p>
                                        <p>Apgar 1': {item.apgar1}</p>
                                        <p>Apgar 5': {item.apgar5}</p>
                                        <p>Edad Gestacional: {item.edadGestacional}</p>
                                        <p>Complicaciones: {item.complicaciones}</p>
                                        <p>Asma Bronquial Patológico: {item.asmaBronquialPat ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Nebulización: {item.nebulizacion ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Intervención Quirúrgica: {item.intervencionQuirurgica ===true? <span>Si</span> : <span>No</span>}</p>
                                        <p>Reacción Adversa a Médicamentos: {item.reaccionAdversaMed}</p>
                                        <p>Enfermedades Anteriores: {item.enfAnteriores}</p>
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
