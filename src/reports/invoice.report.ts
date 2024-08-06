import type { Content, TDocumentDefinitions } from "pdfmake/interfaces";
import { FooterSection } from "./sections/footer.section";
import { Order } from "./interfaces/order-details.interface";
import { DateFormatter } from "src/helpers/date-formatter";
import { CurrencyFormatter } from "src/helpers/currency-formatter";

export const InvoiceReport = (order: Order): TDocumentDefinitions => {

  const { customers, order_details, order_id, order_date } = order

  const headerLogo: Content = {
    image: 'src/assests/tucan-banner.png',
    width: 100,
    height: 50,
    margin: [30, 50]
  }

  const subtotal = order_details.reduce((acc, curr) => acc + curr.quantity * curr.products.price, 0)

  return {
    header: headerLogo,

    watermark: { text: 'Inovice Copy', color: 'blue', opacity: 0.15, bold: true, italics: true },
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
          text: [
            { text: `Receipt No#: ${order_id} \n`, bold: true },
            { text: `Receipt date: ${DateFormatter.getDDMMYYY(order_date)} \n` },
            {
              text: `Pay before: ${DateFormatter.getDDMMYYY(Date.now())}`
            },
          ],
          alignment: "right"
        }
      ]
    },
    { qr: 'text in QR', foreground: 'black', background: '#6bc1fc', fit: 75, alignment: 'right' },
    {
      text: [{ text: `Charge a: \n`, bold: true, fontSize: 15 },
      { text: `Customer: ${customers.customer_name} \n` },
      { text: `Customer Contact: ${customers.contact_name} \n` },
      { text: `${customers.address} ${customers.city}` }
      ]
    },
    {
      layout: 'headerLineOnly',
      margin: [0, 25],
      table: {
        headerRows: 1,
        widths: [50, '*', 'auto', 'auto', 'auto'],
        body: [
          ['ID', 'Descriptions', 'Quantity', 'Price', 'total'],
          ...order_details.map((pr) => [
            pr.products.product_id,
            pr.products.product_name,
            pr.quantity,
            CurrencyFormatter.FormatterCurrency(pr.products.price),
            CurrencyFormatter.FormatterCurrency(pr.products.price * pr.quantity)
          ]),
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
              [{ text: 'Subtotal', bold: true }, CurrencyFormatter.FormatterCurrency(subtotal)],
              [{ text: 'Total', bold: true, fontSize: 15 }, CurrencyFormatter.FormatterCurrency(subtotal * 0.15)]
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
