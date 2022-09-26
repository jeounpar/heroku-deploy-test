// students.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Students)
    private studentRepository: Repository<Students>,
  ) {}

  async postNewStudent(
    name: string,
    studentId: string,
    email: string,
    major: string,
    phoneNumber: string,
  ) {
    const newData = {
      name: name,
      studentId: studentId,
      email: email,
      major: major,
      phoneNumber: phoneNumber,
    };
    const data = this.studentRepository.create(newData);
    await this.studentRepository.save(data);
  }
}
