export class JiraMyself {
    public key: string = '';
    public accountId: string = '';
    public name: string = '';
    public emailAddress: string = '';
    public displayName: string = '';
    public active: boolean = false;
    public timeZone: string = '';
    public locale: string = '';
}

// tslint:disable-next-line:max-classes-per-file
export class SearchJQLResponse {
  public expand: string;
  public startAt: number;
  public maxResults: number;
  public total: number;
  public issues: JiraRawIssue[];
}

export interface JiraRawMyself {
  self: string;
  key: string;
  accountId: string;
  name: string;
  emailAddress: string;
  avatarUrls: JiraAvatarUrls;
  displayName: string;
  active: boolean;
  timeZone: string;
  locale: string;
  groups: {
    size: number,
    items: any[],
  };
  applicationRoles: {
    size: number,
    items: any[],
  };
  expand: string;
}

export interface JiraAvatarUrls {
  '48x48': string;
  '24x24': string;
  '16x16': string;
  '32x32': string;
}

export interface JiraRawParentIssue {
  id: string;
  key: string;
  self: string;
  fields: {
    summary: string;
    status: {
      self: string;
      description: string;
      iconUrl: string;
      name: string;
      id: string;
      statusCategory: {
        self: string;
        id: number;
        key: string;
        colorName: string;
        name: string;
      }
    },
    priority: {
      self: string;
      iconUrl: string;
      name: string;
      id: string;
    },
    issuetype: {
      self: string;
      id: string;
      description: string;
      iconUrl: string;
      name: string;
      subtask: boolean;
    }
  };
}

export interface JiraRawIssue {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: {
    statuscategorychangedate: string;
    issuetype: {
      self: string;
      id: string;
      description: string;
      iconUrl: string;
      name: string;
      subtask: boolean;
      avatarId: number;
    },
    parent: JiraRawParentIssue,
    timespent: number;
    customfield_11120: boolean;
    project: {
      self: string;
      id: string;
      key: string;
      name: string;
      projectTypeKey: string;
      simplified: boolean;
      avatarUrls: JiraAvatarUrls
    },
    customfield_11000: boolean;
    customfield_11121: boolean;
    customfield_11122: boolean;
    fixVersions: [],
    customfield_10110: boolean;
    customfield_11001: boolean;
    customfield_11002: boolean;
    customfield_10111: boolean;
    customfield_11123: boolean;
    aggregatetimespent: number;
    resolution: boolean;
    customfield_11003: boolean;
    customfield_11124: boolean;
    customfield_11125: boolean;
    customfield_11004: boolean;
    customfield_11126: boolean;
    customfield_10302: boolean;
    customfield_10104: boolean;
    customfield_11116: boolean;
    customfield_10500: {
      hasEpicLinkFieldDependency: boolean;
      showField: boolean;
      nonEditableReason: {
        reason: string;
        message: string;
      };
    },
    customfield_11117: boolean;
    customfield_10303: boolean;
    customfield_10105: boolean;
    customfield_10106: boolean;
    customfield_10304: boolean;
    customfield_10700: boolean;
    customfield_11118: boolean;
    customfield_10107: boolean;
    customfield_11119: boolean;
    customfield_10900: boolean;
    customfield_10108: boolean;
    customfield_10109: boolean;
    resolutiondate: boolean;
    workratio: number;
    lastViewed: string;
    watches: {
      self: string;
      watchCount: number;
      isWatching: boolean;
    },
    created: string;
    customfield_11110: [],
    customfield_11111: boolean;
    customfield_10100: boolean;
    priority: {
      self: string;
      iconUrl: string;
      name: string;
      id: string;
    },
    customfield_11112: boolean;
    customfield_11113: boolean;
    customfield_10101: boolean;
    customfield_10300: boolean;
    customfield_10102: boolean;
    customfield_11114: boolean;
    customfield_11115: boolean;
    customfield_10103: boolean;
    customfield_10301: boolean;
    labels: string[],
    timeestimate: number;
    customfield_11109: boolean;
    aggregatetimeoriginalestimate: number;
    versions: [],
    issuelinks: [],
    assignee: boolean;
    updated: string;
    status: {
      self: string;
      description: string;
      iconUrl: string;
      name: string;
      id: string;
      statusCategory: {
        self: string;
        id: number;
        key: string;
        colorName: string;
        name: string;
      }
    },
    components: [],
    timeoriginalestimate: number;
    description: boolean;
    customfield_10012: string;
    customfield_10005: boolean;
    customfield_10600: string;
    customfield_10007: string[],
    security: boolean;
    customfield_10800: boolean;
    customfield_10009: boolean;
    aggregatetimeestimate: number;
    summary: string;
    creator: {
      self: string;
      name: string;
      key: string;
      accountId: string;
      avatarUrls: JiraAvatarUrls,
      displayName: string;
      active: boolean;
      timeZone: string;
      accountType: string;
    },
    subtasks: [],
    customfield_11130: boolean;
    customfield_11131: boolean;
    reporter: {
      self: string;
      name: string;
      key: string;
      accountId: string;
      avatarUrls: JiraAvatarUrls,
      displayName: string;
      active: boolean;
      timeZone: string;
      accountType: string;
    },
    aggregateprogress: {
      progress: number;
      total: number;
      percent: number;
    },
    customfield_10000: string;
    customfield_10001: boolean;
    customfield_10200: boolean;
    customfield_10003: boolean;
    customfield_10400: boolean;
    customfield_10004: boolean;
    customfield_11127: boolean;
    customfield_11128: boolean;
    customfield_11129: boolean;
    environment: boolean;
    duedate: boolean;
    progress: {
      progress: number;
      total: number;
      percent: number;
    },
    votes: {
      self: string;
      votes: number;
      hasVoted: boolean;
    }
  };
}
