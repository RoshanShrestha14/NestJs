import { Controller,Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    getAllUsers() {
          return "hi am "
        // Logic to get all users
    }
}
