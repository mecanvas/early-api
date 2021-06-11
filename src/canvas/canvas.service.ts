import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

@Injectable()
export class CanvasService {
  async uploadImage(req) {
    const { file } = req;
    const location = (file as any).location;
    return location;
  }

  async sendToCanvas() {
    return '성공적으로 저장되었습니다!';
  }
}
