import React, {useEffect, useState} from "react";
import url from '../../keys/backend_keys'
import { useParams } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import moment from "moment";
import '../../sass/Recetas.sass'

const ListaReceta = () => {
    //OBTENIENDO TODAS LAS RECETAS
    const {id} = useParams()
    const [ListaReceta, setListaReceta] = useState({})
    useEffect(() => {
        fetch(`${url}/Receta/idHistClinica/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setListaReceta(data)
        })
    }, [])

    //PARA MOSTRAR DATOS
    let Datos = []
    for(let item in ListaReceta){
        Datos.push(ListaReceta[item])
    }

    //PARA REGISTRAR NUEVA RECETA
    const [Receta, setReceta] = useState({})
    const history = useHistory()
    const NuevaReceta = () => {
        fetch(`${url}/Receta/new`, {
            headers: {
				'Content-Type' : 'application/json'
			},
            method: 'POST',
            body: JSON.stringify({
                fecha: moment().format(),
                id_HistClinica: id
            })
        })
        .then((resp) => resp.json())
        .then((data) => {
            if(data.ok){
                setReceta({
                    ...Receta,
                    _id: data.receta._id,
                    fecha: moment().format(),
                    id_HistClinica: id
                })
            }
            console.log("DATA: ", data)
            history.push(`/agregar-receta/${data.receta._id}`)
        })
    }

    return (
        <div className="contenedorReceta">
            <div className='titulo-re'>
                <h3>RECETAS MÉDICAS</h3>
				<span onClick={NuevaReceta}><i class="fas fa-file-medical"></i></span>
			</div>
            <div className='contenedor-re'>
                {Datos.map((item) => {
                    return(
                        <>
                            {item.id_HistClinica == id ? (
                                <div style={{marginBottom: '5px'}}>
                                    <Link
                                        to={`/agregar-receta/${item._id}`}
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

export default ListaReceta