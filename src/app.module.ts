import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [BasicReportsModule, InvoiceModule],
})
export class AppModule { }
