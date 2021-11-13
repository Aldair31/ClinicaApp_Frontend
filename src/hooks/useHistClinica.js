import { useEffect, useState } from 'react';
import url from '../keys/backend_keys';
const useHistClinica = () => {
	const [datos_af, set_datos_af] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(`${url}/HistClinica`)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				set_datos_af(data);
				setLoading(false);
				return data;
			})
			.catch((err) => {
				return err;
			});
	}, []);
	return [datos_af, loading];
};

export default useHistClinica;