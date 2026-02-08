import { Body, Controller, Post } from '@nestjs/common';
import { StudentSService } from './student-s.service';
import { Student } from './student.schema';

@Controller('student-s')
export class StudentSController {
  constructor(private readonly studentService: StudentSService) {}

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }
}
