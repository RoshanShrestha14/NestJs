import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 23 },
  ];

  getAllStudents() {
    return [...this.students];
  }

  getStudentById(id: number) {
    const student = this.students.find(stu => stu.id === id);
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }
}
