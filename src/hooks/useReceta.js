import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../keys/backend_keys';
const useReceta = () => {
    let {id} = useParams()
	const [datosRe, setDatosRe] = useState([]);
	// const [loading, setLoading] = useState(true);
	// useEffect(() => {
	// 	fetch(`${url}/Receta/datosRe/${id}`)
	// 		.then((resp) => {
	// 			return resp.json();
	// 		})
	// 		.then((data) => {
	// 			set_datos_af(data);
	// 			setLoading(false);
	// 			return data;
	// 		})
	// 		.catch((err) => {
	// 			return err;
	// 		});
	// }, []);

    useEffect(() => {
        fetch(`${url}/Receta/idHistClinica/${id}`)
            .then((resp) => resp.json())
            .then((data)=>{
                setDatosRe(data)
            })
    }, []);
	return [datosRe, setDatosRe];
};

export default useReceta;