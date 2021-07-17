import { Body, Controller, Post, Req, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CanvasService } from './canvas.service';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import {
  ApiBody,
  ApiConsumes,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CanvasSaveRequestDto } from './dto/CanvasSaveRequest.dto';

const s3 = new AWS.S3();

@ApiTags('canvas 이미지 관련')
@Controller('canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  // 분할 툴
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 201,
    description: '성공적으로 저장되었습니다.',
  })
  @UseInterceptors(
    FilesInterceptor('image', 100, {
      storage: multerS3({
        s3: s3,
        bucket: 'early-canvas/divided/save',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  @Post('divided/save')
  async sendToDividedCanvas(@Req() req, @Body() data: CanvasSaveRequestDto) {
    return await this.canvasService.sendToDividedCanvas(req.files, data);
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
  @ApiForbiddenResponse({ description: '정상적으로 업로드 되지 못했습니다..' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multerS3({
        s3: s3,
        bucket: 'early-canvas/divided/upload',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  @Post('divided/upload')
  async uploadDividedImage(@Req() req) {
    return await this.canvasService.uploadImage(req);
  }

  // 싱글 툴

  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 201,
    description: '성공적으로 저장되었습니다.',
  })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multerS3({
        s3: s3,
        bucket: 'early-canvas/single/save',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  @Post('single/save')
  async sendToSingleCanvas(@Req() req, @Body() data: CanvasSaveRequestDto) {
    return await this.canvasService.sendToSingleCanvas(req.file, data);
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
  @ApiForbiddenResponse({ description: '정상적으로 업로드 되지 못했습니다..' })
  @UseInterceptors(
    FileInterceptor('image', {
      storage: multerS3({
        s3: s3,
        bucket: 'early-canvas/single/upload',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  @Post('single/upload')
  async uploadSingleImage(@Req() req) {
    return await this.canvasService.uploadImage(req);
  }
}
