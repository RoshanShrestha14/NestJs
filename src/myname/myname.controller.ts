import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {
  @Post()
  getName(@Body('name', new UppercasePipe()) name: string) {
    return { message: `my name is ${name}` };
  }
}
