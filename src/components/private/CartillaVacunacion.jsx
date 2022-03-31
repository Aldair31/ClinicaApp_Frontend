import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import url from '../../keys/backend_keys';
import Vacunas from './Vacunas';
import moment from 'moment';

import '../../sass/CartillaVacunacion.sass'

const CartillaVacunacion = () => {
    const [vacunas, setVacunas] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        fetch(`${url}/Vacuna/${id}`)
			.then((resp) => resp.json())
			.then((data) => {
				if (data.length > 0) {
					setVacunas(data[0]);
				}
			});
    }, [])

    console.log("asd: ", vacunas)
    
    return(
        <div className='tablaCartilla'>
            <table>
                <thead>
                    <tr style={{textAlign: 'center'}}>
                        <th></th>
                        <th>BCG</th>
                        <th>Hepatitis B</th>
                        <th>DPT</th>
                        <th>Neumococo</th>
                        <th>Rotavirus</th>
                        <th>Influenza</th>
                        <th>Meningococo</th>
                        <th>SPR</th>
                        <th>Varicela</th>
                        <th>Hepatitis A</th>
                        <th>Fiebre Amarilla</th>
                        <th>PapilomaVirus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='nombreVacuna'>Recién Nacido</td>
                        <td>
                            {vacunas.bcg==1 ? '1° Dosis' : null}
                            <br></br>
                            {vacunas.fechabcg?moment(vacunas.fechabcg).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.hepatb==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechahepatb?moment(vacunas.fechahepatb).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>2 meses</td>
                        <td></td>
                        <td>
                            {vacunas.hepatb2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechahepatb2?moment(vacunas.fechahepatb2).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.dpt==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechadpt?moment(vacunas.fechadpt).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.neumococo==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechaneumococo?moment(vacunas.fechaneumococo).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.rotavirus==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fecharotavirus?moment(vacunas.fecharotavirus).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>4 meses</td>
                        <td></td>
                        <td>
                            {vacunas.hepatb3==1?'3° Dosis':null}
                            <br></br>
                            {vacunas.fechahepatb3?moment(vacunas.fechahepatb3).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.dpt2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechadpt2?moment(vacunas.fechadpt2).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.neumococo2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechaneumococo2?moment(vacunas.fechaneumococo2).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.rotavirus2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fecharotavirus2?moment(vacunas.fecharotavirus2).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>6 meses</td>
                        <td></td>
                        <td>
                            {vacunas.hepatb4==1?'4° Dosis':null}
                            <br></br>
                            {vacunas.fechahepatb4?moment(vacunas.fechahepatb4).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.dpt3==1?'3° Dosis':null}
                            <br></br>
                            {vacunas.fechadpt3?moment(vacunas.fechadpt3).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.neumococo3==1?'3° Dosis':null}
                            <br></br>
                            {vacunas.fechaneumococo3?moment(vacunas.fechaneumococo3).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.rotavirus3==1?'3° Dosis':null}
                            <br></br>
                            {vacunas.fecharotavirus3?moment(vacunas.fecharotavirus3).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>7 meses</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.influenza==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechainfluenza?moment(vacunas.fechainfluenza).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>8 meses</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.influenza2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechainfluenza2?moment(vacunas.fechainfluenza2).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>9 meses</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.meningococo==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechameningococo?moment(vacunas.fechameningococo).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>1 año</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.meningococo2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechameningococo2?moment(vacunas.fechameningococo2).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.spr==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechaspr?moment(vacunas.fechaspr).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.varicela==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechavaricela?moment(vacunas.fechavaricela).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>1 año 1 mes</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.hepata==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechahepata?moment(vacunas.fechahepata).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>1 año 3 meses</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.famarilla==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechafamarilla?moment(vacunas.fechafamarilla).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>1 año 6 meses</td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.dpt4==1?'4° Dosis':null}
                            <br></br>
                            {vacunas.fechadpt4?moment(vacunas.fechadpt4).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.spr2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechaspr2?moment(vacunas.fechaspr2).format('DD/MM/YYYY'):null}
                        </td>
                        <td>
                            {vacunas.varicela2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechavaricela2?moment(vacunas.fechavaricela2).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>1 año 7 meses</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.hepata2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechahepata2?moment(vacunas.fechahepata2).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>2 años</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.neumococo4==1?'4° Dosis':null}
                            <br></br>
                            {vacunas.fechaneumococo4?moment(vacunas.fechaneumococo4).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>4 años</td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.dpt5==1?'5° Dosis':null}
                            <br></br>
                            {vacunas.fechadpt5?moment(vacunas.fechadpt5).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.spr3==1?'3° Dosis':null}
                            <br></br>
                            {vacunas.fechaspr3?moment(vacunas.fechaspr3).format('DD/MM/YYYY'):null}
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>9 años</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.papilomavirus==1?'1° Dosis':null}
                            <br></br>
                            {vacunas.fechapapilomavirus?moment(vacunas.fechapapilomavirus).format('DD/MM/YYYY'):null}
                        </td>
                    </tr>
                    <tr>
                        <td className='nombreVacuna'>9 años 6 meses</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            {vacunas.papilomavirus2==1?'2° Dosis':null}
                            <br></br>
                            {vacunas.fechapapilomavirus2?moment(vacunas.fechapapilomavirus2).format('DD/MM/YYYY'):null}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartillaVacunacion