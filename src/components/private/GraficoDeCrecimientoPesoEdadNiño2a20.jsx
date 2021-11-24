import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'


const GraficoDeCrecimientoPesoEdadNiño2a20 = () => {
	var datos = []
	let {fechaHistoria, fechaNac, pesoPaciente} = useHistClinica()


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
		datos[meses[i]] = pesoPaciente[i]
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
                        borderColor : 'red',
						borderWidth: 3,
                        spanGaps : true,
						pointRadius : 3
                    },
					//IDEALES MÍNIMOS
                    {
                        label: 'Ideal mínimo',
						data : [10.44144, 10.55847, 10.6738, 10.78798, 10.90147, 11.01466, 11.12787, 11.24135, 11.3553, 11.46988, 11.58521, 11.70137, 11.81842, 11.93639, 12.05529, 12.17512, 12.29587, 12.41751, 12.54001, 12.66334, 12.78746, 12.91234, 13.03792, 13.16419, 13.29111, 13.41864, 13.54675, 13.67543, 13.80466, 13.93441, 14.06467, 14.19544, 14.32672, 14.4585, 14.59079, 14.72359, 14.85692, 14.99078, 15.1252, 15.26018, 15.39575, 15.53193, 15.66872, 15.80617, 15.94427, 16.08306, 16.22255, 16.36276, 16.5037, 16.64539, 16.78785, 16.93107, 17.07507, 17.21986, 17.36543, 17.5118, 17.65895, 17.80689, 17.9556, 18.10509, 18.25535, 18.40637, 18.55813, 18.71062, 18.86385, 19.01778, 19.17243, 19.32776, 19.48379, 19.6405, 19.79788, 19.95594, 20.11467, 20.27408, 20.43418, 20.59497, 20.75647, 20.91869, 21.08166, 21.2454, 21.40994, 21.57532, 21.74156, 21.90873, 22.07685, 22.24599, 22.4162, 22.58754, 22.76008, 22.93388, 23.10902, 23.28558, 23.46364, 23.64329, 23.8246, 24.00769, 24.19264, 24.37956, 24.56855, 24.75971, 24.95315, 25.14898, 25.34731, 25.54826, 25.75195, 25.95847, 26.16796, 26.38051, 26.59626, 26.81531, 27.03777, 27.26376, 27.49337, 27.72672, 27.9639, 28.20501, 28.45015, 28.69939, 28.95283, 29.21053, 29.47257, 29.739, 30.00988, 30.28525, 30.56516, 30.84962, 31.13865, 31.43227, 31.73046, 32.03321, 32.3405, 32.65229, 32.96852, 33.28913, 33.61404, 33.94317, 34.27642, 34.61365, 34.95475, 35.29956, 35.64794, 35.99969, 36.35464, 36.71259, 37.07331, 37.43658, 37.80215, 38.16976, 38.53916, 38.91004, 39.28212, 39.65509, 40.02863, 40.40241, 40.77608, 41.14932, 41.52175, 41.89302, 42.26275, 42.63058, 42.99612, 43.35899, 43.71882, 44.07523, 44.42784, 44.77629, 45.1202, 45.45922, 45.79301, 46.12122, 46.44354, 46.75967, 47.06932, 47.37223, 47.66815, 47.95687, 48.23819, 48.51195, 48.778, 49.03625, 49.28662, 49.52905, 49.76354, 49.9901, 50.2088, 50.4197, 50.62293, 50.81862, 51.00695, 51.18811, 51.36232, 51.52982, 51.69086, 51.84574, 51.99472, 52.13808, 52.27612, 52.40911, 52.53731, 52.66098, 52.78032, 52.89553, 53.00674, 53.11402, 53.21739, 53.31679, 53.41207, 53.50297, 53.58913, 53.67003, 53.74501, 53.81325, 53.87373, 53.92519, 53.96614, 53.99482, 54.00392],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 2,
						spanGaps : true,
						pointRadius : 0
                    },
					{
						label : 'Ideal mínimo 2',
						data: [11.1149, 11.23747, 11.35806, 11.47728, 11.59567, 11.71368, 11.8317, 11.95005, 12.069, 12.18875, 12.30948, 12.43132, 12.55436, 12.67868, 12.80431, 12.93128, 13.05959, 13.18923, 13.32017, 13.45238, 13.58581, 13.72043, 13.85618, 13.99301, 14.13086, 14.26968, 14.40943, 14.55004, 14.69148, 14.8337, 14.97666, 15.12032, 15.26465, 15.40962, 15.55521, 15.70139, 15.84814, 15.99546, 16.14334, 16.29176, 16.44074, 16.59026, 16.74033, 16.89096, 17.04215, 17.19393, 17.34629, 17.49926, 17.65285, 17.80708, 17.96197, 18.11754, 18.2738, 18.43077, 18.58848, 18.74695, 18.9062, 19.06624, 19.2271, 19.3888, 19.55136, 19.71479, 19.87913, 20.04438, 20.21057, 20.37771, 20.54584, 20.71496, 20.88511, 21.05629, 21.22855, 21.4019, 21.57637, 21.75198, 21.92878, 22.10678, 22.28602, 22.46654, 22.64838, 22.83157, 23.01617, 23.20222, 23.38976, 23.57885, 23.76955, 23.96192, 24.15601, 24.35189, 24.54962, 24.74929, 24.95096, 25.1547, 25.3606, 25.56874, 25.77921, 25.99208, 26.20745, 26.42541, 26.64604, 26.86945, 27.09573, 27.32496, 27.55726, 27.7927, 28.0314, 28.27343, 28.51891, 28.76791, 29.02052, 29.27685, 29.53696, 29.80095, 30.06888, 30.34084, 30.61689, 30.8971, 31.18151, 31.4702, 31.76319, 32.06052, 32.36224, 32.66834, 32.97885, 33.29378, 33.6131, 33.93681, 34.26488, 34.59726, 34.93391, 35.27477, 35.61976, 35.96879, 36.32176, 36.67857, 37.03908, 37.40317, 37.77067, 38.14143, 38.51526, 38.89198, 39.27138, 39.65325, 40.03736, 40.42347, 40.81133, 41.20067, 41.59121, 41.98269, 42.37479, 42.76722, 43.15967, 43.55182, 43.94334, 44.3339, 44.72317, 45.1108, 45.49646, 45.8798, 46.26048, 46.63815, 47.01247, 47.3831, 47.74972, 48.11199, 48.46959, 48.82222, 49.16956, 49.51134, 49.84727, 50.17709, 50.50055, 50.81743, 51.12752, 51.43062, 51.72656, 52.0152, 52.29642, 52.57011, 52.8362, 53.09465, 53.34544, 53.58858, 53.82409, 54.05205, 54.27255, 54.4857, 54.69165, 54.89058, 55.08267, 55.26814, 55.44723, 55.6202, 55.78731, 55.94884, 56.10508, 56.25633, 56.40286, 56.54495, 56.68288, 56.81689, 56.94719, 57.07396, 57.19732, 57.31737, 57.43409, 57.54742, 57.6572, 57.76315, 57.86488, 57.96187, 58.05343, 58.13869, 58.21662, 58.28594, 58.34515, 58.39247, 58.4110],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal mínimo 3',
						data: [11.85182, 11.98142, 12.10889, 12.23491, 12.36007, 12.4849, 12.60983, 12.73523, 12.86144, 12.9887, 13.11723, 13.24721, 13.37875, 13.51197, 13.64693, 13.78366, 13.92218, 14.0625, 14.20458, 14.3484, 14.49391, 14.64105, 14.78977, 14.93998, 15.09163, 15.24463, 15.39892, 15.55441, 15.71103, 15.86872, 16.0274, 16.18701, 16.34748, 16.50877, 16.67081, 16.83356, 16.99698, 17.16103, 17.32567, 17.49088, 17.65664, 17.82293, 17.98974, 18.15706, 18.32489, 18.49324, 18.66211, 18.83151, 19.00147, 19.17199, 19.34311, 19.51485, 19.68724, 19.86032, 20.03413, 20.20871, 20.38409, 20.56032, 20.73745, 20.91553, 21.0946, 21.27471, 21.45592, 21.63828, 21.82185, 22.00666, 22.19278, 22.38027, 22.56917, 22.75955, 22.95145, 23.14493, 23.34005, 23.53686, 23.73542, 23.93579, 24.13801, 24.34216, 24.54828, 24.75645, 24.9667, 25.17912, 25.39375, 25.61067, 25.82993, 26.05161, 26.27576, 26.50246, 26.73177, 26.96376, 27.19851, 27.43609, 27.67657, 27.92001, 28.16651, 28.41613, 28.66894, 28.92502, 29.18446, 29.44731, 29.71365, 29.98357, 30.25713, 30.53439, 30.81543, 31.10032, 31.38912, 31.68189, 31.97868, 32.27955, 32.58454, 32.89371, 33.20709, 33.52472, 33.84662, 34.17281, 34.5033, 34.83811, 35.17724, 35.52066, 35.86837, 36.22034, 36.57653, 36.9369, 37.30138, 37.66991, 38.04241, 38.4188, 38.79897, 39.18281, 39.5702, 39.96099, 40.35506, 40.75222, 41.15232, 41.55516, 41.96056, 42.3683, 42.77818, 43.18995, 43.60337, 44.01821, 44.43419, 44.85104, 45.26849, 45.68625, 46.10402, 46.52151, 46.9384, 47.35437, 47.76912, 48.18232, 48.59365, 49.00279, 49.40941, 49.81318, 50.21378, 50.61091, 51.00423, 51.39346, 51.77827, 52.15839, 52.53352, 52.90339, 53.26773, 53.6263, 53.97886, 54.32518, 54.66505, 54.99828, 55.3247, 55.64414, 55.95647, 56.26158, 56.55935, 56.84971, 57.13261, 57.408, 57.67589, 57.93627, 58.18918, 58.43468, 58.67285, 58.9038, 59.12764, 59.34454, 59.55466, 59.75819, 59.95536, 60.14639, 60.33153, 60.51105, 60.68521, 60.85431, 61.01862, 61.17846, 61.33409, 61.4858, 61.63386, 61.77851, 61.91997, 62.05842, 62.19399, 62.32678, 62.4568, 62.58399, 62.70822, 62.82922, 62.94664, 63.06, 63.16863, 63.27175, 63.36835, 63.45727, 63.53709, 63.60618, 63.63611],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEAL
					{
						label : 'Ideal',
						data: [12.74154, 12.88102, 13.01842, 13.1545, 13.2899, 13.42519, 13.56088, 13.69738, 13.83505, 13.97418, 14.11503, 14.2578, 14.40263, 14.54965, 14.69893, 14.85054, 15.00449, 15.16078, 15.3194, 15.4803, 15.64343, 15.80873, 15.9761, 16.14548, 16.31677, 16.48986, 16.66468, 16.8411, 17.01904, 17.19839, 17.37906, 17.56096, 17.744, 17.92809, 18.11316, 18.29912, 18.48592, 18.6735, 18.8618, 19.05077, 19.24037, 19.43058, 19.62136, 19.8127, 20.00459, 20.19703, 20.39002, 20.58357, 20.7777, 20.97243, 21.16779, 21.36383, 21.56058, 21.75811, 21.95645, 22.15567, 22.35584, 22.55702, 22.7593, 22.96273, 23.16742, 23.37343, 23.58086, 23.78979, 24.00031, 24.21251, 24.42648, 24.64231, 24.8601, 25.07992, 25.30189, 25.52607, 25.75257, 25.98146, 26.21284, 26.44679, 26.68339, 26.92273, 27.16489, 27.40995, 27.65797, 27.90904, 28.16324, 28.42064, 28.6813, 28.9453, 29.21271, 29.48359, 29.758, 30.03602, 30.3177, 30.60311, 30.8923, 31.18533, 31.48225, 31.78312, 32.08799, 32.3969, 32.70991, 33.02704, 33.34835, 33.67387, 34.00363, 34.33766, 34.67599, 35.01864, 35.36562, 35.71695, 36.07263, 36.43266, 36.79704, 37.16577, 37.53881, 37.91616, 38.29777, 38.68361, 39.07364, 39.46781, 39.86604, 40.26828, 40.67444, 41.08443, 41.49817, 41.91555, 42.33644, 42.76073, 43.18828, 43.61896, 44.05259, 44.48903, 44.92809, 45.3696, 45.81336, 46.25917, 46.70681, 47.15606, 47.60669, 48.05847, 48.51113, 48.96443, 49.4181, 49.87187, 50.32546, 50.77859, 51.23096, 51.68229, 52.13226, 52.58059, 53.02696, 53.47107, 53.91261, 54.35128, 54.78677, 55.21878, 55.64701, 56.07116, 56.49096, 56.90611, 57.31634, 57.72139, 58.121, 58.51492, 58.90293, 59.2848, 59.66033, 60.02932, 60.39159, 60.74699, 61.09537, 61.4366, 61.77057, 62.09719, 62.41639, 62.72809, 63.03228, 63.32892, 63.61802, 63.89959, 64.17367, 64.44032, 64.69961, 64.95165, 65.19653, 65.4344, 65.6654, 65.8897, 66.10749, 66.31897, 66.52437, 66.7239, 66.91784, 67.10642, 67.28993, 67.46863, 67.64281, 67.81277, 67.97877, 68.14111, 68.30005, 68.45585, 68.60872, 68.75889, 68.90653, 69.05176, 69.19467, 69.33527, 69.47351, 69.60926, 69.74228, 69.87224, 69.99869, 70.12104, 70.23857, 70.3504, 70.45546, 70.55252, 70.59761],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [13.71386, 13.8659, 14.01623, 14.16567, 14.31493, 14.46462, 14.61527, 14.76732, 14.92117, 15.07711, 15.23541, 15.39628, 15.55987, 15.7263, 15.89565, 16.06797, 16.24326, 16.42153, 16.60273, 16.78682, 16.97373, 17.16336, 17.35564, 17.55044, 17.74767, 17.9472, 18.14892, 18.3527, 18.55842, 18.76598, 18.97524, 19.1861, 19.39846, 19.6122, 19.82724, 20.04348, 20.26086, 20.47929, 20.69871, 20.91907, 21.14031, 21.36242, 21.58534, 21.80908, 22.0336, 22.25893, 22.48505, 22.712, 22.93978, 23.16845, 23.39803, 23.62858, 23.86016, 24.09284, 24.32667, 24.56175, 24.79815, 25.03598, 25.27531, 25.51626, 25.75894, 26.00344, 26.24988, 26.49839, 26.74907, 27.00204, 27.25743, 27.51535, 27.77593, 28.03928, 28.30554, 28.5748, 28.84718, 29.12281, 29.40179, 29.68422, 29.97021, 30.25986, 30.55326, 30.85051, 31.15169, 31.45689, 31.76618, 32.07964, 32.39734, 32.71933, 33.04569, 33.37646, 33.7117, 34.05144, 34.39573, 34.7446, 35.09808, 35.4562, 35.81896, 36.1864, 36.55851, 36.93529, 37.31675, 37.70287, 38.09365, 38.48906, 38.88907, 39.29366, 39.7028, 40.11642, 40.5345, 40.95697, 41.38377, 41.81484, 42.2501, 42.68947, 43.13287, 43.5802, 44.03137, 44.48627, 44.94478, 45.40679, 45.87218, 46.3408, 46.81253, 47.28721, 47.7647, 48.24483, 48.72744, 49.21236, 49.6994, 50.18839, 50.67913, 51.17143, 51.66508, 52.15987, 52.65558, 53.152, 53.64889, 54.14603, 54.64318, 55.1401, 55.63653, 56.13224, 56.62696, 57.12044, 57.61241, 58.10262, 58.5908, 59.07667, 59.55998, 60.04046, 60.51782, 60.99182, 61.46217, 61.92862, 62.3909, 62.84876, 63.30195, 63.75019, 64.19328, 64.63096, 65.063, 65.48919, 65.90932, 66.32318, 66.73059, 67.13136, 67.52534, 67.91236, 68.29229, 68.665, 69.03038, 69.38833, 69.73878, 70.08164, 70.41688, 70.74445, 71.06433, 71.37652, 71.68103, 71.97788, 72.26711, 72.54879, 72.82297, 73.08975, 73.34922, 73.60152, 73.84675, 74.08507, 74.31664, 74.54164, 74.76024, 74.97267, 75.17912, 75.37983, 75.57503, 75.76499, 75.94994, 76.13018, 76.30597, 76.47759, 76.64533, 76.80948, 76.97031, 77.12809, 77.2831, 77.4356, 77.5858, 77.73392, 77.88014, 78.02461, 78.16742, 78.30863, 78.44824, 78.58618, 78.72234, 78.8565, 78.98839, 79.11762, 79.18111],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 2',
						data: [14.66716, 14.83332, 14.99848, 15.16351, 15.32917, 15.4961, 15.66485, 15.83588, 16.00958, 16.18624, 16.36612, 16.5494, 16.73623, 16.9267, 17.12085, 17.3187, 17.52025, 17.72545, 17.93424, 18.14654, 18.36226, 18.58128, 18.80348, 19.02875, 19.25695, 19.48794, 19.7216, 19.95779, 20.19637, 20.43722, 20.68022, 20.92526, 21.17222, 21.421, 21.67152, 21.92369, 22.17744, 22.4327, 22.68943, 22.94758, 23.20712, 23.46802, 23.73029, 23.99391, 24.2589, 24.52527, 24.79305, 25.06229, 25.33302, 25.6053, 25.87919, 26.15477, 26.4321, 26.71128, 26.99239, 27.27553, 27.56081, 27.84832, 28.13817, 28.43049, 28.72538, 29.02298, 29.3234, 29.62676, 29.9332, 30.24283, 30.55579, 30.8722, 31.19218, 31.51586, 31.84335, 32.17478, 32.51025, 32.84988, 33.19377, 33.54202, 33.89472, 34.25197, 34.61384, 34.98041, 35.35176, 35.72793, 36.10899, 36.49499, 36.88596, 37.28193, 37.68294, 38.08898, 38.50008, 38.91622, 39.33741, 39.76363, 40.19484, 40.63103, 41.07214, 41.51813, 41.96894, 42.42452, 42.88478, 43.34967, 43.81908, 44.29292, 44.77111, 45.25354, 45.7401, 46.23066, 46.72512, 47.22334, 47.72519, 48.23054, 48.73924, 49.25114, 49.76611, 50.28397, 50.80458, 51.32778, 51.85339, 52.38125, 52.91119, 53.44304, 53.97661, 54.51174, 55.04825, 55.58594, 56.12464, 56.66416, 57.20431, 57.74492, 58.28578, 58.82671, 59.36752, 59.90801, 60.448, 60.98729, 61.52569, 62.063, 62.59903, 63.13359, 63.66648, 64.1975, 64.72647, 65.25318, 65.77745, 66.29907, 66.81785, 67.33359, 67.84611, 68.3552, 68.86067, 69.36233, 69.85999, 70.35345, 70.84252, 71.32701, 71.80674, 72.2815, 72.75113, 73.21544, 73.67424, 74.12736, 74.57462, 75.01586, 75.4509, 75.87959, 76.30176, 76.71726, 77.12595, 77.52768, 77.92233, 78.30977, 78.68987, 79.06252, 79.42763, 79.78509, 80.13483, 80.47676, 80.81082, 81.13696, 81.45512, 81.76528, 82.06741, 82.3615, 82.64755, 82.92558, 83.1956, 83.45768, 83.71185, 83.9582, 84.19682, 84.42781, 84.6513, 84.86744, 85.0764, 85.27837, 85.47356, 85.66221, 85.8446, 86.02101, 86.19177, 86.35725, 86.51781, 86.6739, 86.82597, 86.97452, 87.12008, 87.26324, 87.40462, 87.54488, 87.68474, 87.82495, 87.96634, 88.10976, 88.25614, 88.40645, 88.56175, 88.72311, 88.80644],
                        borderColor : 'rgba(1, 97, 170, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 3',
						data: [15.68841, 15.8717, 16.05514, 16.23967, 16.42609, 16.61508, 16.8072, 17.00291, 17.2026, 17.40654, 17.61495, 17.82797, 18.0457, 18.26818, 18.49539, 18.72731, 18.96385, 19.20492, 19.45041, 19.70017, 19.95407, 20.21195, 20.47366, 20.73903, 21.00793, 21.28018, 21.55565, 21.83419, 22.11568, 22.39999, 22.68702, 22.97667, 23.26885, 23.56349, 23.86054, 24.15995, 24.46169, 24.76575, 25.07212, 25.38081, 25.69185, 26.00527, 26.32111, 26.63944, 26.96033, 27.28386, 27.6101, 27.93916, 28.27115, 28.60616, 28.94432, 29.28574, 29.63055, 29.97888, 30.33083, 30.68656, 31.04617, 31.4098, 31.77756, 32.14959, 32.52599, 32.90689, 33.29238, 33.68257, 34.07755, 34.47742, 34.88226, 35.29215, 35.70715, 36.12732, 36.55271, 36.98338, 37.41935, 37.86065, 38.30731, 38.75932, 39.2167, 39.67943, 40.14749, 40.62087, 41.09952, 41.5834, 42.07247, 42.56665, 43.06589, 43.5701, 44.0792, 44.5931, 45.11169, 45.63487, 46.16253, 46.69454, 47.23077, 47.77109, 48.31536, 48.86343, 49.41515, 49.97037, 50.52892, 51.09064, 51.65537, 52.22293, 52.79314, 53.36584, 53.94084, 54.51797, 55.09704, 55.67787, 56.26029, 56.84411, 57.42915, 58.01524, 58.60219, 59.18983, 59.77799, 60.3665, 60.95519, 61.5439, 62.13246, 62.72072, 63.30853, 63.89573, 64.48219, 65.06776, 65.65231, 66.2357, 66.81782, 67.39854, 67.97776, 68.55535, 69.13122, 69.70526, 70.27738, 70.84748, 71.41549, 71.98133, 72.5449, 73.10614, 73.66498, 74.22134, 74.77517, 75.32641, 75.87498, 76.42083, 76.9639, 77.50413, 78.04146, 78.57582, 79.10716, 79.63542, 80.1605, 80.68236, 81.2009, 81.71605, 82.2277, 82.73579, 83.24017, 83.74075, 84.23741, 84.73, 85.21839, 85.70242, 86.18192, 86.65673, 87.12663, 87.59143, 88.05093, 88.50487, 88.95303, 89.39516, 89.83098, 90.26024, 90.68264, 91.0979, 91.50571, 91.90578, 92.29779, 92.68144, 93.05643, 93.42244, 93.77917, 94.12633, 94.46364, 94.79081, 95.10761, 95.41379, 95.70913, 95.99346, 96.26661, 96.52847, 96.77894, 97.01799, 97.24564, 97.46194, 97.66704, 97.86111, 98.04443, 98.21733, 98.38026, 98.53375, 98.67844, 98.81509, 98.94455, 99.06786, 99.18615, 99.30075, 99.41315, 99.52501, 99.63819, 99.75477, 99.87706, 100.0076, 100.1492, 100.3048, 100.4779, 100.6721, 100.7784],
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
			plugins : {
				title : {
					display : true,
					text : 'Gráfica de Crecimiento Peso - Edad (2 a 20 años)',
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
					suggestedMin: 0,
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

export default GraficoDeCrecimientoPesoEdadNiño2a20