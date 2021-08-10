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
exports.UserSignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserSignUpDto {
}
__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: 'email@naver.com',
        description: '로그인에 사용될 고유의 이메일',
    }),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '123124s',
        description: '로그인에 사용될 비밀번호',
    }),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '123124s',
        description: '로그인에 사용될 비밀번호 확인',
    }),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "validPassword", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '김창회',
        description: '유저의 이름',
    }),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '01026299315',
        description: '연락 가능한 핸드폰 번호',
    }),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '경기도 성남시 분당구',
        description: '유저의 주소지',
    }),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "address", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiProperty({
        example: '이매촌 금강아파트 103동 1001호',
        description: '유저의 상세 주소지',
    }),
    __metadata("design:type", String)
], UserSignUpDto.prototype, "addressDetail", void 0);
exports.UserSignUpDto = UserSignUpDto;
//# sourceMappingURL=UserSingUpDto.js.map