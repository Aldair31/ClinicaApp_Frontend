import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../keys/backend_keys';
const useIndicaciones = () => {
	const [indicaciones, setIndicaciones] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch(`${url}/HistClinica/medicamentos/${id}`)
			.then((resp) =>{
				return resp.json();
			})
			
			.then((data) =>{
				setIndicaciones(data)
			});
			
	}, [id]);

	return indicaciones
};

export default useIndicaciones;