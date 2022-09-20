import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudent();
  }

  @Post()
  createStudent() {
    return this.studentService.createStudent('Park', '201720799');
  }

  @Delete()
  deleteStudent() {
    return this.studentService.deleteStduent('201720799');
  }

  @Patch()
  updateStudent() {
    return this.studentService.updateStudent('201720799');
  }
}