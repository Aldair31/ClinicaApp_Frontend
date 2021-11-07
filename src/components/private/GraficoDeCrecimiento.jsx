import React from 'react';
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
                <LineChart width={800} height={400} data={data}>
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

export default GraficoDeCrecimiento;
