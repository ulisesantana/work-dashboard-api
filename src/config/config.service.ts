import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  public static getJiraConfig() {
    return {
      host: process.env.JIRA_DOMAIN,
      basic_auth: {
        email: process.env.JIRA_EMAIL,
        api_token: process.env.JIRA_TOKEN,
      },
    };
  }

}
