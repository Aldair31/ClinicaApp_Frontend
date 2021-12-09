import React, { useState }from 'react';
import '../../sass/Calendario.sass';
import url from '../../keys/backend_keys';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';// a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
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
    const handleDateClick = (arg) => { // bind with an arrow function
        // alert(arg.dateStr);
        if(arg.dateStr){
            setState(true)
        }
    }
    const Modal = () => {
        return (
            
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
                    onSubmit={(e) => {
                        e.preventDefault();
                        
                    }}
                >
                    <div className='calendario'>
                        <h3>
                            REGISTRAR RESERVA PARA {moment(value.dateStr).format('DD/MM/YYYY')}
                        </h3>
                        <div className='formularioModal'>
                        <p>
                            <label>Paciente:  </label>
                            <input
                                type='text'
                                name='paciente'
                                placeholder="Paciente"
                               
                            />
                        </p>
                        <p>
                            <label>Hora:  </label>
                            <input
                                type='time'
                                name='hora'
                                placeholder="Paciente"
                                
                                
                                className='hora'
                                
                            />
                        </p>
                        <p>
                            <button>Aceptar</button>
                        </p> 
                        </div>
                        
                    </div>
                    
                    <br />
                </form>
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
        );
    }

    return (
        <>
        {state && <Modal/>}
                
            <div style={{ width:'90%', marginTop:'15px'}}>
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin]}
                locale='es'
                height='85vh'
                initialView="dayGridMonth"
                // ref={calendarRef}
                headerToolbar={{
                    right:'today prev,next',
                    center:'title',
                    left:'dayGridMonth',
                }}
                buttonText={{
                    today: 'Hoy',
                    month: 'Mes',
                }}
                // 
                events={[
                    { title: '13:58 - diego', date: '2021-12-01T10:30:00'},
                    { title: 'event 2', date: '2021-12-01T10:32:00' },
                    { title: '13:58', date: '2021-12-01T10:33:00' },
                    { title: 'event 2', date: '2021-12-04' },
                    { title: '13:58', date: '2021-12-03' },
                    { title: 'event 2', date: '2021-12-04' },
                    { title: 'event 2', date: '2021-11-10' }
                    ]}
                editable= {true}
                selectable={true}
                select={handleDateClick}
                dateClick={[handleDateClick,onChange]}
                dayMaxEventRows={ true} // for all non-TimeGrid views
                view={{
                    timeGrid: {
                    dayMaxEventRows: 10 // adjust to 6 only for timeGridWeek/timeGridDay
                    }
                }}
                eventClick={(info)=>{
                    console.log('click', info)
                }}
                eventRemove={true}
                onChange={onChange}
                value={value}
                // showNonCurrentDates={false}
            />
            </div>
        </>
    )   
}

export default InicioSecretaria;