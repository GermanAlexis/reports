import { Content } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers/date-formatter";


const logo: Content = {
  image: 'src/assests/tucan-code-logo.png',
  width: 100,
  height: 100,
}

interface HeaderOptions {
  showLogo?: boolean;
  showDate?: boolean;
  title?: string,
  subtitle?: string
}


export const HeaderSection = (options: HeaderOptions): Content => {
  const { showLogo = true, showDate = true, title, subtitle } = options

  const HeaderLogo: Content = showLogo ? logo : null
  const HeaderDate: Content = showDate ?
    { text: `${DateFormatter.getDDMMYYY(new Date)}`, alignment: 'right' } : null


  return { margin: [20, 20], columns: [HeaderLogo, HeaderDate] }
}
