"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const canvas_service_1 = require("./canvas.service");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");
const swagger_1 = require("@nestjs/swagger");
const CanvasSaveRequest_dto_1 = require("./dto/CanvasSaveRequest.dto");
const s3 = new AWS.S3();
let CanvasController = class CanvasController {
    constructor(canvasService) {
        this.canvasService = canvasService;
    }
    async sendToDividedCanvas(req, data) {
        return await this.canvasService.sendToDividedCanvas(req.files, data);
    }
    async uploadDividedImage(req) {
        return await this.canvasService.uploadImage(req);
    }
    async sendToSingleCanvas(req, data) {
        return await this.canvasService.sendToSingleCanvas(req.file, data);
    }
    async uploadSingleImage(req) {
        return await this.canvasService.uploadImage(req);
    }
};
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiResponse({
        status: 201,
        description: '성공적으로 저장되었습니다.',
    }),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('image', 100, {
        storage: multerS3({
            s3: s3,
            bucket: process.env.NODE_ENV === 'production'
                ? 'early-canvas/divided/save'
                : 'early-dev',
            contentType: multerS3.AUTO_CONTENT_TYPE,
            acl: 'public-read',
            key: function (req, file, cb) {
                cb(null, file.originalname);
            },
        }),
    })),
    common_1.Post('divided/save'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CanvasSaveRequest_dto_1.CanvasSaveRequestDto]),
    __metadata("design:returntype", Promise)
], CanvasController.prototype, "sendToDividedCanvas", null);
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    swagger_1.ApiResponse({
        status: 201,
        description: '이미지 url',
    }),
    swagger_1.ApiForbiddenResponse({ description: '정상적으로 업로드 되지 못했습니다..' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multerS3({
            s3: s3,
            bucket: process.env.NODE_ENV === 'production'
                ? 'early-canvas/divided/upload'
                : 'early-dev',
            contentType: multerS3.AUTO_CONTENT_TYPE,
            acl: 'public-read',
            key: function (req, file, cb) {
                cb(null, file.originalname);
            },
        }),
    })),
    common_1.Post('divided/upload'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CanvasController.prototype, "uploadDividedImage", null);
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiResponse({
        status: 201,
        description: '성공적으로 저장되었습니다.',
    }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multerS3({
            s3: s3,
            bucket: process.env.NODE_ENV === 'production'
                ? 'early-canvas/single/save'
                : 'early-dev',
            contentType: multerS3.AUTO_CONTENT_TYPE,
            acl: 'public-read',
            key: function (req, file, cb) {
                cb(null, file.originalname);
            },
        }),
    })),
    common_1.Post('single/save'),
    __param(0, common_1.Req()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CanvasSaveRequest_dto_1.CanvasSaveRequestDto]),
    __metadata("design:returntype", Promise)
], CanvasController.prototype, "sendToSingleCanvas", null);
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    swagger_1.ApiResponse({
        status: 201,
        description: '이미지 url',
    }),
    swagger_1.ApiForbiddenResponse({ description: '정상적으로 업로드 되지 못했습니다..' }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('image', {
        storage: multerS3({
            s3: s3,
            bucket: process.env.NODE_ENV === 'production'
                ? 'early-canvas/single/upload'
                : 'early-dev',
            contentType: multerS3.AUTO_CONTENT_TYPE,
            acl: 'public-read',
            key: function (req, file, cb) {
                cb(null, file.originalname);
            },
        }),
    })),
    common_1.Post('single/upload'),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CanvasController.prototype, "uploadSingleImage", null);
CanvasController = __decorate([
    swagger_1.ApiTags('canvas 이미지 관련'),
    common_1.Controller('canvas'),
    __metadata("design:paramtypes", [canvas_service_1.CanvasService])
], CanvasController);
exports.CanvasController = CanvasController;
//# sourceMappingURL=canvas.controller.js.map