import { Test, TestingModule } from '@nestjs/testing';
import { ParserService } from './parser.service';
import {JiraMyselfMock, JiraRawMyselfMock} from '../../jira/mocks';

describe('ParserService', () => {
  let service: ParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParserService],
    }).compile();

    service = module.get<ParserService>(ParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should parse a JiraRawMySelf into JiraMyself', () => {
    expect(service.parseMyself(JiraRawMyselfMock)).toStrictEqual(JiraMyselfMock);
  });
});
