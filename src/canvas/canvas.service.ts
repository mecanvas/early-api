import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as AWS from 'aws-sdk';
import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { Repository } from 'typeorm';
import { CanvasSaveRequestDto } from './dto/CanvasSaveRequest.dto';
import { CanvasSingleOrder } from './entities/CanvasSingleOrder.entities';

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

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

@Injectable()
export class CanvasService {
  constructor(
    @InjectRepository(CanvasDividedOrder)
    private canvasDividedOrderRepository: Repository<CanvasDividedOrder>,
    @InjectRepository(CanvasSingleOrder)
    private canvasSingleOrderRepository: Repository<CanvasSingleOrder>,
  ) {}

  async uploadImage(req) {
    const { file } = req;
    const location = (file as any).location;
    if (!location) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: '정상적으로 업로드 되지 못했습니다.',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return location;
  }

  async sendToDividedCanvas(files: any, data: CanvasSaveRequestDto) {
    const { phone, paperNames, username, originImgUrl, orderRoute, type } =
      data;
    const canvasFrameUrls = [];
    files.forEach((file) => canvasFrameUrls.push(file.location));
    const paperNameArr = paperNames.split(',');

    await this.canvasDividedOrderRepository.save({
      username,
      phone,
      type: +type,
      orderRoute: +orderRoute,
      originImgUrl,
      paperNames: paperNameArr,
      canvasFrameUrls,
      orderNo: getCurrentDate(),
    });

    return '성공적으로 저장되었습니다!';
  }

  async sendToSingleCanvas(files: any, data: CanvasSaveRequestDto) {
    const {
      phone,
      paperNames,
      username,
      originImgUrl,
      orderRoute,
      type,
      scaleType,
    } = data;
    const canvasFrameUrls = files.location;
    const paperNameArr = paperNames.split(',');

    await this.canvasSingleOrderRepository.save({
      username,
      phone,
      type: +type,
      orderRoute: +orderRoute,
      scaleType: +scaleType,
      originImgUrl,
      paperNames: paperNameArr,
      canvasFrameUrls,
      orderNo: getCurrentDate(),
    });

    return '성공적으로 저장되었습니다!';
  }
}
