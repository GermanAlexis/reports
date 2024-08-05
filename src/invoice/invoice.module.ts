import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { PrinterPdfModule } from 'src/printer-pdf/printer-pdf.module';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService],
  imports: [PrinterPdfModule]
})
export class InvoiceModule { }
