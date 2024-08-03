import { Content } from "pdfmake/interfaces"

export const FooterSection = (currentPage: number, pageCount: number): Content => {
  return { text: `${currentPage}  of  ${pageCount}`, alignment: 'right', bold: true, fontSize: 12, margin: [0, 5, 40, 0] }

}
