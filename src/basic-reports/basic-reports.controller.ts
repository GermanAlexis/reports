import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { CreateBasicReportDto } from './dto/create-basic-report.dto';
import { UpdateBasicReportDto } from './dto/update-basic-report.dto';
import { Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }

  @Get()
  create(@Res() response: Response) {


    const doc = this.basicReportsService.create();

    response.setHeader('Content-Type', 'application/pdf');

    doc.pipe(response)
    doc.info.Title = 'Hellos'
    doc.end()
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basicReportsService.findOne(+id);
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
