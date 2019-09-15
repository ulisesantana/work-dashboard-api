import { Module } from '@nestjs/common';
import { JiraModule } from './jira/jira.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [JiraModule],
  providers: [ConfigService],
})
export class AppModule {}
