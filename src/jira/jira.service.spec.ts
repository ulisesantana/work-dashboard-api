import { Test, TestingModule } from '@nestjs/testing';
import { JiraService } from './jira.service';
import { ParserService } from '../helpers';
import { JiraMyselfMock, JiraRawMyselfMock } from './mocks';
import { SearchJQLResponse } from './jira.entities';

describe('JiraService', () => {
  let service: JiraService;
  let parser: ParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ParserService],
      providers: [JiraService, ParserService],
    }).compile();

    service = module.get<JiraService>(JiraService);
    parser = module.get<ParserService>(ParserService);
  });

  it('should be defined', () => {

    expect(service).toBeDefined();
  });

  it('should search for issues assigned to current user on previous workday', () => {
    // @ts-ignore
    const spySearch = jest.spyOn(service, 'searchJQL').mockImplementation(() => (new SearchJQLResponse()));

    expect(service.getYesterdayReport()).toBeInstanceOf(SearchJQLResponse);
    expect(spySearch).toHaveBeenCalledWith(`assignee CHANGED TO currentUser() AFTER -2d`);
  });

  it('should retrieve a JiraMyself', async () => {
    // @ts-ignore
    jest.spyOn(service, 'getMyself').mockImplementation(() => JiraRawMyselfMock);

    expect(await service.getUser()).toStrictEqual(JiraMyselfMock);
  });
});
