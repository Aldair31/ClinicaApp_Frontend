import url from '../keys/backend_keys';
// import useCita from '../hooks/useCita';
const consumCitaActualizada = (body) => {
	return new Promise((res, rej) => {
		fetch(`${url}/Cita/${body._id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'PUT',
			body: JSON.stringify(body)
			// body: JSON.stringify({
			// 	...body,
			// 	nombre_paciente: body.nombre_paciente,
			// 	DNI: body.DNI,
			// 	responsable: body.responsable,
			// 	telefono: body.telefono,
			// 	motivo: body.motivo,
			// 	fecha: body.fecha,
			// 	condicion: body.condicion,
			// }),
		})
			.then((resp) => resp.json())
			.then((datos) => {
				res(datos);
				// set_datos_af([
				// 	datos_af.map((item) => {
				// 		if(item._id == datos._id){
				// 			item.nombre_paciente = datos.nombre_paciente
				// 			item.DNI = datos.DNI
				// 			item.responsable = datos.responsable
				// 			item.telefono = datos.telefono
				// 			item.motivo = datos.motivo
				// 			item.fecha = datos.fecha
				// 			item.condicion = datos.condicion
				// 		}
				// 	})
				// ])
			})
			.catch((err) => {
				rej(err);
			});
	});
};
export default consumCitaActualizada;