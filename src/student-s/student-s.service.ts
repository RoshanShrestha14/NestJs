import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, studentDocument } from './student.schema';
import { Model } from 'mongoose';

@Injectable()
export class StudentSService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<studentDocument>,
  ) {}

  async createStudent(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);

    return newStudent.save();
  }
}
