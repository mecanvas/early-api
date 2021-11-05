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
exports.CanvasSaveRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CanvasSaveRequestDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '김창회',
        description: '유저이름',
    }),
    __metadata("design:type", String)
], CanvasSaveRequestDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '01026299315',
        description: '핸드폰번호',
    }),
    __metadata("design:type", String)
], CanvasSaveRequestDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '1 = 캔버스 2= 포스터',
        description: '타입 번호',
    }),
    __metadata("design:type", Number)
], CanvasSaveRequestDto.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '1 = 기본 2= 배경 3= 좌우반전',
        description: '옆면 스케일 정보',
    }),
    __metadata("design:type", Number)
], CanvasSaveRequestDto.prototype, "scaleType", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '1 = 쿠팡, 2= 네이버, 3= 아이디어스',
        description: '주문 경로',
    }),
    __metadata("design:type", Number)
], CanvasSaveRequestDto.prototype, "orderRoute", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'https://~~!',
        description: '원본 이미지',
    }),
    __metadata("design:type", String)
], CanvasSaveRequestDto.prototype, "originImgUrl", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'S-1호,S-2호',
        description: '액자의 종이 이름들',
    }),
    __metadata("design:type", String)
], CanvasSaveRequestDto.prototype, "paperNames", void 0);
exports.CanvasSaveRequestDto = CanvasSaveRequestDto;
//# sourceMappingURL=CanvasSaveRequest.dto.js.map