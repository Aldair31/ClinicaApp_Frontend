import React, {useEffect, useState} from "react";
import url from '../../keys/backend_keys'
import { useParams } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import '../../sass/Orden.sass'

const ListaOrden = () => {
    //OBTENIENDO TODAS LAS ÓRDENES
    const {id} = useParams()
    const [ListaOrden, setListaOrden] = useState({})
    useEffect(() => {
        fetch(`${url}/Orden/id_HistClinica/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setListaOrden(data)
        })
    }, [])

    //PARA MOSTRAR DATOS
    let Datos = []
    for(let item in ListaOrden){
        Datos.push(ListaOrden[item])
    }

    const [Orden, setOrden] = useState({})
	const history = useHistory()
	const NuevaOrden = () => {
		fetch(`${url}/Orden/new`, {
			headers: {
				'Content-Type' : 'application/json'
			},
			method: 'POST',
			body: JSON.stringify({
				fecha: moment().format(),
				// fecha: moment().format('DD-MM-YYYY HH:mm'),
				id_HistClinica: id

			})
		})
		.then((resp) => resp.json())
		.then((data) => {
			if(data.ok){
				setOrden({
					...Orden,
					_id: data.orden._id,
					fecha: moment().format(),
					// fecha: moment().format('DD-MM-YYYY HH:mm'),
					id_HistClinica: id
				})
			}
			console.log("DATA: ", data)
			// window.location.href = `/agregar-orden/${data.orden._id}`
			history.push(`/agregar-orden/${data.orden._id}`)
		})
	}

    return(
        <div className='contenedorOrden'>
            <div className='tituloOrden'>
                <h3>ÓRDENES MÉDICAS</h3>
				<span onClick={NuevaOrden}><i class="fas fa-file-medical"></i></span>
			</div>
            <div className='contenedorFormOrden'>
                {Datos.map((item) => {
                    return(
                        <>
                            {item.id_HistClinica == id ? (
                                <div style={{marginBottom: '5px'}}>
                                    <Link
                                        to={`/agregar-orden/${item._id}`}
                                    >
                                        {moment(item.fecha).format('DD-MM-YYYY HH:mm')}
                                    </Link>
                                </div>
                            ):null}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ListaOrden