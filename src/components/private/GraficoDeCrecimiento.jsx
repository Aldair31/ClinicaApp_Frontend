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

const BarChart = () => {
  return (
    <div>
      <Line
        data={
            {
                labels: ['1 año', '2 años', '3 años', '4 años', '5 años', '6 años', '7 años', '8 años'],
                datasets: [
                    {
                        label: 'Peso',
                        data: [12, 12, 12, 12, 12, 12],
                        backgroundColor: [
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
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Edad',
                        data: [14, 15, 16, null, null, 9, 10, 12],
                        backgroundColor: [
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
                        ],
                        borderWidth: 1 ,
                        spanGaps : true
                    }
                ]
            }
        }
        height={400}
        width={600}
      />
    </div>
  )
}

export default BarChart
