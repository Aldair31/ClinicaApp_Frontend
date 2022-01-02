import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
import '../../../sass/Recetas.sass'
import moment from 'moment';
import fondoReceta from '../../../img/FondoReceta.jpg'

import { jsPDF } from "jspdf"
import 'jspdf-autotable'
// import DocReceta from '../DocReceta'

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
import useReceta from '../../../hooks/useReceta';

const FormRecetas = () => {
    //PARA OBTENER DATOS DE RECETA
    const [state, setState]= useState(false)
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
    console.log("DATOS RE: ", Re)

    //PARA OBTENER DATOS DE HISTORIA CLÍNICA
    const [Hc, setHc] = useState({})
    useEffect(() => {
        fetch(`${url}/Receta/datosRe/${id}`)
            .then((respHc) => respHc.json())
            .then((dataHc)=>{
                setHc(dataHc)
            })
    }, [])

    const handleChangeHc = (e)=>{
		setHc({
			...Hc,
			[e.target.name]: e.target.value
		})
	}

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
    // console.log("DATOS RE: ", a)
    let datosHist = []
    let datosHistClinica = []
    for(let item in Hc){
        console.log("ITEM: ", item)
        if(item=='histClinica'){
            datosHistClinica = Hc[item]
        }
        if(item=='historia'){
            datosHist = Hc[item]
        }
    }
    
    const [ReTotal, setReTotal] = useState({})
    useEffect(() => {
        fetch(`${url}/RecetaTotal/idHistClinica/${id}`)
            .then((respHc) => respHc.json())
            .then((dataHc)=>{
                setReTotal(dataHc)
            })
    }, [])

    const GrabarReceta = () => {
        
    }

    // console.log("FECHA: ", Hc.keys())
    const DocReceta = () => {
        var doc = new jsPDF('p', 'mm', [242, 208])
        // doc.addFont(postScriptName, fontName, fontStyle, 'Kunstler Script');
        // doc.addFont = function(postScriptName, fontName, fontStyle) {
        //     doc.addFont(postScriptName, fontName, fontStyle, 'Kunstler Script');
        // };

        // var fondo = new Image()
        // fondo.src = fondoReceta
        doc.addImage(fondoReceta, 'JPG', 0, 0)

        // var header = new Image()
        // header.src = 'https://i.ibb.co/QpsRdPN/Just-Header.png'
        // doc.addImage(header, 'JPG', -0.1, 0)

        var fechaHist = new Image()
        fechaHist.src = 'https://i.ibb.co/M1j5RKq/fechapgn.png'
        doc.addImage(fechaHist, 'JPG', 2, 228)

        //PARA FECHA DE HISTORIA
        // doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(9.5, 226, 'F E C H A');
        //DÍA
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(6.7, 229.5, 'DÍA');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(6.5, 234.5, moment(datosHistClinica.fecha).format('DD'));
        //MES
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(14.7, 229.5, 'MES');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(16, 234.5, moment(datosHistClinica.fecha).format('MM'));
        //AÑO
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('black').text(23.7, 229.5, 'AÑO');
        doc.setFont(undefined, 'bold').setFontSize(8).setTextColor('white').text(23.3, 234.5, moment(datosHistClinica.fecha).format('YYYY'));

        //PARA DATOS DE PACIENTE (EDAD, PESO, TALLA Y PC)
        // doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(112, 44, ((moment.duration(moment(datosHistClinica.fecha).diff(moment(datosHist.fecha_nac)))).years() + 'a ' + (moment.duration(moment(datosHistClinica.fecha).diff(moment(datosHist.fecha_nac)))).months() + 'm ' + (moment.duration(moment(datosHistClinica.fecha).diff(moment(datosHist.fecha_nac)))).days() + 'd'));
        // doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(139, 44, datosHistClinica.peso + ' kg');
        // doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(163.5, 44, datosHistClinica.talla + ' cm');
        // doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(186, 44, datosHistClinica.pc + ' cm');

        let datos = [
            [((moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).years() + 'a ' + (moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).months() + 'm ' + (moment.duration(moment(Hc.histClinica.fecha).diff(moment(Hc.historia.fecha_nac)))).days() + 'd'), Hc.histClinica.peso!=undefined?Hc.histClinica.peso + ' kg':'', Hc.histClinica.talla!=undefined?Hc.histClinica.talla + ' cm':'', Hc.histClinica.pc!=undefined?Hc.histClinica.pc + ' cm':'']
        ]
        console.log(datos)
    
        let paciente = [
            [Hc.historia.nombres_paciente]
        ]
    
        let fecha = [
            ['01', '20', '2022']
        ]

        //TABLA DATOS PACIENTE
        doc.autoTable({
            // head: [['Edad', 'Peso', 'Talla', 'PC']],
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
        
        //TABLA FECHA
        // doc.autoTable({
        //     head: [['PRÓXIMA CITA']],
        //     body:[''],
        //     theme: 'striped',
        //     styles:{fontSize: 9, halign:'center', lineColor:[6, 137, 229]},
        //     startY: 202.5,
        //     margin:{left: 110},
        //     columnStyles:{
        //         0: {cellWidth:28},
        //     }
        // })

        // doc.autoTable({
        //     //head: [['PROX', 'IMA ', 'CITA']],
        //     body: fecha,
        //     theme: 'striped',
        //     styles:{fontSize: 10, halign:'center', lineColor:[6, 137, 229]},
        //     startY: 210,
        //     margin:{left: 110},
        //     columnStyles:{
        //         0: {cellWidth:8},
        //         1: {cellWidth:8},
        //         2: {cellWidth:12}
        //     }
        // })


        // //PIE
        // doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(46, 229, 'Dr. Juan C. Benites Herrera');
        // doc.setFont(undefined, 'normal').setFontSize(8).text(57, 232, 'MEDICO PEDIATRA');
        // doc.setFont(undefined, 'normal').setFontSize(8).text(52, 235, 'C.M.P. 30305 - R.N.E. 19230');
        // //LÍNEA PIE FIRMA
        // doc.setLineWidth(0.3).setDrawColor('black').line(42, 225, 96, 225);

        // //LÍNEA RP
        // doc.setLineWidth(0.3).line(10, 57, 100, 57)
        // doc.setFont('Kunstler Script', 'bold').setFontSize(10).text(10, 62, 'Rp. ')

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
        //rowPageBreak: 'avoid',
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
                        {/* <textarea 
                            placeholder="INDICACIONES"
                            rows="3"
                            cols="50"
                            name="indicaciones"
                            id='indicaciones'
                            value={Recetas.indicaciones}
                            onChange={handleChangeRe}
                        /> */}
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
                    <button
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
                                        console.log("NUEVOS DATOS: ", datos)
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
                {/* <div className='proxCita'>
                    <label><b>PRÓXIMA CITA: </b></label>
                    <input type='date' name='fechaProx' onChange={e => setReTotal(e.target.value)}></input>
                </div> */}
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
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
            
            <div className='botonesReceta'>
                <div>
                    <button
                        onClick={(e)=>{
                            e.preventDefault()
                            fetch(`${url}/RecetaTotal/new`, {
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                method: 'POST',
                                body: JSON.stringify({
                                    // ...Re,
                                    ...ReTotal,
                                    fechaProx: moment(ReTotal.fechaProx).format('DD/MM/YYYY'),
                                    id_HistClinica: id
                                }),
                            })
                                .then((resp) => resp.json())
                                .then((datos) => {
                                    if(datos.ok){
                                        alert('Receta grabada correctamente')
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                                
                        }}
                    >
                        GRABAR RECETA
                    </button>
                </div>
                <div>
                    <button onClick={mostrarDoc}>MOSTRAR RECETA</button>
                </div>
                <div>
                    <button onClick={guardarDoc}>DESCARGAR RECETA</button>
                </div>
                <div>
                    <button onClick={imprimirDoc}>IMPRIMIR RECETA</button>
                </div>
            </div>
        </div>
    )
}

export default FormRecetas