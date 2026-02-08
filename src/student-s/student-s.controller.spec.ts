import { Test, TestingModule } from '@nestjs/testing';
import { StudentSController } from './student-s.controller';

describe('StudentSController', () => {
  let controller: StudentSController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentSController],
    }).compile();

    controller = module.get<StudentSController>(StudentSController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
