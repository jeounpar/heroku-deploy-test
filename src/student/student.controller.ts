// students.controller.ts
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Get('/search/:name')
  async getStudent(@Param('name') name: string) {
    return await this.studentService.getStudent(name);
  }

  @Patch('/patch')
  async patchStudent(@Body() body) {
    const { name, studentId } = body;
    return await this.studentService.patchStudent(name, studentId);
  }
}
