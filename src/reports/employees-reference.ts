import type { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces"
import { HeaderSection } from "./sections/header.section"
import { createDiffieHellmanGroup } from "crypto"

const styles: StyleDictionary = {
  header: {
    bold: true,
    alignment: 'center',
    fontSize: 22,
    margin: [0, 90, 0, 50]
  },
  body: {
    alignment: 'justify',
    margin: [0, 50, 0, 70]
  },
  signature: {
    fontSize: 14,
    bold: true,
    alignment: "left"
  }
}


interface EmployeeValues {
  employeerName: string,
  employeerPotition: string,
  employeeName: string,
  employeeStartWork: string,
  employeePosition: string,
  employeeSchedule: string,
  company: string,
  employeeHourPerDay: number,
}

export const employeesReference = (options: EmployeeValues) => {

  const { employeerName, employeerPotition, employeeName, employeePosition, employeeSchedule, employeeStartWork, company, employeeHourPerDay } = options
  const pdfDoc: TDocumentDefinitions = {
    styles,
    pageMargins: [20, 40, 20, 30],
    header: HeaderSection({}),
    content: [
      { text: 'Employeement Reference', style: 'header' },
      {
        text: `Yo, ${employeerName}, en mi calidad de ${employeerPotition} de ${company}, por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra empresa desde el ${employeeStartWork}. \n\n
Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus labores. \n\n
La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeHourPerDay} horas semanales, con un horario de ${employeeSchedule}, cumpliendo con las políticas y procedimientos establecidos por la empresa. \n\n
Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.`, style: 'body'
      },
      { text: `${employeeName}`, style: 'signature' },
      { text: `${employeePosition}`, style: 'signature' },
    ]
  }

  return pdfDoc;
}
