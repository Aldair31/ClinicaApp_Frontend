import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'


const GraficoDeCrecimientoTallaEdadNiña2a20 = () => {
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
    <div>
		
      <Line
        data={
            {
                labels: ['2', '', '', '', '', '', '', '', '', '', '', '', '3', '', '', '', '', '', '', '', '', '', '',  '', '4', '', '', '', '', '', '', '', '', '', '',  '', '5', '', '', '', '', '', '', '', '', '', '',  '', '6', '', '', '', '', '', '', '', '', '', '',  '', '7', '', '', '', '', '', '', '', '', '', '',  '', '8', '', '', '', '', '', '', '', '', '', '', '',  '9', '', '', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', '', '',  '', '11', '', '', '', '', '', '', '', '', '', '',  '', '12', '', '', '', '', '', '', '', '', '', '',  '', '13', '', '', '', '', '', '', '', '', '', '',  '', '14', '', '', '', '', '', '', '', '', '', '',  '', '15', '', '', '', '', '', '', '', '', '', '',  '', '16', '', '', '', '', '', '', '', '', '', '',  '', '17', '', '', '', '', '', '', '', '', '', '',  '', '18', '', '', '', '', '', '', '', '', '', '',  '', '19', '', '', '', '', '', '', '', '', '', '',  '', '20'],
				datasets: [
					//DEL PACIENTE
                    {
                        label: 'Peso',
                        data : datos,
                        borderColor : 'turquoise',
						borderWidth: 3,
                        spanGaps : true,
						pointRadius : 3
                    },
					//IDEALES MÍNIMOS
                    {
                        label: 'Ideal mínimo',
						data : [78.43754, 78.82133, 79.60198, 80.37555, 81.1357, 81.87746, 82.59712, 83.29206, 83.96065, 84.6021, 85.2163, 85.80379, 86.36557, 86.90307, 87.43482, 87.95945, 88.4785, 88.9933, 89.50502, 90.01466, 90.52307, 91.031, 91.53905, 92.04774, 92.55748, 93.06862, 93.58141, 94.09605, 94.61267, 95.13134, 95.65211, 96.17495, 96.69982, 97.22663, 97.75525, 98.28555, 98.81735, 99.35047, 99.8847, 100.4198, 100.9555, 101.4916, 102.0279, 102.564, 103.0996, 103.6346, 104.1685, 104.7012, 105.2323, 105.7615, 106.2886, 106.8132, 107.3351, 107.8541, 108.3698, 108.882, 109.3905, 109.8949, 110.3952, 110.8909, 111.3821, 111.8684, 112.3496, 112.8257, 113.2963, 113.7615, 114.2211, 114.6749, 115.123, 115.5651, 116.0012, 116.4314, 116.8555, 117.2737, 117.6858, 118.092, 118.4924, 118.8869, 119.2757, 119.659, 120.037, 120.4097, 120.7775, 121.1405, 121.4991, 121.8537, 122.2044, 122.5518, 122.8963, 123.2384, 123.5785, 123.9173, 124.2553, 124.5933, 124.932, 125.2721, 125.6144, 125.9599, 126.3095, 126.6641, 127.0248, 127.3926, 127.7687, 128.1541, 128.5499, 128.9573, 129.3772, 129.8106, 130.2585, 130.7217, 131.2006, 131.6958, 132.2074, 132.7354, 133.2795, 133.8388, 134.4125, 134.9993, 135.5973, 136.2047, 136.8191, 137.4381, 138.0588, 138.6784, 139.2941, 139.9028, 140.5019, 141.0885, 141.6602, 142.2148, 142.7504, 143.2654, 143.7584, 144.2287, 144.6756, 145.0987, 145.4981, 145.874, 146.2269, 146.5573, 146.866, 147.1539, 147.4219, 147.6712, 147.9026, 148.1173, 148.3164, 148.5009, 148.6717, 148.8299, 148.9764, 149.1121, 149.2377, 149.3542, 149.4622, 149.5623, 149.6553, 149.7416, 149.8219, 149.8967, 149.9663, 150.0312, 150.0918, 150.1484, 150.2014, 150.251, 150.2975, 150.3412, 150.3823, 150.4209, 150.4573, 150.4917, 150.5241, 150.5547, 150.5837, 150.6111, 150.6372, 150.6619, 150.6854, 150.7077, 150.7289, 150.7491, 150.7684, 150.7868, 150.8044, 150.8211, 150.8372, 150.8525, 150.8672, 150.8812, 150.8947, 150.9076, 150.92, 150.9319, 150.9433, 150.9542, 150.9647, 150.9749, 150.9846, 150.9939, 151.0029, 151.0115, 151.0198, 151.0279, 151.0356, 151.043, 151.0501, 151.057, 151.0636, 151.07, 151.0762, 151.0821, 151.0879, 151.0934, 151.0987, 151.1038, 151.1088, 151.1112],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
						spanGaps : true,
						pointRadius : 0
                    },
					{
						label : 'Ideal mínimo 2',
						data: [80.52476, 80.91946, 81.73541, 82.53699, 83.31968, 84.07998, 84.81532, 85.52398, 86.205, 86.85807, 87.48344, 88.08186, 88.6545, 89.20285, 89.74875, 90.28811, 90.82228, 91.35246, 91.87972, 92.40497, 92.92901, 93.45252, 93.97609, 94.50021, 95.02528, 95.55164, 96.07954, 96.60918, 97.14072, 97.67423, 98.20976, 98.74731, 99.28686, 99.82832, 100.3716, 100.9165, 101.463, 102.0109, 102.5599, 103.1098, 103.6604, 104.2115, 104.7628, 105.3141, 105.865, 106.4154, 106.9648, 107.5131, 108.0599, 108.605, 109.148, 109.6888, 110.227, 110.7623, 111.2944, 111.8232, 112.3483, 112.8696, 113.3867, 113.8995, 114.4077, 114.9112, 115.4097, 115.9031, 116.3913, 116.874, 117.3512, 117.8228, 118.2886, 118.7486, 119.2028, 119.6511, 120.0935, 120.53, 120.9607, 121.3855, 121.8047, 122.2182, 122.6263, 123.0291, 123.4268, 123.8196, 124.2078, 124.5916, 124.9715, 125.3478, 125.7208, 126.0911, 126.4592, 126.8255, 127.1907, 127.5554, 127.9203, 128.2861, 128.6537, 129.0238, 129.3973, 129.7752, 130.1584, 130.5479, 130.9446, 131.3496, 131.7639, 132.1885, 132.6243, 133.0721, 133.5329, 134.0072, 134.4955, 134.9983, 135.5157, 136.0476, 136.5937, 137.1534, 137.7259, 138.31, 138.9043, 139.507, 140.1161, 140.7295, 141.3448, 141.9594, 142.5709, 143.1767, 143.7741, 144.3607, 144.9342, 145.4925, 146.0338, 146.5564, 147.059, 147.5405, 148.0002, 148.4376, 148.8525, 149.2449, 149.615, 149.9633, 150.2902, 150.5966, 150.8831, 151.1507, 151.4003, 151.6329, 151.8494, 152.0508, 152.2381, 152.4121, 152.5738, 152.7241, 152.8638, 152.9936, 153.1143, 153.2266, 153.3312, 153.4286, 153.5193, 153.604, 153.683, 153.7569, 153.826, 153.8907, 153.9513, 154.0082, 154.0616, 154.1119, 154.1592, 154.2037, 154.2457, 154.2854, 154.3229, 154.3584, 154.3919, 154.4238, 154.454, 154.4827, 154.51, 154.5359, 154.5607, 154.5842, 154.6067, 154.6281, 154.6486, 154.6681, 154.6868, 154.7047, 154.7218, 154.7382, 154.754, 154.769, 154.7835, 154.7974, 154.8107, 154.8235, 154.8358, 154.8476, 154.859, 154.8699, 154.8804, 154.8905, 154.9003, 154.9096, 154.9187, 154.9273, 154.9357, 154.9438, 154.9516, 154.959, 154.9663, 154.9732, 154.9799, 154.9864, 154.9926, 154.9986, 155.0044, 155.01, 155.0154, 155.0181],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal mínimo 3',
						data: [82.63524, 83.04213, 83.8943, 84.72592, 85.53389, 86.31589, 87.07028, 87.79609, 88.49291, 89.16084, 89.80045, 90.4127, 90.99891, 91.56066, 92.12298, 92.67925, 93.2307, 93.7784, 94.32334, 94.86634, 95.40817, 95.94946, 96.49076, 97.03254, 97.57519, 98.11905, 98.66436, 99.21132, 99.76009, 100.3108, 100.8634, 101.418, 101.9745, 102.5329, 103.093, 103.6549, 104.2182, 104.7829, 105.3488, 105.9156, 106.4831, 107.0512, 107.6194, 108.1877, 108.7556, 109.323, 109.8895, 110.4549, 111.0189, 111.5812, 112.1415, 112.6996, 113.255, 113.8077, 114.3572, 114.9034, 115.446, 115.9847, 116.5193, 117.0496, 117.5754, 118.0964, 118.6125, 119.1235, 119.6293, 120.1297, 120.6246, 121.1138, 121.5974, 122.0753, 122.5473, 123.0135, 123.4739, 123.9285, 124.3774, 124.8207, 125.2584, 125.6906, 126.1177, 126.5396, 126.9568, 127.3694, 127.7777, 128.1822, 128.5831, 128.9808, 129.3759, 129.7689, 130.1603, 130.5506, 130.9406, 131.3309, 131.7223, 132.1156, 132.5115, 132.9109, 133.3147, 133.7239, 134.1394, 134.562, 134.9929, 135.4328, 135.8826, 136.3433, 136.8154, 137.2997, 137.7967, 138.3067, 138.83, 139.3664, 139.9157, 140.4775, 141.051, 141.6352, 142.2288, 142.8304, 143.4381, 144.0501, 144.6641, 145.278, 145.8893, 146.4958, 147.0949, 147.6845, 148.2623, 148.8263, 149.3747, 149.9059, 150.4184, 150.9113, 151.3835, 151.8346, 152.2642, 152.6721, 153.0584, 153.4234, 153.7674, 154.0911, 154.3951, 154.6801, 154.947, 155.1966, 155.4298, 155.6475, 155.8507, 156.0401, 156.2167, 156.3813, 156.5348, 156.6778, 156.8112, 156.9356, 157.0517, 157.16, 157.2612, 157.3558, 157.4443, 157.5271, 157.6047, 157.6775, 157.7458, 157.8099, 157.8702, 157.927, 157.9804, 158.0308, 158.0784, 158.1234, 158.1659, 158.2061, 158.2442, 158.2803, 158.3146, 158.3472, 158.3782, 158.4077, 158.4357, 158.4625, 158.4879, 158.5123, 158.5355, 158.5577, 158.5789, 158.5992, 158.6187, 158.6373, 158.6551, 158.6722, 158.6886, 158.7043, 158.7194, 158.7339, 158.7478, 158.7612, 158.774, 158.7864, 158.7983, 158.8097, 158.8207, 158.8313, 158.8415, 158.8514, 158.8608, 158.8699, 158.8787, 158.8872, 158.8953, 158.9032, 158.9107, 158.918, 158.9251, 158.9319, 158.9384, 158.9447, 158.9508, 158.9567, 158.9624, 158.9651],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEAL
					{
						label : 'Ideal',
						data: [84.97556, 85.39732, 86.29026, 87.15714, 87.99602, 88.80551, 89.58477, 90.33342, 91.05154, 91.73964, 92.39854, 93.02945, 93.63382, 94.21336, 94.79643, 95.37392, 95.94693, 96.51645, 97.08337, 97.64848, 98.21247, 98.77593, 99.3394, 99.90331, 100.4681, 101.0339, 101.6012, 102.17, 102.7406, 103.313, 103.8873, 104.4635, 105.0415, 105.6213, 106.2029, 106.7861, 107.3707, 107.9566, 108.5436, 109.1316, 109.7202, 110.3092, 110.8984, 111.4876, 112.0764, 112.6646, 113.2519, 113.838, 114.4226, 115.0055, 115.5863, 116.1648, 116.7406, 117.3136, 117.8833, 118.4496, 119.0123, 119.571, 120.1254, 120.6755, 121.221, 121.7617, 122.2974, 122.8279, 123.3531, 123.8728, 124.387, 124.8956, 125.3985, 125.8956, 126.3869, 126.8724, 127.3522, 127.8263, 128.2947, 128.7576, 129.2152, 129.6675, 130.1148, 130.5574, 130.9954, 131.4293, 131.8593, 132.2859, 132.7094, 133.1304, 133.5493, 133.9667, 134.3832, 134.7995, 135.2163, 135.6342, 136.054, 136.4766, 136.9027, 137.3333, 137.7691, 138.2112, 138.6602, 139.1172, 139.5829, 140.0581, 140.5435, 141.0397, 141.5472, 142.0664, 142.5974, 143.1404, 143.695, 144.2609, 144.8376, 145.424, 146.0192, 146.6217, 147.23, 147.8424, 148.4569, 149.0714, 149.6839, 150.292, 150.8936, 151.4866, 152.0687, 152.6381, 153.193, 153.7317, 154.2529, 154.7555, 155.2385, 155.7012, 156.1432, 156.5643, 156.9644, 157.3437, 157.7025, 158.0411, 158.3603, 158.6606, 158.9427, 159.2075, 159.4557, 159.6882, 159.9058, 160.1094, 160.2997, 160.4777, 160.6441, 160.7995, 160.9449, 161.0808, 161.2079, 161.3268, 161.4381, 161.5423, 161.6399, 161.7315, 161.8174, 161.898, 161.9738, 162.045, 162.112, 162.1752, 162.2347, 162.2908, 162.3439, 162.394, 162.4414, 162.4862, 162.5287, 162.569, 162.6072, 162.6435, 162.6781, 162.7109, 162.7421, 162.7719, 162.8002, 162.8273, 162.8531, 162.8778, 162.9013, 162.9238, 162.9454, 162.966, 162.9858, 163.0047, 163.0228, 163.0402, 163.0569, 163.0729, 163.0882, 163.103, 163.1172, 163.1308, 163.1439, 163.1565, 163.1686, 163.1802, 163.1914, 163.2022, 163.2126, 163.2226, 163.2322, 163.2415, 163.2504, 163.259, 163.2673, 163.2753, 163.283, 163.2904, 163.2976, 163.3045, 163.3111, 163.3175, 163.3237, 163.3297, 163.3354, 163.3383],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [87.31121, 87.74918, 88.68344, 89.58751, 90.46018, 91.30065, 92.10859, 92.88403, 93.62741, 94.33951, 95.0214, 95.67446, 96.30029, 96.90071, 97.50724, 98.10855, 98.70568, 99.29957, 99.89104, 100.4808, 101.0696, 101.6579, 102.2462, 102.835, 103.4247, 104.0154, 104.6075, 105.2012, 105.7965, 106.3936, 106.9925, 107.5933, 108.1958, 108.8001, 109.406, 110.0134, 110.6222, 111.2321, 111.8431, 112.4548, 113.0671, 113.6797, 114.2923, 114.9048, 115.5167, 116.1278, 116.7379, 117.3466, 117.9537, 118.5588, 119.1616, 119.7619, 120.3594, 120.9537, 121.5447, 122.132, 122.7154, 123.2946, 123.8695, 124.4397, 125.0051, 125.5655, 126.1207, 126.6706, 127.215, 127.7539, 128.287, 128.8144, 129.3359, 129.8516, 130.3615, 130.8656, 131.364, 131.8567, 132.3438, 132.8255, 133.302, 133.7734, 134.2401, 134.7023, 135.1604, 135.6146, 136.0654, 136.5132, 136.9585, 137.4018, 137.8437, 138.2847, 138.7256, 139.1669, 139.6094, 140.0538, 140.501, 140.9516, 141.4065, 141.8665, 142.3324, 142.8051, 143.2852, 143.7735, 144.2707, 144.7773, 145.2938, 145.8206, 146.3579, 146.9059, 147.4643, 148.0329, 148.6111, 149.1984, 149.7937, 150.3959, 151.0036, 151.6153, 152.2293, 152.8438, 153.4568, 154.0662, 154.67, 155.2663, 155.8529, 156.428, 156.9899, 157.5369, 158.0677, 158.581, 159.0758, 159.5513, 160.007, 160.4425, 160.8576, 161.2524, 161.627, 161.9818, 162.3172, 162.6338, 162.9321, 163.2129, 163.477, 163.725, 163.9577, 164.1761, 164.3808, 164.5726, 164.7523, 164.9206, 165.0783, 165.226, 165.3644, 165.4941, 165.6157, 165.7297, 165.8366, 165.9369, 166.0312, 166.1197, 166.2029, 166.2812, 166.3549, 166.4244, 166.4898, 166.5516, 166.6099, 166.6649, 166.717, 166.7663, 166.8129, 166.8571, 166.899, 166.9388, 166.9766, 167.0125, 167.0466, 167.0791, 167.11, 167.1395, 167.1676, 167.1944, 167.22, 167.2444, 167.2677, 167.29, 167.3114, 167.3318, 167.3514, 167.3701, 167.3881, 167.4053, 167.4218, 167.4376, 167.4528, 167.4674, 167.4814, 167.4948, 167.5078, 167.5202, 167.5321, 167.5436, 167.5546, 167.5653, 167.5755, 167.5853, 167.5948, 167.6039, 167.6127, 167.6211, 167.6293, 167.6371, 167.6446, 167.6519, 167.6589, 167.6657, 167.6722, 167.6785, 167.6845, 167.6904, 167.696, 167.6987],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 2',
						data: [89.40951, 89.86316, 90.83505, 91.77421, 92.67969, 93.55097, 94.38793, 95.19083, 95.9603, 96.69729, 97.40303, 98.07904, 98.72705, 99.34899, 99.97896, 100.604, 101.2251, 101.8432, 102.459, 103.0732, 103.6866, 104.2996, 104.9128, 105.5264, 106.141, 106.7567, 107.3737, 107.9924, 108.6127, 109.2347, 109.8585, 110.4841, 111.1114, 111.7404, 112.3709, 113.0028, 113.6359, 114.2701, 114.9052, 115.5408, 116.1768, 116.813, 117.449, 118.0845, 118.7193, 119.3531, 119.9855, 120.6163, 121.2452, 121.8718, 122.4959, 123.1171, 123.7352, 124.3499, 124.9608, 125.5678, 126.1705, 126.7688, 127.3623, 127.951, 128.5345, 129.1127, 129.6855, 130.2526, 130.814, 131.3696, 131.9194, 132.4631, 133.0009, 133.5328, 134.0587, 134.5787, 135.093, 135.6015, 136.1046, 136.6024, 137.095, 137.5828, 138.066, 138.545, 139.0201, 139.4918, 139.9604, 140.4265, 140.8906, 141.3532, 141.8149, 142.2764, 142.7382, 143.2012, 143.666, 144.1333, 144.6039, 145.0785, 145.5579, 146.0429, 146.5341, 147.0322, 147.5379, 148.0517, 148.5741, 149.1054, 149.646, 150.196, 150.7552, 151.3236, 151.9008, 152.4861, 153.079, 153.6783, 154.283, 154.8918, 155.5032, 156.1156, 156.7273, 157.3365, 157.9413, 158.5398, 159.1302, 159.7107, 160.2796, 160.8353, 161.3764, 161.9016, 162.4097, 162.8999, 163.3715, 163.8239, 164.2568, 164.6701, 165.0637, 165.4378, 165.7928, 166.1289, 166.4466, 166.7467, 167.0296, 167.2961, 167.5469, 167.7826, 168.0042, 168.2122, 168.4075, 168.5907, 168.7626, 168.9239, 169.0751, 169.217, 169.3501, 169.4749, 169.5921, 169.7022, 169.8055, 169.9026, 169.9939, 170.0798, 170.1606, 170.2366, 170.3083, 170.3759, 170.4396, 170.4997, 170.5566, 170.6103, 170.6611, 170.7091, 170.7546, 170.7978, 170.8387, 170.8775, 170.9144, 170.9494, 170.9827, 171.0144, 171.0446, 171.0733, 171.1007, 171.1268, 171.1517, 171.1754, 171.1981, 171.2198, 171.2405, 171.2604, 171.2793, 171.2975, 171.3149, 171.3315, 171.3475, 171.3628, 171.3775, 171.3915, 171.405, 171.418, 171.4304, 171.4424, 171.4538, 171.4649, 171.4755, 171.4856, 171.4954, 171.5049, 171.5139, 171.5226, 171.531, 171.5391, 171.5468, 171.5543, 171.5615, 171.5684, 171.5751, 171.5815, 171.5877, 171.5937, 171.5994, 171.6049, 171.6103, 171.6129],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 3',
						data: [91.47729, 91.94741, 92.95685, 93.93209, 94.87215, 95.77649, 96.64505, 97.47814, 98.27646, 99.04107, 99.77332, 100.4748, 101.1474, 101.7931, 102.4485, 103.0991, 103.746, 104.3901, 105.032, 105.6727, 106.3126, 106.9523, 107.5922, 108.2328, 108.8744, 109.5172, 110.1614, 110.8073, 111.4548, 112.1041, 112.7552, 113.4079, 114.0624, 114.7184, 115.3759, 116.0347, 116.6945, 117.3552, 118.0166, 118.6783, 119.3402, 120.0019, 120.6632, 121.3238, 121.9832, 122.6413, 123.2977, 123.9521, 124.6042, 125.2536, 125.9, 126.5432, 127.1827, 127.8184, 128.45, 129.0771, 129.6996, 130.3171, 130.9295, 131.5365, 132.138, 132.7338, 133.3238, 133.9077, 134.4857, 135.0574, 135.623, 136.1824, 136.7356, 137.2826, 137.8236, 138.3585, 138.8876, 139.411, 139.9289, 140.4415, 140.9492, 141.4521, 141.9507, 142.4454, 142.9364, 143.4244, 143.9098, 144.393, 144.8747, 145.3555, 145.8359, 146.3167, 146.7984, 147.2818, 147.7676, 148.2564, 148.7491, 149.2461, 149.7484, 150.2564, 150.7707, 151.292, 151.8205, 152.3568, 152.9011, 153.4534, 154.0139, 154.5824, 155.1586, 155.742, 156.3321, 156.928, 157.5288, 158.1335, 158.7407, 159.3491, 159.9571, 160.5633, 161.166, 161.7634, 162.3541, 162.9363, 163.5084, 164.069, 164.6167, 165.1503, 165.6685, 166.1706, 166.6555, 167.1228, 167.572, 168.0027, 168.4147, 168.808, 169.1827, 169.5391, 169.8773, 170.1979, 170.5013, 170.7881, 171.0587, 171.314, 171.5544, 171.7807, 171.9935, 172.1936, 172.3816, 172.5582, 172.7239, 172.8796, 173.0257, 173.1628, 173.2915, 173.4124, 173.5258, 173.6324, 173.7326, 173.8267, 173.9152, 173.9984, 174.0768, 174.1505, 174.22, 174.2855, 174.3472, 174.4055, 174.4606, 174.5125, 174.5617, 174.6082, 174.6522, 174.6938, 174.7333, 174.7708, 174.8063, 174.84, 174.8721, 174.9025, 174.9314, 174.959, 174.9852, 175.0102, 175.034, 175.0567, 175.0783, 175.099, 175.1187, 175.1376, 175.1556, 175.1728, 175.1892, 175.205, 175.2201, 175.2345, 175.2483, 175.2616, 175.2742, 175.2864, 175.2981, 175.3093, 175.32, 175.3303, 175.3402, 175.3497, 175.3588, 175.3675, 175.376, 175.384, 175.3918, 175.3993, 175.4064, 175.4133, 175.42, 175.4264, 175.4325, 175.4384, 175.4441, 175.4496, 175.4548, 175.4599, 175.4648, 175.4671],
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
					text : 'Gráfica de Crecimiento Talla - Edad (2 a 20 años)',
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
					suggestedMin: 80,
					ticks: {
						stepSize: 5,
						color : '#ED1160'
					}
                },
				x: {
                    title : {
                        display : true,
                        text : 'EDAD (AÑOS)',
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

export default GraficoDeCrecimientoTallaEdadNiña2a20