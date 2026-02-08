import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentSService } from './student-s.service';
import { Student } from './student.schema';

@Controller('student-s')
export class StudentSController {
  constructor(private readonly studentService: StudentSService) {}

  @Get()
  async getAllStudent() {
    return this.studentService.getAllStudent();
  }

  @Post()
  async addStudent(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }
  @Get(':id')
  async getStudentById(@Param('id') id: string) {
    console.log('CONTROLLER HIT, id =', id);

    return this.studentService.getStudentById(id);
  }

  @Put(':id')
  async upadteStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentService.updateStudent(id, data);
  }

  @Delete(":id")
  async deleteStudent (@Param("id") id:string)
  { 
    console.log("id deleted")
    return this.studentService.deleteStudentById(id);
  }
}
