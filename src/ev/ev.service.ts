import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EvService {

constructor(private readonly configureService:ConfigService){}

getDbUrl(){
    console.log("i am touched")
    return this.configureService.get<string>('MONGO_URL')}

}
