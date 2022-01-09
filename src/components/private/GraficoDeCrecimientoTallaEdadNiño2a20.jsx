import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'


const GraficoDeCrecimientoTallaEdadNiño2a20 = () => {
	var datos = []
	let {fechaHistoria, fechaNac, tallaPaciente} = useHistClinica()


	let meses = [] 

	for (let item in fechaHistoria){
		if(moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months') >= 24){
			if((moment.duration(moment(fechaHistoria[item]).diff(moment(fechaNac[0])))).days() > 15){
				meses[item] = (moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months')) - 23
			}
			else{
				meses[item] = (moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months')) - 24
			}
		}

	}

	for (var i = 0; i<meses.length; i++){
		datos[meses[i]] = tallaPaciente[i]
	}

  return (
    <div style={{maxWidth: '99%', height: '80vh'}}>
		
      <Line
        data={
            {
                labels: ['2', '', '', '', '', '', '', '', '', '', '', '', '3', '', '', '', '', '', '', '', '', '', '',  '', '4', '', '', '', '', '', '', '', '', '', '',  '', '5', '', '', '', '', '', '', '', '', '', '',  '', '6', '', '', '', '', '', '', '', '', '', '',  '', '7', '', '', '', '', '', '', '', '', '', '',  '', '8', '', '', '', '', '', '', '', '', '', '', '',  '9', '', '', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', '', '',  '', '11', '', '', '', '', '', '', '', '', '', '',  '', '12', '', '', '', '', '', '', '', '', '', '',  '', '13', '', '', '', '', '', '', '', '', '', '',  '', '14', '', '', '', '', '', '', '', '', '', '',  '', '15', '', '', '', '', '', '', '', '', '', '',  '', '16', '', '', '', '', '', '', '', '', '', '',  '', '17', '', '', '', '', '', '', '', '', '', '',  '', '18', '', '', '', '', '', '', '', '', '', '',  '', '19', '', '', '', '', '', '', '', '', '', '',  '', '20'],
				datasets: [
					//DEL PACIENTE
                    {
                        label: 'Talla',
                        data : datos,
                        borderColor : 'red',
						borderWidth: 3,
                        spanGaps : true,
						pointRadius : 2
                    },
					//IDEALES MÍNIMOS
                    {
                        label: 'Ideal mínimo',
						data : [80.26037, 81.00529, 81.73416, 82.44846, 83.14945, 83.83819, 84.51558, 85.18238, 85.83925, 86.48678, 87.12552, 87.75597, 88.37864, 88.93297, 89.47916, 90.01766, 90.54891, 91.07337, 91.59152, 92.10382, 92.61073, 93.11271, 93.61022, 94.10371, 94.59361, 95.08035, 95.56435, 96.046, 96.52568, 97.00376, 97.48058, 97.95648, 98.43175, 98.90667, 99.38151, 99.8565, 100.3318, 100.8077, 101.2843, 101.7618, 102.2401, 102.7195, 103.2, 103.6815, 104.1642, 104.6479, 105.1326, 105.6183, 106.1048, 106.5921, 107.0799, 107.5682, 108.0566, 108.5451, 109.0335, 109.5214, 110.0086, 110.495, 110.9801, 111.4638, 111.9459, 112.4259, 112.9036, 113.3789, 113.8513, 114.3206, 114.7867, 115.2491, 115.7077, 116.1623, 116.6127, 117.0587, 117.5, 117.9366, 118.3683, 118.7949, 119.2165, 119.633, 120.0442, 120.4502, 120.851, 121.2467, 121.6372, 122.0228, 122.4034, 122.7793, 123.1506, 123.5175, 123.8803, 124.2391, 124.5943, 124.9462, 125.295, 125.6413, 125.9852, 126.3272, 126.6678, 127.0073, 127.3462, 127.6851, 128.0243, 128.3643, 128.7058, 129.0491, 129.3949, 129.7436, 130.0958, 130.452, 130.8127, 131.1785, 131.5498, 131.9272, 132.311, 132.7018, 133.1, 133.5059, 133.9199, 134.3423, 134.7733, 135.2132, 135.6621, 136.1202, 136.5875, 137.064, 137.5496, 138.0442, 138.5477, 139.0597, 139.5799, 140.108, 140.6435, 141.1858, 141.7345, 142.2889, 142.8482, 143.4118, 143.9788, 144.5483, 145.1196, 145.6915, 146.2633, 146.8339, 147.4023, 147.9674, 148.5284, 149.0842, 149.6338, 150.1763, 150.7107, 151.2363, 151.7521, 152.2575, 152.7517, 153.2342, 153.7043, 154.1615, 154.6056, 155.036, 155.4526, 155.8552, 156.2436, 156.6178, 156.9777, 157.3235, 157.6551, 157.9729, 158.277, 158.5676, 158.845, 159.1095, 159.3614, 159.6011, 159.829, 160.0455, 160.2508, 160.4456, 160.63, 160.8046, 160.9697, 161.1258, 161.2733, 161.4125, 161.5438, 161.6676, 161.7843, 161.8942, 161.9977, 162.0951, 162.1866, 162.2727, 162.3537, 162.4297, 162.5011, 162.5681, 162.631, 162.69, 162.7453, 162.7972, 162.8458, 162.8914, 162.9341, 162.9741, 163.0115, 163.0465, 163.0793, 163.11, 163.1387, 163.1656, 163.1907, 163.2142, 163.2361, 163.2566, 163.2757, 163.2936, 163.3103, 163.3259, 163.3333],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 2,
						spanGaps : true,
						pointRadius : 0
                    },
					{
						label : 'Ideal mínimo 2',
						data: [82.36401, 83.11387, 83.84716, 84.56534, 85.26962, 85.96098, 86.64027, 87.3082, 87.9654, 88.61244, 89.24986, 89.87816, 90.49789, 91.08608, 91.66589, 92.23779, 92.80225, 93.35972, 93.91068, 94.45556, 94.99482, 95.52888, 96.05817, 96.5831, 97.10407, 97.62147, 98.13566, 98.64701, 99.15585, 99.6625, 100.1673, 100.6705, 101.1723, 101.6731, 102.173, 102.6723, 103.1712, 103.6697, 104.1682, 104.6666, 105.1651, 105.6638, 106.1627, 106.6619, 107.1614, 107.6611, 108.1612, 108.6614, 109.1619, 109.6624, 110.1629, 110.6633, 111.1634, 111.6631, 112.1623, 112.6608, 113.1583, 113.6548, 114.1499, 114.6436, 115.1356, 115.6257, 116.1136, 116.5992, 117.0822, 117.5625, 118.0398, 118.5139, 118.9847, 119.4519, 119.9153, 120.3749, 120.8305, 121.2819, 121.729, 122.1716, 122.6099, 123.0435, 123.4726, 123.897, 124.3168, 124.7319, 125.1425, 125.5485, 125.9501, 126.3473, 126.7402, 127.1291, 127.514, 127.8953, 128.273, 128.6474, 129.0189, 129.3876, 129.754, 130.1183, 130.4809, 130.8422, 131.2026, 131.5625, 131.9224, 132.2828, 132.6441, 133.0068, 133.3714, 133.7386, 134.1089, 134.4828, 134.8608, 135.2437, 135.6318, 136.026, 136.4266, 136.8343, 137.2496, 137.673, 138.105, 138.5461, 138.9968, 139.4573, 139.928, 140.4091, 140.9009, 141.4034, 141.9167, 142.4407, 142.9752, 143.52, 144.0746, 144.6388, 145.2117, 145.7928, 146.3813, 146.9763, 147.5767, 148.1815, 148.7896, 149.3998, 150.0107, 150.621, 151.2295, 151.8348, 152.4355, 153.0304, 153.6181, 154.1975, 154.7674, 155.3268, 155.8746, 156.4099, 156.9319, 157.4399, 157.9334, 158.4118, 158.8747, 159.3218, 159.7529, 160.168, 160.5669, 160.9498, 161.3167, 161.6679, 162.0035, 162.3239, 162.6294, 162.9204, 163.1973, 163.4605, 163.7104, 163.9476, 164.1725, 164.3856, 164.5873, 164.7782, 164.9587, 165.1292, 165.2903, 165.4424, 165.586, 165.7214, 165.8491, 165.9694, 166.0828, 166.1897, 166.2903, 166.3851, 166.4743, 166.5583, 166.6373, 166.7116, 166.7816, 166.8474, 166.9094, 166.9676, 167.0224, 167.074, 167.1224, 167.168, 167.2109, 167.2513, 167.2892, 167.325, 167.3585, 167.3902, 167.4199, 167.4479, 167.4742, 167.499, 167.5224, 167.5444, 167.5651, 167.5846, 167.6029, 167.6203, 167.6366, 167.6519, 167.6593],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal mínimo 3',
						data: [84.49471, 85.25888, 86.00517, 86.73507, 87.44977, 88.15028, 88.83745, 89.51202, 90.17464, 90.82592, 91.46645, 92.0968, 92.71756, 93.3344, 93.94268, 94.54291, 95.13557, 95.72115, 96.30009, 96.87286, 97.43989, 98.00159, 98.55838, 99.11064, 99.65875, 100.2031, 100.7439, 101.2817, 101.8166, 102.3491, 102.8792, 103.4074, 103.9339, 104.4588, 104.9825, 105.505, 106.0265, 106.5472, 107.0673, 107.5868, 108.1058, 108.6244, 109.1427, 109.6607, 110.1785, 110.696, 111.2132, 111.7302, 112.2469, 112.7631, 113.2789, 113.7942, 114.3089, 114.8229, 115.336, 115.8481, 116.3592, 116.869, 117.3774, 117.8842, 118.3893, 118.8926, 119.3938, 119.8927, 120.3893, 120.8833, 121.3746, 121.863, 122.3483, 122.8305, 123.3092, 123.7845, 124.2562, 124.7242, 125.1882, 125.6484, 126.1045, 126.5565, 127.0044, 127.4481, 127.8876, 128.3228, 128.7539, 129.1807, 129.6035, 130.0222, 130.4369, 130.8477, 131.2548, 131.6584, 132.0585, 132.4555, 132.8495, 133.2407, 133.6295, 134.0161, 134.4008, 134.7841, 135.1663, 135.5477, 135.9288, 136.3101, 136.692, 137.075, 137.4597, 137.8466, 138.2362, 138.6292, 139.0262, 139.4278, 139.8346, 140.2472, 140.6664, 141.0928, 141.5269, 141.9694, 142.4209, 142.882, 143.3532, 143.835, 144.3277, 144.8317, 145.3473, 145.8746, 146.4137, 146.9645, 147.5269, 148.1005, 148.6849, 149.2795, 149.8836, 150.4962, 151.1165, 151.7433, 152.3754, 153.0113, 153.6498, 154.2892, 154.928, 155.5647, 156.1977, 156.8253, 157.4462, 158.0587, 158.6615, 159.2532, 159.8327, 160.3988, 160.9506, 161.4872, 162.0078, 162.5118, 162.9988, 163.4685, 163.9205, 164.3547, 164.7713, 165.1701, 165.5514, 165.9154, 166.2625, 166.5929, 166.9072, 167.2057, 167.489, 167.7576, 168.012, 168.2528, 168.4805, 168.6958, 168.8991, 169.0911, 169.2722, 169.4431, 169.6041, 169.756, 169.8991, 170.0339, 170.1608, 170.2804, 170.3931, 170.4991, 170.599, 170.693, 170.7816, 170.865, 170.9436, 171.0176, 171.0873, 171.1529, 171.2148, 171.2732, 171.3282, 171.3801, 171.429, 171.4752, 171.5188, 171.5599, 171.5988, 171.6355, 171.6701, 171.7029, 171.7339, 171.7632, 171.791, 171.8172, 171.8421, 171.8657, 171.888, 171.9091, 171.9292, 171.9483, 171.9663, 171.9835, 171.9998, 172.0153, 172.0227],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEAL
					{
						label : 'Ideal',
						data: [86.86161, 87.65247, 88.42326, 89.17549, 89.91041, 90.62908, 91.33242, 92.02127, 92.69638, 93.35847, 94.00823, 94.64637, 95.27359, 95.91475, 96.54734, 97.17191, 97.78898, 98.39903, 99.00254, 99.59998, 100.1918, 100.7783, 101.36, 101.9373, 102.5105, 103.0799, 103.6459, 104.2087, 104.7687, 105.3262, 105.8813, 106.4343, 106.9855, 107.535, 108.083, 108.6296, 109.1751, 109.7196, 110.2631, 110.8058, 111.3477, 111.889, 112.4296, 112.9696, 113.509, 114.0479, 114.5861, 115.1238, 115.6609, 116.1973, 116.7329, 117.2678, 117.8018, 118.3348, 118.8668, 119.3977, 119.9272, 120.4554, 120.9821, 121.5072, 122.0305, 122.552, 123.0714, 123.5886, 124.1035, 124.616, 125.1259, 125.6331, 126.1374, 126.6388, 127.137, 127.632, 128.1237, 128.6119, 129.0966, 129.5777, 130.055, 130.5286, 130.9983, 131.4641, 131.926, 132.384, 132.8381, 133.2882, 133.7345, 134.1769, 134.6155, 135.0504, 135.4818, 135.9097, 136.3343, 136.7557, 137.1742, 137.5899, 138.0032, 138.4143, 138.8234, 139.231, 139.6373, 140.0427, 140.4477, 140.8527, 141.2582, 141.6646, 142.0725, 142.4824, 142.8949, 143.3107, 143.7304, 144.1545, 144.5838, 145.019, 145.4607, 145.9097, 146.3665, 146.832, 147.3066, 147.7911, 148.2859, 148.7917, 149.3088, 149.8376, 150.3784, 150.9313, 151.4964, 152.0735, 152.6624, 153.2627, 153.8738, 154.4951, 155.1255, 155.7642, 156.4099, 157.0612, 157.7168, 158.3751, 159.0344, 159.6931, 160.3493, 161.0015, 161.6478, 162.2865, 162.9161, 163.535, 164.1418, 164.7352, 165.314, 165.8771, 166.4236, 166.9528, 167.4641, 167.9571, 168.4313, 168.8867, 169.3231, 169.7405, 170.1393, 170.5195, 170.8815, 171.2257, 171.5525, 171.8626, 172.1563, 172.4343, 172.6972, 172.9456, 173.1801, 173.4014, 173.6101, 173.8067, 173.992, 174.1665, 174.3308, 174.4854, 174.631, 174.768, 174.8969, 175.0182, 175.1323, 175.2398, 175.341, 175.4362, 175.5259, 175.6104, 175.6901, 175.7652, 175.836, 175.9028, 175.9658, 176.0254, 176.0816, 176.1348, 176.185, 176.2326, 176.2776, 176.3202, 176.3606, 176.3989, 176.4352, 176.4697, 176.5024, 176.5335, 176.563, 176.5911, 176.6179, 176.6433, 176.6676, 176.6907, 176.7127, 176.7337, 176.7538, 176.773, 176.7913, 176.8088, 176.8255, 176.8415, 176.8492],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [89.22805, 90.05675, 90.8626, 91.64711, 92.41159, 93.15719, 93.88496, 94.59585, 95.2908, 95.97068, 96.63637, 97.28875, 97.9287, 98.58525, 99.23358, 99.87426, 100.5078, 101.1348, 101.7556, 102.3708, 102.9807, 103.5858, 104.1865, 104.7831, 105.3759, 105.9654, 106.5518, 107.1354, 107.7165, 108.2953, 108.872, 109.4469, 110.0201, 110.5919, 111.1623, 111.7316, 112.2998, 112.8671, 113.4335, 113.9992, 114.5641, 115.1284, 115.6921, 116.2551, 116.8176, 117.3794, 117.9407, 118.5012, 119.0611, 119.6203, 120.1786, 120.7361, 121.2926, 121.848, 122.4024, 122.9555, 123.5073, 124.0576, 124.6064, 125.1535, 125.6987, 126.2421, 126.7834, 127.3225, 127.8594, 128.3937, 128.9256, 129.4547, 129.981, 130.5044, 131.0247, 131.5419, 132.0559, 132.5664, 133.0736, 133.5771, 134.0771, 134.5734, 135.066, 135.5548, 136.0397, 136.5209, 136.9982, 137.4717, 137.9414, 138.4073, 138.8696, 139.3282, 139.7833, 140.235, 140.6835, 141.1289, 141.5713, 142.0111, 142.4484, 142.8835, 143.3168, 143.7484, 144.1789, 144.6085, 145.0377, 145.4669, 145.8965, 146.3272, 146.7593, 147.1936, 147.6305, 148.0707, 148.5147, 148.9633, 149.4172, 149.8769, 150.3433, 150.8169, 151.2984, 151.7885, 152.2878, 152.7969, 153.3164, 153.8466, 154.3881, 154.941, 155.5056, 156.0819, 156.6699, 157.2694, 157.88, 158.5012, 159.1324, 159.7725, 160.4207, 161.0758, 161.7364, 162.401, 163.0682, 163.7363, 164.4035, 165.0681, 165.7283, 166.3823, 167.0284, 167.665, 168.2905, 168.9033, 169.5022, 170.0859, 170.6535, 171.2039, 171.7364, 172.2504, 172.7455, 173.2213, 173.6778, 174.1148, 174.5324, 174.9309, 175.3105, 175.6716, 176.0146, 176.34, 176.6483, 176.9402, 177.2163, 177.4771, 177.7234, 177.9558, 178.175, 178.3815, 178.5762, 178.7595, 178.9321, 179.0946, 179.2476, 179.3915, 179.5271, 179.6547, 179.7748, 179.888, 179.9946, 180.095, 180.1896, 180.2789, 180.3631, 180.4426, 180.5176, 180.5885, 180.6555, 180.7189, 180.7789, 180.8357, 180.8895, 180.9405, 180.9889, 181.0348, 181.0784, 181.1199, 181.1593, 181.1968, 181.2325, 181.2666, 181.299, 181.33, 181.3595, 181.3877, 181.4147, 181.4405, 181.4651, 181.4887, 181.5113, 181.533, 181.5538, 181.5737, 181.5928, 181.6111, 181.6287, 181.6456, 181.6538],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 2',
						data: [91.35753, 92.22966, 93.07608, 93.89827, 94.69757, 95.47522, 96.23239, 96.97022, 97.68978, 98.39218, 99.07848, 99.74979, 100.4072, 101.069, 101.7234, 102.3709, 103.012, 103.6473, 104.2771, 104.9021, 105.5225, 106.1387, 106.7513, 107.3604, 107.9665, 108.5698, 109.1706, 109.7693, 110.366, 110.9609, 111.5543, 112.1464, 112.7374, 113.3273, 113.9164, 114.5047, 115.0924, 115.6795, 116.2661, 116.8522, 117.438, 118.0234, 118.6084, 119.1931, 119.7774, 120.3613, 120.9447, 121.5277, 122.1101, 122.6918, 123.2729, 123.8532, 124.4327, 125.0111, 125.5884, 126.1646, 126.7394, 127.3128, 127.8846, 128.4547, 129.023, 129.5893, 130.1535, 130.7154, 131.275, 131.8321, 132.3865, 132.9381, 133.4868, 134.0325, 134.5751, 135.1144, 135.6504, 136.1829, 136.7118, 137.2371, 137.7587, 138.2765, 138.7905, 139.3006, 139.8069, 140.3093, 140.8077, 141.3023, 141.793, 142.28, 142.7632, 143.2428, 143.7188, 144.1915, 144.661, 145.1273, 145.5909, 146.0518, 146.5103, 146.9668, 147.4214, 147.8747, 148.3268, 148.7782, 149.2294, 149.6808, 150.1329, 150.5861, 151.041, 151.4982, 151.9583, 152.4218, 152.8894, 153.3617, 153.8394, 154.323, 154.8133, 155.3109, 155.8164, 156.3303, 156.8532, 157.3857, 157.928, 158.4807, 159.0439, 159.6179, 160.2026, 160.7981, 161.4041, 162.0203, 162.6462, 163.2811, 163.9243, 164.5748, 165.2314, 165.893, 166.5581, 167.2253, 167.8929, 168.5594, 169.2231, 169.8822, 170.535, 171.1798, 171.8151, 172.4393, 173.0509, 173.6486, 174.2313, 174.7978, 175.3473, 175.879, 176.3923, 176.8868, 177.3622, 177.8183, 178.2551, 178.6727, 179.0712, 179.451, 179.8124, 180.1559, 180.482, 180.7912, 181.0841, 181.3614, 181.6236, 181.8715, 182.1056, 182.3267, 182.5353, 182.7322, 182.9179, 183.0931, 183.2583, 183.414, 183.5609, 183.6995, 183.8302, 183.9535, 184.0699, 184.1797, 184.2835, 184.3815, 184.4741, 184.5617, 184.6446, 184.723, 184.7972, 184.8676, 184.9343, 184.9975, 185.0576, 185.1146, 185.1687, 185.2202, 185.2692, 185.3159, 185.3603, 185.4026, 185.443, 185.4815, 185.5182, 185.5534, 185.5869, 185.619, 185.6497, 185.6791, 185.7073, 185.7343, 185.7601, 185.7849, 185.8087, 185.8316, 185.8535, 185.8746, 185.8949, 185.9144, 185.9331, 185.9512, 185.9599],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 3',
						data: [93.45923, 94.38278, 95.27762, 96.14512, 96.98663, 97.80345, 98.59691, 99.36828, 100.1189, 100.8501, 101.5631, 102.2593, 102.9402, 103.5983, 104.2503, 104.8967, 105.538, 106.1747, 106.8071, 107.4357, 108.0609, 108.683, 109.3024, 109.9193, 110.5342, 111.1473, 111.7588, 112.369, 112.9781, 113.5863, 114.1937, 114.8006, 115.4072, 116.0134, 116.6194, 117.2254, 117.8314, 118.4374, 119.0435, 119.6498, 120.2562, 120.8627, 121.4694, 122.0761, 122.6829, 123.2897, 123.8965, 124.5031, 125.1095, 125.7156, 126.3212, 126.9263, 127.5307, 128.1344, 128.7371, 129.3387, 129.9391, 130.5381, 131.1356, 131.7314, 132.3253, 132.9172, 133.507, 134.0943, 134.6792, 135.2615, 135.8409, 136.4173, 136.9906, 137.5607, 138.1274, 138.6906, 139.2502, 139.806, 140.358, 140.9062, 141.4503, 141.9904, 142.5263, 143.0582, 143.586, 144.1096, 144.6291, 145.1445, 145.656, 146.1634, 146.6671, 147.167, 147.6633, 148.1562, 148.6459, 149.1325, 149.6163, 150.0977, 150.5767, 151.0539, 151.5294, 152.0038, 152.4773, 152.9504, 153.4235, 153.8972, 154.3718, 154.848, 155.3263, 155.8072, 156.2913, 156.7792, 157.2715, 157.7688, 158.2717, 158.7806, 159.2964, 159.8193, 160.35, 160.889, 161.4365, 161.993, 162.5588, 163.1339, 163.7185, 164.3126, 164.916, 165.5285, 166.1497, 166.7791, 167.416, 168.0596, 168.7091, 169.3634, 170.0213, 170.6817, 171.343, 172.004, 172.663, 173.3186, 173.9691, 174.6131, 175.249, 175.8753, 176.4906, 177.0935, 177.6829, 178.2575, 178.8165, 179.3589, 179.884, 180.3913, 180.8804, 181.3509, 181.8027, 182.2358, 182.6503, 183.0463, 183.4242, 183.7842, 184.127, 184.4528, 184.7624, 185.0562, 185.3349, 185.599, 185.8493, 186.0863, 186.3107, 186.5231, 186.724, 186.9142, 187.0941, 187.2643, 187.4254, 187.5779, 187.7222, 187.8588, 187.9881, 188.1106, 188.2267, 188.3368, 188.4411, 188.54, 188.6338, 188.7229, 188.8075, 188.8878, 188.9642, 189.0368, 189.1058, 189.1715, 189.234, 189.2936, 189.3503, 189.4044, 189.456, 189.5052, 189.5522, 189.5971, 189.6399, 189.6809, 189.7201, 189.7575, 189.7934, 189.8277, 189.8606, 189.8922, 189.9224, 189.9513, 189.9791, 190.0058, 190.0314, 190.056, 190.0797, 190.1024, 190.1242, 190.1452, 190.1654, 190.1849, 190.1943],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 2,
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
					text : 'Gráfica de Crecimiento Talla - Edad (2 a 20 años)',
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
                        text : 'TALLA (CM)',
						color : '#0161AA'
                    },
					suggestedMin: 80,
					ticks: {
						stepSize: 5,
						color : '#0161AA'
					}
                },
				x: {
                    title : {
                        display : true,
                        text : 'EDAD (AÑOS)',
						color : '#0161AA'
                    },
					ticks: {
						color : '#0161AA',
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

export default GraficoDeCrecimientoTallaEdadNiño2a20