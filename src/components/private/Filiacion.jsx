import React from 'react';
import useAfiliacion from '../../hooks/useAfiliacion';
import '../../sass/Dashboard.sass';
import '../../sass/Filiacion.sass';
import moment from 'moment';
const Filiacion = () => {
	let [datos_af, loading] = useAfiliacion();
	return (
		<div className="list">
			<h2>Datos de filiación</h2>
			{/* <div className="datos_filiacion"> */}
			{loading !== null ? (
				<div className="datos_filiacion">
					{datos_af.map((item) => (
						<div className="dato_filiacion">
                       
							<p>
								<strong>-DNI del paciente: </strong>
								{item.dni_paciente}
							</p>
                            <p>
								<strong>-Nombres del paciente: </strong>
								{item.nombres_paciente}
							</p>
                            <p>
								<strong>-Fecha de nacimiento: </strong>
								{moment(item.fecha_nac).format('DD/MM/YYYY')}
							</p>
                            <p>
								<strong>-Edad: </strong>
								{moment(moment(item.fecha_nac).format('ll')).fromNow().replace('months ago','meses')}
							</p>
                            <p>
                                <strong>-</strong><strong style={{textDecoration:'underline',cursor:'pointer'}}>Ver más</strong>
                            </p>
						</div>
					))}
				</div>
			) : null}
			{/* </div> */}
		</div>
	);
};

export default Filiacion;
