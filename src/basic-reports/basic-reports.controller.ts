import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { UpdateBasicReportDto } from './dto/update-basic-report.dto';
import { Response } from 'express';

@Controller('reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }

  @Get('/basic')
  basic(@Res() response: Response) {
    const doc = this.basicReportsService.basicReports();
    response.setHeader('Content-Type', 'application/pdf');
    doc.pipe(response)
    doc.info.Title = 'Hellos'
    doc.end()
  }


  @Get('/employment-reference/:employeeId')
  async employmentReference(@Res() response: Response, @Param('employeeId', ParseIntPipe) employeeId: number) {
    const doc = await this.basicReportsService.employmentReference(employeeId);
    response.setHeader('Content-Type', 'application/pdf');
    doc.pipe(response)
    doc.info.Title = 'Hellos'
    doc.end()
  }

  @Get('/countries')
  async getCountries(@Res() response: Response) {
    const doc = await this.basicReportsService.getCountries();
    response.setHeader('Content-Type', 'application/pdf')
    doc.pipe(response)
    doc.info.Title = 'Countries'
    doc.end()
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basicReportsService.remove(+id);
  }
}
