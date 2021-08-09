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
exports.CanvasOrder = void 0;
const typeorm_1 = require("typeorm");
let CanvasOrder = class CanvasOrder {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], CanvasOrder.prototype, "id", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], CanvasOrder.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'username' }),
    __metadata("design:type", String)
], CanvasOrder.prototype, "username", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'email' }),
    __metadata("design:type", String)
], CanvasOrder.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'originImgUrl' }),
    __metadata("design:type", String)
], CanvasOrder.prototype, "originImgUrl", void 0);
__decorate([
    typeorm_1.Column({ type: 'simple-array', name: 'paper' }),
    __metadata("design:type", Array)
], CanvasOrder.prototype, "paperNames", void 0);
__decorate([
    typeorm_1.Column({ type: 'simple-array', name: 'dataUrl' }),
    __metadata("design:type", Array)
], CanvasOrder.prototype, "canvasFrameUrls", void 0);
CanvasOrder = __decorate([
    typeorm_1.Entity({ schema: 'early-api', name: 'canvasOrder' })
], CanvasOrder);
exports.CanvasOrder = CanvasOrder;
//# sourceMappingURL=CanvasOrder.js.map