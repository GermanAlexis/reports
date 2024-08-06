import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import type { Content } from 'pdfmake/interfaces';
import { mappersToInterfaces } from 'src/helpers/mapper-order';
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


  async getInvoiceReport(orderId: number): Promise<PDFKit.PDFDocument> {


    const order = await this.orders.findUnique({
      where: {
        order_id: orderId
      }, include: {
        order_details: {
          select: {
            quantity: true,
            products: true
          }
        },
        customers: true
      }
    })

    if (!order) {
      throw new NotFoundException(`Order with  id #${orderId} not found`)
    }


    console.log(order.order_details[0].products)

    const orderMapped = mappersToInterfaces(order)

    const pdfDoc = InvoiceReport(orderMapped)





    return this.printerService.createPdf(pdfDoc)
  }

}
