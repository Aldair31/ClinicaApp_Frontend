/*import React from 'react';
import '../../sass/Dashboard.sass';
import { LineChart, Line, XAxis, YAxis, CartesianGrid }from 'recharts';

const GraficoDeCrecimiento = () => {
	let data = [
		{
			name: 'Nacimiento',
			uv: 50,
      x:11111,
			pv: 0,
		},
		{
			name: '2',
			uv: 59
		},
		{
			name: '4',
			uv: 64,
			pv: 86,
		},
		{
			name: '6',
			uv: 68,
			pv: 98,
		},
		{
			name: '8',
			uv: 71,
			pv: 105,
		},
		{
			name: '10',
			uv: 73,
			pv: 112,
		},
		{
			name: '1 año',
			uv: 76,
			pv: 112,
		},
		{
			name: '2',
			uv: 78,
			pv: 81,
		},
		{
			name: '4',
			uv: 80,
			pv: 86,
		},
		{
			name: '6',
			uv: 82,
			pv: 98,
		},
		{
			name: '8',
			uv: 84,
		},
		{
			name: '10',
			uv: 86,
			pv: 112,
		},
		{
			name: '2 años',
			uv: 88,
			pv: 112,
		},
    {
			name: '2',
			uv: 89,
		},
		{
			name: '4',
			uv: 91,
			pv: 86,
		},
		{
			name: '6',
			uv: 93,
			pv: 98,
		},
		{
			name: '8',
			uv: 93.5,
			pv: 105,
		},
		{
			name: '10',
			uv: 95,
		},
		{
			name: '3 años',
			uv: 96,
			pv: 112,
		},
    {
			name: '2',
			uv: 97.5,
			pv: 81,
		},
		{
			name: '4',
			uv: 98.5,
			pv: 86,
		},
		{
			name: '6',
			uv: 100,
			pv: 98,
		},
		{
			name: '8',
			uv: 101,
			pv: 105,
		},
		{
			name: '10',
			uv: 102,
			pv: 112,
		},
		{
			name: '4 años',
			uv: 103,
			pv: 112,
		},
    {
			name: '2',
			uv: 104.5,
			pv: 81,
		},
		{
			name: '4',
			uv: 105.5,
			pv: 86,
		},
		{
			name: '6',
			uv: 106.5,
			pv: 98,
		},
		{
			name: '8',
			uv: 108,
			pv: 105,
		},
		{
			name: '10',
			uv: 109,
			pv: 112,
		},
		{
			name: '5 años',
			uv: 110,
			pv: 112,
		},
	];
	return (
		<>
			<div className="list">
				<h2 style={{"margin-bottom": "50px"}}>Gráfico de Crecimiento</h2>
                <LineChart width={1200} height={400} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="8 9" />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
			    </LineChart>
			</div>
		</>
	);
};

export default GraficoDeCrecimiento;*/

import React from 'react'
//import '../../sass/Dashboard.sass';
import { Line} from 'react-chartjs-2'
import { ChartOptions } from 'react-chartjs-2'

const BarChart = () => {
  return (
    <div>
      <Line
        data={
            {
                labels: ['Nacimiento', '3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'],
                datasets: [
                    {
                        label: 'Ideal',
                        data: [3.6, 6, 7.9, 9.3, 10.3, 11.1, 11.7, 12.2, 12.7, 13.1, 13.5, 13.9, 14.3],
                        /*backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],*/
                   		/*borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],*/
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 2
                    },
					//IDEALES MÍNIMOS
					{
						label : 'Ideal mínimo',
						data: [2.4, 4.6, 6.3, 7.5, 8.4, 9.1, 9.6, 10, 10.4, 10.7, 11.1, 11.4, 11.7],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 2
					},
					{
						label : 'Ideal mínimo 2',
						data: [2.8, 5, 6.8, 8, 9, 9.7, 10.2, 10.7, 11.1, 11.4, 11.8, 12.1, 12.5],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1
					},
					{
						label : 'Ideal mínimo 3',
						data: [3.2, 5.5, 7.3, 8.6, 9.6, 10.3, 10.9, 11.4, 11.8, 12.2, 12.5, 12.9, 13.3],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [4.5, 7.5, 9.8, 11.5, 12.7, 13.7, 14.4, 15, 15.6, 16.2, 16.7, 17.3, 17.9],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 2
					},
					{
						label : 'Ideal máximo 2',
						data: [4.2, 7, 9.2, 10.7, 11.9, 12.8, 13.5, 14.1, 14.6, 15.1, 15.6, 16.1, 16.6],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1
					},
					{
						label : 'Ideal máximo 3',
						data: [3.9, 6.5, 8.5, 10, 11.1, 11.9, 12.6, 13.1, 13.6, 14.1, 14.5, 15, 15.5],
						borderColor : 'rgba(1, 97, 170, 1)',
                        borderWidth: 1
					},
					//DEL PACIENTE
                    {
                        label: 'Peso',
                        data: [4.2, 7, 8, null, null, 10.5, 12, 12.4, null, null, 15, 17, 19],
                        borderColor : 'rgba(21, 164, 80, 1)',
						/*backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],*/
                        borderWidth: 3,
                        spanGaps : true
                    }
                ],
            }
        }
        options = {{
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

export default BarChart
