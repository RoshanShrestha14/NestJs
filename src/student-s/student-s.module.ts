import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentSService } from './student-s.service';
import { StudentSController } from './student-s.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentSService],
  controllers: [StudentSController],
})
export class StudentSModule {}
