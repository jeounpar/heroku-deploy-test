import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
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

  @Post('/params/:name/:studentId')
  createStudentWithParams(
    @Param('name') name: string,
    @Param('studentId') studentId: string,
  ) {
    console.log(name);
    console.log(studentId);
    return this.studentService.createStudent(name, studentId);
  }

  @Post('/body')
  createStudentWithBody(
    @Body('name') name: string,
    @Body('studentId') studentId: string,
  ) {
    console.log(name);
    console.log(studentId);
    return this.studentService.createStudent(name, studentId);
  }

  @Post('/query')
  createStudentWithQuery(
    @Query('name') name: string,
    @Query('studentId') studentId: string,
  ) {
    console.log(name);
    console.log(studentId);
    return this.studentService.createStudent(name, studentId);
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
