import moment from 'moment'
import React from 'react'
import { Line } from 'react-chartjs-2'
import useHistClinica from '../../hooks/useHistClinica'
import RedireccionAGraficos from './RedireccionAGraficos'

const GraficoDeCrecimientoPesoEdadNiña2a20 = () => {
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
						data : [9.985668,10.04881,10.17173,10.29079,10.40664,10.5199,10.63112,10.74078,10.84935,10.95722,11.06475,11.17225,11.28,11.38824,11.49718,11.607,11.71783,11.82981,11.94304,12.05757,12.17348,12.2908,12.40954,12.52972,12.65132,12.77432,12.89869,13.02441,13.15141,13.27965,13.40907,13.53962,13.67121,13.80381,13.93732,14.0717,14.20687,14.34277,14.47934,14.61652,14.75426,14.8925,15.03119,15.1703,15.30978,15.44961,15.58975,15.73018,15.87089,16.01186,16.1531,16.2946,16.43638,16.57843,16.7208,16.86349,17.00654,17.14998,17.29386,17.43821,17.5831,17.72858,17.8747,18.02152,18.16912,18.31757,18.46693,18.61729,18.76871,18.92129,19.07511,19.23024,19.38678,19.54481,19.70442,19.86568,20.0287,20.19355,20.36032,20.5291,20.69997,20.873,21.04828,21.22589,21.40589,21.58837,21.77338,21.96099,22.15126,22.34426,22.54002,22.73861,22.94006,23.14441,23.3517,23.56195,23.77519,23.99143,24.21068,24.43296,24.65826,24.88657,25.11788,25.35217,25.58941,25.82958,26.07263,26.31852,26.56719,26.81859,27.07265,27.3293,27.58846,27.85004,28.11395,28.38009,28.64837,28.91866,29.19086,29.46484,29.74046,30.0176,30.29612,30.57588,30.85671,31.13848,31.42101,31.70415,31.98774,32.27159,32.55554,32.8394,33.12301,33.40617,33.6887,33.97042,34.25114,34.53066,34.80881,35.08539,35.36022,35.63309,35.90384,36.17227,36.4382,36.70144,36.96182,37.21916,37.4733,37.72405,37.97127,38.21478,38.45445,38.69012,38.92165,39.14891,39.37177,39.59012,39.80385,40.01284,40.21702,40.4163,40.6106,40.79986,40.98403,41.16306,41.33692,41.50559,41.66907,41.82734,41.98043,42.12835,42.27115,42.40886,42.54155,42.66928,42.79212,42.91017,43.02352,43.13227,43.23654,43.33646,43.43215,43.52374,43.61137,43.69521,43.77538,43.85205,43.92537,43.9955,44.06258,44.12679,44.18826,44.24715,44.3036,44.35775,44.40973,44.45965,44.50764,44.55377,44.59815,44.64082,44.68185,44.72126,44.75906,44.79521,44.82969,44.8624,44.89324,44.92205,44.94866,44.97281,44.99424,45.0126,45.02752,45.03852,45.0451,45.04655],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
						spanGaps : true,
						pointRadius : 0
                    },
					{
						label : 'Ideal mínimo 2',
						data: [10.57373,10.64076,10.77167,10.89899,11.02338,11.14545,11.26575,11.38474,11.50288,11.62054,11.73806,11.85574,11.97384,12.09259,12.21216,12.33273,12.45442,12.57735,12.70158,12.8272,12.95423,13.08271,13.21265,13.34405,13.47689,13.61116,13.74682,13.88384,14.02217,14.16176,14.30257,14.44453,14.5876,14.73172,14.87683,15.02287,15.16981,15.31758,15.46614,15.61545,15.76547,15.91616,16.06749,16.21943,16.37197,16.52509,16.67878,16.83304,16.98787,17.14327,17.29926,17.45586,17.61309,17.77097,17.92956,18.08887,18.24897,18.40989,18.5717,18.73445,18.89819,19.063,19.22895,19.3961,19.56453,19.73432,19.90554,20.07828,20.25261,20.42863,20.6064,20.78601,20.96755,21.15111,21.33675,21.52456,21.71462,21.907,22.10179,22.29905,22.49884,22.70125,22.90633,23.11413,23.32471,23.53813,23.75442,23.97364,24.19581,24.42096,24.64912,24.88031,25.11454,25.35181,25.59214,25.83551,26.08191,26.33132,26.58372,26.83907,27.09734,27.35848,27.62244,27.88915,28.15856,28.43059,28.70516,28.98218,29.26156,29.54321,29.827,30.11285,30.40062,30.69019,30.98143,31.27421,31.56838,31.86381,32.16034,32.45781,32.75608,33.05496,33.3543,33.65394,33.95368,34.25336,34.55281,34.85183,35.15025,35.44789,35.74455,36.04006,36.33424,36.62688,36.91782,37.20687,37.49385,37.77858,38.06087,38.34057,38.61748,38.89145,39.16232,39.42991,39.69408,39.95467,40.21154,40.46454,40.71356,40.95845,41.19909,41.43538,41.66721,41.89448,42.1171,42.33498,42.54806,42.75627,42.95955,43.15786,43.35116,43.53942,43.72263,43.90078,44.07388,44.24193,44.40496,44.563,44.71609,44.8643,45.00768,45.14631,45.28027,45.40964,45.53455,45.65509,45.77138,45.88355,45.99174,46.09608,46.19672,46.29382,46.38753,46.47801,46.56543,46.64995,46.73174,46.81097,46.8878,46.9624,47.03493,47.10554,47.17437,47.24158,47.30728,47.3716,47.43464,47.4965,47.55724,47.61693,47.67559,47.73323,47.78983,47.84535,47.89972,47.9528,48.00447,48.05453,48.10274,48.14882,48.19244,48.23321,48.27069,48.30438,48.3337,48.358,48.37657,48.38346],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal mínimo 3',
						data: [11.23357,11.30567,11.44697,11.58501,11.72047,11.85392,11.98592,12.11692,12.24735,12.37757,12.50791,12.63865,12.77001,12.90222,13.03542,13.16977,13.30538,13.44234,13.58071,13.72054,13.86186,14.00469,14.14902,14.29485,14.44217,14.59093,14.74112,14.89269,15.0456,15.19981,15.35527,15.51193,15.66975,15.82868,15.98868,16.14971,16.31173,16.47471,16.63861,16.80342,16.9691,17.13565,17.30305,17.4713,17.6404,17.81035,17.98118,18.15288,18.32549,18.49904,18.67356,18.84908,19.02566,19.20334,19.38217,19.56221,19.74353,19.9262,20.11027,20.29582,20.48293,20.67168,20.86215,21.05441,21.24855,21.44467,21.64283,21.84313,22.04564,22.25047,22.45768,22.66736,22.8796,23.09446,23.31203,23.53237,23.75556,23.98166,24.21073,24.44283,24.67802,24.91634,25.15783,25.40252,25.65046,25.90167,26.15616,26.41394,26.67503,26.93942,27.20709,27.47805,27.75225,28.02968,28.31029,28.59403,28.88087,29.17072,29.46353,29.75922,30.0577,30.35888,30.66267,30.96895,31.27762,31.58856,31.90163,32.21671,32.53364,32.8523,33.17252,33.49415,33.81701,34.14096,34.4658,34.79137,35.11747,35.44394,35.77056,36.09716,36.42354,36.7495,37.07485,37.39937,37.72288,38.04517,38.36604,38.68529,39.00272,39.31812,39.63131,39.94209,40.25026,40.55564,40.85805,41.15729,41.45321,41.74562,42.03435,42.31926,42.60018,42.87697,43.14949,43.4176,43.68119,43.94012,44.1943,44.44363,44.688,44.92735,45.1616,45.39069,45.61455,45.83316,46.04647,46.25446,46.45712,46.65445,46.84646,47.03316,47.21458,47.39077,47.56176,47.72763,47.88844,48.04426,48.1952,48.34134,48.48279,48.61968,48.75212,48.88026,49.00422,49.12417,49.24026,49.35265,49.46152,49.56702,49.66936,49.7687,49.86524,49.95916,50.05066,50.13993,50.22716,50.31253,50.39624,50.47847,50.5594,50.63919,50.71802,50.79603,50.87336,50.95014,51.02649,51.10249,51.17823,51.25375,51.32908,51.40422,51.47916,51.55381,51.6281,51.70189,51.77499,51.8472,51.91825,51.98781,52.05553,52.12097,52.18364,52.243,52.29842,52.34921,52.3946,52.43376,52.46576,52.47876],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEAL
					{
						label : 'Ideal',
						data: [12.05504,12.13456,12.29102,12.44469,12.59622,12.74621,12.89517,13.04357,13.19181,13.34023,13.48913,13.63877,13.78937,13.94108,14.09407,14.24844,14.40429,14.56168,14.72064,14.88121,15.04341,15.20721,15.37263,15.53962,15.70817,15.87824,16.04978,16.22277,16.39715,16.57289,16.74994,16.92827,17.10783,17.28859,17.47052,17.65361,17.83782,18.02314,18.20956,18.39709,18.58571,18.77545,18.96631,19.15831,19.35149,19.54588,19.74151,19.93843,20.1367,20.33636,20.53748,20.74013,20.94438,21.1503,21.35797,21.56748,21.77891,21.99235,22.20789,22.42562,22.64564,22.86804,23.09293,23.32039,23.55052,23.78342,24.01918,24.25789,24.49965,24.74454,24.99264,25.24403,25.4988,25.75702,26.01874,26.28404,26.55298,26.82559,27.10193,27.38203,27.66593,27.95365,28.24521,28.5406,28.83984,29.14291,29.4498,29.76048,30.07493,30.39308,30.7149,31.04032,31.36928,31.70168,32.03745,32.37649,32.71868,33.06392,33.41208,33.76303,34.11663,34.47272,34.83116,35.19176,35.55437,35.9188,36.28486,36.65236,37.02111,37.39089,37.76149,38.1327,38.5043,38.87605,39.24775,39.61914,39.99,40.36009,40.72918,41.09701,41.46336,41.82798,42.19063,42.55108,42.90909,43.26442,43.61683,43.96612,44.31204,44.65437,44.99291,45.32745,45.65777,45.98369,46.30501,46.62155,46.93314,47.23962,47.54083,47.83661,48.12685,48.41141,48.69018,48.96305,49.22993,49.49075,49.74544,49.99394,50.23621,50.47222,50.70196,50.92541,51.14259,51.35353,51.55825,51.75681,51.94926,52.13568,52.31616,52.4908,52.6597,52.82299,52.98079,53.13327,53.28056,53.42284,53.56028,53.69307,53.82138,53.94544,54.06543,54.18158,54.29411,54.40324,54.50921,54.61224,54.71257,54.81044,54.9061,54.99978,55.09172,55.18217,55.27135,55.35951,55.44686,55.53362,55.62001,55.70624,55.79248,55.87892,55.96573,56.05305,56.141,56.2297,56.31922,56.40963,56.50096,56.5932,56.68633,56.78026,56.8749,56.9701,57.06565,57.16132,57.2568,57.35176,57.44578,57.5384,57.6291,57.71728,57.80227,57.88334,57.95967,58.0304,58.09453,58.15104,58.19877,58.21897],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 2,
                        spanGaps : true,
						pointRadius : 0
					},
					//IDEALES MÁXIMOS
					{
						label : 'Ideal máximo',
						data: [12.98667,13.07613,13.25293,13.42753,13.60059,13.77271,13.9444,14.11611,14.28823,14.46106,14.63491,14.80998,14.98647,15.16452,15.34425,15.52574,15.70905,15.89422,16.08126,16.27016,16.46093,16.65353,16.84793,17.04408,17.24195,17.44149,17.64265,17.84537,18.04961,18.25533,18.46249,18.67105,18.88097,19.09224,19.30483,19.51874,19.73395,19.95048,20.16834,20.38753,20.6081,20.83007,21.05349,21.2784,21.50486,21.73294,21.96271,22.19425,22.42763,22.66294,22.90029,23.13976,23.38146,23.6255,23.87199,24.12103,24.37274,24.62725,24.88466,25.14509,25.40866,25.67549,25.94569,26.21937,26.49666,26.77764,27.06244,27.35114,27.64385,27.94066,28.24165,28.54689,28.85648,29.17046,29.4889,29.81185,30.13934,30.47142,30.80811,31.14942,31.49536,31.84592,32.20108,32.56084,32.92513,33.29393,33.66717,34.04479,34.4267,34.81282,35.20305,35.59726,35.99535,36.39717,36.80259,37.21144,37.62356,38.03878,38.45691,38.87775,39.30111,39.72676,40.15449,40.58407,41.01526,41.44782,41.88148,42.316,42.75111,43.18655,43.62203,44.05728,44.49201,44.92595,45.3588,45.79028,46.22009,46.64794,47.07354,47.49661,47.91684,48.33396,48.74767,49.15771,49.56378,49.96562,50.36297,50.75555,51.14313,51.52544,51.90225,52.27334,52.63847,52.99745,53.35007,53.69614,54.03549,54.36794,54.69335,55.01159,55.32252,55.62603,55.92203,56.21044,56.49119,56.76423,57.02954,57.28708,57.53687,57.77893,58.01327,58.23994,58.45903,58.67061,58.87477,59.07164,59.26135,59.44404,59.61988,59.78905,59.95173,60.10814,60.2585,60.40303,60.54199,60.67562,60.8042,60.928,61.04731,61.16241,61.2736,61.3812,61.48549,61.58681,61.68546,61.78176,61.87602,61.96856,62.05968,62.1497,62.23891,62.32761,62.41609,62.50462,62.59347,62.68289,62.77311,62.86437,62.95684,63.05073,63.1462,63.24336,63.34234,63.4432,63.546,63.65074,63.7574,63.86593,63.9762,64.08808,64.20136,64.3158,64.4311,64.54692,64.66283,64.77838,64.89303,65.00619,65.1172,65.22534,65.32981,65.42974,65.52419,65.61215,65.69252,65.76413,65.82574,65.85238],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 2',
						data: [13.93766,14.03902,14.24017,14.43984,14.63873,14.83743,15.03646,15.23626,15.43719,15.63957,15.84365,16.04963,16.25767,16.46789,16.68038,16.89519,17.11235,17.33186,17.55371,17.77788,18.00432,18.23298,18.46379,18.69671,18.93166,19.16858,19.40739,19.64805,19.89048,20.13464,20.38048,20.62795,20.87704,21.1277,21.37993,21.63373,21.88909,22.14604,22.4046,22.6648,22.92668,23.19031,23.45574,23.72305,23.99232,24.26364,24.5371,24.81282,25.09089,25.37145,25.65461,25.94051,26.22926,26.52102,26.81591,27.11407,27.41566,27.7208,28.02965,28.34233,28.659,28.97979,29.30484,29.63426,29.9682,30.30677,30.65008,30.99825,31.35137,31.70954,32.07286,32.44138,32.8152,33.19435,33.5789,33.96887,34.36431,34.76522,35.17161,35.58347,36.00078,36.42352,36.85164,37.28507,37.72376,38.16762,38.61656,39.07046,39.52921,39.99268,40.46071,40.93316,41.40984,41.89057,42.37517,42.86342,43.35511,43.85001,44.34788,44.84847,45.35152,45.85676,46.36392,46.87271,47.38283,47.894,48.40589,48.9182,49.43061,49.9428,50.45443,50.96519,51.47473,51.98272,52.48882,52.9927,53.49402,53.99244,54.48762,54.97925,55.46697,55.95048,56.42944,56.90354,57.37247,57.83593,58.29361,58.74524,59.19053,59.62921,60.06103,60.48572,60.90306,61.31281,61.71477,62.10874,62.49452,62.87195,63.24088,63.60115,63.95264,64.29525,64.62889,64.95347,65.26895,65.57527,65.87243,66.16042,66.43925,66.70897,66.96961,67.22127,67.46402,67.69798,67.92327,68.14006,68.3485,68.54877,68.74109,68.92566,69.10273,69.27255,69.43538,69.59151,69.74124,69.88487,70.02272,70.15513,70.28244,70.40499,70.52314,70.63725,70.7477,70.85484,70.95905,71.06071,71.16017,71.2578,71.35395,71.44899,71.54326,71.63707,71.73076,71.82463,71.91896,72.01403,72.11008,72.20733,72.306,72.40626,72.50825,72.61209,72.71787,72.82563,72.9354,73.04714,73.1608,73.27626,73.39338,73.51197,73.63178,73.75253,73.87389,73.99546,74.1168,74.23744,74.35682,74.47435,74.58939,74.70121,74.80907,74.91215,75.00958,75.10041,75.18367,75.25831,75.32321,75.35165],
                        borderColor : 'rgba(237, 17, 96, 1)',
						borderWidth: 1,
                        spanGaps : true,
						pointRadius : 0
					},
					{
						label : 'Ideal máximo 3',
						data: [15.00156,15.11839,15.35122,15.58363,15.81632,16.0499,16.28491,16.52176,16.76085,17.00245,17.24681,17.49412,17.7445,17.99807,18.25487,18.51494,18.77826,19.04483,19.31458,19.58748,19.86343,20.14237,20.4242,20.70884,20.99619,21.28616,21.57866,21.8736,22.1709,22.4705,22.77232,23.07631,23.38243,23.69063,24.0009,24.31322,24.62758,24.94401,25.26252,25.58315,25.90595,26.23096,26.55827,26.88796,27.2201,27.55481,27.8922,28.23237,28.57547,28.92162,29.27096,29.62364,29.97981,30.33962,30.70323,31.0708,31.44249,31.81846,32.19887,32.58389,32.97366,33.36833,33.76807,34.17302,34.5833,34.99906,35.42042,35.8475,36.2804,36.71922,37.16406,37.61498,38.07207,38.53537,39.00492,39.48077,39.96292,40.45138,40.94614,41.44718,41.95447,42.46794,42.98755,43.5132,44.0448,44.58226,45.12543,45.67419,46.22839,46.78786,47.35242,47.92187,48.49603,49.07465,49.65753,50.2444,50.83502,51.42913,52.02644,52.62666,53.22951,53.83467,54.44183,55.05067,55.66086,56.27207,56.88395,57.49615,58.10833,58.72013,59.33118,59.94114,60.54964,61.15631,61.7608,62.36274,62.96178,63.55756,64.14972,64.73791,65.32179,65.90103,66.47528,67.04422,67.60754,68.16491,68.71605,69.26067,69.79847,70.32919,70.85258,71.36839,71.87638,72.37633,72.86804,73.35131,73.82597,74.29185,74.7488,75.19669,75.6354,76.06483,76.48488,76.89549,77.2966,77.68817,78.07017,78.44259,78.80544,79.15873,79.50251,79.83682,80.16173,80.4773,80.78364,81.08083,81.36901,81.6483,81.91883,82.18076,82.43425,82.67946,82.91657,83.14578,83.36727,83.58126,83.78795,83.98755,84.18029,84.36639,84.54608,84.7196,84.88718,85.04905,85.20546,85.35663,85.50282,85.64425,85.78117,85.91379,86.04235,86.16706,86.28815,86.40583,86.52029,86.63173,86.74034,86.84629,86.94976,87.05088,87.14981,87.24667,87.34157,87.43462,87.5259,87.61548,87.70342,87.78975,87.87449,87.95764,88.03918,88.11907,88.19726,88.27366,88.34817,88.42066,88.491,88.55903,88.62455,88.68734,88.74718,88.80382,88.85697,88.90635,88.95164,88.99253,89.02867,89.04485],
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
			maintainAspectRatio: false,
			plugins : {
				title : {
					display : true,
					text : 'Gráfica de Crecimiento Peso - Edad (2 a 20 años)',
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
                        text : 'PESO (KG)',
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
	  <div>
		  <RedireccionAGraficos/>
	  </div>
    </div>
  )
}

export default GraficoDeCrecimientoPesoEdadNiña2a20