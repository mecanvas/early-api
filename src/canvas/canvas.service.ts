import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as AWS from 'aws-sdk';
import { CanvasOrder } from 'src/canvas/entities/CanvasOrder';
import { Repository } from 'typeorm';
import { CanvasSaveRequestDto } from './dto/CanvasSaveRequest.dto';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

@Injectable()
export class CanvasService {
  constructor(
    @InjectRepository(CanvasOrder)
    private canvasOrderRepository: Repository<CanvasOrder>,
  ) {}

  async uploadImage(req) {
    const { file } = req;
    const location = (file as any).location;
    return location;
  }

  async sendToCanvas(files: any, data: CanvasSaveRequestDto) {
    const { email, paper, username } = data;

    const dataUrl = [];
    files.forEach((file) => dataUrl.push(file.location));
    const paperList = paper.split(',');

    await this.canvasOrderRepository.save({
      username,
      email,
      paper: paperList,
      dataUrl,
    });

    return '성공적으로 저장되었습니다!';
  }
}
