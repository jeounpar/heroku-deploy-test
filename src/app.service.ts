// app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testGet(): string {
    return 'Get Test!';
  }

  getHello(): string {
    return 'Hello World!';
  }

  testPost(): string {
    return 'Post Test!';
  }

  testPatch(): string {
    return 'Patch Test!';
  }

  testPut(): string {
    return 'Put Test!';
  }

  testDelete(): string {
    return 'Delete Test!';
  }
}
