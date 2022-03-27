import React from "react";
import { connect } from 'react-redux';
import useAfiliacion from '../../hooks/useAfiliacion';
import {useHistory} from 'react-router-dom'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import '../../sass/Redirecciones.sass'

const RedireccionAGraficos = ({usuario}) =>{
    const {id} =useParams()
    // console.log('ghgfhhgfhhfhf',id);
    const history = useHistory()
    // let [datos_af, loading] = useAfiliacion();
    return (
        <>
            {usuario.rol === 'Apoderado' ?
			(
				<>
					<div className="btnRedirecciones">
                        <button onClick={()=>{history.push(`/GraficoDeCrecimiento/${id}`)}}>
						    <i class="fas fa-angle-left"></i>
					    </button>
					</div>
				</>
			):null}
        </>
    )
}

const mapStateToProps = (state) => ({
	usuario: state.usuario,
});

export default connect(mapStateToProps)(RedireccionAGraficos);