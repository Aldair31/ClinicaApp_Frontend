import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'

const GraficoDeCrecimientoPesoTallaNiña0a36 = () => {
	var datos = []
	let {fechaHistoria, fechaNac, pesoPaciente, tallaPaciente} = useHistClinica()

	const tallaypeso = [] 
	
	//ORDENANDO DE MENOR A MAYOR
    if(tallaPaciente!=undefined)
	    tallaPaciente.sort(function(a, b){return a - b})
    if(pesoPaciente!=undefined)
	    pesoPaciente.sort(function(a, b){return a - b})

	for (let item in tallaPaciente){
        if(moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months') <= 36){
			tallaypeso.push({x:tallaPaciente[item], y:pesoPaciente[item]})
        }
    }

	datos = tallaypeso.reverse()

   return (
    <div className='graficosDeCrecimiento'>	
     <Line
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
							{x: 45, y: 1.613026},
                            {x: 46, y: 1.723754},
                            {x: 47, y: 1.946461},
                            {x: 48, y: 2.170805},
                            {x: 49, y: 2.396674},
                            {x: 50, y: 2.623846},
                            {x: 51, y: 2.852008},
                            {x: 52, y: 3.08078},
                            {x: 53, y: 3.309743},
                            {x: 54, y: 3.538486},
                            {x: 55, y: 3.766648},
                            {x: 56, y: 3.993949},
                            {x: 57, y: 4.220196},
                            {x: 58, y: 4.445271},
                            {x: 59, y: 4.669111},
                            {x: 60, y: 4.891683},
                            {x: 61, y: 5.112971},
                            {x: 62, y: 5.332968},
                            {x: 63, y: 5.551666},
                            {x: 64, y: 5.769061},
                            {x: 65, y: 5.985144},
                            {x: 66, y: 6.199913},
                            {x: 67, y: 6.413362},
                            {x: 68, y: 6.625492},
                            {x: 69, y: 6.836308},
                            {x: 70, y: 7.045821},
                            {x: 71, y: 7.254048},
                            {x: 72, y: 7.461016},
                            {x: 73, y: 7.66676},
                            {x: 74, y: 7.871329},
                            {x: 75, y: 8.074782},
                            {x: 76, y: 8.277191},
                            {x: 77, y: 8.478641},
                            {x: 78, y: 8.679234},
                            {x: 79, y: 8.879084},
                            {x: 80, y: 9.078323},
                            {x: 81, y: 9.277093},
                            {x: 82, y: 9.475554},
                            {x: 83, y: 9.673875},
                            {x: 84, y: 9.872237},
                            {x: 85, y: 10.07083},
                            {x: 86, y: 10.26985},
                            {x: 87, y: 10.46949},
                            {x: 88, y: 10.66996},
                            {x: 89, y: 10.87145},
                            {x: 90, y: 11.07415},
                            {x: 91, y: 11.27826},
                            {x: 92, y: 11.48393},
                            {x: 93, y: 11.69135},
                            {x: 94, y: 11.90066},
                            {x: 95, y: 12.11201},
                            {x: 96, y: 12.32555},
                            {x: 97, y: 12.54142},
                            {x: 98, y: 12.75976},
                            {x: 99, y: 12.98073},
                            {x: 100, y: 13.20451},
                            {x: 101, y: 13.43129},
                            {x: 102, y: 13.66128},
                            {x: 103, y: 13.89473},
                            {x: 104, y: 14.13193},
						],
                        /*data : [
							{x : 77,y : 8.972919}, {x : 78,y : 9.073268},
						],*/
						borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
						spanGaps : true,
						pointRadius : 0
                    },
					{
						label : 'Ideal mínimo 2',
						data: [
							{x: 45, y: 1.824645},
                            {x: 46, y: 1.932851},
                            {x: 47, y: 2.151303},
                            {x: 48, y: 2.37216},
                            {x: 49, y: 2.595089},
                            {x: 50, y: 2.819827},
                            {x: 51, y: 3.046163},
                            {x: 52, y: 3.273901},
                            {x: 53, y: 3.502832},
                            {x: 54, y: 3.732716},
                            {x: 55, y: 3.963283},
                            {x: 56, y: 4.194251},
                            {x: 57, y: 4.425349},
                            {x: 58, y: 4.656327},
                            {x: 59, y: 4.886965},
                            {x: 60, y: 5.11707},
                            {x: 61, y: 5.346478},
                            {x: 62, y: 5.575047},
                            {x: 63, y: 5.802652},
                            {x: 64, y: 6.029191},
                            {x: 65, y: 6.254575},
                            {x: 66, y: 6.478732},
                            {x: 67, y: 6.701606},
                            {x: 68, y: 6.923153},
                            {x: 69, y: 7.143346},
                            {x: 70, y: 7.362171},
                            {x: 71, y: 7.579625},
                            {x: 72, y: 7.795721},
                            {x: 73, y: 8.010485},
                            {x: 74, y: 8.223954},
                            {x: 75, y: 8.436179},
                            {x: 76, y: 8.64722},
                            {x: 77, y: 8.857151},
                            {x: 78, y: 9.066055},
                            {x: 79, y: 9.274029},
                            {x: 80, y: 9.481178},
                            {x: 81, y: 9.687617},
                            {x: 82, y: 9.893474},
                            {x: 83, y: 10.09889},
                            {x: 84, y: 10.30401},
                            {x: 85, y: 10.509},
                            {x: 86, y: 10.71403},
                            {x: 87, y: 10.9193},
                            {x: 88, y: 11.12501},
                            {x: 89, y: 11.33138},
                            {x: 90, y: 11.53864},
                            {x: 91, y: 11.74703},
                            {x: 92, y: 11.95681},
                            {x: 93, y: 12.16825},
                            {x: 94, y: 12.38161},
                            {x: 95, y: 12.59718},
                            {x: 96, y: 12.81522},
                            {x: 97, y: 13.03602},
                            {x: 98, y: 13.25983},
                            {x: 99, y: 13.48694},
                            {x: 100, y: 13.71761},
                            {x: 101, y: 13.9521},
                            {x: 102, y: 14.1907},
                            {x: 103, y: 14.43368},
                            {x: 104, y: 14.68133},
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal mínimo 3',
						data: [
							{x: 45, y: 2.047708},
                            {x: 46, y: 2.151844},
                            {x: 47, y: 2.36396},
                            {x: 48, y: 2.580565},
                            {x: 49, y: 2.800986},
                            {x: 50, y: 3.024686},
                            {x: 51, y: 3.251251},
                            {x: 52, y: 3.480372},
                            {x: 53, y: 3.711802},
                            {x: 54, y: 3.945306},
                            {x: 55, y: 4.180623},
                            {x: 56, y: 4.417444},
                            {x: 57, y: 4.655423},
                            {x: 58, y: 4.894195},
                            {x: 59, y: 5.133399},
                            {x: 60, y: 5.372695},
                            {x: 61, y: 5.611774},
                            {x: 62, y: 5.85036},
                            {x: 63, y: 6.088213},
                            {x: 64, y: 6.325127},
                            {x: 65, y: 6.560927},
                            {x: 66, y: 6.795472},
                            {x: 67, y: 7.028648},
                            {x: 68, y: 7.260367},
                            {x: 69, y: 7.490568},
                            {x: 70, y: 7.719212},
                            {x: 71, y: 7.946282},
                            {x: 72, y: 8.171783},
                            {x: 73, y: 8.395736},
                            {x: 74, y: 8.61818},
                            {x: 75, y: 8.839171},
                            {x: 76, y: 9.058777},
                            {x: 77, y: 9.277079},
                            {x: 78, y: 9.494173},
                            {x: 79, y: 9.710161},
                            {x: 80, y: 9.925158},
                            {x: 81, y: 10.13929},
                            {x: 82, y: 10.35269},
                            {x: 83, y: 10.5655},
                            {x: 84, y: 10.77788},
                            {x: 85, y: 10.99001},
                            {x: 86, y: 11.20206},
                            {x: 87, y: 11.41424},
                            {x: 88, y: 11.62678},
                            {x: 89, y: 11.83991},
                            {x: 90, y: 12.0539},
                            {x: 91, y: 12.26903},
                            {x: 92, y: 12.48563},
                            {x: 93, y: 12.70401},
                            {x: 94, y: 12.92454},
                            {x: 95, y: 13.14758},
                            {x: 96, y: 13.3735},
                            {x: 97, y: 13.60268},
                            {x: 98, y: 13.83551},
                            {x: 99, y: 14.07234},
                            {x: 100, y: 14.31354},
                            {x: 101, y: 14.55946},
                            {x: 102, y: 14.8104},
                            {x: 103, y: 15.06669},
                            {x: 104, y: 15.32861},
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEAL
					{
						label : 'Ideal',
						data: [
							{x: 45, y: 2.305397},
                            {x: 46, y: 2.403257},
                            {x: 47, y: 2.60602},
                            {x: 48, y: 2.817114},
                            {x: 49, y: 3.035356},
                            {x: 50, y: 3.259693},
                            {x: 51, y: 3.48922},
                            {x: 52, y: 3.723195},
                            {x: 53, y: 3.961035},
                            {x: 54, y: 4.20227},
                            {x: 55, y: 4.446476},
                            {x: 56, y: 4.69322},
                            {x: 57, y: 4.942029},
                            {x: 58, y: 5.192403},
                            {x: 59, y: 5.44383},
                            {x: 60, y: 5.695813},
                            {x: 61, y: 5.94789},
                            {x: 62, y: 6.19964},
                            {x: 63, y: 6.450696},
                            {x: 64, y: 6.700737},
                            {x: 65, y: 6.949494},
                            {x: 66, y: 7.196745},
                            {x: 67, y: 7.442314},
                            {x: 68, y: 7.686067},
                            {x: 69, y: 7.927909},
                            {x: 70, y: 8.167784},
                            {x: 71, y: 8.405667},
                            {x: 72, y: 8.641566},
                            {x: 73, y: 8.87552},
                            {x: 74, y: 9.10759},
                            {x: 75, y: 9.337865},
                            {x: 76, y: 9.566453},
                            {x: 77, y: 9.793482},
                            {x: 78, y: 10.0191},
                            {x: 79, y: 10.24346},
                            {x: 80, y: 10.46675},
                            {x: 81, y: 10.68916},
                            {x: 82, y: 10.91087},
                            {x: 83, y: 11.13211},
                            {x: 84, y: 11.35309},
                            {x: 85, y: 11.57406},
                            {x: 86, y: 11.79525},
                            {x: 87, y: 12.01692},
                            {x: 88, y: 12.23935},
                            {x: 89, y: 12.46282},
                            {x: 90, y: 12.68764},
                            {x: 91, y: 12.91413},
                            {x: 92, y: 13.14264},
                            {x: 93, y: 13.37354},
                            {x: 94, y: 13.60723},
                            {x: 95, y: 13.84412},
                            {x: 96, y: 14.08465},
                            {x: 97, y: 14.32925},
                            {x: 98, y: 14.57837},
                            {x: 99, y: 14.83246},
                            {x: 100, y: 15.09192},
                            {x: 101, y: 15.35716},
                            {x: 102, y: 15.62855},
                            {x: 103, y: 15.90641},
                            {x: 104, y: 16.19104},

						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [
							{x: 45, y: 2.573066},
                            {x: 46, y: 2.662836},
                            {x: 47, y: 2.85389},
                            {x: 48, y: 3.058703},
                            {x: 49, y: 3.275452},
                            {x: 50, y: 3.502419},
                            {x: 51, y: 3.738025},
                            {x: 52, y: 3.980868},
                            {x: 53, y: 4.229754},
                            {x: 54, y: 4.483694},
                            {x: 55, y: 4.741844},
                            {x: 56, y: 5.003448},
                            {x: 57, y: 5.267777},
                            {x: 58, y: 5.534119},
                            {x: 59, y: 5.801773},
                            {x: 60, y: 6.070071},
                            {x: 61, y: 6.338391},
                            {x: 62, y: 6.606172},
                            {x: 63, y: 6.872915},
                            {x: 64, y: 7.138193},
                            {x: 65, y: 7.401643},
                            {x: 66, y: 7.662975},
                            {x: 67, y: 7.921956},
                            {x: 68, y: 8.178421},
                            {x: 69, y: 8.432257},
                            {x: 70, y: 8.683408},
                            {x: 71, y: 8.931871},
                            {x: 72, y: 9.177686},
                            {x: 73, y: 9.42094},
                            {x: 74, y: 9.66176},
                            {x: 75, y: 9.900312},
                            {x: 76, y: 10.13679},
                            {x: 77, y: 10.37143},
                            {x: 78, y: 10.60449},
                            {x: 79, y: 10.83625},
                            {x: 80, y: 11.06702},
                            {x: 81, y: 11.29712},
                            {x: 82, y: 11.5269},
                            {x: 83, y: 11.7567},
                            {x: 84, y: 11.98689},
                            {x: 85, y: 12.21785},
                            {x: 86, y: 12.44994},
                            {x: 87, y: 12.68355},
                            {x: 88, y: 12.91906},
                            {x: 89, y: 13.15685},
                            {x: 90, y: 13.3973},
                            {x: 91, y: 13.64079},
                            {x: 92, y: 13.88771},
                            {x: 93, y: 14.13845},
                            {x: 94, y: 14.39342},
                            {x: 95, y: 14.65302},
                            {x: 96, y: 14.91769},
                            {x: 97, y: 15.18785},
                            {x: 98, y: 15.46392},
                            {x: 99, y: 15.74635},
                            {x: 100, y: 16.03553},
                            {x: 101, y: 16.33184},
                            {x: 102, y: 16.63564},
                            {x: 103, y: 16.94721},
                            {x: 104, y: 17.2668},
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 2',
						data: [
							{x: 45, y: 2.822212},
                            {x: 46, y: 2.903176},
                            {x: 47, y: 3.081735},
                            {x: 48, y: 3.280281},
                            {x: 49, y: 3.496305},
                            {x: 50, y: 3.727426},
                            {x: 51, y: 3.971396},
                            {x: 52, y: 4.226124},
                            {x: 53, y: 4.489708},
                            {x: 54, y: 4.760456},
                            {x: 55, y: 5.036873},
                            {x: 56, y: 5.317644},
                            {x: 57, y: 5.601587},
                            {x: 58, y: 5.887634},
                            {x: 59, y: 6.174807},
                            {x: 60, y: 6.462217},
                            {x: 61, y: 6.749065},
                            {x: 62, y: 7.034645},
                            {x: 63, y: 7.318342},
                            {x: 64, y: 7.599636},
                            {x: 65, y: 7.878098},
                            {x: 66, y: 8.153389},
                            {x: 67, y: 8.425257},
                            {x: 68, y: 8.69353},
                            {x: 69, y: 8.958117},
                            {x: 70, y: 9.219002},
                            {x: 71, y: 9.476239},
                            {x: 72, y: 9.729947},
                            {x: 73, y: 9.98031},
                            {x: 74, y: 10.22757},
                            {x: 75, y: 10.47201},
                            {x: 76, y: 10.71399},
                            {x: 77, y: 10.95388},
                            {x: 78, y: 11.19212},
                            {x: 79, y: 11.42918},
                            {x: 80, y: 11.66555},
                            {x: 81, y: 11.90175},
                            {x: 82, y: 12.13833},
                            {x: 83, y: 12.37586},
                            {x: 84, y: 12.6149},
                            {x: 85, y: 12.85604},
                            {x: 86, y: 13.09985},
                            {x: 87, y: 13.34691},
                            {x: 88, y: 13.59779},
                            {x: 89, y: 13.85303},
                            {x: 90, y: 14.11317},
                            {x: 91, y: 14.37871},
                            {x: 92, y: 14.65014},
                            {x: 93, y: 14.92791},
                            {x: 94, y: 15.21246},
                            {x: 95, y: 15.50421},
                            {x: 96, y: 15.80353},
                            {x: 97, y: 16.11078},
                            {x: 98, y: 16.42632},
                            {x: 99, y: 16.75044},
                            {x: 100, y: 17.08343},
                            {x: 101, y: 17.42553},
                            {x: 102, y: 17.77692},
                            {x: 103, y: 18.13775},
                            {x: 104, y: 18.50808},
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 3',
						data: [
							{x: 45, y: 3.07556},
                            {x: 46, y: 3.146436},
                            {x: 47, y: 3.310893},
                            {x: 48, y: 3.502713},
                            {x: 49, y: 3.718623},
                            {x: 50, y: 3.95557},
                            {x: 51, y: 4.210682},
                            {x: 52, y: 4.481218},
                            {x: 53, y: 4.764536},
                            {x: 54, y: 5.058091},
                            {x: 55, y: 5.359481},
                            {x: 56, y: 5.666498},
                            {x: 57, y: 5.977172},
                            {x: 58, y: 6.289779},
                            {x: 59, y: 6.602836},
                            {x: 60, y: 6.915076},
                            {x: 61, y: 7.225424},
                            {x: 62, y: 7.532981},
                            {x: 63, y: 7.836998},
                            {x: 64, y: 8.136875},
                            {x: 65, y: 8.432145},
                            {x: 66, y: 8.722464},
                            {x: 67, y: 9.007608},
                            {x: 68, y: 9.287465},
                            {x: 69, y: 9.56203},
                            {x: 70, y: 9.831396},
                            {x: 71, y: 10.09575},
                            {x: 72, y: 10.35537},
                            {x: 73, y: 10.61061},
                            {x: 74, y: 10.86191},
                            {x: 75, y: 11.10976},
                            {x: 76, y: 11.35475},
                            {x: 77, y: 11.5975},
                            {x: 78, y: 11.83868},
                            {x: 79, y: 12.07903},
                            {x: 80, y: 12.31932},
                            {x: 81, y: 12.56035},
                            {x: 82, y: 12.80295},
                            {x: 83, y: 13.04798},
                            {x: 84, y: 13.29632},
                            {x: 85, y: 13.54884},
                            {x: 86, y: 13.80645},
                            {x: 87, y: 14.07003},
                            {x: 88, y: 14.34047},
                            {x: 89, y: 14.61861},
                            {x: 90, y: 14.90532},
                            {x: 91, y: 15.20138},
                            {x: 92, y: 15.50755},
                            {x: 93, y: 15.82453},
                            {x: 94, y: 16.15296},
                            {x: 95, y: 16.49337},
                            {x: 96, y: 16.84623},
                            {x: 97, y: 17.2119},
                            {x: 98, y: 17.59064},
                            {x: 99, y: 17.98258},
                            {x: 100, y: 18.38778},
                            {x: 101, y: 18.80615},
                            {x: 102, y: 19.23752},
                            {x: 103, y: 19.68159},
                            {x: 104, y: 20.13796},
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					}
                ],
            }
        }
        options = {{
			responsive : true,
			maintainAspectRatio: false,
			plugins : {
				title : {
					display : true,
					text : 'Gráfica de Crecimiento Peso - Talla (0 a 36 meses)',
					color : '#ED1160',
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
						color : '#ED1160'
                    },
					suggestedMin: 8,
					ticks: {
						stepSize: 1,
						color : '#ED1160',
                        font : {
                            size : 10
                        }
					}
                },
				x: {
                    title : {
                        display : true,
                        text : 'TALLA (CM)',
						color : '#ED1160'
                    },
					type : 'linear',
					ticks: {
						color : '#ED1160',
                        autoSkip : false,
                        maxRotation: 0,
                        minRotation: 0,
						stepSize : 1,
                        font : {
                            size : 10
                        }
					},
                    
                }
            }
        }}
      />
      <div>
		  <RedireccionAGraficos/>
	  </div>
    </div>
  )
}

export default GraficoDeCrecimientoPesoTallaNiña0a36