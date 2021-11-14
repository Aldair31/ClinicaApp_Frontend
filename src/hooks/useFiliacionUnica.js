import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../keys/backend_keys';
const useFiliacionUnica = () => {
	const [grafica, setGrafica] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		let edad = [];
		let peso = [];
		fetch(`${url}/Historia/${id}`)
			.then((resp) =>{
				return resp.json();
				//console.log(id)
			})
			
			.then((data) =>{
				setGrafica(data)
				console.log(data)
				/*for(const ObjData of data){
					//peso.push(ObjData.fecha_nac)
				}*/
				//console.log(peso)
			});
			
	}, []);
};

export default useFiliacionUnica;