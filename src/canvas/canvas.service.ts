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
    function getCurrentDate() {
      const date = new Date();
      const year = date.getFullYear().toString();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hour = date.getHours();
      const minites = date.getMinutes();
      const seconds = date.getSeconds();

      const M = month < 10 ? '0' + month.toString() : month.toString();

      const d = day < 10 ? '0' + day.toString() : day.toString();

      const h = hour < 10 ? '0' + hour.toString() : hour.toString();

      const m = minites < 10 ? '0' + minites.toString() : minites.toString();

      const s = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

      return parseInt(year + M + d + h + m + s);
    }
    const canvasFrameUrls = [];
    files.forEach((file) => canvasFrameUrls.push(file.location));
    const paperNameArr = paperNames.split(',');

    await this.canvasOrderRepository.save({
      username,
      email,
      originImgUrl,
      paperNames: paperNameArr,
      canvasFrameUrls,
      orderNo: getCurrentDate(),
    });

    return '성공적으로 저장되었습니다!';
  }
}
