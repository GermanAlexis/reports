import { Injectable } from '@nestjs/common';
import type { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';
import pdfMakePrinter from 'pdfmake'

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


  createPdf(pdfDoc: TDocumentDefinitions) {
    return this.printer.createPdfKitDocument(pdfDoc);
  }


}
