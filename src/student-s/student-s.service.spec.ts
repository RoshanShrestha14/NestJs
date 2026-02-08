import { Test, TestingModule } from '@nestjs/testing';
import { StudentSService } from './student-s.service';

describe('StudentSService', () => {
  let service: StudentSService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentSService],
    }).compile();

    service = module.get<StudentSService>(StudentSService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
