import { Module } from '@nestjs/common';
import { JiraService } from './jira.service';
import { JiraController } from './jira.controller';
import { ParserService } from '../helpers';

@Module({
  imports: [ParserService],
  controllers: [JiraController],
  providers: [JiraService, ParserService],
})
export class JiraModule {}
