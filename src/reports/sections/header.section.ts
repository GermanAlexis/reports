import { Content } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers/date-formatter";


const logo: Content = {
  image: 'src/assests/tucan-code-logo.png',
  width: 100,
  height: 100,
}

const header: Content =
  { text: `${DateFormatter.getDDMMYYY(new Date)}`, alignment: 'right', margin: [20, 30], width: 160 }




interface HeaderOptions {
  showLogo?: boolean;
  showDate?: boolean;
  title?: string,
  subtitle?: string
}





export const HeaderSection = (options: HeaderOptions): Content => {
  const { showLogo = true, showDate = true, title, subtitle } = options
  const subtitleStack: Content = subtitle ?
    { text: subtitle, alignment: 'center', fontSize: 16, margin: [80, 2, 0, 0] } : null
  const columnCentral: Content = {
    stack: [
      {
        alignment: 'center',
        margin: [80, 10, 0, 0],
        text: title, fontSize: 22, style: {
          bold: true,
        }
      },
      subtitleStack
    ]
  }

  const HeaderLogo: Content = showLogo ? logo : null
  const HeaderDate: Content = showDate ? header : null
  const HeaderColumnCentral: Content = title ? columnCentral : null

  return { margin: [20, 20], columns: [HeaderLogo, HeaderColumnCentral, HeaderDate] }
}
