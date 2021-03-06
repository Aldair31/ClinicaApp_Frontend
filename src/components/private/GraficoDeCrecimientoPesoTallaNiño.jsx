// import moment from 'moment'
import React, {useRef} from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'
import pluginGrafico from '../../functions/pluginGrafico'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import OpcionesPDF from '../includes/OpcionesPDF'

const GraficoDeCrecimientoPesoTallaNiño = () => {
	var datos = []
	let {pesoPaciente, tallaPaciente} = useHistClinica()

	const tallaypeso = [] 
	
	//ORDENANDO DE MENOR A MAYOR
	if(tallaPaciente!==undefined)
	    tallaPaciente.sort(function(a, b){return a - b})
    if(pesoPaciente!==undefined)
	    pesoPaciente.sort(function(a, b){return a - b})

	for (let item in tallaPaciente){
		if ((pesoPaciente[item]>=7 && pesoPaciente[item]<=31) && (tallaPaciente[item]>=77 && tallaPaciente[item]<=122)) {
			tallaypeso.push({x:tallaPaciente[item], y:pesoPaciente[item]})
		}
    }

	//PARA EXPORTAR
	const ref = useRef(null);
	const grafico = ref.current;

	//Extrayendo datos de paciente
	const datosPaciente = useFiliacionUnica()

	datos = tallaypeso.reverse()

   return (
	<>
		{(grafico && datosPaciente) && (
			<div style={{display: 'flex', justifyContent: 'right'}}>
				<OpcionesPDF grafico={grafico} datosPaciente={datosPaciente}/>
			</div>
		)}
		<div className='graficosDeCrecimiento'>	
		<Line
			ref={ref}
			data={
				{
					datasets: [
						//DEL PACIENTE
						{	
							type : 'scatter',
							showLine : true,
							label: 'Peso',
							data : datos,
							borderColor : 'red',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 3
						},
						//IDEALES MÍNIMOS
						{
							label: 'Ideal mínimo',
							data : [
								{x:77 , y: 8.972919, },
								{x:78 , y: 9.073268, },
								{x:79 , y: 9.273092, },
								{x:80 , y: 9.471922, },
								{x:81 , y:9.669971, },
								{x:82 , y:9.867465, },
								{x:83 , y:10.06464, },
								{x:84 , y:10.26174, },
								{x:85 , y:10.45903, },
								{x:86 , y:10.65676, },
								{x:87 , y:10.85521, },
								{x:88 , y:11.05464, },
								{x:89 , y:11.25535, },
								{x:90 , y:11.45762, },
								{x:91 , y:11.66174, },
								{x:92 , y:11.86801, },
								{x:93 , y:12.07671, },
								{x:94 , y:12.28815, },
								{x:95 , y:12.50263, },
								{x:96 , y:12.72043, },
								{x:97 , y:12.94186, },
								{x:98 , y:13.16721, },
								{x:99 , y:13.39676, },
								{x:100 , y:13.63078, },
								{x:101 , y:13.86955, },
								{x:102 , y:14.11332, },
								{x:103 , y:14.36233, },
								{x:104 , y:14.61679, },
								{x:105 , y:14.87688, },
								{x:106 , y:15.14279, },
								{x:107 , y:15.41461, },
								{x:108 , y:15.69245, },
								{x:109 , y:15.97631, },
								{x:110 , y:16.2662, },
								{x:111 , y:16.56202, },
								{x:112 , y:16.86366, },
								{x:113 , y:17.17091, },
								{x:114 , y:17.48355, },
								{x:115 , y:17.80131, },
								{x:116 , y:18.12386, },
								{x:117 , y:18.45088, },
								{x:118 , y:18.78199, },
								{x:119 , y:19.11682, },
								{x:120 , y:19.45497, },
								{x:121 , y:19.79603, },
								{x:122 , y:20.13956,},
							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 2,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label: 'Ideal mínimo 2',
							data: [
								{x: 77, y: 9.117813},
								{x: 78, y: 9.219922},
								{x: 79, y: 9.423242},
								{x: 80, y: 9.625531},
								{x: 81, y: 9.827001},
								{x: 82, y: 10.02787},
								{x: 83, y: 10.22838},
								{x: 84, y: 10.42877},
								{x: 85, y: 10.62928},
								{x: 86, y: 10.83019},
								{x: 87, y: 11.03176},
								{x: 88, y: 11.23425},
								{x: 89, y: 11.43796},
								{x: 90, y: 11.64315},
								{x: 91, y: 11.85012},
								{x: 92, y: 12.05915},
								{x: 93, y: 12.27054},
								{x: 94, y: 12.48457},
								{x: 95, y: 12.70154},
								{x: 96, y: 12.92172},
								{x: 97, y: 13.14542},
								{x: 98, y: 13.37291},
								{x: 99, y: 13.60447},
								{x: 100, y: 13.84037},
								{x: 101, y: 14.08087},
								{x: 102, y: 14.32622},
								{x: 103, y: 14.57667},
								{x: 104, y: 14.83243},
								{x: 105, y: 15.0937},
								{x: 106, y: 15.36067},
								{x: 107, y: 15.63346},
								{x: 108, y: 15.91219},
								{x: 109, y: 16.19693},
								{x: 110, y: 16.4877},
								{x: 111, y: 16.78447},
								{x: 112, y: 17.08715},
								{x: 113, y: 17.39563},
								{x: 114, y: 17.70971},
								{x: 115, y: 18.02917},
								{x: 116, y: 18.35374},
								{x: 117, y: 18.68314},
								{x: 118, y: 19.01702},
								{x: 119, y: 19.35505},
								{x: 120, y: 19.69684},
								{x: 121, y: 20.042},
								{x: 122, y: 20.3901},

							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 3',
							data: [
								{x: 77, y: 9.350303, },
								{x: 78, y: 9.455149, },
								{x: 79, y: 9.663908, },
								{x: 80, y: 9.871588, },
								{x: 81, y: 10.0784, },
								{x: 82, y: 10.28455, },
								{x: 83, y: 10.49029, },
								{x: 84, y: 10.69585, },
								{x: 85, y: 10.90148, },
								{x: 86, y: 11.10744, },
								{x: 87, y: 11.314, },
								{x: 88, y: 11.52142, },
								{x: 89, y: 11.72999, },
								{x: 90, y: 11.93997, },
								{x: 91, y: 12.15166, },
								{x: 92, y: 12.36532, },
								{x: 93, y: 12.58125, },
								{x: 94, y: 12.79973, },
								{x: 95, y: 13.02103, },
								{x: 96, y: 13.24543, },
								{x: 97, y: 13.47321, },
								{x: 98, y: 13.70463, },
								{x: 99, y: 13.93996, },
								{x: 100, y: 14.17946, },
								{x: 101, y: 14.42339, },
								{x: 102, y: 14.67197, },
								{x: 103, y: 14.92545, },
								{x: 104, y: 15.18406, },
								{x: 105, y: 15.44799, },
								{x: 106, y: 15.71744, },
								{x: 107, y: 15.99258, },
								{x: 108, y: 16.27355, },
								{x: 109, y: 16.56048, },
								{x: 110, y: 16.85344, },
								{x: 111, y: 17.15247, },
								{x: 112, y: 17.45759, },
								{x: 113, y: 17.76873, },
								{x: 114, y: 18.0858, },
								{x: 115, y: 18.40867, },
								{x: 116, y: 18.73715, },
								{x: 117, y: 19.071, },
								{x: 118, y: 19.40998, },
								{x: 119, y: 19.75376, },
								{x: 120, y: 20.10203, },
								{x: 121, y: 20.45441, },
								{x: 122, y: 20.8105},
							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal mínimo 4',
							data: [
								{x: 77, y: 9.766408, },
								{x: 78, y: 9.875876, },
								{x: 79, y: 10.09384, },
								{x: 80, y: 10.31066, },
								{x: 81, y: 10.52655, },
								{x: 82, y: 10.74175, },
								{x: 83, y: 10.95648, },
								{x: 84, y: 11.171, },
								{x: 85, y: 11.38556, },
								{x: 86, y: 11.60043, },
								{x: 87, y: 11.81588, },
								{x: 88, y: 12.03219, },
								{x: 89, y: 12.24964, },
								{x: 90, y: 12.46851, },
								{x: 91, y: 12.68907, },
								{x: 92, y: 12.91162, },
								{x: 93, y: 13.13642, },
								{x: 94, y: 13.36376, },
								{x: 95, y: 13.59389, },
								{x: 96, y: 13.82709, },
								{x: 97, y: 14.06361, },
								{x: 98, y: 14.3037, },
								{x: 99, y: 14.54759, },
								{x: 100, y: 14.79553, },
								{x: 101, y: 15.04774, },
								{x: 102, y: 15.30443, },
								{x: 103, y: 15.56583, },
								{x: 104, y: 15.83213, },
								{x: 105, y: 16.10354, },
								{x: 106, y: 16.38025, },
								{x: 107, y: 16.66247, },
								{x: 108, y: 16.95036, },
								{x: 109, y: 17.24413, },
								{x: 110, y: 17.54392, },
								{x: 111, y: 17.84989, },
								{x: 112, y: 18.16216, },
								{x: 113, y: 18.48084, },
								{x: 114, y: 18.80597, },
								{x: 115, y: 19.13757, },
								{x: 116, y: 19.4756, },
								{x: 117, y: 19.81998, },
								{x: 118, y: 20.17056, },
								{x: 119, y: 20.52714, },
								{x: 120, y: 20.8895, },
								{x: 121, y: 21.25732, },
								{x: 122, y: 21.63028},
							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEAL
						{
							label : 'Ideal',
							data: [
								{x: 77, y: 10.27441, },
								{x: 78, y: 10.38902, },
								{x: 79, y: 10.61725, },
								{x: 80, y: 10.84433, },
								{x: 81, y: 11.07049, },
								{x: 82, y: 11.29597, },
								{x: 83, y: 11.52105, },
								{x: 84, y: 11.74598, },
								{x: 85, y: 11.97105, },
								{x: 86, y: 12.19656, },
								{x: 87, y: 12.4228, },
								{x: 88, y: 12.65007, },
								{x: 89, y: 12.87868, },
								{x: 90, y: 13.10893, },
								{x: 91, y: 13.34112, },
								{x: 92, y: 13.57556, },
								{x: 93, y: 13.81254, },
								{x: 94, y: 14.05233, },
								{x: 95, y: 14.29522, },
								{x: 96, y: 14.54147, },
								{x: 97, y: 14.79134, },
								{x: 98, y: 15.04506, },
								{x: 99, y: 15.30286, },
								{x: 100, y: 15.56495, },
								{x: 101, y: 15.83152, },
								{x: 102, y: 16.10277, },
								{x: 103, y: 16.37888, },
								{x: 104, y: 16.66, },
								{x: 105, y: 16.94631, },
								{x: 106, y: 17.23797, },
								{x: 107, y: 17.53517, },
								{x: 108, y: 17.83808, },
								{x: 109, y: 18.14691, },
								{x: 110, y: 18.46186, },
								{x: 111, y: 18.78316, },
								{x: 112, y: 19.11104, },
								{x: 113, y: 19.44573, },
								{x: 114, y: 19.78744, },
								{x: 115, y: 20.13636, },
								{x: 116, y: 20.49262, },
								{x: 117, y: 20.85633, },
								{x: 118, y: 21.2275, },
								{x: 119, y: 21.6061, },
								{x: 120, y: 21.99204, },
								{x: 121, y: 22.38514, },
								{x: 122, y: 22.78517},
							],
							borderColor : 'rgba(119, 185, 0, 1)',
							borderWidth: 3,
							spanGaps : true,
							pointRadius : 0
						},
						//IDEALES MÁXIMOS
						{
							label : 'Ideal máximo',
							data: [
								{x: 77, y: 10.83813, },
								{x: 78, y: 10.95778, },
								{x: 79, y: 11.19613, },
								{x: 80, y: 11.43339, },
								{x: 81, y: 11.66984, },
								{x: 82, y: 11.90577, },
								{x: 83, y: 12.14148, },
								{x: 84, y: 12.37729, },
								{x: 85, y: 12.61352, },
								{x: 86, y: 12.85052, },
								{x: 87, y: 13.08863, },
								{x: 88, y: 13.32822, },
								{x: 89, y: 13.56963, },
								{x: 90, y: 13.81322, },
								{x: 91, y: 14.05935, },
								{x: 92, y: 14.30837, },
								{x: 93, y: 14.56062, },
								{x: 94, y: 14.81645, },
								{x: 95, y: 15.07616, },
								{x: 96, y: 15.34008, },
								{x: 97, y: 15.6085, },
								{x: 98, y: 15.88169, },
								{x: 99, y: 16.1599, },
								{x: 100, y: 16.44336, },
								{x: 101, y: 16.73229, },
								{x: 102, y: 17.02686, },
								{x: 103, y: 17.32725, },
								{x: 104, y: 17.6336, },
								{x: 105, y: 17.94603, },
								{x: 106, y: 18.26469, },
								{x: 107, y: 18.58968, },
								{x: 108, y: 18.92114, },
								{x: 109, y: 19.25922, },
								{x: 110, y: 19.6041, },
								{x: 111, y: 19.95598, },
								{x: 112, y: 20.31511, },
								{x: 113, y: 20.68175, },
								{x: 114, y: 21.05621, },
								{x: 115, y: 21.43877, },
								{x: 116, y: 21.82972, },
								{x: 117, y: 22.22931, },
								{x: 118, y: 22.63774, },
								{x: 119, y: 23.05517, },
								{x: 120, y: 23.48168, },
								{x: 121, y: 23.91726, },
								{x: 122, y: 24.36185},
							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 2',
							data: [
								{x: 77, y: 11.1669, },
								{x: 78, y: 11.28916, },
								{x: 79, y: 11.53276, },
								{x: 80, y: 11.77537, },
								{x: 81, y: 12.01729, },
								{x: 82, y: 12.25883, },
								{x: 83, y: 12.50033, },
								{x: 84, y: 12.74214, },
								{x: 85, y: 12.98464, },
								{x: 86, y: 13.22819, },
								{x: 87, y: 13.47318, },
								{x: 88, y: 13.72002, },
								{x: 89, y: 13.96909, },
								{x: 90, y: 14.22081, },
								{x: 91, y: 14.47557, },
								{x: 92, y: 14.73378, },
								{x: 93, y: 14.99583, },
								{x: 94, y: 15.26211, },
								{x: 95, y: 15.533, },
								{x: 96, y: 15.80886, },
								{x: 97, y: 16.09005, },
								{x: 98, y: 16.37689, },
								{x: 99, y: 16.66969, },
								{x: 100, y: 16.96874, },
								{x: 101, y: 17.27429, },
								{x: 102, y: 17.58658, },
								{x: 103, y: 17.90582, },
								{x: 104, y: 18.23217, },
								{x: 105, y: 18.56578, },
								{x: 106, y: 18.9068, },
								{x: 107, y: 19.25532, },
								{x: 108, y: 19.61147, },
								{x: 109, y: 19.97536, },
								{x: 110, y: 20.34711, },
								{x: 111, y: 20.72688, },
								{x: 112, y: 21.11486, },
								{x: 113, y: 21.51127, },
								{x: 114, y: 21.91637, },
								{x: 115, y: 22.33044, },
								{x: 116, y: 22.75377, },
								{x: 117, y: 23.18663, },
								{x: 118, y: 23.62929, },
								{x: 119, y: 24.08197, },
								{x: 120, y: 24.54481, },
								{x: 121, y: 25.01792, },
								{x: 122, y: 25.50133},
							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 3',
							data: [
								{x: 77, y: 11.40111, },
								{x: 78, y: 11.52507, },
								{x: 79, y: 11.77212, },
								{x: 80, y: 12.01827, },
								{x: 81, y: 12.26383, },
								{x: 82, y: 12.50916, },
								{x: 83, y: 12.7546, },
								{x: 84, y: 13.00055, },
								{x: 85, y: 13.24739, },
								{x: 86, y: 13.49554, },
								{x: 87, y: 13.74542, },
								{x: 88, y: 13.99745, },
								{x: 89, y: 14.25207, },
								{x: 90, y: 14.50973, },
								{x: 91, y: 14.77087, },
								{x: 92, y: 15.03594, },
								{x: 93, y: 15.30537, },
								{x: 94, y: 15.57961, },
								{x: 95, y: 15.85909, },
								{x: 96, y: 16.14423, },
								{x: 97, y: 16.43544, },
								{x: 98, y: 16.73311, },
								{x: 99, y: 17.03762, },
								{x: 100, y: 17.34932, },
								{x: 101, y: 17.66853, },
								{x: 102, y: 17.99556, },
								{x: 103, y: 18.33067, },
								{x: 104, y: 18.6741, },
								{x: 105, y: 19.02606, },
								{x: 106, y: 19.38673, },
								{x: 107, y: 19.75625, },
								{x: 108, y: 20.13474, },
								{x: 109, y: 20.52234, },
								{x: 110, y: 20.91913, },
								{x: 111, y: 21.32525, },
								{x: 112, y: 21.74083, },
								{x: 113, y: 22.16602, },
								{x: 114, y: 22.60103, },
								{x: 115, y: 23.04606, },
								{x: 116, y: 23.50134, },
								{x: 117, y: 23.96713, },
								{x: 118, y: 24.44366, },
								{x: 119, y: 24.93113, },
								{x: 120, y: 25.42973, },
								{x: 121, y: 25.93957, },
								{x: 122, y: 26.46074},
							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 1,
							spanGaps : true,
							pointRadius : 0
						},
						{
							label : 'Ideal máximo 4',
							data: [
								{x: 77, y: 12.01729, },
								{x: 78, y: 12.14509, },
								{x: 79, y: 12.40003, },
								{x: 80, y: 12.65439, },
								{x: 81, y: 12.90856, },
								{x: 82, y: 13.16297, },
								{x: 83, y: 13.41805, },
								{x: 84, y: 13.67427, },
								{x: 85, y: 13.93212, },
								{x: 86, y: 14.1921, },
								{x: 87, y: 14.45474, },
								{x: 88, y: 14.72057, },
								{x: 89, y: 14.99015, },
								{x: 90, y: 15.26406, },
								{x: 91, y: 15.54289, },
								{x: 92, y: 15.82724, },
								{x: 93, y: 16.11772, },
								{x: 94, y: 16.41498, },
								{x: 95, y: 16.71964, },
								{x: 96, y: 17.03238, },
								{x: 97, y: 17.35385, },
								{x: 98, y: 17.68473, },
								{x: 99, y: 18.02572, },
								{x: 100, y: 18.3775, },
								{x: 101, y: 18.74078, },
								{x: 102, y: 19.11628, },
								{x: 103, y: 19.5047, },
								{x: 104, y: 19.90675, },
								{x: 105, y: 20.32313, },
								{x: 106, y: 20.75452, },
								{x: 107, y: 21.20158, },
								{x: 108, y: 21.66493, },
								{x: 109, y: 22.14512, },
								{x: 110, y: 22.64267, },
								{x: 111, y: 23.15798, },
								{x: 112, y: 23.69138, },
								{x: 113, y: 24.24312, },
								{x: 114, y: 24.8133, },
								{x: 115, y: 25.40197, },
								{x: 116, y: 26.00906, },
								{x: 117, y: 26.63444, },
								{x: 118, y: 27.2779, },
								{x: 119, y: 27.93919, },
								{x: 120, y: 28.618, },
								{x: 121, y: 29.314, },
								{x: 122, y: 30.02679},
							],
							borderColor : 'rgba(1, 97, 170, 1)',
							borderWidth: 2,
							spanGaps : true,
							pointRadius : 0
						}
					],
				}
			}
			plugins = {[pluginGrafico()]}
            options = {{
				responsive : true,
				maintainAspectRatio: false,
				plugins : {
					title : {
						display : true,
						text : 'Gráfica de Crecimiento Peso - Talla (>7 kg y 77 cm)',
						color : '#0161AA',
						font : {
							size : 20
						}
					},
					legend : {
						display : false
					},
					tooltip : {
						enabled : true
					}
				},
				scales: {
					y: {
						scaleLabel: {
							display: true,
							text: 'Peso'
						},
						title : {
							display : true,
							text : 'PESO (KG)',
							color : '#0161AA'
						},
						suggestedMin: 8,
						ticks: {
							stepSize: 1,
							color : '#0161AA',
							font : {
								size : 10
							}
						}
					},
					x: {
						title : {
							display : true,
							text : 'TALLA (CM)',
							color : '#0161AA'
						},
						type : 'linear',
						ticks: {
							color : '#0161AA',
							autoSkip : false,
							maxRotation: 0,
							minRotation: 0,
							stepSize : 1,
							font : {
								size : 10
							}
						}
					}
				}
			}}
		/>
		<div>
			<RedireccionAGraficos/>
		</div>
		</div>
	</>
  )
}

export default GraficoDeCrecimientoPesoTallaNiño