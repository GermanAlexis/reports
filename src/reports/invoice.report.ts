import type { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import { FooterSection } from "./sections/footer.section";

export const InvoiceReport = (): TDocumentDefinitions => {


  const headerLogo: Content = {
    image: 'src/assests/tucan-banner.png',
    width: 100,
    height: 50,
    margin: [30, 50]
  }

  return {
    header: headerLogo,

    watermark: { text: 'test watermark', color: 'blue', opacity: 0.3, bold: true, italics: false },
    pageMargins: [30, 100],
    content: [{
      margin: [0, 20, 0, 0],
      text: 'Tucan Code',
      bold: true
    },
    {

      margin: [0, 20],
      columns: [

        {
          text: `15 Montgomery Str, Suite 100,
Ottawa ON K2Y 9X1, CANADA
BN: 12783671823
https://devtalles.com`
        },
        {
          text: [{ text: `Recibo No#: 10255 \n`, bold: true },
            `Fecha del recibo: 11 de julio de 2021
Pagar antes de: 18 de mayo de 2024`],
          alignment: "right"
        }
      ]
    },
    { qr: 'text in QR', foreground: 'black', background: 'yellow', fit: 75, alignment: 'right' },
    {
      text: [{ text: `Cobrar a: \n`, bold: true, fontSize: 15 },
        `Razón Social: Richter Supermarkt
Michael Holz
Grenzacherweg 237`],
    },
    {
      layout: 'headerLineOnly',
      margin: [0, 25],
      table: {
        headerRows: 1,
        widths: [50, '*', 'auto', 'auto', 'auto'],
        body: [
          ['ID', 'Descriptions', 'Quantity', 'Price', 'total'],
          ['2', 'Cafe colombiano de buena marca', 1, 1200, 12334],
          ['2', 'Cafe colombiano de buena marca', 1, 1200, 12334],
          ['2', 'Cafe colombiano de buena marca', 1, 1200, 12334],
          ['2', 'Cafe colombiano de buena marca', 1, 1200, 12334],
          ['2', 'Cafe colombiano de buena marca', 1, 1200, 12334],
          ['2', 'Cafe colombiano de buena marca', 1, 1200, 12334],
        ]
      }
    },
    {
      columns: [
        {
          text: '',
          width: '*'
        },
        {
          layout: 'noBorders',
          table: {
            headerRows: 1,
            body: [
              [{ text: 'Subtotal', bold: true }, 2313312],
              [{ text: 'Total', bold: true, fontSize: 15 }, 123123123]
            ]
          },
          width: 'auto',
          alignment: 'right'
        }
      ]
    }
    ],
    footer: FooterSection


  }
} 
