import type { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces"

const styles: StyleDictionary = {
  header: {
    bold: true,
    alignment: 'center',
    fontSize: 22,
    margin: [0, 0, 0, 20]
  },
  body: {
    alignment: 'justify',
    margin: [0, 0, 0, 70]
  },
  signature: {
    fontSize: 14,
    bold: true,
    alignment: "left"
  }
}



export const employeesReference = () => {
  const pdfDoc: TDocumentDefinitions = {
    styles,
    content: [
      { text: 'Employees Reference', style: 'header' },
      {
        text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa], por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra empresa desde el [Fecha de Inicio del Empleado]. \n\n
Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus labores. \n\n
La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y procedimientos establecidos por la empresa. \n\n
Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.`, style: 'body'
      },
      { text: 'Employees Reference', style: 'signature' },
      { text: 'Employees Reference', style: 'signature' },
    ]
  }

  return pdfDoc;
}
