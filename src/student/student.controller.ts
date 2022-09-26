// students.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('/apply')
  async postNewStudent(@Body() body) {
    const { name, studentId, email, major, phoneNumber } = body;
    await this.studentService.postNewStudent(
      name,
      studentId,
      email,
      major,
      phoneNumber,
    );
    return '등록 완료!';
  }
}
