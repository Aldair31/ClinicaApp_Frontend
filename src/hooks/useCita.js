import { useEffect, useState } from 'react';
import url from '../keys/backend_keys';
const useCita = () => {
	const [datos_af, set_datos_af] = useState([]);
	const [loading, setLoading] = useState(true);
	// const consumirCitas = () =>{
		useEffect(() => {
			// setInterval(() => {
				fetch(`${url}/Cita`)
				.then((resp) => {
					return resp.json();
				})
				.then((data) => {
					set_datos_af(data);
					console.log('citas');
					console.log(data);
					setLoading(false);
					return data;
				})
				.catch((err) => {
					return err;
				});
			// }, 1000)
			
		}, []);
	// }
	// setInterval(()=>{
	// 	fetch(`${url}/Cita`)
	// 		.then((resp) => {
	// 			return resp.json();
	// 		})
	// 		.then((data) => {
	// 			set_datos_af(data);
	// 			console.log('citas');
	// 			console.log(data);
	// 			setLoading(false);
	// 			return data;
	// 		})
	// 		.catch((err) => {
	// 			return err;
	// 		});
	// 	// consumirCitas()
	// }, 5000)
	
	return [datos_af, loading, set_datos_af];
};

export default useCita;
