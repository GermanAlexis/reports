import { Injectable } from '@nestjs/common';
import type { BufferOptions, CustomTableLayout, TDocumentDefinitions } from 'pdfmake/interfaces';
import pdfMakePrinter from 'pdfmake'


const customLayout: Record<string, CustomTableLayout> = {

  customLayout01: {
    hLineWidth: function (i, node) {
      if (i === 0 || i === node.table.body.length) {
        return 0;
      }
      return (i === node.table.headerRows) ? 2 : 1;
    },
    vLineWidth: function (i) {
      return 0;
    },
    hLineColor: function (i) {
      return i === 1 ? 'black' : '#aaa';
    },
    paddingLeft: function (i) {
      return i === 0 ? 0 : 8;
    },
    paddingRight: function (i, node) {
      return (i === node.table.widths.length - 1) ? 0 : 8;
    },
    fillColor: function (i, node) {
      if (i === 0) {
        return '#7b90be'
      }
      return i % 2 === 0 ? '#f3f3f3' : null
    }
  }
}


@Injectable()
export class PrinterService {




  private fontDescriptors = {
    Roboto: {
      normal: './fonts/Roboto-Regular.ttf',
      bold: './fonts/Roboto-Medium.ttf',
      italics: './fonts/Roboto-Italic.ttf',
      bolditalics: './fonts/Roboto-MediumItalic.ttf'
    }
  };

  private printer = new pdfMakePrinter(this.fontDescriptors);


  createPdf(pdfDoc: TDocumentDefinitions, options: BufferOptions = {
    tableLayouts: customLayout
  }) {
    return this.printer.createPdfKitDocument(pdfDoc, options);
  }


}
