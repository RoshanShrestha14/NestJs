import {
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnApplicationShutdown,OnModuleInit {
  private isConnected = false;
  onModuleInit() {
    this.isConnected = true;
    console.log('database connected');
  }
  onApplicationShutdown(signal: string) {
    this.isConnected = false;
    console.log(`database disconnected and signal is  ${signal}`);
  }
  getStatus() {
    return this.isConnected ? 'connected' : 'disconnencted';
  }
}
