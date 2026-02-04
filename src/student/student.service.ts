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
    const student = this.students.find((stu) => stu.id === id);
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
  //put
  updateStudent(id: number, data: { name: string; age: number }) {
    const existingStudent = this.students.find((student) => student.id === id);

    if (!existingStudent) {
      throw new NotFoundException('No any student found');
    }

    existingStudent.name = data.name;
    existingStudent.age = data.age;

    return {
      message: 'updated',
      success: true,
      student: existingStudent,
    };
  }

  // updateStudent(id: number, data: { name: string; age: number }) {
  //   const index = this.students.findIndex(
  //     student => student.id === id
  //   );

  //   if (index === -1) {
  //     throw new NotFoundException("No student found");
  //   }

  //   this.students[index] = {
  //     ...this.students[index],
  //     ...data,
  //   };

  //   return {
  //     message: "updated",
  //     success: true,
  //     student: this.students[index],
  //   };
  // }

  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return {
      message: 'patched',
      success: true,
      student: student,
    };
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('id not found');

    const deleted = this.students.splice(index, 1);
    return {
      message: 'deleted',
      success: true,
      student: deleted,
    };
  }
}
