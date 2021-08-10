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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let User = class User {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'email' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'password', length: 100 }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column('int', { name: 'role', default: 0 }),
    swagger_1.ApiProperty({
        description: '0 = 일반 유저, 1 = 어드민 ',
    }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'username' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'phone' }),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'address' }),
    swagger_1.ApiProperty({
        example: '경기도 성남시 분당구',
        description: '유저의 주소지',
    }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    typeorm_1.Column('varchar', { name: 'addressDetail' }),
    swagger_1.ApiProperty({
        example: '이매촌 금강아파트 103동 1001호',
        description: '유저의 상세 주소',
    }),
    __metadata("design:type", String)
], User.prototype, "addressDetail", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
User = __decorate([
    typeorm_1.Entity({ schema: 'early-api', name: 'users' })
], User);
exports.User = User;
//# sourceMappingURL=User.entities.js.map