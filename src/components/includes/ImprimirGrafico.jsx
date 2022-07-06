import React from "react";
import jsPDF from "jspdf";
import moment from "moment";
import calcularEdad from '../../functions/calcularEdad'
import LogoGrafico from '../../img/LogoGrafico.png'
import fondoGraficoF from '../../img/fondoGraficoF.jpg'
import fondoGraficoM from '../../img/fondoGraficoM.jpg'

const ImprimirGrafico = ({grafico, datosPaciente}) => {
    const DocPDF = () => {
		//CREANDO IMG DE LA GRÁFICA
		let imgGrafico = ''
		if(grafico){
			imgGrafico = grafico.canvas.toDataURL('image/jpeg', 1.0)
		}

		const {years, months, days} = calcularEdad(moment().format(), datosPaciente.fecha_nac)

		var doc = new jsPDF('l', 'mm', [297, 210]);
		if(datosPaciente.sexo === 1)
			doc.addImage(fondoGraficoM, 0, 0)
		else
			doc.addImage(fondoGraficoF, 0, 0)
		doc.addImage(LogoGrafico, 'PNG', 165, 8)
		// doc.addImage(img, 'PNG', 185, 4)

		//DATOS DE PACIENTE
		doc.setFont('Courier', 'bold').setFontSize(15).setTextColor('white').text(13, 10, 'PACIENTE:___________________________________');
		doc.setFont('Courier', 'bold').setFontSize(15).setTextColor('white').text(13, 16, '         ___________________________________');
		doc.setFont(undefined, 'bold').setFontSize(15).setTextColor('white').text(43, 10, datosPaciente.nombres_paciente.toUpperCase(), {maxWidth: 110});
		doc.setFont('Courier', 'bold').setFontSize(15).setTextColor('white').text(13, 25, 'EDAD    :___________________________________ ');
		doc.setFont(undefined, 'bold').setFontSize(15).setTextColor('white').text(43, 25, (years + ' AÑOS ' + months + ' MESES ' + days + ' DÍAS'));
		doc.setFont('Courier', 'bold').setFontSize(15).setTextColor('white').text(13, 35, 'FECHA   :___________________________________ ');
		doc.setFont(undefined, 'bold').setFontSize(15).setTextColor('white').text(43, 35, moment().format('DD/MM/YYYY'));

		//DATOS DE FIRMA
		doc.setFont('helvetic', 'bold').setFontSize(11).setTextColor('white').text(202.5, 37, 'Dr. Juan C. Benites Herrera');
		doc.setFont('helvetic', 'bold').setFontSize(9).setTextColor('white').text(209, 40.1, 'MÉDICO PEDIATRA');
		doc.setFont('helvetic', 'bold').setFontSize(9).setTextColor('white').text(206, 43, 'C.M.P. 30305 - R.N.E 19230');

		doc.addImage(imgGrafico, 'JPEG', 13, 45, 271, 160, );
		doc.setProperties({title: (datosPaciente.nombres_paciente.toUpperCase() + ' - ' + moment().format('DD/MM/YYYY'))})
		doc.autoPrint()
        doc.output('dataurlnewwindow', (datosPaciente.nombres_paciente.toUpperCase() + ' - ' + moment().format('DD/MM/YYYY')))
	}

	return(
		<i className="fa-solid fa-print" style={{fontSize: '20px'}} onClick={DocPDF}></i>
	)
}

export default ImprimirGrafico