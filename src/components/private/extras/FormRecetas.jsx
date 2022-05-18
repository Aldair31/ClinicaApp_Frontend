import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import url from '../../../keys/backend_keys';
import '../../../sass/Recetas.sass'
import moment from 'moment';
import fondoReceta from '../../../img/FondoReceta.jpg'

import { jsPDF } from "jspdf"
import 'jspdf-autotable'

import {Table} from "reactstrap";

const FormRecetas = () => {
    //ESTADO PARA SABER SI HAY MEDICAMENTOS EN UNA RECETA Y HABILITAR BOTONES PARA ACCIONES DE DOCUMENTO (MOSTRAR, DESCARGAR E IMPRIMIR)
    const [BtnAcitve, setBtnActive] = useState(false)

    //PARA OBTENER DATOS DE MEDICAMENTOS (CANTIDAD, MEDICAMENTOS, INDICACIONES) EN RECETA
    const [Re, setRe] = useState([])
	let { id } = useParams();
    useEffect(() => {
        fetch(`${url}/Receta/idHistClinica/receta/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setRe(data)
            if(data.length>0){
                setBtnActive(true)
            }
        })
    }, [])

    //PARA REGISTRAR DATOS DE RECETA
    const [MedicamentoReceta, setMedicamentoReceta] = useState([]);
    const handleChangeMed = (e) => {
        setMedicamentoReceta({
            ...MedicamentoReceta,
            [e.target.name]: e.target.value,
        });
    };
    
    //ESTADO PARA SABER SI SE VA A ACTUALIZAR Y CAMBIAR EL NOMBRE DEL BOTÓN
    const [isActive, setActive] = useState(false); 
    
    //PETICIÓN POST/UPDATE PARA REGISTRAR MEDICAMENTO
    const AgregarMedicamento = (dato) => {
        if((MedicamentoReceta.cantidad!=undefined && MedicamentoReceta.cantidad!='') && (MedicamentoReceta.nombreMedicina!=undefined && MedicamentoReceta.nombreMedicina!='') && (MedicamentoReceta.indicaciones!=undefined && MedicamentoReceta.indicaciones!='')){
            if(isActive){
                fetch(`${url}/MedicamentoReceta/${dato._id}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',
                    body: JSON.stringify({
                        ...MedicamentoReceta,
                        cantidad: MedicamentoReceta.cantidad,
                        nombreMedicina: MedicamentoReceta.nombreMedicina,
                        indicaciones: MedicamentoReceta.indicaciones,
                    })
                })
                .then((resp) => resp.json())
                .then((data) => {
                    if(data.ok){
                        alert('Medicamento actualizado')
                        setMedicamentoReceta({
                            cantidad: '',
                            nombreMedicina: '',
                            indicaciones: ''
                        })
                        setRe([
                            Re.map((datos) => {
                                if(datos._id == dato._id){
                                    datos.cantidad = MedicamentoReceta.cantidad
                                    datos.nombreMedicina = MedicamentoReceta.nombreMedicina
                                    datos.indicaciones = MedicamentoReceta.indicaciones
                                }
                            })
                        ])
                        setRe([
                            ...Re
                        ])
                        setActive(!isActive)
                    }
                })
            } else {
                fetch(`${url}/MedicamentoReceta/new`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        ...MedicamentoReceta,
                        id_Receta: id
                    }),
                })
                .then((resp) => resp.json())
                .then((datos) => {
                    if(datos.ok){
                        alert('Medicamento agregado')
                        setMedicamentoReceta({cantidad: '',
                        nombreMedicina: '',
                        indicaciones:''})
                        setRe([
                            ...Re,
                            {
                                _id: datos.medicamentoReceta._id,
                                cantidad: MedicamentoReceta.cantidad,
                                nombreMedicina: MedicamentoReceta.nombreMedicina,
                                indicaciones: MedicamentoReceta.indicaciones,
                            },
                        ])
                        setBtnActive(true)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        } else {
            alert('Por favor, asegurese de completar todos los campos')
        }
    }

    //ESTADO PARA SABER SI ESTÁ REGISTRANDO O ACTUALIZANDO LA FECHA DE PRÓXIMA CITA
    const [Fecha, setFecha] = useState(false)

    //OBTENIENDO DATOS DE RECETA
    const [Receta, setReceta] = useState({})
    useEffect(() => {
        fetch(`${url}/Receta/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setReceta(data)
            if(data.fechaProx){
                setFecha(true)
            }
        })
    }, [])

    const handleChangeRe = (e) => {
        setReceta({
            ...Receta,
            [e.target.name]: e.target.value
        })
    }

    //ACTUALIZANDO FECHA DE PRÓXIMA CITA EN RECETA
    const handleClick = (e) => {
        e.preventDefault()
        fetch(`${url}/Receta/${Receta._id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify({
                ...Receta,
                fechaProx: moment(Receta.fechaProx).format(),
            }),
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.ok) {
                    alert('Fecha actualizada');
                }
                if(!Fecha){
                    setFecha(true)
                }
            });
    }

    //OBTENIENDO DATOS DE HISTORIA E HISTORIA CLÍNICA
    const [Hc, setHc] = useState({})
    useEffect(() => {
        fetch(`${url}/Receta/datos/${id}`)
            .then((respHc) => respHc.json())
            .then((dataHc)=>{
                setHc(dataHc)
            })
    }, [])
    

    //GENERANDO DOCUMENTO PDF
    const DocReceta = () => {
        var doc = new jsPDF('p', 'mm', [242, 208])

        doc.addImage(fondoReceta, 'JPG', 0, 0)

        var fechaHist = new Image()
        fechaHist.src = 'https://i.ibb.co/M1j5RKq/fechapgn.png'

        //PARA FECHAS EN EL FOOTER
        doc.addImage(fechaHist, 'JPG', 2, 228)
        doc.addImage(fechaHist, 'JPG', 106, 228)

        //PARA FECHA DE HISTORIA
        //DÍA
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(6, 229.5, 'DÍA');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(6.5, 234.5, moment(Hc.histClinica.fecha).format('DD'));
        //MES
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(14.4, 229.5, 'MES');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(16, 234.5, moment(Hc.histClinica.fecha).format('MM'));
        //AÑO
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(23.5, 229.5, 'AÑO');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(23.3, 234.5, moment(Hc.histClinica.fecha).format('YYYY'));

        //PARA PRÓXIMA FECHA
        doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(109.5, 226, 'PRÓXIMA CITA');
        //DÍA
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(110, 229.5, 'DÍA');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(110.5, 234.5, Receta.fechaProx!=undefined?moment(Receta.fechaProx).format('DD'):'');
        //MES
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(118.4, 229.5, 'MES');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(120, 234.5, Receta.fechaProx!=undefined?moment(Receta.fechaProx).format('MM'):'');
        //AÑO
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(127.5, 229.5, 'AÑO');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(127.3, 234.5, Receta.fechaProx!=undefined?moment(Receta.fechaProx).format('YYYY'):'');

        //OBTENIENDO DATOS DE ENCABEZADO RECETA (EDAD, PESO, TALLA, PC)
        let datos = [
            [((moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).years() + 'a ' + (moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).months() + 'm ' + (moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).days() + 'd'), Hc.histClinica.peso!=undefined?Hc.histClinica.peso + ' kg':'', Hc.histClinica.talla!=undefined?Hc.histClinica.talla + ' cm':'', Hc.histClinica.pc!=undefined?Hc.histClinica.pc + ' cm':'']
        ]
        
        //TABLA DATOS PACIENTE
        doc.autoTable({
            body: datos,
            theme: 'plain',
            styles:{fontSize: 10, halign:'center', lineColor:[6, 137, 229]},
            startY: 39.3,
            margin:{left: 106},
            columnStyles:{
                0: {cellWidth:29},
                1: {cellWidth:20},
                2: {cellWidth:27},
                3: {cellWidth:21}
            }
        })
    
        //OBTENIENDO NOMBRE DE PACIENTE
        let paciente = [
            [(Hc.historia.nombres_paciente).toUpperCase()]
        ]
        
        //TABLA NOMBRE PACIENTE
        doc.autoTable({
            body: paciente,
            theme: 'plain',
            styles:{font: 'courier', fontSize: 12, fontStyle: 'bold'},
            startY: 51,
            margin:{left: 8},
            columnStyles:{
                0: {cellWidth:100}
            }
        })
        
        //LÍNEAS MITAD
        doc.setLineWidth(0.5).setLineDash([1, 1], 0).setDrawColor('black').line(104, 0, 104, 840);

        //OBTENIENDO CANTIDAD, MEDICAMENTO E INDICACIONES
        let datosMedic = []
        for (let i = 0; i < Re.length; i++) {
            datosMedic.push([(i+1) + '. ' + (Re[i].nombreMedicina).toUpperCase() + ' (' + (Re[i].cantidad).toUpperCase() + ')', (i+1) + '. ' + (Re[i].nombreMedicina).toUpperCase() + ': \n' + (Re[i].indicaciones.replace(/;/g, ' \n\n')).toUpperCase()])
        }

        //TABLA MEDICAMENTOS
        doc.autoTable({
            body: datosMedic,
            theme:'plain',
            styles:{fontSize: 12, lineColor:[200, 83, 100], textColor:[0,0,0], halign: 'left', font: 'courier', cellPadding:2}, //, fillColor: [166, 193, 200]
            startY:65,
            rowPageBreak: 'avoid',
            margin:{left:2, bottom: 40},
            columnStyles: {
                0: {cellWidth:107.5},
                1: {cellWidth:100},
            }
        })

        return doc
    }

    const mostrarDoc = () => {
        var doc = new jsPDF('p', 'mm', [242, 208])
        doc = DocReceta()
        doc.output('dataurlnewwindow', 'Receta.pdf')
    }
    
    const guardarDoc = () => {
        var doc = new jsPDF('p', 'mm', [242, 208])
        doc = DocReceta()
        doc.save('Receta.pdf')
    }

    const imprimirDoc = () => {
        var doc = new jsPDF('p', 'mm', [242, 208])
        doc = DocReceta()
        doc.autoPrint()
        doc.output('dataurlnewwindow', 'Receta.pdf')
    }

    //PARA PODER PASAR EL ITEM DEL MAP DE DATOS Y EDITAR
    const [dataItem, setDataItem] = useState({})

    return (
        <div className='contenedorReceta'>
            <div className='titulo-re'>
                <h3>AGREGAR RECETA MÉDICA</h3>
            </div>
            <div className='contenedor-re'>
                    <div className='fila1-re'>
                        <div className='cantidad-re'>
                            <label>CANTIDAD</label>
                            <input placeholder="CANTIDAD" type="text" name="cantidad" id='cantidad' value={MedicamentoReceta.cantidad} onChange={handleChangeMed}/>
                        </div>
                        <div className='medicamento-re'>
                            <label>MEDICAMENTO</label>
                            <input placeholder="MEDICAMENTO" type="text" name="nombreMedicina" id='medicamento' value={MedicamentoReceta.nombreMedicina} onChange={handleChangeMed}/>
                        </div>
                    </div>
                    <div className='fila2-re'>
                        <label>INDICACIONES</label>
                        <input
                            type="text" 
                            placeholder="INDICACIONES"
                            rows="3"
                            cols="50"
                            name="indicaciones"
                            id='indicaciones'
                            value={MedicamentoReceta.indicaciones}
                            onChange={handleChangeMed}
                        />
                    </div>
                    <button onClick={() => AgregarMedicamento(dataItem)}>{isActive ? 'ACTUALIZAR MEDICAMENTO' : 'AGREGAR'}</button>
            </div>
            <div className={isActive ? 'buttonEnabled': 'buttonDisabled'}>
                <button 
                    disabled={isActive?false:true} 
                    onClick={() => {
                        setActive(!isActive)
                        setMedicamentoReceta({
                            cantidad: '',
                            nombreMedicina: '',
                            indicaciones: ''
                        })
                    }}>
                    <i className="fas fa-times"></i>
                </button>
            </div>
            <div className='titulo-re'>
                <h3>TABLA DE MEDICAMENTOS</h3>
                <div className='proxCita'>
                    <label><b>PRÓXIMA CITA: </b></label>
                    <input 
                        type="date" 
                        name='fechaProx' 
                        onChange={handleChangeRe} 
                        value={Receta.fechaProx!=undefined?moment(Receta.fechaProx).format('YYYY-MM-DD'):''}
                        disabled={Receta.length!=0?false:true}
                    ></input>
                </div>
            </div>
            <div className='contenedor_tabla'>   
                <Table className='tabla'>
                    <thead>
                        <tr>
                            <th>CANTIDAD</th>
                            <th>MEDICAMENTO</th>
                            <th>INDICACIÓN</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Re.map((item) => (
                            <tr className='tablaReceta'>
                                <td style={{textTransform: 'uppercase'}}>{item.cantidad}</td>
                                <td style={{textTransform: 'uppercase'}}>{item.nombreMedicina}</td>
                                <td style={{textTransform: 'uppercase'}}>{item.indicaciones}</td>
                                <td style={{textAlign: 'center'}}>
                                    <button 
                                        style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            if(Re.length - 1 == 0){
                                                setBtnActive(false)
                                            }
                                            var rpta = window.confirm("¿Desea eliminar este medicamento?")
                                            if(rpta){
                                                fetch(`${url}/MedicamentoReceta/${item._id}`, {
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                    method: 'DELETE'
                                                })
                                                    .then((resp) => resp.json())
                                                    .then((datos) => {
                                                        if(datos.ok){
                                                            alert('Medicamento eliminado')
                                                            setRe(Re.filter((data)=> data._id !== item._id))
                                                        }
                                                    })
                                                    .catch((err) => {
                                                        console.log(err);
                                                    });
                                            }
                                        }}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                                <td>
                                    <button 
                                        style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setMedicamentoReceta({
                                                cantidad: item.cantidad,
                                                nombreMedicina: item.nombreMedicina,
                                                indicaciones: item.indicaciones
                                            })
                                            if(!isActive){
                                                setActive(!isActive)
                                            }
                                            setDataItem(item)
                                        }}
                                        >
                                        <i class="fas fa-pen"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            
            <div className='botonesReceta'>
                <div className={Re.length!=0?'notDisabled':'Disabled'}>
                    <button
                        onClick={handleClick}
                        disabled={Re.length!=0?false:true}
                    >
                        {Fecha ? 'ACTUALIZAR FECHA' : 'GRABAR FECHA'}
                    </button>
                </div>
                <div className={BtnAcitve && Fecha ? 'notDisabled': 'Disabled'}>
                    <button id='mostrarRe' onClick={mostrarDoc} disabled={BtnAcitve && Fecha?false:true}>MOSTRAR RECETA</button>
                </div>
                <div className={BtnAcitve && Fecha ? 'notDisabled': 'Disabled'}>
                    <button id='descargarRe' onClick={guardarDoc} disabled={BtnAcitve && Fecha?false:true}>DESCARGAR RECETA</button>
                </div>
                <div className={BtnAcitve && Fecha ? 'notDisabled': 'Disabled'}>
                    <button id='imprimirRe' onClick={imprimirDoc} disabled={BtnAcitve && Fecha?false:true}>IMPRIMIR RECETA</button>
                </div>
            </div>
        </div>
    )
}

export default FormRecetas