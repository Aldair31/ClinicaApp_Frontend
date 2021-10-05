import React from 'react';
import useAfiliacion from '../../hooks/useAfiliacion';
import '../../sass/DatosF.sass';

import FormFiliacion from './extras/FormFiliacion'
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
								<FormFiliacion item={item}/>
							</>
						))}
				</div>
			) : null}
		</div>
	);
};

export default DatosF;
