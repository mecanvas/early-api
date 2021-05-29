import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

@Injectable()
export class CanvasService {
  async uploadImage(req, res) {
    const { file } = req;
    const location = (file as any).location;
    try {
      res.status(200).json(location);
    } catch (err) {
      console.error(err);
      res.status(400).json(err.message);
    }
  }

  async sendToCanvas() {
    return { message: '성공적으로 저장되었습니다!' };
  }
}
