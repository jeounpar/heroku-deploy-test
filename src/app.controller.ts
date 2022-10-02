import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello2')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  testGet(): string {
    return this.appService.testGet();
  }

  @Post()
  testPost(): string {
    return this.appService.testPost();
  }

  @Patch()
  testPatch(): string {
    return this.appService.testPatch();
  }

  @Put()
  testPut(): string {
    return this.appService.testPut();
  }

  @Delete()
  testDelete(): string {
    return this.appService.testDelete();
  }
}
