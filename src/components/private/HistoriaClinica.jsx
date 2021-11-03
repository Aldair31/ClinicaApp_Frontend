import React, { useEffect } from 'react';
import url from '../../keys/backend_keys';
import { useParams } from 'react-router';
import '../../sass/HistoriaClinica.sass'
const HistoriaClinica = () => {
	let { id } = useParams();
	useEffect(() => {
		fetch(`${url}/HistClinica/${id}`)
			.then((resp) => resp.json())
			.then((data) => console.log(data));
	}, []);
    // fecha:{
	// 	type: Date,
	// 	required: false,
	// },
	// diagnostico:{
	// 	type: String,
	// 	required: false,
	// },
	// tratamiento:{
	// 	type: String,
	// 	required: false,
	// },
	// examenesAuxiliares:{
	// 	type: String,
	// 	required: false,
	// },
	// //ex. fisico
	// peso:{
	// 	type: Number,
	// 	required: false,
	// },
    // talla:{
    //     type: Number,
    //     required: false,
    // },
	// temperatura: {
	// 	type: Number,
	// 	required: false,
	// },
	// apreciacionG:{
	// 	type: String,
	// 	required: false,
	// },
	// tcsc:{
	// 	type: String,
	// 	required: false,
	// },
	// orofaringe:{
	// 	type: String,
	// 	required: false,
	// },
	// aparatoResp:{
	// 	type: String,
	// 	required: false,
	// },
	// aparatoCV:{
	// 	type: String,
	// 	required: false,
	// },
	// abdomen:{
	// 	type: String,
	// 	required: false,
	// },
	// aparatoGU:{
	// 	type: String,
	// 	required: false,
	// },
	// neurologico:{
	// 	type: String,
	// 	required: false,
	// },
	// //----------------------
	// id_Historia:{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Historia',
	// 	required: true
	// }
	return (
		<div >
            <h2 className="titulo-hc">Historia clínica</h2>
			<form className="cont">
                <h3>Datos de la H.clínica</h3>
                <label>Exámenes auxiliares</label>
                <input placeholder="Ex. auxiliares"/>
                <label>Tratamiento</label>
                <input placeholder="Tratamiento"/>
                <label>Diagnóstico</label>
                <input placeholder="Diagnóstico" />
                <h3>Examen físico</h3>
                <label>Peso</label>
                <input placeholder="Peso"/>
                <label>Talla</label>
                <input placeholder="Talla"/>
                <label>Temperatura</label>
                <input placeholder="Temperatura" />
                <label>Apreciación G.</label>
                <input placeholder="Apreciación G."/>
                <label>Aparato CV</label>
                <input placeholder="Aparato CV"/>
                <label>Abdomen</label>
                <input placeholder="Abdomen" />
                {/* wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww */}
                <label>TCSC</label>
                <input placeholder="TCSC"/>
                <label>Talla</label>
                <input placeholder="Orofaringe"/>
                <label>Orofaringe</label>
                <input placeholder="Aparato Resp." />
                <label>Aparato GU.</label>
                <input placeholder="Aparato GU"/>
                <label>Abdomen</label>
                <input placeholder="Abdomen" />
                <label>Neurológico</label>
                <input placeholder="Neurológico" />
            </form>
		</div>
	);
};

export default HistoriaClinica;
