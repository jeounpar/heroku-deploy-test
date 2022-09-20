import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private studentRepository: StudentRepository) {}

  getAllStudent(): any[] {
    return this.studentRepository.studentTable;
  }

  createStudent(name: string, studentId: string): string {
    const newData = { name: name, studentId: studentId };
    this.studentRepository.studentTable.push(newData);
    return '등록완료';
  }

  deleteStduent(studentId: string) {
    for (let i = 0; i < this.studentRepository.studentTable.length; i++) {
      if (this.studentRepository.studentTable[i].studentId === studentId) {
        this.studentRepository.studentTable.splice(i, 1);
        return '삭제완료';
      }
    }
    return '삭제실패';
  }

  updateStudent(studentId: string) {
    const index: number = this.studentRepository.studentTable.findIndex(
      el => el.studentId === studentId,
    );
    if (index < 0) {
      return '업데이트 실패';
    }
    this.studentRepository.studentTable[index].name = 'Lee';
    return '업데이트 완료';
  }
}
