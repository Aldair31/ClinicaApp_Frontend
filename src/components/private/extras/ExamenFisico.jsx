import React, { useEffect, useState } from 'react';
import url from '../../../keys/backend_keys';
const ExamenFisico = ({ id }) => {
	const [examenFisico, setExamenFisico]= useState([]);
	useEffect(() => {
		fetch(`${url}/ExamenFisico`)
			.then((resp) => resp.json())
			.then((data) => {
				setExamenFisico(data);
			});
	}, []);

	return (
		<div>
			<div className="list">
				<div className="citas">
					{examenFisico.map((item) => {
                        console.log("**")
                        
						console.log(item)
						return (
							<>
								{item.id_HistClinica===id? (
									<div key={item._id} className="cita">
										<h3>Examen Físico</h3>
										<p>Peso: {item.peso}</p>
                                        <p>Talla: {item.talla}</p>
                                        <p>Temperatura: {item.temperatura}</p>
                                        <p>Apreciacion G : {item.apreciacionG}</p>
                                        <p>TCSC: {item.tcsc}</p>
                                        <p>Orofaringe: {item.orofaringe}</p>
                                        <p>Aparato Respiratorio': {item.aparatoResp}</p>
                                        <p>Aparato CV': {item.aparatoCV}</p>
                                        <p>Abdomen: {item.abdomen}</p>
                                        <p>Aparato GU : {item.aparatoGU}</p>
                                        <p>Neurologico: {item.neurologico}</p>
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

export default ExamenFisico;
