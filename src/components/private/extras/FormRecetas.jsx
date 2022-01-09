import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import url from '../../../keys/backend_keys';
import '../../../sass/Recetas.sass'
import moment from 'moment';
import fondoReceta from '../../../img/FondoReceta.jpg'

import { jsPDF } from "jspdf"
import 'jspdf-autotable'

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

const FormRecetas = () => {
    //PARA OBTENER DATOS DE RECETA
    const [Re, setRe] = useState({})
	let { id } = useParams();
	useEffect(() => {
		fetch(`${url}/Receta/idHistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data)=>{
				setRe(data)
			})
	}, []);

    const [Hc, setHc] = useState({})
    useEffect(() => {
        fetch(`${url}/Receta/datosRe/${id}`)
            .then((respHc) => respHc.json())
            .then((dataHc)=>{
                setHc(dataHc)
            })
    }, [])

    //PARA REGISTRAR DATOS DE RECETA
    const [Recetas, setRecetas] = useState([]);
	const handleChangeRe = (e) => {
        setRecetas({
            ...Recetas,
            [e.target.name]: e.target.value,
        });
    };

    //PARA MOSTRAR DATOS
    let Datos = []
    let cont=0
    for(let item in Re){
        cont++
        Datos.push(Re[item])
    }
    //PARA DOC RECETA
    let a = []
    for (let i=0; i<cont; i++){
        a.push([(i+1) + '. ' + (Datos[i].nombreMedicina).toUpperCase() + ' (' + (Datos[i].cantidad).toUpperCase() + ')', (i+1) + '. ' + (Datos[i].nombreMedicina).toUpperCase() + ': ' + (Datos[i].indicaciones).toUpperCase()])
    }
    
    let datosHist = [];
    let datosHistClinica = []
    for(let item in Hc){
        if(item=='histClinica'){
            datosHistClinica = Hc[item]
        }
        if(item=='historia'){
            datosHist = Hc[item]
        }
    }

    //PARA OBTENER DATOS DE RECETA TOTAL
    const [tiene, setTiene] = useState(false) // --> Para saber si tiene o no fecha
    const [isActive, setActive] = useState(false); // --> Para saber si se presionó o no el botón y poder activar los de Receta

    const [ReTotal, setReTotal] = useState({})
    const handleChangeReTotal = (e) => {
		setReTotal({
			...ReTotal,
			[e.target.name]: e.target.value
		})
	}

    useEffect(() => {
        fetch(`${url}/RecetaTotal/idHistClinica/${id}`)
            .then((resp) => resp.json())
            .then((data)=>{
                if (data.length > 0) {
					setReTotal(data[0]);
					setTiene(!tiene);
                    setActive(!isActive)
				}
            })
    }, [])

    //GRABANDO DATOS DE RECETA TOTAL
    const handleClick = (e) => {
        e.preventDefault()
        if (tiene) {
			fetch(`${url}/RecetaTotal/${ReTotal._id}`, {
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'PUT',
				// body: JSON.stringify(ReTotal),
                body: JSON.stringify({
					...ReTotal,
                    fechaProx: moment(ReTotal.fechaProx).format(),
				}),
			})
				.then((resp) => resp.json())
				.then((data) => {
					if (data.ok) {
						alert('Datos actualizados');
					}
				});
		} else {
			if(ReTotal.fechaProx!=undefined){
                fetch(`${url}/RecetaTotal/new`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({
                        ...ReTotal,
                        fechaProx: moment(ReTotal.fechaProx).format(),
                        id_HistClinica: id
                    }),
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        if (data.ok) {
                            setTiene(!tiene)
                            setActive(!isActive)
                            setReTotal({
                                ...ReTotal,
                                _id: data.recetaT._id,
                                fechaProx: moment(ReTotal.fechaProx).format(),
                                id_HistClinica: id
                            })
                            alert('Datos registrados');
                        }
                    });
            } else {
                alert("Debe ingresar la fecha de próxima cita")
            }
		}
    }

    const DocReceta = () => {
        var doc = new jsPDF('p', 'mm', [242, 208])

        doc.addImage(fondoReceta, 'JPG', 0, 0)

        var fechaHist = new Image()
        fechaHist.src = 'https://i.ibb.co/M1j5RKq/fechapgn.png'
        doc.addImage(fechaHist, 'JPG', 2, 228)
        doc.addImage(fechaHist, 'JPG', 106, 228)

        //PARA FECHA DE HISTORIA
        //DÍA
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(6, 229.5, 'DÍA');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(6.5, 234.5, moment(datosHistClinica.fecha).format('DD'));
        //MES
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(14.4, 229.5, 'MES');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(16, 234.5, moment(datosHistClinica.fecha).format('MM'));
        //AÑO
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(23.5, 229.5, 'AÑO');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(23.3, 234.5, moment(datosHistClinica.fecha).format('YYYY'));

        //PARA PRÓXIMA FECHA
        doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(109.5, 226, 'PRÓXIMA CITA');
        //DÍA
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(110, 229.5, 'DÍA');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(110.5, 234.5, ReTotal.fechaProx!=undefined?moment(ReTotal.fechaProx).format('DD'):'');
        //MES
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(118.4, 229.5, 'MES');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(120, 234.5, ReTotal.fechaProx!=undefined?moment(ReTotal.fechaProx).format('MM'):'');
        //AÑO
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(127.5, 229.5, 'AÑO');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(127.3, 234.5, ReTotal.fechaProx!=undefined?moment(ReTotal.fechaProx).format('YYYY'):'');

        let datos = [
            [((moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).years() + 'a ' + (moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).months() + 'm ' + (moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).days() + 'd'), Hc.histClinica.peso!=undefined?Hc.histClinica.peso + ' kg':'', Hc.histClinica.talla!=undefined?Hc.histClinica.talla + ' cm':'', Hc.histClinica.pc!=undefined?Hc.histClinica.pc + ' cm':'']
        ]
    
        let paciente = [
            [Hc.historia.nombres_paciente]
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

        //TABLA NOMBRE PACIENTE
        doc.autoTable({
            body: paciente,
            theme: 'plain',
            styles:{fontSize: 12, lineColor:[6, 137, 229]},
            startY: 50,
            margin:{left: 10},
            columnStyles:{
                0: {cellWidth:100}
            }
        })
        
        //LÍNEAS MITAD
        doc.setLineWidth(0.5).setLineDash([1, 1], 0).setDrawColor('black').line(104, 0, 104, 840);

        //TABLA MEDICAMENTOS
        doc.autoTable({
            body: a,
            theme:'plain',
            styles:{fontSize: 12, lineColor:[200, 83, 100], textColor:[0,0,0], halign: 'left', font: 'courier', cellPadding:2}, //, fillColor: [166, 193, 200]
            startY:65,
            margin:{left:2},
            columnStyles: {
                0: {cellWidth:107.5},
                1: {cellWidth:100},
            }
        })

        return doc
    }

    const mostrarDoc = () => {
        var doc = new jsPDF('p', 'mm', [232, 208])
        doc = DocReceta()
        doc.output('dataurlnewwindow', 'Receta.pdf')
    }
    
    const guardarDoc = () => {
        var doc = new jsPDF('p', 'mm', [232, 208])
        doc = DocReceta()
        doc.save('Receta.pdf')
    }

    const imprimirDoc = () => {
        var doc = new jsPDF('p', 'mm', [232, 208])
        doc = DocReceta()
        doc.autoPrint()
        doc.output('dataurlnewwindow', 'Receta.pdf')
    }
    
    return (
        <div className='contenedorReceta'>
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
                        <input
                            type="text" 
                            placeholder="INDICACIONES"
                            rows="3"
                            cols="50"
                            name="indicaciones"
                            id='indicaciones'
                            value={Recetas.indicaciones}
                            onChange={handleChangeRe}
                        />
                    </div>
                    {console.log("AEA: ", Recetas.cantidad)}
                    <button
                        onClick={(e)=>{
                            e.preventDefault()
                            console.log(Recetas.cantidad)
                            if((Recetas.cantidad!=undefined && Recetas.cantidad!='') && (Recetas.nombreMedicina!=undefined && Recetas.nombreMedicina!='') && (Recetas.indicaciones!=undefined && Recetas.indicaciones!='')){
                                fetch(`${url}/Receta/new`, {
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    method: 'POST',
                                    body: JSON.stringify({
                                        ...Recetas,
                                        id_HistClinica: id
                                    }),
                                })
                                    .then((resp) => resp.json())
                                    .then((datos) => {
                                        if(datos.ok){
                                            alert('Medicamento agregado')
                                            setRecetas({cantidad: '',
                                                nombreMedicina: '',
                                                indicaciones:''})
                                            setRe([
                                                ...Re,
                                                {
                                                    _id: datos.receta._id,
                                                    cantidad: Recetas.cantidad,
                                                    nombreMedicina: Recetas.nombreMedicina,
                                                    indicaciones: Recetas.indicaciones,
                                                },
                                            ]);
                                        }
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            } else {
                                alert('Por favor, asegurese de completar todos los campos')
                            }
                                
                        }}
                    >
                        AGREGAR
                    </button>
            </div>

            <div className='titulo-re'>
                <h3>TABLA DE MEDICAMENTOS</h3>
                <div className='proxCita'>
                    <label><b>PRÓXIMA CITA: </b></label>
                    <input 
                        type="date" 
                        name='fechaProx' 
                        onChange={handleChangeReTotal} 
                        value={ReTotal.fechaProx!=undefined?moment(ReTotal.fechaProx).format('YYYY-MM-DD'):''}
                        disabled={Re.length!=0?false:true}
                    ></input>
                </div>
            </div>
            <div>   
                <Table className='tabla'>
                    <thead>
                        <tr>
                            <th>CANTIDAD</th>
                            <th>MEDICAMENTO</th>
                            <th>INDICACIÓN</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Datos.map((item) => (
                            <tr className='tablaReceta'>
                                <td style={{textTransform: 'uppercase'}}>{item.cantidad}</td>
                                <td style={{textTransform: 'uppercase'}}>{item.nombreMedicina}</td>
                                <td style={{textTransform: 'uppercase'}}>{item.indicaciones}</td>
                                <td style={{textAlign: 'center'}}>
                                    <button 
                                        style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer'}}
                                        onClick={(e)=>{
                                            e.preventDefault()
                                            var rpta = window.confirm("¿Desea eliminar este medicamento?")
                                            if(rpta){
                                                fetch(`${url}/Receta/${item._id}`, {
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
                        {isActive ? 'ACTUALIZAR RECETA' : 'GRABAR RECETA'}
                    </button>
                </div>
                <div className={isActive ? 'notDisabled': 'Disabled'}>
                    <button id='mostrarRe' onClick={mostrarDoc} disabled={isActive?false:true}>MOSTRAR RECETA</button>
                </div>
                <div className={isActive ? 'notDisabled': 'Disabled'}>
                    <button id='descargarRe' onClick={guardarDoc} disabled={isActive?false:true}>DESCARGAR RECETA</button>
                </div>
                <div className={isActive ? 'notDisabled': 'Disabled'}>
                    <button id='imprimirRe' onClick={imprimirDoc} disabled={isActive?false:true}>IMPRIMIR RECETA</button>
                </div>
            </div>
        </div>
    )
}

export default FormRecetas