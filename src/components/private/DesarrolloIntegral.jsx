import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import useAfiliacion from '../../hooks/useAfiliacion';
import { useParams, useHistory } from 'react-router-dom';
import {PresentacionDesarrolloIntegral, SlideDesarrollo} from '../../components/private/PresentacionDesarrolloIntegral'

// 1 MES
import imgA1 from '../../img/imgA1.JPG';
import imgB1 from '../../img/imgB1.JPG';
import imgC1 from '../../img/imgC1.JPG';
import imgD1 from '../../img/imgD1.JPG';
import imgE1 from '../../img/imgE1.JPG';
import imgF1 from '../../img/imgF1.JPG';
import imgG1 from '../../img/imgG1.JPG';
import imgH1 from '../../img/imgH1.JPG';
import imgI1 from '../../img/imgI1.JPG';
import imgJ1 from '../../img/imgJ1.JPG';
import imgL1 from '../../img/imgL1.JPG';
// 2 MESES
import imgC2 from '../../img/imgC2.JPG';
import imgE2 from '../../img/imgE2.JPG';
import imgH2 from '../../img/imgH2.JPG';
import imgI2 from '../../img/imgI2.JPG';
import imgL2 from '../../img/imgL2.JPG';
// 3 MESES
import imgA3 from '../../img/imgA3.JPG';
import imgB3 from '../../img/imgB3.JPG';
import imgD3 from '../../img/imgD3.JPG';
import imgE3 from '../../img/imgE3.JPG';
import imgF3 from '../../img/imgF3.JPG';
import imgI3 from '../../img/imgI3.JPG';
import imgK3 from '../../img/imgK3.JPG';
import imgL3 from '../../img/imgL3.JPG';
// 4 MESES
import imgD4 from '../../img/imgD4.JPG';
import imgJ4 from '../../img/imgJ4.JPG';
import imgK4 from '../../img/imgK4.JPG';
// 5 MESES
import imgA5 from '../../img/imgA5.JPG';
import imgC5 from '../../img/imgC5.JPG';
import imgG5 from '../../img/imgG5.JPG';
import imgH5 from '../../img/imgH5.JPG';
import imgJ5 from '../../img/imgJ5.JPG';
import imgK5 from '../../img/imgK5.JPG';
// 6 MESES
import imgB6 from '../../img/imgB6.JPG';
import imgD6 from '../../img/imgD6.JPG';
import imgF6 from '../../img/imgF6.JPG';
import imgG6 from '../../img/imgG6.JPG';
import imgI6 from '../../img/imgI6.JPG';
import imgJ6 from '../../img/imgJ6.JPG';
import imgK6 from '../../img/imgK6.JPG';
import imgL6 from '../../img/imgL6.JPG';
// 7 MESES
import imgA7 from '../../img/imgA7.JPG';
import imgH7 from '../../img/imgH7.JPG';
// 8 MESES
import imgD8 from '../../img/imgD8.JPG';
import imgI8 from '../../img/imgI8.JPG';
import imgK8 from '../../img/imgK8.JPG';
// 9 MESES
import imgG9 from '../../img/imgG9.JPG';
import imgL9 from '../../img/imgL9.JPG';
// 10 MESES
import imgC10 from '../../img/imgC10.JPG';
import imgH10 from '../../img/imgH10.JPG';
import imgL10 from '../../img/imgL10.JPG';
// 11 MESES
import imgD11 from '../../img/imgD11.JPG';
import imgG11 from '../../img/imgG11.JPG';
import imgI11 from '../../img/imgI11.JPG';
import imgJ11 from '../../img/imgJ11.JPG';
import imgK11 from '../../img/imgK11.JPG';
import imgL11 from '../../img/imgL11.JPG';
// 12 MESES
import imgC12 from '../../img/imgC12.JPG';
import imgH12 from '../../img/imgH12.JPG';
import imgI12 from '../../img/imgI12.JPG';
import imgJ12 from '../../img/imgJ12.JPG';
import imgL12 from '../../img/imgL12.JPG';

import img5 from '../../img/img5.jpg';

const DesarrolloIntegral = () => {
	let [datos_af, loading] = useAfiliacion();
    const { id } = useParams();
    const history = useHistory()
    
    const DesarrolloNiñoMeses = (edad)=>{
        let edadNiño
        // if((moment(edad).format(), 'months') >= 12)
        if (!(moment.duration(moment().diff(moment(edad)))).years()) {
            edadNiño = (moment.duration(moment().diff(moment(edad)))).months()
        }
        // edadNiño = (moment(edad).format('L'))
        // let edadNiño = (moment.duration(moment().diff(moment(edad)))).months();
        // let edadNiño = (moment(edad).format(), 'months') >= 12
        console.log('Edad del niño para desarrollo',edadNiño)
        switch (edadNiño) {
			case 1:
				return(
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgA1} alt="" />
                                <p>Movimientos asimétricos de brazos y piernas</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgB1} alt="" />
                                <p>Levanta la cabeza por momentos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgC1} alt="" />
                                <p>Puesto de pie extiende las piernas</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgD1} alt="" />
                                <p>Aprieta cualquier objeto colocado en su mano</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgE1} alt="" />
                                <p>Frunce el ceño y rechaza con parpadeo la luz intensa</p>
                            </SlideDesarrollo>  
                            <SlideDesarrollo>
                                <img src={imgF1} alt="" />
                                <p>Detiene sus movimientos al oír un sonido</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgG1} alt="" />
                                <p>Sonríe con la voz de su madre</p>
                            </SlideDesarrollo> 
                            <SlideDesarrollo>
                                <img src={imgH1} alt="" />
                                <p>Llora por una causa: hambre, frío, sueño</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgI1} alt="" />
                                <p>Cuando llora, se tranquiliza al ser alzado o acariciado</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgJ1} alt="" />
                                <p>Chupa</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL1} alt="" />
                                <p>Demuestra estar atento</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
			case 2:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgC2} alt="" />
                                <p>Parado, no sostiene el peso de su cuerpo</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgE2} alt="" />
                                <p>Sigue con la mirada objetos sin sonido en ángulo de 90°</p>
                            </SlideDesarrollo> 
                            <SlideDesarrollo>
                                <img src={imgH2} alt="" />
                                <p>Emite sonidos o "agú" cuando se le habla</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgI2} alt="" />
                                <p>Sonríe ante cualquier rostro</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL2} alt="" />
                                <p>Al contacto con un objeto, abre y cierra la mano</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
            case 3:
                return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgA3} alt="" />
                                <p>La cabeza acompaña al movimiento del tronco, no cae</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgB3} alt="" />
                                <p>Apoyo inestable sobre antebrazos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgD3} alt="" />
                                <p>Manos abiertas, abre brazo ante objeto</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgE3} alt="" />
                                <p>Sigue con la mirada objetos cercanos sin sonido en un águlo de 180°</p>
                            </SlideDesarrollo> 
                            <SlideDesarrollo>
                                <img src={imgF3} alt="" />
                                <p>Voltea al oír el sonido de la campana</p>
                            </SlideDesarrollo> 
                            <SlideDesarrollo>
                                <img src={imgI3} alt="" />
                                <p>Responde diferente a la voz molesta y a la voz alegre</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgK3} alt="" />
                                <p>Juega con sus manos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL3} alt="" />
                                <p>Se alegra cuando le van a dar el pecho</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
            case 4:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgD4} alt="" />
                                <p>Une sus brazos en línea media y toma un objeto con ambas manos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgJ4} alt="" />
                                <p>Toma algo que se le ponga en la cuchara</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgK4} alt="" />
                                <p>Lleva los juguetes a la boca</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                )
            case 5:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>   
                            <SlideDesarrollo>
                                <img src={imgA5} alt="" />
                                <p>Dorso recto, apoyo hacia adelante con descarga de peso</p>
                            </SlideDesarrollo>    
                            <SlideDesarrollo>
                                <img src={imgC5} alt="" />
                                <p>Comienza a pararse</p>
                            </SlideDesarrollo>   
                            <SlideDesarrollo>
                                <img src={imgG5} alt="" />
                                <p>Reconoce su nombre</p>
                            </SlideDesarrollo>     
                            <SlideDesarrollo>
                                <img src={imgH5} alt="" />
                                <p>Se repite a sí mismo y en respuesta a los demás</p>
                            </SlideDesarrollo> 
                            <SlideDesarrollo>
                                <img src={imgJ5} alt="" />
                                <p>Lleva a la boca algo que se le pone en la mano</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgK5} alt="" />
                                <p>Juega con sus manos y pies</p>
                            </SlideDesarrollo>      
                        </PresentacionDesarrolloIntegral>
                    </>
                );
            case 6:
				return(
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgB6} alt="" />
                                <p>Gira sobre su cuerpo fácilmente </p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgD6} alt="" />
                                <p>Coge un objeto en cada mano</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgF6} alt="" />
                                <p>Localiza, diferencia y reacciona ante diferentes sonidos con movimientos completos de cabeza</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgG6} alt="" />
                                <p>Comprende "upa", "ven" y "chau"</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgI6} alt="" />
                                <p>Toca su imagen en el espejo</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgJ6} alt="" />
                                <p>Bebe del vaso con ayuda</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgK6} alt="" />
                                <p>Coge y golpea objetos y repite seriadamente el golpe</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL6} alt="" />
                                <p>Mira cuando cae un objeto</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
            case 7:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgA7} alt="" />
                                <p>Sentado sin apoyo</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgH7} alt="" />
                                <p>Dice "pa-pa", "ma-ma" a cualquier persona</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
            case 8:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgD8} alt="" />
                                <p>Pinza índice, pulgar torpe</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgI8} alt="" />
                                <p>Llama o grita para establecer contacto con otros</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgK8} alt="" />
                                <p>Lanza objetos a cierta distancia y disfruta con el sonido</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
            case 9:
                return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgG9} alt="" />
                                <p>Comprende el "NO"</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL9} alt="" />
                                <p>Encuentra objetos ocultos</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
            case 10:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgC10} alt="" />
                                <p>Camina apoyándose en las cosas</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgH10} alt="" />
                                <p>Dice "pa-pa", "ma-ma"</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL10} alt="" />
                                <p>Busca el juguete en la caja</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );

            case 11:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgD11} alt="" />
                                <p>Pinza fina</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgG11} alt="" />
                                <p>Responde a una orden simple e identifica objetos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgI11} alt="" />
                                <p>Imita gestos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgJ11} alt="" />
                                <p>Come del plato con sus manos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgK11} alt="" />
                                <p>Sujeto de la mano, empuja la pelota con el pie</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL11} alt="" />
                                <p>Explora su juguete</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>
                    </>
                );
			case 12:
				return (
                    <>
                        <PresentacionDesarrolloIntegral>
                            <SlideDesarrollo>
                                <img src={imgC12} alt="" />
                                <p>Camina solo, con pobre equilibrio y piernas separadas</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgH12} alt="" />
                                <p>Dice dos palabras sueltas, además de papá y mamá</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgI12} alt="" />
                                <p>Ofrece un juguete</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgJ12} alt="" />
                                <p>Forcejea hasta quitarse los zapatos</p>
                            </SlideDesarrollo>
                            <SlideDesarrollo>
                                <img src={imgL12} alt="" />
                                <p>Hace garabatos</p>
                            </SlideDesarrollo>
                        </PresentacionDesarrolloIntegral>                                               
                    </>
                )
		}
        //EDAD - 1 AÑO
        if (!(moment.duration(moment().diff(moment(edad)))).months() && (moment.duration(moment().diff(moment(edad)))).years() == '1') {
            return(
            <>
                <PresentacionDesarrolloIntegral>
                    <SlideDesarrollo>
                        <img src={imgC12} alt="" />
                        <p>Camina solo, con pobre equilibrio y piernas separadas</p>
                    </SlideDesarrollo>
                    <SlideDesarrollo>
                        <img src={imgH12} alt="" />
                        <p>Dice dos palabras sueltas, además de papá y mamá</p>
                    </SlideDesarrollo>
                    <SlideDesarrollo>
                        <img src={imgI12} alt="" />
                        <p>Ofrece un juguete</p>
                    </SlideDesarrollo>
                    <SlideDesarrollo>
                        <img src={imgJ12} alt="" />
                        <p>Forcejea hasta quitarse los zapatos</p>
                    </SlideDesarrollo>
                    <SlideDesarrollo>
                        <img src={imgL12} alt="" />
                        <p>Hace garabatos</p>
                    </SlideDesarrollo>
                </PresentacionDesarrolloIntegral>                                               
            </>)
            
        }

    }

    // const [open, setOpen]= useState(false)
    return (
        <div style={{height: '80vh'}}>
            {loading !== null ? (
                <div className='contenedorRedireccion'>
                    <div className="datosDesarrolloIntegral" style={{gridColumn: '1/5'}}>
                        {datos_af.filter((item) => item._id === id)
                            .map((item) => (
                            console.log(item),
                            <div className='datosDesarrollo' key={item._id}>
                                <p className='pacienteDatosDesarrollo'>
                                    <strong>{item.nombres_paciente}</strong>
                                    
                                </p>
                                <br />
                                <h3 className='tituloDatosDesarrollo'>
                                    <strong>DESARROLLO INTEGRAL DEL NIÑO</strong>
                                </h3>
                                <p className='edadDatosDesarrollo'>
                                    <strong>
                                        (Edad:  {(moment.duration(moment().diff(moment(item.fecha_nac)))).years()} a {(moment.duration(moment().diff(moment(item.fecha_nac)))).months()} m {(moment.duration(moment().diff(moment(item.fecha_nac)))).days()} d)
                                    </strong>
                                </p>
                                <br />
                                {/* <p>
                                https://www.saludarequipa.gob.pe/archivos/cred/NORMATIVA%20CRED.pdf
                                <br />
                                https://aprendiendoconjulia.com/wp-content/uploads/2014/05/desarrollo_psicomotriz-1024x614.jpg
                                <br />
                                https://www.hospitalsjl.gob.pe/ArchivosDescarga/Campana/
                                SomosLecheros/MaterialesComunicacion/PDF/CredParedA1.pdf

                                </p> */}
                                {/* <br /> */}
                                {DesarrolloNiñoMeses(item.fecha_nac)}
                                {/* <div className='boton_Redireccion'>
                                    <button onClick={()=>{history.push(`/hijo/${id}`)}}>
                                        <i class="fas fa-angle-left"></i>
                                    </button>	
                                </div> */}
                                
                                
                            </div>
                            
                        ))}
                    </div>
                    <div style={{marginTop: '2.5%'}}>
                        <button className='cta' onClick={()=>{history.push(`/hijo/${id}`)}}>
                            <span>Regresar</span>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                    </div>
                </div>
            ):null}
        </div>
    )
}

export default DesarrolloIntegral


