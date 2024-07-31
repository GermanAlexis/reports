import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
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


  @Get('/employment-references')
  employeesReference(@Res() response: Response) {
    const doc = this.basicReportsService.employeesReference();
    response.setHeader('Content-Type', 'application/pdf');
    doc.pipe(response)
    doc.info.Title = 'Hellos'
    doc.end()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasicReportDto: UpdateBasicReportDto) {
    return this.basicReportsService.update(+id, updateBasicReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basicReportsService.remove(+id);
  }
}
