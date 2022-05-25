import { useEffect, useState } from 'react'
import url from '../keys/backend_keys'


const useMedicamentos = () =>{
    const [Med, setMed] = useState([])

    useEffect(() => {
        fetch(`${url}/MedicamentoReceta/NombresMedicina`)
        .then((resp) => resp.json())
        .then((data) => {
            setMed(data)
        })
    }, [])

    console.log('Medicamento',Med)
    return Med
}

export default useMedicamentos



