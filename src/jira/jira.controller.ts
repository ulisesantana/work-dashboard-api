import { Controller, Get, Injectable } from '@nestjs/common';
import { JiraService } from './jira.service';
import { ApiUseTags } from '@nestjs/swagger';

@Injectable()
@ApiUseTags('Jira')
@Controller('jira')
export class JiraController {
  constructor(private service: JiraService) {
  }

  @Get('reports/yesterday')
  public async getYesterdayReport() {
    return this.service.getYesterdayReport();
  }

  @Get('user')
  public async getUser() {
    return await this.service.getUser();
  }
}
