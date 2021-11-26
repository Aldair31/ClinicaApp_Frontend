import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'


const GraficoDeCrecimientoPesoTallaNiña = () => {
	var datos = []
	let {fechaHistoria, fechaNac, pesoPaciente, tallaPaciente} = useHistClinica()

	const tallaypeso = [] 

	for (let item in tallaPaciente){
        if(moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months') >= 24){
			tallaypeso.push({x:tallaPaciente[item], y:pesoPaciente[item]})
        }
    }

	datos = tallaypeso.reverse()

   return (
    <div>	
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
							{x:77 , y:8.739262, },
                            {x:78 , y:8.839168, },
                            {x:79 , y:9.038517, },
                            {x:80 , y:9.237369, },
                            {x:81 , y:9.435878, },
                            {x:82 , y:9.634213, },
                            {x:83 , y:9.832552, },
                            {x:84 , y:10.03108, },
                            {x:85 , y:10.23, },
                            {x:86 , y:10.4295, },
                            {x:87 , y:10.62979, },
                            {x:88 , y:10.83106, },
                            {x:89 , y:11.03351, },
                            {x:90 , y:11.23732, },
                            {x:91 , y:11.44266, },
                            {x:92 , y:11.64972, },
                            {x:93 , y:11.85864, },
                            {x:94 , y:12.06957, },
                            {x:95 , y:12.28266, },
                            {x:96 , y:12.49805, },
                            {x:97 , y:12.71589, },
                            {x:98 , y:12.93632, },
                            {x:99 , y:13.15952, },
                            {x:100 , y:13.38568, },
                            {x:101 , y:13.61501, },
                            {x:102 , y:13.84775, },
                            {x:103 , y:14.08417, },
                            {x:104 , y:14.32457, },
                            {x:105 , y:14.56928, },
                            {x:106 , y:14.81863, },
                            {x:107 , y:15.073, },
                            {x:108 , y:15.33279, },
                            {x:109 , y:15.5984, },
                            {x:110 , y:15.87028, },
                            {x:111 , y:16.14885, },
                            {x:112 , y:16.43458, },
                            {x:113 , y:16.72794, },
                            {x:114 , y:17.02942, },
                            {x:115 , y:17.33949, },
                            {x:116 , y:17.65866, },
                            {x:117 , y:17.98742, },
                            {x:118 , y:18.32629, },
                            {x:119 , y:18.67575, },
                            {x:120 , y:19.0363, },
                            {x:121 , y:19.40841, },
                            {x:122 , y:19.79251, },
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
							{x:77 , y:9.128541, },
                            {x:78 , y:9.232504, },
                            {x:79 , y:9.439809, },
                            {x:80 , y:9.64638, },
                            {x:81 , y:9.852343, },
                            {x:82 , y:10.05783, },
                            {x:83 , y:10.263, },
                            {x:84 , y:10.468, },
                            {x:85 , y:10.67301, },
                            {x:86 , y:10.87822, },
                            {x:87 , y:11.08383, },
                            {x:88 , y:11.29004, },
                            {x:89 , y:11.4971, },
                            {x:90 , y:11.70525, },
                            {x:91 , y:11.91473, },
                            {x:92 , y:12.12582, },
                            {x:93 , y:12.33877, },
                            {x:94 , y:12.55388, },
                            {x:95 , y:12.7714, },
                            {x:96 , y:12.99162, },
                            {x:97 , y:13.21481, },
                            {x:98 , y:13.44124, },
                            {x:99 , y:13.67117, },
                            {x:100 , y:13.90488, },
                            {x:101 , y:14.14264, },
                            {x:102 , y:14.38472, },
                            {x:103 , y:14.63141, },
                            {x:104 , y:14.88299, },
                            {x:105 , y:15.13976, },
                            {x:106 , y:15.40202, },
                            {x:107 , y:15.67008, },
                            {x:108 , y:15.94428, },
                            {x:109 , y:16.22493, },
                            {x:110 , y:16.51236, },
                            {x:111 , y:16.80693, },
                            {x:112 , y:17.10897, },
                            {x:113 , y:17.41883, },
                            {x:114 , y:17.73687, },
                            {x:115 , y:18.06344, },
                            {x:116 , y:18.39889, },
                            {x:117 , y:18.74358, },
                            {x:118 , y:19.09787, },
                            {x:119 , y:19.46211, },
                            {x:120 , y:19.83665, },
                            {x:121 , y:20.22183, },
                            {x:122 , y:20.618, },
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal mínimo 3',
						data: [
							{x:77 , y:9.55908, },
                            {x:78 , y:9.667046, },
                            {x:79 , y:9.882232, },
                            {x:80 , y:10.09653, },
                            {x:81 , y:10.31006, },
                            {x:82 , y:10.52298, },
                            {x:83 , y:10.73543, },
                            {x:84 , y:10.94759, },
                            {x:85 , y:11.15965, },
                            {x:86 , y:11.37179, },
                            {x:87 , y:11.58423, },
                            {x:88 , y:11.79722, },
                            {x:89 , y:12.01102, },
                            {x:90 , y:12.2259, },
                            {x:91 , y:12.44217, },
                            {x:92 , y:12.66017, },
                            {x:93 , y:12.88025, },
                            {x:94 , y:13.10275, },
                            {x:95 , y:13.32806, },
                            {x:96 , y:13.55657, },
                            {x:97 , y:13.78863, },
                            {x:98 , y:14.02464, },
                            {x:99 , y:14.26494, },
                            {x:100 , y:14.50988, },
                            {x:101 , y:14.75979, },
                            {x:102 , y:15.01499, },
                            {x:103 , y:15.27576, },
                            {x:104 , y:15.54239, },
                            {x:105 , y:15.81515, },
                            {x:106 , y:16.09428, },
                            {x:107 , y:16.38005, },
                            {x:108 , y:16.67269, },
                            {x:109 , y:16.97241, },
                            {x:110 , y:17.27945, },
                            {x:111 , y:17.59401, },
                            {x:112 , y:17.9163, },
                            {x:113 , y:18.2465, },
                            {x:114 , y:18.58482, },
                            {x:115 , y:18.93142, },
                            {x:116 , y:19.28647, },
                            {x:117 , y:19.65013, },
                            {x:118 , y:20.02256, },
                            {x:119 , y:20.40389, },
                            {x:120 , y:20.79427, },
                            {x:121 , y:21.19384, },
                            {x:122 , y:21.60275, },
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
							{x:77 , y:10.08653, },
                            {x:78 , y:10.19868, },
                            {x:79 , y:10.42217, },
                            {x:80 , y:10.64474, },
                            {x:81 , y:10.86657, },
                            {x:82 , y:11.08789, },
                            {x:83 , y:11.3089, },
                            {x:84 , y:11.52985, },
                            {x:85 , y:11.75098, },
                            {x:86 , y:11.97253, },
                            {x:87 , y:12.19479, },
                            {x:88 , y:12.41803, },
                            {x:89 , y:12.64255, },
                            {x:90 , y:12.86868, },
                            {x:91 , y:13.09676, },
                            {x:92 , y:13.32715, },
                            {x:93 , y:13.56025, },
                            {x:94 , y:13.79647, },
                            {x:95 , y:14.03623, },
                            {x:96 , y:14.27998, },
                            {x:97 , y:14.52817, },
                            {x:98 , y:14.78122, },
                            {x:99 , y:15.03958, },
                            {x:100 , y:15.30363, },
                            {x:101 , y:15.57376, },
                            {x:102 , y:15.8503, },
                            {x:103 , y:16.13356, },
                            {x:104 , y:16.42379, },
                            {x:105 , y:16.72122, },
                            {x:106 , y:17.02605, },
                            {x:107 , y:17.33841, },
                            {x:108 , y:17.65844, },
                            {x:109 , y:17.98623, },
                            {x:110 , y:18.32182, },
                            {x:111 , y:18.66524, },
                            {x:112 , y:19.01649, },
                            {x:113 , y:19.37554, },
                            {x:114 , y:19.74231, },
                            {x:115 , y:20.11672, },
                            {x:116 , y:20.49864, },
                            {x:117 , y:20.88791, },
                            {x:118 , y:21.28436, },
                            {x:119 , y:21.68779, },
                            {x:120 , y:22.09797, },
                            {x:121 , y:22.51467, },
                            {x:122 , y:22.93767, },
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
							{x:77 , y:10.67414, },
                            {x:78 , y:10.78999, },
                            {x:79 , y:11.02093, },
                            {x:80 , y:11.25114, },
                            {x:81 , y:11.48095, },
                            {x:82 , y:11.71072, },
                            {x:83 , y:11.9408, },
                            {x:84 , y:12.17158, },
                            {x:85 , y:12.40341, },
                            {x:86 , y:12.63669, },
                            {x:87 , y:12.87179, },
                            {x:88 , y:13.10909, },
                            {x:89 , y:13.34898, },
                            {x:90 , y:13.59183, },
                            {x:91 , y:13.83803, },
                            {x:92 , y:14.08798, },
                            {x:93 , y:14.34207, },
                            {x:94 , y:14.60071, },
                            {x:95 , y:14.86433, },
                            {x:96 , y:15.13336, },
                            {x:97 , y:15.40821, },
                            {x:98 , y:15.68934, },
                            {x:99 , y:15.97713, },
                            {x:100 , y:16.27199, },
                            {x:101 , y:16.57426, },
                            {x:102 , y:16.88426, },
                            {x:103 , y:17.20223, },
                            {x:104 , y:17.52837, },
                            {x:105 , y:17.86283, },
                            {x:106 , y:18.20568, },
                            {x:107 , y:18.55693, },
                            {x:108 , y:18.91652, },
                            {x:109 , y:19.28434, },
                            {x:110 , y:19.66021, },
                            {x:111 , y:20.04389, },
                            {x:112 , y:20.43506, },
                            {x:113 , y:20.83335, },
                            {x:114 , y:21.23832, },
                            {x:115 , y:21.64947, },
                            {x:116 , y:22.06623, },
                            {x:117 , y:22.48796, },
                            {x:118 , y:22.91396, },
                            {x:119 , y:23.34347, },
                            {x:120 , y:23.77567, },
                            {x:121 , y:24.20969, },
                            {x:122 , y:24.6446, },
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 2',
						data: [
							{x:77 , y:11.01794, },
                            {x:78 , y:11.13547, },
                            {x:79 , y:11.36987, },
                            {x:80 , y:11.60378, },
                            {x:81 , y:11.83763, },
                            {x:82 , y:12.0719, },
                            {x:83 , y:12.30707, },
                            {x:84 , y:12.54361, },
                            {x:85 , y:12.78201, },
                            {x:86 , y:13.02277, },
                            {x:87 , y:13.26634, },
                            {x:88 , y:13.51322, },
                            {x:89 , y:13.76384, },
                            {x:90 , y:14.01867, },
                            {x:91 , y:14.27813, },
                            {x:92 , y:14.54265, },
                            {x:93 , y:14.81265, },
                            {x:94 , y:15.08852, },
                            {x:95 , y:15.37066, },
                            {x:96 , y:15.65948, },
                            {x:97 , y:15.95536, },
                            {x:98 , y:16.25867, },
                            {x:99 , y:16.56976, },
                            {x:100 , y:16.88895, },
                            {x:101 , y:17.21654, },
                            {x:102 , y:17.55275, },
                            {x:103 , y:17.89776, },
                            {x:104 , y:18.25168, },
                            {x:105 , y:18.61456, },
                            {x:106 , y:18.98636, },
                            {x:107 , y:19.36695, },
                            {x:108 , y:19.75615, },
                            {x:109 , y:20.15367, },
                            {x:110 , y:20.55913, },
                            {x:111 , y:20.97209, },
                            {x:112 , y:21.39198, },
                            {x:113 , y:21.81818, },
                            {x:114 , y:22.24996, },
                            {x:115 , y:22.68648, },
                            {x:116 , y:23.12683, },
                            {x:117 , y:23.56999, },
                            {x:118 , y:24.01485, },
                            {x:119 , y:24.46018, },
                            {x:120 , y:24.90469, },
                            {x:121 , y:25.34697, },
                            {x:122 , y:25.78553, },
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 3',
						data: [
							{x:77 , y:11.26334, },
                            {x:78 , y:11.38184, },
                            {x:79 , y:11.61831, },
                            {x:80 , y:11.8545, },
                            {x:81 , y:12.09096, },
                            {x:82 , y:12.32825, },
                            {x:83 , y:12.56694, },
                            {x:84 , y:12.80761, },
                            {x:85 , y:13.05084, },
                            {x:86 , y:13.29721, },
                            {x:87 , y:13.54728, },
                            {x:88 , y:13.80161, },
                            {x:89 , y:14.06072, },
                            {x:90 , y:14.32514, },
                            {x:91 , y:14.59536, },
                            {x:92 , y:14.87183, },
                            {x:93 , y:15.15499, },
                            {x:94 , y:15.44526, },
                            {x:95 , y:15.74304, },
                            {x:96 , y:16.04868, },
                            {x:97 , y:16.36253, },
                            {x:98 , y:16.68491, },
                            {x:99 , y:17.01611, },
                            {x:100 , y:17.35637, },
                            {x:101 , y:17.70589, },
                            {x:102 , y:18.06482, },
                            {x:103 , y:18.43325, },
                            {x:104 , y:18.81119, },
                            {x:105 , y:19.19857, },
                            {x:106 , y:19.59524, },
                            {x:107 , y:20.00094, },
                            {x:108 , y:20.41536, },
                            {x:109 , y:20.83803, },
                            {x:110 , y:21.26842, },
                            {x:111 , y:21.70587, },
                            {x:112 , y:22.14963, },
                            {x:113 , y:22.59881, },
                            {x:114 , y:23.05244, },
                            {x:115 , y:23.5094, },
                            {x:116 , y:23.96846, },
                            {x:117 , y:24.42826, },
                            {x:118 , y:24.88734, },
                            {x:119 , y:25.34406, },
                            {x:120 , y:25.7967, },
                            {x:121 , y:26.24338, },
                            {x:122 , y:26.68209, },
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
                    {
						label : 'Ideal máximo 4',
						data: [
							{x:77 , y:11.91084, },
                            {x:78 , y:12.03099, },
                            {x:79 , y:12.27123, },
                            {x:80 , y:12.51205, },
                            {x:81 , y:12.75426, },
                            {x:82 , y:12.99874, },
                            {x:83 , y:13.24634, },
                            {x:84 , y:13.49796, },
                            {x:85 , y:13.75448, },
                            {x:86 , y:14.0168, },
                            {x:87 , y:14.28579, },
                            {x:88 , y:14.56233, },
                            {x:89 , y:14.84725, },
                            {x:90 , y:15.14138, },
                            {x:91 , y:15.44547, },
                            {x:92 , y:15.76024, },
                            {x:93 , y:16.08633, },
                            {x:94 , y:16.42431, },
                            {x:95 , y:16.77465, },
                            {x:96 , y:17.13773, },
                            {x:97 , y:17.51384, },
                            {x:98 , y:17.90314, },
                            {x:99 , y:18.30568, },
                            {x:100 , y:18.72143, },
                            {x:101 , y:19.15022, },
                            {x:102 , y:19.59178, },
                            {x:103 , y:20.04572, },
                            {x:104 , y:20.51155, },
                            {x:105 , y:20.98864, },
                            {x:106 , y:21.47624, },
                            {x:107 , y:21.97348, },
                            {x:108 , y:22.47934, },
                            {x:109 , y:22.99265, },
                            {x:110 , y:23.51209, },
                            {x:111 , y:24.03617, },
                            {x:112 , y:24.56323, },
                            {x:113 , y:25.09144, },
                            {x:114 , y:25.61877, },
                            {x:115 , y:26.14298, },
                            {x:116 , y:26.66165, },
                            {x:117 , y:27.17213, },
                            {x:118 , y:27.67155, },
                            {x:119 , y:28.1568, },
                            {x:120 , y:28.62455, },
                            {x:121 , y:29.07117, },
                            {x:122 , y:29.4928, },
						],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					}
                ],
            }
        }
        options = {{
			responsive : true,
			plugins : {
				title : {
					display : true,
					text : 'Gráfica de Crecimiento Peso - Talla (2 a 20 años)',
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
    </div>
  )
}

export default GraficoDeCrecimientoPesoTallaNiña