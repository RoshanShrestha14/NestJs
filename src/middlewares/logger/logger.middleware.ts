import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response ,NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`request method is ${req.method} and request url is ${req.originalUrl}`)
    next();
  }
}
