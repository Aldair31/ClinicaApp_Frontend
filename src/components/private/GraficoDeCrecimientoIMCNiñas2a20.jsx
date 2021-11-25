import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'


const GraficoDeCrecimientoIMCNiñas2a20 = () => {
	var datos = []
	let {fechaHistoria, fechaNac, pesoPaciente,tallaPaciente} = useHistClinica()


	let meses = [] 

	for (let item in fechaHistoria){
		if(moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months') >=24){
			if((moment.duration(moment(fechaHistoria[item]).diff(moment(fechaNac[0])))).days() > 15){
				meses[item] = (moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months')) - 23
			}
			else{
				meses[item] = (moment(fechaHistoria[item]).diff(moment(fechaNac[0]).format(), 'months')) - 24
			}
		}

	}

	for (var i = 0; i<meses.length; i++){
		
		datos[meses[i]] = Math.round(pesoPaciente[i]/(Math.pow(tallaPaciente[i],2)/10000)*1000)/1000
		console.log('**************')
		console.log(Math.round(pesoPaciente[i]/(Math.pow(tallaPaciente[i],2)/10000)*1000)/1000)
	}

  return (
    <div>
		
      <Line
        data={
            {
                labels: ['2', '', '', '', '', '', '', '', '', '', '', '', '3', '', '', '', '', '', '', '', '', '', '',  '', '4', '', '', '', '', '', '', '', '', '', '',  '', '5', '', '', '', '', '', '', '', '', '', '',  '', '6', '', '', '', '', '', '', '', '', '', '',  '', '7', '', '', '', '', '', '', '', '', '', '',  '', '8', '', '', '', '', '', '', '', '', '', '', '',  '9', '', '', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', '', '',  '', '11', '', '', '', '', '', '', '', '', '', '',  '', '12', '', '', '', '', '', '', '', '', '', '',  '', '13', '', '', '', '', '', '', '', '', '', '',  '', '14', '', '', '', '', '', '', '', '', '', '',  '', '15'],
				datasets: [
					//DEL PACIENTE
                    {
                        label: 'IMC',
                        data : datos,
                        borderColor : 'red',
						borderWidth: 3,
                        spanGaps : true,
						pointRadius : 3
                    },
					//IDEALES MÍNIMOS
                    {
                        label: 'Ideal mínimo',
						data : [14.50348, 14.46882, 14.4346, 14.40083, 14.36755, 14.33478, 14.30257, 14.27093, 14.23989, 14.20948, 14.17972, 14.15063, 14.12223, 14.09453, 14.06756, 14.04132, 14.01582, 13.99107, 13.96707, 13.94383, 13.92133, 13.89959, 13.87858, 13.85832, 13.83877, 13.81995, 13.80182, 13.78439, 13.76763, 13.75152, 13.73606, 13.72123, 13.70702, 13.6934, 13.68036, 13.6679, 13.656, 13.64464, 13.63383, 13.62355, 13.61379, 13.60456, 13.59584, 13.58764, 13.57996, 13.57278, 13.56612, 13.55998, 13.55435, 13.54925, 13.54467, 13.54062, 13.5371, 13.53412, 13.53168, 13.5298, 13.52846, 13.52768, 13.52747, 13.52782, 13.52874, 13.53025, 13.53233, 13.535, 13.53826, 13.54212, 13.54657, 13.55163, 13.55729, 13.56356, 13.57044, 13.57793, 13.58604, 13.59477, 13.60411, 13.61408, 13.62467, 13.63588, 13.64771, 13.66017, 13.67325, 13.68696, 13.70129, 13.71624, 13.73182, 13.74801, 13.76483, 13.78227, 13.80033, 13.819, 13.83828, 13.85818, 13.87868, 13.89979, 13.92151, 13.94382, 13.96673, 13.99024, 14.01433, 14.03901, 14.06427, 14.09011, 14.11653, 14.14351, 14.17106, 14.19916, 14.22782, 14.25703, 14.28678, 14.31707, 14.34789, 14.37924, 14.41111, 14.44349, 14.47638, 14.50977, 14.54365, 14.57802, 14.61287, 14.64819, 14.68398, 14.72022, 14.75692, 14.79406, 14.83163, 14.86963, 14.90804, 14.94687, 14.98609, 15.02571, 15.06571, 15.10609, 15.14683, 15.18793, 15.22938, 15.27116, 15.31327, 15.3557, 15.39843, 15.44147, 15.48479, 15.52839, 15.57226, 15.61638, 15.66076, 15.70536, 15.75019, 15.79524, 15.84049, 15.88593, 15.93155, 15.97734, 16.02329, 16.06939, 16.11562, 16.16198, 16.20844],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
						spanGaps : true,
						pointRadius : 0
                    },
					{
						label : 'Ideal mínimo 2',
						data: [15.07117, 15.03336, 14.9962, 14.95969, 14.92385, 14.88866, 14.85414, 14.82027, 14.78707, 14.75453, 14.72264, 14.69142, 14.66086, 14.63096, 14.60173, 14.57316, 14.54527, 14.51805, 14.49151, 14.46566, 14.4405, 14.41604, 14.39229, 14.36926, 14.34695, 14.32537, 14.30453, 14.28444, 14.2651, 14.24651, 14.22868, 14.21162, 14.19532, 14.17979, 14.16503, 14.15103, 14.1378, 14.12534, 14.11363, 14.10268, 14.09249, 14.08305, 14.07436, 14.06642, 14.05921, 14.05274, 14.04701, 14.042, 14.03772, 14.03417, 14.03134, 14.02922, 14.02783, 14.02714, 14.02717, 14.02791, 14.02935, 14.0315, 14.03435, 14.03791, 14.04216, 14.04711, 14.05276, 14.0591, 14.06613, 14.07386, 14.08228, 14.09138, 14.10116, 14.11163, 14.12279, 14.13462, 14.14712, 14.1603, 14.17416, 14.18868, 14.20387, 14.21972, 14.23624, 14.25341, 14.27124, 14.28972, 14.30884, 14.32862, 14.34903, 14.37008, 14.39177, 14.41409, 14.43703, 14.46059, 14.48478, 14.50957, 14.53498, 14.56099, 14.5876, 14.61481, 14.6426, 14.67098, 14.69994, 14.72948, 14.75958, 14.79025, 14.82148, 14.85326, 14.88558, 14.91845, 14.95184, 14.98577, 15.02022, 15.05519, 15.09066, 15.12664, 15.16311, 15.20007, 15.23751, 15.27543, 15.31381, 15.35265, 15.39195, 15.43169, 15.47187, 15.51248, 15.5535, 15.59495, 15.6368, 15.67904, 15.72168, 15.7647, 15.80809, 15.85184, 15.89595, 15.94041, 15.9852, 16.03032, 16.07576, 16.12151, 16.16756, 16.21391, 16.26054, 16.30743, 16.3546, 16.40201, 16.44967, 16.49756, 16.54568, 16.594, 16.64254, 16.69126, 16.74017, 16.78924, 16.83848, 16.88787, 16.9374, 16.98706, 17.03683, 17.08672, 17.1367],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal mínimo 3',
						data: [15.71963, 15.67634, 15.63403, 15.59268, 15.55226, 15.51275, 15.47414, 15.43639, 15.39951, 15.36345, 15.32822, 15.29379, 15.26016, 15.22731, 15.19523, 15.16392, 15.13337, 15.10359, 15.07458, 15.04633, 15.01886, 14.99218, 14.96629, 14.9412, 14.91694, 14.89351, 14.87093, 14.84921, 14.82838, 14.80844, 14.78941, 14.7713, 14.75414, 14.73792, 14.72266, 14.70836, 14.69504, 14.68269, 14.67133, 14.66094, 14.65154, 14.64312, 14.63567, 14.6292, 14.62369, 14.61914, 14.61555, 14.6129, 14.6112, 14.61042, 14.61057, 14.61163, 14.61359, 14.61645, 14.6202, 14.62483, 14.63032, 14.63668, 14.64389, 14.65194, 14.66082, 14.67054, 14.68107, 14.69241, 14.70455, 14.71749, 14.73121, 14.74571, 14.76099, 14.77703, 14.79382, 14.81136, 14.82965, 14.84867, 14.86841, 14.88888, 14.91006, 14.93194, 14.95453, 14.9778, 15.00176, 15.0264, 15.05172, 15.07769, 15.10433, 15.13161, 15.15954, 15.1881, 15.2173, 15.24712, 15.27755, 15.30859, 15.34024, 15.37248, 15.40531, 15.43872, 15.4727, 15.50725, 15.54236, 15.57803, 15.61424, 15.65099, 15.68826, 15.72607, 15.76439, 15.80322, 15.84255, 15.88237, 15.92268, 15.96347, 16.00473, 16.04646, 16.08864, 16.13127, 16.17434, 16.21784, 16.26177, 16.30612, 16.35087, 16.39603, 16.44158, 16.48751, 16.53382, 16.5805, 16.62754, 16.67494, 16.72267, 16.77074, 16.81914, 16.86786, 16.91689, 16.96621, 17.01583, 17.06574, 17.11592, 17.16636, 17.21706, 17.26801, 17.3192, 17.37062, 17.42227, 17.47412, 17.52618, 17.57843, 17.63086, 17.68347, 17.73624, 17.78917, 17.84225, 17.89546, 17.9488, 18.00225, 18.05581, 18.10947, 18.16322, 18.21704, 18.27093],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEAL
					{
						label : 'Ideal',
						data: [16.54777, 16.49443, 16.4426, 16.39224, 16.34334, 16.29584, 16.24972, 16.20495, 16.1615, 16.11933, 16.07843, 16.03876, 16.0003, 15.96304, 15.92695, 15.89203, 15.85824, 15.82559, 15.79406, 15.76364, 15.73434, 15.70614, 15.67904, 15.65305, 15.62817, 15.60441, 15.58176, 15.56025, 15.53987, 15.52065, 15.50258, 15.48569, 15.46998, 15.45546, 15.44214, 15.43003, 15.41914, 15.40947, 15.40103, 15.39382, 15.38783, 15.38307, 15.37953, 15.37721, 15.37609, 15.37618, 15.37745, 15.37991, 15.38353, 15.38831, 15.39423, 15.40127, 15.40943, 15.41869, 15.42902, 15.44042, 15.45288, 15.46636, 15.48087, 15.49637, 15.51287, 15.53034, 15.54876, 15.56812, 15.58841, 15.60961, 15.63171, 15.65469, 15.67853, 15.70323, 15.72877, 15.75513, 15.78231, 15.81029, 15.83905, 15.86858, 15.89888, 15.92992, 15.96169, 15.99419, 16.02741, 16.06132, 16.09591, 16.13119, 16.16712, 16.20371, 16.24094, 16.2788, 16.31728, 16.35637, 16.39606, 16.43633, 16.47718, 16.5186, 16.56057, 16.60309, 16.64614, 16.68972, 16.73381, 16.7784, 16.8235, 16.86907, 16.91512, 16.96164, 17.00862, 17.05604, 17.1039, 17.15218, 17.20089, 17.25, 17.29951, 17.34942, 17.3997, 17.45036, 17.50138, 17.55276, 17.60448, 17.65653, 17.70892, 17.76162, 17.81463, 17.86795, 17.92155, 17.97544, 18.02961, 18.08404, 18.13873, 18.19367, 18.24884, 18.30426, 18.35989, 18.41574, 18.4718, 18.52805, 18.5845, 18.64113, 18.69793, 18.75489, 18.81202, 18.86929, 18.9267, 18.98424, 19.04191, 19.0997, 19.15759, 19.21558, 19.27366, 19.33182, 19.39006, 19.44837, 19.50673, 19.56514, 19.6236, 19.68208, 19.7406, 19.79912, 19.85766],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [17.52129, 17.45135, 17.38384, 17.31871, 17.25593, 17.19546, 17.13726, 17.0813, 17.02753, 16.97592, 16.92645, 16.87907, 16.83376, 16.79048, 16.7492, 16.70988, 16.67251, 16.63704, 16.60345, 16.5717, 16.54177, 16.51364, 16.48726, 16.46262, 16.4397, 16.41846, 16.39889, 16.38097, 16.36468, 16.35001, 16.33693, 16.32545, 16.31554, 16.3072, 16.30042, 16.29518, 16.29148, 16.28932, 16.28868, 16.28955, 16.29192, 16.29578, 16.30113, 16.30794, 16.3162, 16.3259, 16.33702, 16.34955, 16.36346, 16.37875, 16.39537, 16.41333, 16.4326, 16.45315, 16.47496, 16.49801, 16.52229, 16.54776, 16.5744, 16.60219, 16.63112, 16.66114, 16.69225, 16.72442, 16.75763, 16.79185, 16.82707, 16.86325, 16.90039, 16.93845, 16.97742, 17.01727, 17.05799, 17.09955, 17.14193, 17.18512, 17.22909, 17.27383, 17.31932, 17.36552, 17.41244, 17.46005, 17.50833, 17.55726, 17.60683, 17.65702, 17.7078, 17.75918, 17.81112, 17.86361, 17.91664, 17.9702, 18.02425, 18.07879, 18.13381, 18.18929, 18.24521, 18.30156, 18.35833, 18.4155, 18.47306, 18.53099, 18.58928, 18.64792, 18.70689, 18.76619, 18.82579, 18.8857, 18.94588, 19.00634, 19.06706, 19.12803, 19.18924, 19.25067, 19.31232, 19.37417, 19.43622, 19.49845, 19.56086, 19.62342, 19.68614, 19.74901, 19.812, 19.87512, 19.93836, 20.0017, 20.06514, 20.12866, 20.19227, 20.25594, 20.31968, 20.38347, 20.44731, 20.51119, 20.5751, 20.63903, 20.70298, 20.76694, 20.8309, 20.89486, 20.9588, 21.02272, 21.08663, 21.15049, 21.21433, 21.27811, 21.34185, 21.40554, 21.46916, 21.53272, 21.5962, 21.65961, 21.72294, 21.78618, 21.84932, 21.91237, 21.97532],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 2',
						data: [18.11955, 18.03668, 17.957, 17.88047, 17.80704, 17.73667, 17.66932, 17.60495, 17.54351, 17.48496, 17.42927, 17.37639, 17.32627, 17.27889, 17.23419, 17.19213, 17.15266, 17.11575, 17.08135, 17.04941, 17.01988, 16.99272, 16.96789, 16.94533, 16.92501, 16.90688, 16.89089, 16.87701, 16.86519, 16.8554, 16.8476, 16.84176, 16.83784, 16.8358, 16.83563, 16.83729, 16.84076, 16.846, 16.853, 16.86173, 16.87217, 16.88428, 16.89805, 16.91346, 16.93048, 16.94909, 16.96925, 16.99096, 17.01418, 17.03888, 17.06505, 17.09265, 17.12166, 17.15206, 17.1838, 17.21688, 17.25126, 17.28691, 17.3238, 17.36192, 17.40122, 17.44168, 17.48329, 17.52599, 17.56978, 17.61462, 17.66049, 17.70736, 17.7552, 17.80398, 17.85369, 17.90429, 17.95575, 18.00807, 18.0612, 18.11512, 18.16981, 18.22525, 18.28141, 18.33827, 18.3958, 18.45398, 18.5128, 18.57222, 18.63222, 18.69279, 18.7539, 18.81554, 18.87767, 18.94028, 19.00336, 19.06688, 19.13081, 19.19516, 19.25988, 19.32497, 19.39041, 19.45618, 19.52226, 19.58864, 19.6553, 19.72222, 19.78938, 19.85678, 19.92439, 19.9922, 20.06019, 20.12835, 20.19667, 20.26514, 20.33373, 20.40243, 20.47124, 20.54013, 20.6091, 20.67814, 20.74722, 20.81635, 20.88551, 20.95468, 21.02386, 21.09304, 21.1622, 21.23134, 21.30045, 21.36951, 21.43852, 21.50748, 21.57636, 21.64517, 21.71389, 21.78252, 21.85104, 21.91946, 21.98777, 22.05596, 22.12402, 22.19194, 22.25973, 22.32737, 22.39487, 22.46221, 22.52939, 22.5964, 22.66325, 22.72993, 22.79643, 22.86275, 22.92889, 22.99485, 23.06062, 23.12619, 23.19158, 23.25677, 23.32177, 23.38657, 23.45117],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 3',
						data: [18.56111, 18.4673, 18.37736, 18.29125, 18.20892, 18.13031, 18.05538, 17.98408, 17.91635, 17.85215, 17.79143, 17.73414, 17.68022, 17.62963, 17.58231, 17.5382, 17.49725, 17.45941, 17.42462, 17.39282, 17.36395, 17.33795, 17.31477, 17.29434, 17.27661, 17.26151, 17.24899, 17.23899, 17.23145, 17.22632, 17.22354, 17.22306, 17.22483, 17.2288, 17.23493, 17.24315, 17.25344, 17.26575, 17.28003, 17.29625, 17.31437, 17.33435, 17.35616, 17.37975, 17.4051, 17.43217, 17.46092, 17.49133, 17.52335, 17.55696, 17.59212, 17.6288, 17.66696, 17.70658, 17.74762, 17.79004, 17.83382, 17.87892, 17.92532, 17.97296, 18.02183, 18.0719, 18.12312, 18.17548, 18.22893, 18.28344, 18.33899, 18.39554, 18.45306, 18.51152, 18.57089, 18.63115, 18.69225, 18.75418, 18.8169, 18.88038, 18.94459, 19.00952, 19.07512, 19.14137, 19.20825, 19.27573, 19.34378, 19.41238, 19.48149, 19.5511, 19.62118, 19.69171, 19.76266, 19.83401, 19.90573, 19.97781, 20.05021, 20.12292, 20.19592, 20.26919, 20.3427, 20.41643, 20.49036, 20.56448, 20.63877, 20.7132, 20.78775, 20.86242, 20.93718, 21.01201, 21.0869, 21.16183, 21.23679, 21.31175, 21.38671, 21.46165, 21.53655, 21.61141, 21.6862, 21.76091, 21.83554, 21.91006, 21.98447, 22.05876, 22.1329, 22.2069, 22.28075, 22.35442, 22.42791, 22.50122, 22.57433, 22.64724, 22.71993, 22.7924, 22.86465, 22.93666, 23.00842, 23.07994, 23.15121, 23.22221, 23.29295, 23.36342, 23.43362, 23.50354, 23.57318, 23.64253, 23.7116, 23.78038, 23.84887, 23.91706, 23.98496, 24.05257, 24.11987, 24.18689, 24.25361, 24.32003, 24.38616, 24.452, 24.51755, 24.58281, 24.64778],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
                    {
						label : 'Ideal máximo 4',
						data: [19.2789, 19.16466, 19.05567, 18.95187, 18.85317, 18.75949, 18.67078, 18.58695, 18.50792, 18.43363, 18.364, 18.29895, 18.23842, 18.18231, 18.13057, 18.08311, 18.03986, 18.00074, 17.96568, 17.93459, 17.90741, 17.88405, 17.86444, 17.8485, 17.83614, 17.8273, 17.82189, 17.81983, 17.82104, 17.82544, 17.83295, 17.84349, 17.85699, 17.87335, 17.89252, 17.9144, 17.93893, 17.96602, 17.99562, 18.02764, 18.06201, 18.09868, 18.13758, 18.17863, 18.22179, 18.26698, 18.31416, 18.36325, 18.41421, 18.46699, 18.52152, 18.57775, 18.63564, 18.69513, 18.75617, 18.81872, 18.88272, 18.94814, 19.01491, 19.083, 19.15236, 19.22295, 19.29471, 19.36761, 19.44161, 19.51666, 19.59272, 19.66974, 19.74769, 19.82652, 19.9062, 19.98668, 20.06793, 20.1499, 20.23256, 20.31587, 20.39979, 20.48429, 20.56933, 20.65487, 20.74089, 20.82733, 20.91417, 21.00138, 21.08893, 21.17677, 21.26488, 21.35323, 21.44178, 21.53051, 21.61938, 21.70837, 21.79745, 21.88659, 21.97576, 22.06494, 22.15409, 22.2432, 22.33224, 22.42118, 22.51, 22.59868, 22.68719, 22.77551, 22.86363, 22.95151, 23.03915, 23.12651, 23.21358, 23.30035, 23.38679, 23.47289, 23.55863, 23.644, 23.72897, 23.81354, 23.89769, 23.98141, 24.06469, 24.1475, 24.22985, 24.31172, 24.3931, 24.47397, 24.55434, 24.6342, 24.71352, 24.79232, 24.87058, 24.94829, 25.02545, 25.10206, 25.17811, 25.2536, 25.32853, 25.40289, 25.47668, 25.5499, 25.62256, 25.69464, 25.76616, 25.83712, 25.90751, 25.97734, 26.04662, 26.11535, 26.18353, 26.25117, 26.31828, 26.38485, 26.45091, 26.51646, 26.58151, 26.64606, 26.71014, 26.77374, 26.83688],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
                    {
						label : 'Ideal máximo 5',
						data: [19.79194, 19.66102, 19.53658, 19.41849, 19.30665, 19.20097, 19.10132, 19.00761, 18.91973, 18.83758, 18.76106, 18.69006, 18.62449, 18.56425, 18.50924, 18.45938, 18.41456, 18.37469, 18.33969, 18.30947, 18.28393, 18.263, 18.24658, 18.23459, 18.22694, 18.22354, 18.22431, 18.22915, 18.23799, 18.25071, 18.26725, 18.2875, 18.31136, 18.33875, 18.36957, 18.40373, 18.44112, 18.48166, 18.52525, 18.57179, 18.6212, 18.67337, 18.72823, 18.78569, 18.84564, 18.90802, 18.97273, 19.03969, 19.10882, 19.18005, 19.25329, 19.32847, 19.40551, 19.48434, 19.5649, 19.6471, 19.73089, 19.81619, 19.90294, 19.99107, 20.08052, 20.17123, 20.26314, 20.35618, 20.45031, 20.54545, 20.64155, 20.73856, 20.83643, 20.93509, 21.03449, 21.13459, 21.23532, 21.33665, 21.43852, 21.54088, 21.64368, 21.74689, 21.85044, 21.9543, 22.05842, 22.16276, 22.26727, 22.37192, 22.47666, 22.58145, 22.68625, 22.79103, 22.89575, 23.00036, 23.10484, 23.20915, 23.31326, 23.41712, 23.52071, 23.624, 23.72696, 23.82955, 23.93175, 24.03353, 24.13486, 24.23571, 24.33606, 24.43589, 24.53516, 24.63386, 24.73197, 24.82945, 24.9263, 25.02249, 25.11801, 25.21283, 25.30693, 25.40031, 25.49294, 25.58481, 25.67591, 25.76623, 25.85575, 25.94446, 26.03234, 26.11941, 26.20563, 26.29101, 26.37553, 26.4592, 26.54201, 26.62395, 26.70501, 26.78521, 26.86453, 26.94297, 27.02054, 27.09724, 27.17307, 27.24802, 27.32211, 27.39534, 27.46771, 27.53924, 27.60992, 27.67977, 27.74879, 27.817, 27.88441, 27.95102, 28.01686, 28.08193, 28.14624, 28.20983, 28.27269, 28.33484, 28.39632, 28.45712, 28.51728, 28.57682, 28.63575],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
                ],
            }
        }
        options = {{
			responsive : true,
			plugins : {
				title : {
					display : true,
					text : 'Gráfica de Crecimiento IMC - Edad (2 a 20 años)',
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
                        text : 'IMC (KG/m2)',
						color : '#ED1160'
                    },
					suggestedMin: 12,
					ticks: {
						stepSize: 1,
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

export default GraficoDeCrecimientoIMCNiñas2a20