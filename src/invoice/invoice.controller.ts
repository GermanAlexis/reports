import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Response } from 'express';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) { }


  @Get('/:orderId')
  async getInvoiceReport(@Res() response: Response, @Param('orderId', ParseIntPipe) orderId: number) {

    const doc = await this.invoiceService.getInvoiceReport(orderId);
    response.setHeader('Content-Type', 'application/pdf')
    doc.pipe(response)
    doc.info.Title = `invoice ${orderId}`;
    doc.end()

  }


}
