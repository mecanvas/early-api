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
exports.CanvasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AWS = require("aws-sdk");
const CanvasDividedOrder_entities_1 = require("./entities/CanvasDividedOrder.entities");
const typeorm_2 = require("typeorm");
const CanvasSingleOrder_entities_1 = require("./entities/CanvasSingleOrder.entities");
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
let CanvasService = class CanvasService {
    constructor(canvasDividedOrderRepository, canvasSingleOrderRepository) {
        this.canvasDividedOrderRepository = canvasDividedOrderRepository;
        this.canvasSingleOrderRepository = canvasSingleOrderRepository;
    }
    async uploadImage(req) {
        const { file } = req;
        const location = file.location;
        if (!location) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.FORBIDDEN,
                error: '정상적으로 업로드 되지 못했습니다.',
            }, common_1.HttpStatus.FORBIDDEN);
        }
        return location;
    }
    async sendToDividedCanvas(files, data) {
        const { phone, paperNames, username, originImgUrl, orderRoute, type } = data;
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
    async sendToSingleCanvas(files, data) {
        const { phone, paperNames, username, originImgUrl, orderRoute, type, scaleType, } = data;
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
};
CanvasService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(CanvasDividedOrder_entities_1.CanvasDividedOrder)),
    __param(1, typeorm_1.InjectRepository(CanvasSingleOrder_entities_1.CanvasSingleOrder)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CanvasService);
exports.CanvasService = CanvasService;
//# sourceMappingURL=canvas.service.js.map