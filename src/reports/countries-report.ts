import { TDocumentDefinitions } from "pdfmake/interfaces";
import { HeaderSection } from "./sections/header.section";
import { countries as Country } from "@prisma/client";
import { FooterSection } from "./sections/footer.section";

interface countriesReportsOptions {
  title: string,
  subtitle: string,
  countries: Country[]
}


export const getCountriesReport = (options: countriesReportsOptions): TDocumentDefinitions => {

  const { title, subtitle, countries } = options
  return {
    pageOrientation: 'landscape',
    header: HeaderSection({ title, subtitle }),
    pageMargins: [40, 160, 40, 60],
    content: [
      {
        layout: 'lightHorizontalLines', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [50, 'auto', 50, 50, '*', '*'],

          body: [
            ['id', 'Name', 'iso2', 'iso3', 'Local Name', 'Continent'],
            ...countries.map((country) => [
              { text: country.id },
              { text: country.name, bold: true },
              country.iso2,
              country.iso3,
              country.local_name,
              country.continent
            ])
          ]
        }
      },
      {
        layout: 'noBorders',
        margin: [0, 20, 0, 0],
        table: {
          headerRows: 1,
          widths: [50, 50, 70, '*', 'auto', '*'],
          body: [
            [
              {},
              {
                text: 'Total countries',
                colSpan: 2,
                bold: true,
              },

              {},
              {
                text: `${countries.length} countries`,
                bold: true,
                colSpan: 3
              },


              {},
              {},
            ],
          ],
        }
      }
    ],
    footer: FooterSection
  }
}
