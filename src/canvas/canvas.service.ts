import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as AWS from 'aws-sdk';
import { CanvasOrder } from 'src/canvas/entities/CanvasOrder.entities';
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
    const { email, paperNames, username, originImgUrl } = data;

    const canvasFrameUrls = [];
    files.forEach((file) => canvasFrameUrls.push(file.location));
    const paperNameArr = paperNames.split(',');

    await this.canvasOrderRepository.save({
      username,
      email,
      originImgUrl,
      paperNames: paperNameArr,
      canvasFrameUrls,
    });

    return '성공적으로 저장되었습니다!';
  }
}
