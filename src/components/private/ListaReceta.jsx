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

    //MODAL DE CONFIRMACIÓN PARA CREAR
    const ModalConfirmación = () => {
        return (
            <>
                <div
                    style={{
                        background: '#00000039',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100vh',
                        width: '100%',
                        zIndex:'2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <form
                         style={{
                            background: '#ffffff',
                            padding: '2px',
                            borderRadius: '6px',
                        }}
                    >
                        <div className="ModalReceta">
                            <h3>¿DESEA CREAR UNA NUEVA RECETA?</h3>
                            <div className="ListaBotones">
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    NuevaReceta()
                                }}>
                                    SÍ
                                </button>
                                <button onClick={() => {setForm(false)}}>NO</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    const [form, setForm] = useState(false);
	const onForm = () => {
		setForm(!form);
	};
    
    return (
        <div className="contenedorReceta">
            <div className='titulo_receta'>
                <h3>RECETAS MÉDICAS</h3>
				<span onClick={onForm}><i class="fas fa-file-medical"></i></span>
			</div>
            {form && <ModalConfirmación/>}
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