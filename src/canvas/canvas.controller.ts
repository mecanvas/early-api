import { Body, Controller, Post, Req, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CanvasService } from './canvas.service';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CanvasSaveRequestDto } from './dto/CanvasSaveRequest.dto';

const s3 = new AWS.S3();

@ApiTags('canvas 이미지 관련')
@Controller('canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 201,
    description: '성공적으로 저장되었습니다.',
  })
  @UseInterceptors(
    FilesInterceptor('image', 100, {
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
  @Post()
  async sendToCanvas(@Req() req, @Body() data: CanvasSaveRequestDto) {
    return await this.canvasService.sendToCanvas(req.files, data);
  }

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
    status: 201,
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
  @Post('img')
  async uploadImage(@Req() req) {
    return await this.canvasService.uploadImage(req);
  }
}
