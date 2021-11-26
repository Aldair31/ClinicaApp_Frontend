import React from 'react';
import Calendar from 'react-calendar'
import { useState } from 'react';
import '../../sass/Calendario.sass';
import '../../sass/Dashboard.sass';
import useCita from '../../hooks/useCita';
import url from '../../keys/backend_keys';
import moment from 'moment';
// import 'react-calendar/dist/Calendar.css'
// import MostrarCita from './MostrarCita';

const InicioSecretaria =  () => {
    const [state, setState] = useState(false);

    const [value, onChange] = useState(new Date());

    // const mostrar = () =>{
    //     onChange({
    //         showDate: true
    //     })
    // }
    console.log(value)
    let [datos_af, loading, set_datos_af] = useCita();
	const switchMotivo = (valor) => {
		switch (valor) {
			case 1:
				return 'Vacuna';
			case 2:
				return 'Consulta pediátrica';
			default:
				return 'Control de crecimiento';
		}
	};
	const onDelete = (id) => {
		fetch(`${url}/Cita/${id}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'DELETE',
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				alert(data.msg);
			})
			.then(() => {
				set_datos_af(datos_af.filter((item) => item._id !== id));
			});
	};

 return (
     <>
        <div >
            <div className='list'>
                <h2 style={{textAlign:'center'}}>CALENDARIO DE CITAS</h2>
            </div>
            <div className='calendar'>
                <Calendar
                onChange={onChange}
                value={value}
                // tileClassName="content"
                tileClassName={({ fecha, view }) => {
                    if(datos_af.find(x=>x===moment(fecha).format("DD-MM-YYYY"))){
                     return  'content'
                    }
                }}
              
                />
            </div>
             <div >
                {state ? (
                <>
                {/* <div>
                    <MostrarCita/>
                    {value.toString()}
                    {value}
                   { mostrar()}
                </div> */}
                <div style={{
						background: '#00000039',
						position: 'absolute',
						top: '0',
						left: '0',
						height: '100vh',
						width: '100%',
	
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
                }}>
                    <div style={{
                        background: '#ffffff',
                        padding: '8px',
                        width:'40%',
                        borderRadius: '6px',
                    }}>
                    <h3 style={{textAlign:'center', fontSize:'20px', marginTop:'10px'}}>CITAS DEL {value.toLocaleDateString()}</h3>
                    {/* {value.toLocaleDateString()} */}
                    {loading !== null ? (
                        <div className="dato_filiacion" style={{marginLeft:'25px', marginBottom:'20px',overflowY: 'scroll', height:'72vh'}}>
                            {datos_af.map((item) => (
                                <div className="dato_filiacion"  key={item._id}>
                                    {console.log(moment(item.fecha).format('DD/MM/YYYY'))}
                                    {moment(item.fecha).format('DD/MM/YYYY') === value.toLocaleDateString() ? (
                                        <div style={{marginLeft:'10%', marginBottom:'20px', backgroundColor:'#f4f4f4', padding:'20px', marginRight:'10%'}}>
                                            <p>
                                                <strong>-Hora de la cita: </strong>
                                                {
                                                    moment(item.fecha).format('LT')
                                                }
                                            </p>
                                            <p>
                                                <strong>-DNI del paciente: </strong>
                                                {item.DNI}
                                            </p>
                                            <p>
                                                <strong>
                                                    -Nombres del paciente:{' '}
                                                </strong>
                                                {item.nombre_paciente}
                                            </p>
                                            <p>
                                                <strong>-Fecha de nacimiento: </strong>
                                                {
                                                    moment(item.fecha_nac).format('DD/MM/YYYY')
                                                }
                                            </p>
                                            {/* <p>
                                                <strong>-Fecha de la cita: </strong>
                                                {
                                                    moment(item.fecha).format('DD/MM/YYYY')
                                                }
                                            </p> */}
                                            
                                            
                                            
                                            <p>
                                                <strong>-Responsable: </strong>
                                                {item.responsable}
                                            </p>
                                            <p>
                                                <strong>-Telefono: </strong>
                                                {item.telefono}
                                            </p>
                                            <p>
                                                <strong>-Motivo: </strong>
                                                <span>
                                                    {switchMotivo(item.motivo)}
                                                </span>
                                            </p>
                                            <p>
                                                <strong>-Sexo: </strong>
                                                <span>
                                                    {item.sexo === 1
                                                        ? 'Hombre'
                                                        : 'Mujer'}
                                                </span>
                                            </p>
                                            <p>
                                                <strong>-Condición: </strong>
                                                <span>
                                                    {item.condicion === 1
                                                        ? 'Nuevo'
                                                        : 'Continuador'}
                                                </span>
                                            </p>
                                            <p>
                                            &nbsp;&nbsp;
                                            <strong
                                                onClick={() => {
                                                    onDelete(item._id);
                                                }}
                                                style={{
                                                    cursor: 'pointer',
                                                    color: 'crimson',
                                                }}
                                            >
                                                Eliminar
                                            </strong>
                                            </p>
                                        </div>
                                    ) : null}
                                    
                                </div>
                            ))}
                        </div>
				    ) : null}
                    </div>
                    
                </div>
                <div>
                    <button
                    onClick={() => {
                        setState(false);
                       
                    }}
                    style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        border: 'none',
                        padding: '18px',
                        cursor: 'pointer',
                    }}
                    >
                         
                        <i
                            class="fas fa-times"
                            style={{ fontSize: '19px' }}
                        ></i>
                    </button>
                </div>
                </>): null}   
            </div>
            <br />
            <div>
                <button
                    onClick={() => {
                        setState(true);
                    }}
                    style={{
                        padding: '9px',
                        color: 'white',
                        border: 'none',
                        background: '#3ec4ab',
                        marginBottom: '11px',
                        borderRadius: '11px',
                        cursor: 'pointer',
                        marginLeft:'400px'
                    }}
                >
                    Mostrar Cita
                    
                </button>
            </div>
        </div>
     </>
 )
    
}

export default InicioSecretaria;