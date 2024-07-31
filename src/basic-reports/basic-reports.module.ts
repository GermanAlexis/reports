import { Module } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { BasicReportsController } from './basic-reports.controller';
import { PrinterPdfModule } from '../printer-pdf/printer-pdf.module';

@Module({
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
  imports: [PrinterPdfModule]
})
export class BasicReportsModule { }
