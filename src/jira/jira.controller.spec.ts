import { Test, TestingModule } from '@nestjs/testing';
import { JiraController } from './jira.controller';
import { ParserService } from '../helpers';
import { JiraService } from './jira.service';
import { JiraMyselfMock } from './mocks';

describe('Jira Controller', () => {
  let controller: JiraController;
  let service: JiraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ParserService],
      controllers: [JiraController],
      providers: [JiraService, ParserService],
    }).compile();

    controller = module.get<JiraController>(JiraController);
    service = module.get<JiraService>(JiraService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return yesterday report', async () => {
    const result = 'meh';
    jest.spyOn(service, 'getYesterdayReport').mockImplementation(() => result);

    expect(await controller.getYesterdayReport()).toBe(result);
  });

  it('should return user', async () => {
    jest.spyOn(service, 'getUser').mockImplementation(async () => JiraMyselfMock);

    expect(await controller.getUser()).toBe(JiraMyselfMock);
  });
});
