import { Test, TestingModule } from '@nestjs/testing';
import { FooController } from './foo.controller';
import { FooDto } from '../service/foo.dto';
import { FooModule } from '../foo.module';

// mocked services
jest.mock('./foo.service')
import { FooService } from '../service/foo.service';

describe('FooController', () => {
  let app: TestingModule;
  let fooController;
  let fooService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [FooController],
      providers: [FooService]
    }).compile();
    fooController = app.get(FooController);
    fooService = app.get(FooService);
  });

  describe('getFoos', () => {
    it('should return sample Foo', () => {
      const mockedResult = [new FooDto('Mocked Foo')]
      fooService.getFoos.mockImplementationOnce(() => mockedResult)
      expect(fooController.getFoos()).toStrictEqual(mockedResult);
    });
  });
});
