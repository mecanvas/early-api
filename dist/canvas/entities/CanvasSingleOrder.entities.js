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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasSingleOrder = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let CanvasSingleOrder = class CanvasSingleOrder {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CanvasSingleOrder.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('bigint', { name: 'orderNo' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CanvasSingleOrder.prototype, "orderNo", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'type' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CanvasSingleOrder.prototype, "type", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], CanvasSingleOrder.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'username' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CanvasSingleOrder.prototype, "username", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'phone' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CanvasSingleOrder.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'orderRoute' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CanvasSingleOrder.prototype, "orderRoute", void 0);
__decorate([
    typeorm_1.Column('mediumtext', { name: 'originImgUrl' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CanvasSingleOrder.prototype, "originImgUrl", void 0);
__decorate([
    typeorm_1.Column({ type: 'simple-array', name: 'paper' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CanvasSingleOrder.prototype, "paperNames", void 0);
__decorate([
    typeorm_1.Column({ type: 'simple-array', name: 'dataUrl' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], CanvasSingleOrder.prototype, "canvasFrameUrls", void 0);
CanvasSingleOrder = __decorate([
    typeorm_1.Entity({ schema: 'early-api', name: 'canvasSingleOrder' })
], CanvasSingleOrder);
exports.CanvasSingleOrder = CanvasSingleOrder;
//# sourceMappingURL=CanvasSingleOrder.entities.js.map