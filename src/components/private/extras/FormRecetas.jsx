import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
import '../../../sass/Recetas.sass'
import DocReceta from '../DocReceta'

import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
} from "reactstrap";
import { Link } from 'react-router-dom';

const FormRecetas = () => {
    // const data = [
    //     { id: 1, personaje: "Naruto", anime: "Naruto" },
    //     { id: 2, personaje: "Goku", anime: "Dragon Ball" },
    //     { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
    //     { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
    //     { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
    //     { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
    //   ];

    const [Re, setRe] = useState({})

	let { id } = useParams();
	useEffect(() => {
		fetch(`${url}/Receta/idHistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data)=>{
				setRe(data)
			})
	}, []);
	const handleChange = (e)=>{
		setRe({
			...Re,
			[e.target.name]: e.target.value
		})
	}

    const [Recetas, setRecetas] = useState([]);
	const handleChangeRe = (e) => {
        setRecetas({
            ...Recetas,
            [e.target.name]: e.target.value,
        });
    };

    //PARA MOSTRAR DATOS
    let Datos = []
    for(let item in Re){
        Datos.push(Re[item])
    }

    //PARA DOC RECETA
    // let a = []
    // for(let i=0; i<Datos[1].length; i++){
    //     a.push([(i+1) + '. ' + Datos[1][i].nombreMedicina + ' (' + Datos[1][i].cantidad + ')', (i+1) + '. ' + Datos[1][i].indicaciones])
    // }
    // console.log("DATOS RE: ", a)
    return (
        <div>
            {/* <Formik
                initialValues={{
					cantidad: '',
					nombreMedicina: '',
					indicaciones: ''
				}}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    fetch(`${url}/Receta/new`, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify({
                        ...valores,
                        id_HistClinica: id
                        })
                    })
                    .then((resp) => {
                        return resp.json();
                    })
                    .then((data) => {
                        console.log(data);
                        if(data.ok){
                            set_datos([
                                ...datos,
                                {
                                    cantidad: valores.cantidad,
                                    _id: data.uid,
                                    nombreMedicina: valores.nombreMedicina,
                                    indicaciones: valores.indicaciones,
                                },
                            ]);
                            alert('Medicamento agregado')
                        }
                        else{
                            console.log("F PATITA XD")
                        }
                        return data
                    })
                    .catch((err) => {
                        console.log(err);
                        // rej(err);
                    });
                }}
            > */}
                
                <div className='titulo-re'>
                    <h3>AGREGAR RECETA MÉDICA</h3>
                </div>
                <div className='contenedor-re'>
                        <div className='fila1-re'>
                            <div className='cantidad-re'>
                                <label>CANTIDAD</label>
                                <input placeholder="CANTIDAD" type="text" name="cantidad" id='cantidad' value={Recetas.cantidad} onChange={handleChangeRe}/>
                            </div>
                            <div className='medicamento-re'>
                                <label>MEDICAMENTO</label>
                                <input placeholder="MEDICAMENTO" type="text" name="nombreMedicina" id='medicamento' value={Recetas.nombreMedicina} onChange={handleChangeRe}/>
                            </div>
                        </div>
                        <div className='fila2-re'>
                            <label>INDICACIONES</label>
                            <textarea 
                                placeholder="INDICACIONES"
                                rows="3"
                                cols="50"
                                name="indicaciones"
                                id='indicaciones'
                                value={Recetas.indicaciones}
                                onChange={handleChangeRe}
                            />
                        </div>
                        <button
                            // type="submit"
                            // onSubmit={(valores, { resetForm }) => {
                            //     resetForm();
                            //     fetch(`${url}/Receta/new`, {
                            //         headers: {
                            //             'Content-Type': 'application/json'
                            //         },
                            //         method: 'POST',
                            //         body: JSON.stringify({
                            //         // cantidad: cantidad,
                            //         id_HistClinica: id
                            //         })
                            //     })
                            //     .then((resp) => resp.json())
                            //     .then((datos) => {
                            //         console.log(datos);
                            //         if(datos.ok){
                            //             alert('Medicamento agregado')
                            //         }
                            //         else{
                            //             console.log("F PATITA XD")
                            //         }
                            //     })
                            //     .catch((err) => {
                            //         console.log(err);
                            //         // rej(err);
                            //     });
                            // }}
                            onClick={(e)=>{
                                e.preventDefault()
                                fetch(`${url}/Receta/new`, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    method: 'POST',
                                    body: JSON.stringify({
                                        // ...Re,
                                        ...Recetas,
                                        id_HistClinica: id
                                    }),
                                })
                                    .then((resp) => resp.json())
                                    .then((datos) => {
                                        if(datos.ok){
                                            alert('Medicamento agregado')
                                            // console.log("NUEVOS DATOS: ", datos)
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                        // rej(err);
                                    });
                            }}
                        >
                            AGREGAR
                        </button>
                </div>

                <div className='titulo-re'>
                    <h3>TABLA DE MEDICAMENTOS</h3>
                </div>
                {/* <div>
                    {console.log("AEAA: ", Datos)}
                    DATOS
                    {Datos.map(item => {
                        return(
                            <div>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Medicina: {item.nombreMedicina}</p>
                                <p>Indicaciones: {item.indicaciones}</p>
                            </div>
                        )
                    })}
                </div> */}
                <Table>
                    <thead>
                        <tr>
                            <th>CANTIDAD</th>
                            <th>MEDICAMENTO</th>
                            <th>INDICACIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Datos.map(item => (
                            <tr>
                                <td>{item.cantidad}</td>
                                <td>{item.nombreMedicina}</td>
                                <td>{item.indicaciones}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className='contenedor-re' style={{backgroundColor:'#fff'}}>
                    <button onClick={DocReceta}>
                            Mostrar Receta
                        </button>
                </div>
                {/* <div>
                    <DocReceta  item={id}/>
                </div> */}
            {/* </Formik> */}
        </div>
    )
}

export default FormRecetas