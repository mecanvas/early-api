import { Controller, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CanvasService } from './canvas.service';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';

const s3 = new AWS.S3();

@ApiTags('canvas 이미지 관련')
@Controller('canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: '성공적으로 저장되었습니다.',
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multerS3({
        s3: s3,
        bucket: 'mecanvas-assets/canvas',
        acl: 'public-read',
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async sendToCanvas() {
    return this.canvasService.sendToCanvas();
  }

  @Post('img')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: '이미지 url',
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multerS3({
        s3: s3,
        bucket: 'mecanvas-assets/upload',
        acl: 'public-read',
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadImage(@Req() req, @Res() res) {
    return this.canvasService.uploadImage(req, res);
  }
}
