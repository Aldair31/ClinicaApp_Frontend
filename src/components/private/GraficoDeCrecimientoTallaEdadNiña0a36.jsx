import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'


const GraficoDeCrecimientoTallaEdadNiña0a36 = () => {
	var datos = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
	let {fechaHistoria, fechaNac, tallaPaciente} = useHistClinica()


	let meses = [] 

	for (let item in fechaHistoria){
		console.log(moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'days'))
		if((moment.duration(moment(fechaHistoria[item]).diff(moment(fechaNac[0])))).days() > 15){
			meses[item] = (Math.round((parseInt(moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'days') / 15))/2)) * 2
		}
		else{
			meses[item] = (Math.round((parseInt(moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'days') / 15))/2)) * 2 + 1
		}
	}

	for (var i = 0; i<meses.length; i++){
		datos[meses[i]] = tallaPaciente[i]
	}

  return (
    <div>
		
      <Line
        data={
            {
                labels: ['Nac', '', '1', '', '2', '', '3', '', '4', '', '5', '', '6', '', '7', '', '8', '', '9', '', '10', '', '11', '', '12', '', '13', '', '14', '', '15', '', '16', '', '17', '', '18', '', '19', '', '20', '', '21', '', '22', '', '23', '', '24', '', '25', '', '26', '', '27', '', '28', '', '29', '', '30', '', '31', '', '32', '', '33', '', '34', '', '35', '', '36'],
                //labels: ['Nacimiento', '3 meses', '6 meses', '9 meses', '12 meses', '15 meses', '18 meses', '21 meses', '24 meses', '27 meses', '30 meses', '33 meses', '36 meses'],
				datasets: [
                    {
                        label: 'Ideal',
                        //data: [3.6, 6, 7.9, 9.3, 10.3, 11.1, 11.7, 12.2, 12.7, 13.1, 13.5, 13.9, 14.3],
						data : [49.5, null, null, null, null, null, 59, null, null, null, null, null, 65, null, null, null, null, null, 70, null, null, null, null, null, 74, null, null, null, null, null, 77.2, null, null, null, null, null, 80.2, null, null, null, null, null, 83, null, null, null, null, null, 85.8, null, null, null, null, null, 88.4, null, null, null, null, null, 90.8, null, null, null, null, null, 93, null, null, null, null, null, 94.8],
						borderColor : 'rgba(237, 17, 96, 1)',
                        borderWidth: 2,
						spanGaps : true
                    },
					//IDEALES MÍNIMOS
					{
						label : 'Ideal mínimo',
						data: [45.2, null, null, null, null, null, 54.8, null, null, null, null, null, 60.2, null, null, null, null, null, 64.8, null, null, null, null, null, 68.2, null, null, null, null, null, 71.5, null, null, null, null, null, 74, null, null, null, null, null, 77, null, null, null, null, null, 79.2, null, null, null, null, null, 81.5, null, null, null, null, null, 83.8, null, null, null, null, null, 85.8, null, null, null, null, null, 87.4],
						borderColor : 'rgba(237, 17, 96, 1)',
                        borderWidth: 2,
                        spanGaps : true
					},
					{
						label : 'Ideal mínimo 2',
						data: [46.8, null, null, null, null, null, 56, null, null, null, null, null, 62, null, null, null, null, null, 66.4, null, null, null, null, null, 70, null, null, null, null, null, 73.2, null, null, null, null, null, 76, null, null, null, null, null, 79, null, null, null, null, null, 81.4, null, null, null, null, null, 83.8, null, null, null, null, null, 86, null, null, null, null, null, 88, null, null, null, null, null, 89.8],
						borderColor : 'rgba(237, 17, 96, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					{
						label : 'Ideal mínimo 3',
						data: [48, null, null, null, null, null, 57.8, null, null, null, null, null, 63.5, null, null, null, null, null, 68, null, null, null, null, null, 72, null, null, null, null, null, 75, null, null, null, null, null, 78, null, null, null, null, null, 81, null, null, null, null, null, 83.4, null, null, null, null, null, 86, null, null, null, null, null, 88.2, null, null, null, null, null, 90.2, null, null, null, null, null, 92],
						borderColor : 'rgba(237, 17, 96, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [54.8, null, null, null, null, null, 64, null, null, null, null, null, 70, null, null, null, null, null, 75, null, null, null, null, null, 79, null, null, null, null, null, 83, null, null, null, null, null, 86.2, null, null, null, null, null, 89.4, null, null, null, null, null, 92.4, null, null, null, null, null, 95, null, null, null, null, null, 98, null, null, null, null, null, 100, null, null, null, null, null, 102.2],
						borderColor : 'rgba(237, 17, 96, 1)',
                        borderWidth: 2,
                        spanGaps : true
					},
					{
						label : 'Ideal máximo 2',
						data: [53, null, null, null, null, null, 62.2, null, null, null, null, null, 68.5, null, null, null, null, null, 73.2, null, null, null, null, null, 77.2, null, null, null, null, null, 81, null, null, null, null, null, 84.2, null, null, null, null, null, 87.2, null, null, null, null, null, 90.2, null, null, null, null, null, 93, null, null, null, null, null, 95.5, null, null, null, null, null, 98, null, null, null, null, null, 100],
						borderColor : 'rgba(237, 17, 96, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					{
						label : 'Ideal máximo 3',
						data: [51, null, null, null, null, null, 61, null, null, null, null, null, 67, null, null, null, null, null, 71.8, null, null, null, null, null, 75.8, null, null, null, null, null, 79.2, null, null, null, null, null, 82.4, null, null, null, null, null, 85.2, null, null, null, null, null, 88, null, null, null, null, null, 91, null, null, null, null, null, 93.2, null, null, null, null, null, 95.5, null, null, null, null, null, 97.4],
						borderColor : 'rgba(237, 17, 96, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					//DEL PACIENTE
                    {
                        label: 'Talla',
                        //data: [4.2, null, null, 7, null, null, 8, null, null, 10.5, null, null, 12, null, null, 12.4, null, null, null, null, null, null, null, null, null, null, 13, null, null, null, null, null, null, 14, null, null, 15],
                        data : datos,
						borderColor : 'turquoise',
                        borderWidth: 3,
                        spanGaps : true
                    }
                ],
            }
        }
        options = {{
			responsive : true,
			elements : {
				point : {
					radius : 2
				}
			},
			plugins : {
				title : {
					display : true,
					text : 'Gráfica de Crecimiento Talla - Edad',
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
                    title : {
                        display : true,
                        text : 'TALLA (CM)',
						color : '#ED1160'
                    },
					suggestedMin: 40,
					ticks: {
						stepSize: 5,
						color : '#ED1160'
					}
                },
				x: {
                    title : {
                        display : true,
                        text : 'EDAD (MESES)',
						color : '#ED1160'
                    },
					ticks: {
						color : '#ED1160',
                        autoSkip : false,
                        maxRotation: 0,
                        minRotation: 0
					}
                }
            }
        }}
      />
    </div>
  )
}

export default GraficoDeCrecimientoTallaEdadNiña0a36