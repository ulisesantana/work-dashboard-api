import { Injectable, Logger } from '@nestjs/common';
import * as Jira from 'jira-connector';
import { ParserService } from '../helpers';
import { ConfigService } from '../config/config.service';
import { JiraMyself } from './jira.entities';

@Injectable()
export class JiraService {
  private connector;

  constructor(private readonly parser: ParserService) {
    try {
      const client = new Jira(ConfigService.getJiraConfig());
      this.connector = {
        getMyself: client.myself.getMyself,
        search: client.search.search,
      };

    } catch (e) {
      Logger.error(e.toString(), 'Error creating Jira client. Check config file');
    }
  }

  public async getUser(): Promise<JiraMyself> {
    return this.parser.parseMyself(await this.getMyself());
  }

  public getYesterdayReport() {
    Logger.debug('Getting yesterday report query');
    return this.searchJQL(`assignee CHANGED TO currentUser() AFTER -2d`);
  }

  private async getMyself() {
    return await this.connector.getMyself();
  }

  private searchJQL(jql: string) {
    return this.connector.search({ jql });
  }
}
