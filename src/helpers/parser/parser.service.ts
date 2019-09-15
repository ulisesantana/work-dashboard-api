import { Injectable } from '@nestjs/common';
import { JiraMyself } from '../../jira/jira.entities';

@Injectable()
export class ParserService {

  private static fromEntries<T>(acc, [k, v]): T {
    return ({ ...acc, [k]: v });
  }

  public parseMyself<T extends JiraMyself>(raw: T): JiraMyself {
    const m = new JiraMyself();
    return Object.entries(raw)
      .filter(([k]) => Object.keys(m).includes(k))
      .reduce(ParserService.fromEntries, m);
  }
}
