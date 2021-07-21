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
exports.AdminOrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const CanvasDividedOrder_entities_1 = require("../canvas/entities/CanvasDividedOrder.entities");
const CanvasSingleOrder_entities_1 = require("../canvas/entities/CanvasSingleOrder.entities");
const typeorm_2 = require("typeorm");
let AdminOrderService = class AdminOrderService {
    constructor(canvasDividedOrderRepository, canvasSingleOrderRepository) {
        this.canvasDividedOrderRepository = canvasDividedOrderRepository;
        this.canvasSingleOrderRepository = canvasSingleOrderRepository;
    }
    async getCanvasDividedOrder(page, perPage) {
        const defaultPerPage = perPage || 10;
        const defaultPage = page || 1;
        const results = await this.canvasDividedOrderRepository.find({
            select: [
                'id',
                'orderNo',
                'createdAt',
                'username',
                'phone',
                'orderRoute',
                'originImgUrl',
                'paperNames',
                'type',
            ],
            order: { createdAt: 'DESC' },
            skip: (defaultPage - 1) * defaultPerPage,
            take: defaultPerPage,
        });
        const total = await this.canvasDividedOrderRepository.count();
        return { total, results };
    }
    async getCanvasDividedOrderDetail(id) {
        const results = await this.canvasDividedOrderRepository.findOne(id);
        if (!results) {
            throw new common_1.NotFoundException('일치하는 주문 상세 정보가 없습니다.');
        }
        return results;
    }
    async getCanvasSingleOrder(page, perPage) {
        const defaultPerPage = perPage || 10;
        const defaultPage = page || 1;
        const results = await this.canvasSingleOrderRepository.find({
            select: [
                'id',
                'orderNo',
                'createdAt',
                'username',
                'phone',
                'orderRoute',
                'originImgUrl',
                'paperNames',
                'type',
            ],
            order: { createdAt: 'DESC' },
            skip: (defaultPage - 1) * defaultPerPage,
            take: defaultPerPage,
        });
        const total = await this.canvasSingleOrderRepository.count();
        return { total, results };
    }
    async getCanvasSingleOrderDetail(id) {
        const results = await this.canvasSingleOrderRepository.findOne(id);
        if (!results) {
            throw new common_1.NotFoundException('일치하는 주문 상세 정보가 없습니다.');
        }
        return results;
    }
};
AdminOrderService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(CanvasDividedOrder_entities_1.CanvasDividedOrder)),
    __param(1, typeorm_1.InjectRepository(CanvasSingleOrder_entities_1.CanvasSingleOrder)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AdminOrderService);
exports.AdminOrderService = AdminOrderService;
//# sourceMappingURL=admin.service.js.map