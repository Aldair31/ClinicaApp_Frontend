import moment from 'moment'
import React, { useEffect, useRef } from 'react'
import useAfiliacion from '../../hooks/useAfiliacion';
import { useParams } from 'react-router-dom';
import {PresentacionDesarrolloIntegral, SlideDesarrollo} from '../../components/private/PresentacionDesarrolloIntegral'
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';
import img5 from '../../img/img5.jpg';

// const Slide = () =>{
//     return(
        // <div className='contenedorDesarrolloIntegral'>
        //     <div className='contenedorSlideshow'>
                // <div className='slideDesarrollo'>

                {/* <img src={img1} alt=""/> */}
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>  */}
                // </div>
        //     </div>
        // </div>
                     
        
//     )
// }

const DesarrolloIntegral = () => {
	let [datos_af, loading] = useAfiliacion();
    const { id } = useParams();
    
    const DesarrolloNiñoMeses = (edad)=>{
        let edadNiño = (moment.duration(moment().diff(moment(edad)))).months();
        switch (edadNiño) {
			case 1:
				return '1 mes';
			case 2:
				return '2 meses';
            case 3:
                return (
                    <>
                        <p>CONTROLA CABEZA Y CUELLO</p>
                        <p>ESTANDO DE UN LADO, SE PONE BOCA ARRIBA</p>
                        <p>ACEPTA POSICIÓN VERTICAL</p>
                        <p>JUNTA LAS MANOS</p>
                        <p>OBSERVA LOS OBJETOS</p>
                        <p>VOLTEA HACIA EL SONIDO</p>
                        <p>INICIA EL BALBUCEO</p>
                        <p>SONRIE ANTE CARAS FAMILIARES</p>
                        <p>SE ALEGRA CUANDO LE VAN A DAR PECHO</p>
                        <p>SE INTERESA POR LA SONAJA</p>
                        <p>JUEGA CON LAS MANOS</p>
                    </>
                );
            case 4:
				return (
                    <>
                        <p>LEVANTA SU CABEZA Y HOMBROS</p>
                        <p>CUANDO ESTA BOCA ARRIBA SE PONE DE LADO</p>
                        <p>NECESITA APOYO ATRAS PARA SENTARSE</p>
                        <p>TRATA DE COGER OBJETOS</p>
                        <p>RECONOCE LA VOZ DE LA MADRE A LA DISTANCIA</p>
                        <p>RESPONDE CON SONIDOS CUANDO LE HABLAN</p>
                        <p>SE RIE CON LAS PERSONAS</p>
                        <p>COJE Y MUEVE LA SONAJA</p>
                        <p>RELACIONA EL RUIDO CON EL SONAJERO</p>
                    </>
                )
            case 5:
				return '5 meses';
            case 6:
				return(
                    <>
                    <div>6 meses</div>
                    {/* <p>LEVANTA SU CABEZA Y HOMBROS</p>
                    <p>CUANDO ESTA BOCA ARRIBA SE PONE DE LADO</p>
                    <p>NECESITA APOYO ATRAS PARA SENTARSE</p>
                    <p>TRATA DE COGER OBJETOS</p>
                    <p>RECONOCE LA VOZ DE LA MADRE A LA DISTANCIA</p>
                    <p>RESPONDE CON SONIDOS CUANDO LE HABLAN</p>
                    <p>SE RIE CON LAS PERSONAS</p>
                    <p>COJE Y MUEVE LA SONAJA</p>
                    <p>RELACIONA EL RUIDO CON EL SONAJERO</p> */}
                    </>
                );
            case 7:
				return '7 meses';
            case 8:
				return '8 meses';
            case 9:
                return '9 meses';
            case 10:
				return '10 meses';

            case 11:
				return '11 meses';
			default:
				return (
                    <>
                        <p>COMIENZA A CAMINAR SOLO</p>
                        <p>DICE 2-3 PALABRAS</p>
                        <p>ENTIENDE LAS PALABRAS "DAME Y TOMA"</p>
                        <p>SE COMIENZA SENTAR EN EL BACIN</p>
                        <p>OFRECE Y QUITA JUQUETES</p>
                        <p>SEÑALAS PARTES DEL CUERPO</p>
                    </>
                )
		}
       
    }

    
    return (
        <div style={{maxWidth: '99%', height: '80vh'}}>
            {loading !== null ? (
                <div className="datos_filiacion">
                    {datos_af.filter((item) => item._id === id)
						.map((item) => (
                        console.log(item),
                        <div style={{marginTop:'20px'}} key={item._id}>
                            <p>
                                <strong>-Nombres del paciente: </strong>
                                {item.nombres_paciente}
                            </p>
                            <p>
                                <strong>-Edad: </strong>
                                {(moment.duration(moment().diff(moment(item.fecha_nac)))).years()} a {(moment.duration(moment().diff(moment(item.fecha_nac)))).months()} m {(moment.duration(moment().diff(moment(item.fecha_nac)))).days()} d
                            </p>
                            <br />
                            <br />
                            {DesarrolloNiñoMeses(item.fecha_nac)}
                             {/* <div style={{background:'red', width:'80%', height:'50vh'}}>
                                                    {DesarrolloNiñoMeses(item.fecha_nac)}
                                            </div> */}
                            <p>
                                DESARROLLO INTEGRAL
                                <br />
                                <br />
                                
                                <PresentacionDesarrolloIntegral>
                                    {/* <Slide> */}
                                    {/* <div className='slideDesarrollo'> */}
                                    {/* <SlideDesarrollo> */}
                                        <img src={img1} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                                    {/* </SlideDesarrollo> */}
                                    {/* <SlideDesarrollo>
                                        <img src={img2} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                                    </SlideDesarrollo> */}
                                       
                                    {/* </div> */}
                                    {/* <div className='slideDesarrollo'>
                                        <img src={img2} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                                    </div> */}
                                        
                                    {/* </Slide> */}
                                    {/* <Slide> */}
                                        {/* <img src={img2} alt=""/> */}
                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p>  */}
                                    {/* </Slide> */}
                                    {/* <Slide>
                                        <img src={img3} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                                    </Slide> */}
                                    {/* <Slide>
                                        <img src={img4} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                                    </Slide> */}
                                    {/* <Slide>
                                        <img src={img5} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, asperiores.</p> 
                                    </Slide> */}
                                </PresentacionDesarrolloIntegral>
                                
                                
                                {/* <DesarrolloNiño item={item}/> */}
                            </p>
                            <div>
                              
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
            ):null}
           



        </div>
    )
}

export default DesarrolloIntegral


