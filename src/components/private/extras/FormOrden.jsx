import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import url from '../../../keys/backend_keys'
import {jsPDF} from 'jspdf'
import 'jspdf-autotable'
import '../../../sass/Orden.sass'
import FondoOrden from '../../../img/FondoOrden.jpg'

const FormOrden = () => {
    //ESTADO PARA SABER SI HAY MEDICAMENTOS EN UNA RECETA Y HABILITAR BOTONES PARA ACCIONES DE DOCUMENTO (MOSTRAR, DESCARGAR E IMPRIMIR)
    const [BtnAcitve, setBtnActive] = useState(false)
    
    //OBTENIENDO INDICACIONES DE LA ORDEN
    const [Orden, setOrden] = useState([])
    let {id} = useParams()
    useEffect(() => {
        fetch(`${url}/Orden/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setOrden(data)
            if(data.length>0){
                setBtnActive(true)
            }
        })
    }, [])
    
    //PARA REGISTRAR DATOS DE INDICACIONES
    const [Indicacion, setIndicacion] = useState([])
    const handleChangeIndic = (e) =>{
        setIndicacion({
            ...Indicacion,
            [e.target.name]: e.target.value
        })
    }
    //ESTADO PARA SABER SI SE VA A ACTUALIZAR Y CAMBIAR EL NOMBRE DEL BOTÓN
    const [isActive, setActive] = useState(false)
    
    //PETICÍON POST/UPDATE PARA AGREGAR INDICACIÓN
    const AgregarIndicacion = (dato) =>{
        if(Indicacion.indicaciones!=undefined && Indicacion.indicaciones!=''){
            if(isActive){
                fetch(`${url}/IndicacionOrden/${dato._id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',
                    body: JSON.stringify({
                        ...Indicacion,
                        indicaciones: Indicacion.indicaciones
                    })
                })
                .then((resp) => resp.json())
                .then((data) => {
                    if(data.ok){
                        alert('Indicación actualizada')
                        setIndicacion({
                            indicaciones: ''
                        })
                        setOrden([
                            Orden.map((datos) => {
                                if(datos._id == dato._id){
                                    datos.indicaciones = Indicacion.indicaciones
                                }
                            })
                        ])
                        setOrden([
                            ...Orden
                        ])
                        setActive(!isActive)
                    }
                })
            } else {
                fetch(`${url}/IndicacionOrden/new`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        ...Indicacion,
                        id_Orden: id
                    })
                })
                .then((resp) => resp.json())
                .then((data) => {
                    if(data.ok){
                        alert('Indicación agregada')
                        setIndicacion({
                            indicaciones: ''
                        })
                        setOrden([
                            ...Orden,
                            {
                                _id: data.indicOrden._id,
                                indicaciones: Indicacion.indicaciones
                            }
                        ])
                        setBtnActive(true)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        } else {
            alert('Por favor, asegurese de completar todos los campos')
        }
    }

    //OBTENIENDO DATOS DE HISTORIA
    const [Historia, setHistoria] = useState({})
    useEffect(() => {
        fetch(`${url}/Orden/datos/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setHistoria(data)
        })
    }, [])
    
    const DocOrden = () => {
        var doc = new jsPDF('p', 'mm', [242, 104])

        doc.addImage(FondoOrden, 'JPG', 0, 0)

        //OBTENIENDO NOMBRE DE PACIENTE
        let nombrePac = [
            [(Historia.nombres_paciente).toUpperCase()]
        ]

        //TABLA PARA NOMBRE DE PACIENTE
        doc.autoTable({
            body: nombrePac,
            theme: 'plain',
            styles:{font: 'courier', fontSize: 12, fontStyle: 'bold'},
            startY: 51,
            margin:{left: 8},
            columnStyles:{
                0: {cellWidth:100}
            }
        })

        //OBTENIENDO SOLO INDICACIONES
        let datosIndic = []
        for (let i = 0; i < Orden.length; i++) {
            datosIndic.push([(i+1) + '. ' + (Orden[i].indicaciones).toUpperCase()])
        }
        
        //TABLA PARA INDICACIONES
        doc.autoTable({
            body: datosIndic,
            theme:'plain',
            styles:{fontSize: 12, lineColor:[200, 83, 100], textColor:[0,0,0], halign: 'left', font: 'courier', cellPadding:2},
            startY:75,
            rowPageBreak: 'avoid',
            margin:{left:2, bottom: 40},
            columnStyles: {
                0: {cellWidth:104}
            }
        })
        
        return doc
    }

    // ACCIONES PDF
    const mostrarDoc = () => {
        var doc = new jsPDF('p', 'mm', [242, 104])
        doc = DocOrden()
        doc.output('dataurlnewwindow', 'Orden.pdf')
    }
    
    const guardarDoc = () => {
        var doc = new jsPDF('p', 'mm', [242, 104])
        doc = DocOrden()
        doc.save('Orden.pdf')
    }

    const imprimirDoc = () => {
        var doc = new jsPDF('p', 'mm', [242, 104])
        doc = DocOrden()
        doc.autoPrint()
        doc.output('dataurlnewwindow', 'Orden.pdf')
    }

    //PARA PODER PASAR EL ITEM DEL MAP DE DATOS Y EDITAR
    const [dataItem, setDataItem] = useState({})
    return(
        <div className='contenedorOrden'>
            <div className='tituloOrden'>
                <h3>AGREGAR ORDEN MÉDICA</h3>
            </div>
            <div className='contenedorFormOrden'>
                <input 
                    placeholder='INDICACIONES'
                    name="indicaciones"
                    id='indicaciones'
                    value={Indicacion.indicaciones}
                    onChange={handleChangeIndic}
                ></input>
                <div className='agregarIndic'>
                    <button onClick={() => AgregarIndicacion(dataItem)}>{isActive ? 'ACTUALIZAR MEDICAMENTO' : 'AGREGAR'}</button>
                </div>
            </div>
            <div className={isActive ? 'buttonEnabled': 'buttonDisabled'}>
                <button 
                    disabled={isActive?false:true} 
                    onClick={() => {
                        setActive(!isActive)
                        setIndicacion({
                            indicaciones: ''
                        })
                    }}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <div className='tituloOrden'>
                <h3>TABLA DE INDICACIONES</h3>
            </div>
            <div className='max'>
                <table className='tablaOrden'>
                    <thead>
                        <tr>
                            {/* <th style={{width: '90.3%'}}>INDICACIONES</th>
                            <th style={{width: '4.7%'}}></th> */}
                            <th>INDICACIONES</th>
                            {/* <th></th>
                            <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {Orden.map((item) => (
                            <tr>
                                <td className='tdIndicacion'>{item.indicaciones}</td>
                                <td>
                                    <button 
                                        style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            if(Orden.length - 1 == 0){
                                                setBtnActive(false)
                                            }
                                            var rpta = window.confirm("¿Desea eliminar esta indicación?")
                                            if(rpta){
                                                fetch(`${url}/IndicacionOrden/${item._id}`, {
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    method: 'DELETE'
                                                })
                                                .then((resp) => resp.json())
                                                .then((data) => {
                                                    if(data.ok){
                                                        alert('Indicación eliminada')
                                                        setOrden(Orden.filter((datos) => datos._id != item._id))
                                                    }
                                                })
                                                .catch((err) => {
                                                    console.log(err);
                                                });
                                            }
                                        }}
                                    >
                                        <i className="fas fa-trash-alt" style={{color:'#E13648'}}></i>
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setIndicacion({
                                                indicaciones: item.indicaciones
                                            })
                                            if(!isActive){
                                                setActive(!isActive)
                                            }
                                            setDataItem(item)
                                        }}
                                    >
                                        <i class="fas fa-pen" style={{color:'#0079EC'}}></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='botonesOrden'>
                <div className={BtnAcitve ? 'notDisabled': 'Disabled'}>
                    <button id='mostrarRe'onClick={mostrarDoc}  disabled={BtnAcitve?false:true}>MOSTRAR ORDEN</button>
                </div>
                <div className={BtnAcitve ? 'notDisabled': 'Disabled'}>
                    <button id='descargarRe'onClick={guardarDoc} disabled={BtnAcitve?false:true}>DESCARGAR ORDEN</button>
                </div>
                <div className={BtnAcitve ? 'notDisabled': 'Disabled'}>
                    <button id='imprimirRe'onClick={imprimirDoc}  disabled={BtnAcitve?false:true}>IMPRIMIR ORDEN</button>
                </div>
            </div>
        </div>
    )
}

export default FormOrden