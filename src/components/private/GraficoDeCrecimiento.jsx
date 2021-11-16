import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useFiliacionUnica from '../../hooks/useFiliacionUnica'
import useHistClinica from '../../hooks/useHistClinica'


const GraficoDeCrecimiento = () => {
	var datos = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
	let {fechaHistoria, fechaNac, pesoPaciente} = useHistClinica()


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
		datos[meses[i]] = pesoPaciente[i]
	}

  return (
    <div>
		
      <Line
        data={
            {
                labels: ['Nacimiento', '', '1', '', '2', '', '3', '', '4', '', '5', '', '6', '', '7', '', '8', '', '9', '', '10', '', '11', '', '12', '', '13', '', '14', '', '15', '', '16', '', '17', '', '18', '', '19', '', '20', '', '21', '', '22', '', '23', '', '24', '', '25', '', '26', '', '27', '', '28', '', '29', '', '30', '', '31', '', '32', '', '33', '', '34', '', '35', '', '36'],
                //labels: ['Nacimiento', '3 meses', '6 meses', '9 meses', '12 meses', '15 meses', '18 meses', '21 meses', '24 meses', '27 meses', '30 meses', '33 meses', '36 meses'],
				datasets: [
                    {
                        label: 'Ideal',
                        //data: [3.6, 6, 7.9, 9.3, 10.3, 11.1, 11.7, 12.2, 12.7, 13.1, 13.5, 13.9, 14.3],
						data : [3.6, null, null, null, null, null, 6, null, null, null, null, null, 7.9, null, null, null, null, null, 9.3, null, null, null, null, null, 10.3, null, null, null, null, null, 11.1, null, null, null, null, null, 11.7, null, null, null, null, null, 12.2, null, null, null, null, null, 12.7, null, null, null, null, null, 13.1, null, null, null, null, null, 13.5, null, null, null, null, null, 13.9, null, null, null, null, null, 14.3, 15],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 2,
						spanGaps : true
                    },
					//IDEALES MÍNIMOS
					{
						label : 'Ideal mínimo',
						data: [2.4, null, null, null, null, null, 4.6, null, null, null, null, null, 6.3, null, null, null, null, null, 7.5, null, null, null, null, null, 8.4, null, null, null, null, null, 9.1, null, null, null, null, null, 9.6, null, null, null, null, null, 10, null, null, null, null, null, 10.4, null, null, null, null, null, 10.7, null, null, null, null, null, 11.1, null, null, null, null, null, 11.4, null, null, null, null, null, 11.7],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 2,
                        spanGaps : true
					},
					{
						label : 'Ideal mínimo 2',
						data: [2.8, null, null, null, null, null, 5, null, null, null, null, null, 6.8, null, null, null, null, null, 8, null, null, null, null, null, 9, null, null, null, null, null, 9.7, null, null, null, null, null, 10.2, null, null, null, null, null, 10.7, null, null, null, null, null, 11.1, null, null, null, null, null, 11.4, null, null, null, null, null, 11.8, null, null, null, null, null, 12.1, null, null, null, null, null, 12.5],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					{
						label : 'Ideal mínimo 3',
						data: [3.2, null, null, null, null, null, 5.5, null, null, null, null, null, 7.3, null, null, null, null, null, 8.6, null, null, null, null, null, 9.6, null, null, null, null, null, 10.3, null, null, null, null, null, 10.9, null, null, null, null, null, 11.4, null, null, null, null, null, 11.8, null, null, null, null, null, 12.2, null, null, null, null, null, 12.5, null, null, null,null, null, 12.9, null, null, null, null, null, 13.3],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [4.5, null, null, null, null, null, 7.5, null, null, null, null, null, 9.8, null, null, null, null, null, 11.5, null, null, null, null, null, 12.7, null, null, null, null, null, 13.7, null, null, null, null, null, 14.4, null, null, null, null, null, 15, null, null, null, null, null, 15.6, null, null, null, null, null, 16.2, null, null, null, null, null, 16.7, null, null, null, null, null, 17.3, null, null, null, null, null, 17.9],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 2,
                        spanGaps : true
					},
					{
						label : 'Ideal máximo 2',
						data: [4.2, null, null, null, null, null, 7, null, null, null, null, null, 9.2, null, null, null, null, null, 10.7, null, null, null, null, null, 11.9, null, null, null, null, null, 12.8, null, null, null, null, null, 13.5, null, null, null, null, null, 14.1, null, null, null, null, null, 14.6, null, null, null, null, null, 15.1, null, null, null, null, null, 15.6, null, null, null, null, null, 16.1, null, null, null, null, null, 16.6],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					{
						label : 'Ideal máximo 3',
						data: [3.9, null, null, null, null, null, 6.5, null, null, null, null, null, 8.5, null, null, null, null, null, 10, null, null, null, null, null, 11.1, null, null, null, null, null, 11.9, null, null, null, null, null, 12.6, null, null, null, null, null, 13.1, null, null, null, null, null, 13.6, null, null, null, null, null, 14.1, null, null, null, null, null, 14.5, null, null, null, null, null, 15, null, null, null, null, null, 15.5],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1,
                        spanGaps : true
					},
					//DEL PACIENTE
                    {
                        label: 'Peso',
                        //data: [4.2, null, null, 7, null, null, 8, null, null, 10.5, null, null, 12, null, null, 12.4, null, null, null, null, null, null, null, null, null, null, 13, null, null, null, null, null, null, 14, null, null, 15],
                        data : datos,
						borderColor : 'red',
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
					text : 'Gráfica de Crecimiento Peso - Edad',
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
                    title : {
                        display : true,
                        text : 'PESO (KG)',
						color : '#0161AA'
                    },
					suggestedMin: 2,
					ticks: {
						stepSize: 1
					  }
                },
				x: {
                    title : {
                        display : true,
                        text : 'EDAD (MESES)',
						color : '#0161AA'
                    }
                }
            }
        }}
      />
    </div>
  )
}

export default GraficoDeCrecimiento
