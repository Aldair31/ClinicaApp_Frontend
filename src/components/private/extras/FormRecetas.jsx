import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import url from '../../../keys/backend_keys';
import '../../../sass/Recetas.sass'

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

    const DocReceta = () => {
        var doc = new jsPDF('p', 'mm', [232, 208])

        var fondo = new Image()
        fondo.src = 'https://i.ibb.co/BTTGmhL/Aea-3.jpg'
        doc.addImage(fondo, 'JPG', 0, 0)

        let datos = [
            [Hc.historia.edad, Hc.histClinica.peso + ' kg', Hc.histClinica.talla + ' cm', Hc.histClinica.pc + ' cm']
        ]
        console.log(datos)
    
        let paciente = [
            [Hc.historia.nombres_paciente]
        ]
    
        let fecha = [
            ['01', '20', '2022']
        ]

        //TABLA MEDICAMENTOS
        doc.autoTable({
            body: a,
            theme:'plain',
            styles:{fontSize: 12, lineColor:[200, 83, 100], textColor:[0,0,0], halign: 'left', font: 'courier', cellPadding:1}, //, fillColor: [166, 193, 200]
            startY:90,
            margin:{left:2},
            columnStyles: {
                0: {cellWidth:107.5},
                1: {cellWidth:100},
            }
        })

        //TABLA DATOS PACIENTE
        doc.autoTable({
            head: [['Edad', 'Peso', 'Talla', 'PC']],
            body: datos,
            theme: 'striped',
            styles:{fontSize: 10, halign:'center', lineColor:[6, 137, 229]},
            startY: 50,
            margin:{left: 119.5},
            columnStyles:{
                0: {cellWidth:25},
                1: {cellWidth:20},
                2: {cellWidth:20},
                3: {cellWidth:20}
            }
        })

        //TABLA NOMBRE PACIENTE
        doc.autoTable({
            body: paciente,
            theme: 'plain',
            styles:{fontSize: 12, lineColor:[6, 137, 229]},
            startY: 73,
            margin:{left: 10},
            columnStyles:{
                0: {cellWidth:100}
            }
        })
        
        //TABLA FECHA
        doc.autoTable({
            head: [['PRÓXIMA CITA']],
            body:[''],
            theme: 'striped',
            styles:{fontSize: 9, halign:'center', lineColor:[6, 137, 229]},
            startY: 202.5,
            margin:{left: 110},
            columnStyles:{
                0: {cellWidth:28},
            }
        })

        doc.autoTable({
            //head: [['PROX', 'IMA ', 'CITA']],
            body: fecha,
            theme: 'striped',
            styles:{fontSize: 10, halign:'center', lineColor:[6, 137, 229]},
            startY: 210,
            margin:{left: 110},
            columnStyles:{
                0: {cellWidth:8},
                1: {cellWidth:8},
                2: {cellWidth:12}
            }
        })


        //PIE
        doc.setFont(undefined, 'bold').setFontSize(10).setTextColor('black').text(46, 210, 'Dr. Juan C. Benites Herrera');
        doc.setFont(undefined, 'normal').setFontSize(8).text(57, 215, 'MEDICO PEDIATRA');
        doc.setFont(undefined, 'normal').setFontSize(8).text(52, 220, 'C.M.P. 30305 - R.N.E. 19230');
        //LÍNEA PIE FIRMA
        doc.setLineWidth(0.3).setDrawColor('black').line(42, 205, 96, 205);

        //LÍNEA RP
        doc.setLineWidth(0.3).line(10, 80, 100, 80)
        doc.setFont('helvetica', 'bold').setFontSize(10).text(10, 85, 'Rp. ')

        //LÍNEAS MITAD
        doc.setLineWidth(0.5).setLineDash([1, 1], 0).setDrawColor('black').line(107, 0, 107, 840);

        // if(str=='imprimir'){
        //     doc.output('dataurlnewwindow', 'Receta.pdf')
        // }
        // if(str=='guardar'){
        //     doc.save("Receta.pdf")
        // }
        doc.output('dataurlnewwindow', 'Receta.pdf')
    }
    
    return (
        <div className='contenedorReceta'>
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
                                            // fetch(`${url}/Receta/${item._id}`, {
                                            //     headers: {
                                            //         'Content-Type': 'application/json',
                                            //     },
                                            //     method: 'DELETE'
                                            // })
                                            //     .then((resp) => resp.json())
                                            //     .then((datos) => {
                                            //         if(datos.ok){
                                            //             alert('Medicamento eliminado')
                                            //             setRe(Re.filter((data)=> data._id !== item._id))
                                            //         }
                                            //     })
                                            //     .catch((err) => {
                                            //         console.log(err);
                                            //     });
                                            // eliminar(item)
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
                        <button onClick={DocReceta}>MOSTRAR RECETA</button>
                    </div>
                    <div>
                        <button onClick={DocReceta}>DESCARGAR RECETA</button>
                    </div>
                    <div>
                        <button onClick={DocReceta}>IMPRIMIR RECETA</button>
                    </div>
                </div>

                
        </div>
    )
}

export default FormRecetas