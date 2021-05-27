import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  thowSampleErr(): Error {
    throw new Error('gkgk');
  }
}
