import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {

    constructor(private readonly dataBaseService:DatabaseService){}
    @Get()
    getStatus(){
        return {
            status:this.dataBaseService.getStatus()
        }
    }
}
