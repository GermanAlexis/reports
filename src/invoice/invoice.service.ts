import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import type { Content } from 'pdfmake/interfaces';
import { PrinterService } from 'src/printer-pdf/printer.service';
import { InvoiceReport } from 'src/reports/invoice.report';

@Injectable()
export class InvoiceService extends PrismaClient implements OnModuleInit {

  logger = new Logger('InvoiceService')

  async onModuleInit() {
    await this.$connect()
    this.logger.log('Database connect')

  }

  constructor(private readonly printerService: PrinterService) { super() }


  getInvoiceReport(orderId: number): PDFKit.PDFDocument {
    const pdfDoc = InvoiceReport()





    return this.printerService.createPdf(pdfDoc)
  }

}
