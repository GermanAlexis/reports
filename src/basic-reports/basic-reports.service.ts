import { BadRequestException, Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { UpdateBasicReportDto } from './dto/update-basic-report.dto';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer-pdf/printer.service';
import { helloReports } from 'src/reports/hello-report';
import { employeesReference, getCountriesReport } from 'src/reports';
import { DateFormatter } from 'src/helpers/date-formatter';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {

  logger = new Logger('BasicReportsService')

  async onModuleInit() {
    await this.$connect()
    this.logger.log('Data Base Connected')
  }

  constructor(private readonly printerService: PrinterService) { super(); }

  basicReports(): PDFKit.PDFDocument {
    const pdfDoc = helloReports()
    return this.printerService.createPdf(pdfDoc)
  }

  async employmentReference(employeeId: number) {
    const employee = await this.employees.findFirst({
      where: {
        id: employeeId
      }
    })

    if (!employee) {
      throw new NotFoundException(`Employee with id ${employeeId} not found`)
    }

    const pdfDoc = employeesReference({
      employeerName: 'German A Alvarez',
      employeerPotition: 'Gerente',
      employeeStartWork: DateFormatter.getDDMMYYY(employee.start_date),
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeSchedule: employee.work_schedule,
      employeeHourPerDay: employee.hours_per_day,
      company: 'La industria INC'
    })
    return this.printerService.createPdf(pdfDoc);
  }


  async getCountries() {

    const countriesFound = await this.countries.findMany({
      where: {
        local_name: { not: null }
      },
      orderBy: { name: 'asc' }
    })


    const pdfDoc = getCountriesReport({ title: 'Countries', subtitle: 'List All countries', countries: countriesFound })
    return this.printerService.createPdf(pdfDoc)
  }

  remove(id: number) {
    return `This action removes a #${id} basicReport`;
  }
}
