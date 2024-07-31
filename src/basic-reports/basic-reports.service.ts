import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateBasicReportDto } from './dto/create-basic-report.dto';
import { UpdateBasicReportDto } from './dto/update-basic-report.dto';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer-pdf/printer.service';
import { TDocumentInformation } from 'pdfmake/interfaces';
import { helloReports } from 'src/reports/hello-report';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {

  logger = new Logger('BasicReportsService')

  async onModuleInit() {
    await this.$connect()
    this.logger.log('Data Base Connected')
  }

  constructor(private readonly printerService: PrinterService) { super(); }

  create(): PDFKit.PDFDocument {

    const pdfDoc = helloReports()


    return this.printerService.createPdf(pdfDoc)

  }

  findAll() {
    return `This action returns all basicReports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} basicReport`;
  }

  update(id: number, updateBasicReportDto: UpdateBasicReportDto) {
    return `This action updates a #${id} basicReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} basicReport`;
  }
}
