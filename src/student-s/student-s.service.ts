import { Injectable, NotFoundException, Param } from '@nestjs/common';
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

  async getAllStudent(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async getStudentById(id: string): Promise<Student | null> {
    console.log(`id is ${id}`);

    return this.studentModel.findById(id).exec();
  }

  async updateStudent(
    id: string,
    data: Partial<Student>,
  ): Promise<Student | null> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }



  async deleteStudentById(id: string): Promise<Student | null> {

    return this.studentModel.findByIdAndDelete(id).exec();
  }
}
