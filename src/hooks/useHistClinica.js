import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../keys/backend_keys';

let peso = [];

const useHistClinica = () => {
	const [grafica, setGrafica] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		//let edad = [];
		//let peso = [];
		fetch(`${url}/HistClinica/idPaciente/${id}`)
			.then((resp) =>{
				return resp.json();
			})
			
			.then((data) =>{
				setGrafica(data)
				//console.log(data)
				/*for(const ObjData of data){
					peso.push(parseInt(ObjData.peso))
				}*/
				//console.log(peso)
			});
			
	}, []);
	return grafica
};

export default useHistClinica;