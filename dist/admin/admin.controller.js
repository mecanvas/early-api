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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const CanvasDividedOrder_entities_1 = require("../canvas/entities/CanvasDividedOrder.entities");
const admin_service_1 = require("./admin.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getCanvasDividedOrder(page, perPage) {
        return this.orderService.getCanvasDividedOrder(page, perPage);
    }
    getCanvasDividedOrderDetail(id) {
        return this.orderService.getCanvasDividedOrderDetail(id);
    }
    getCanvasSingleOrder(page, perPage) {
        return this.orderService.getCanvasSingleOrder(page, perPage);
    }
    getCanvasSingleOrderDetail(id) {
        return this.orderService.getCanvasSingleOrderDetail(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: '캔버스 주문 목록 가져오기' }),
    swagger_1.ApiQuery({
        name: 'page',
        example: '1',
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'per_page',
        example: '10',
        required: false,
    }),
    swagger_1.ApiResponse({
        status: 201,
        schema: {
            properties: {
                total: {
                    type: 'number',
                },
                results: {
                    properties: {
                        id: {
                            type: 'number',
                        },
                        orderNo: {
                            type: 'number',
                        },
                        username: {
                            type: 'string',
                            example: '홍길동',
                        },
                        phone: {
                            type: 'number',
                            example: '01026299315',
                        },
                        orderRoute: {
                            type: 'string',
                            example: '네이버',
                        },
                        originImgUrl: {
                            type: 'string',
                            example: 's3 link',
                        },
                        paperNames: {
                            type: 'array',
                            example: '[S-1호,S-2호]',
                        },
                        createdAt: {
                            type: 'string',
                            example: '2021-06-12T07:44:38.814Z',
                        },
                    },
                },
            },
        },
    }),
    common_1.Get('order/divided'),
    __param(0, common_1.Query('page')),
    __param(1, common_1.Query('per_page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getCanvasDividedOrder", null);
__decorate([
    swagger_1.ApiOperation({ summary: '캔버스 주문 상세 내용 가져오기' }),
    swagger_1.ApiParam({
        name: 'id',
        required: true,
    }),
    swagger_1.ApiResponse({
        status: 201,
        type: CanvasDividedOrder_entities_1.CanvasDividedOrder,
        description: '캔버스 주문 상세 내용',
    }),
    swagger_1.ApiBadRequestResponse({
        description: '일치하는 주문 상세 정보가 없습니다.',
    }),
    common_1.Get('order/divided/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getCanvasDividedOrderDetail", null);
__decorate([
    swagger_1.ApiOperation({ summary: '캔버스 주문 목록 가져오기' }),
    swagger_1.ApiQuery({
        name: 'page',
        example: '1',
        required: false,
    }),
    swagger_1.ApiQuery({
        name: 'per_page',
        example: '10',
        required: false,
    }),
    swagger_1.ApiResponse({
        status: 201,
        schema: {
            properties: {
                total: {
                    type: 'number',
                },
                results: {
                    properties: {
                        id: {
                            type: 'number',
                        },
                        orderNo: {
                            type: 'number',
                        },
                        username: {
                            type: 'string',
                            example: '홍길동',
                        },
                        phone: {
                            type: 'string',
                            example: '01026299315',
                        },
                        scaleType: {
                            type: 'number',
                            example: '1 = 기본, 2 = 배경, 3 = 좌우반전',
                        },
                        orderRoute: {
                            type: 'string',
                            example: '네이버',
                        },
                        originImgUrl: {
                            type: 'string',
                            example: 's3 link',
                        },
                        paperNames: {
                            type: 'array',
                            example: '[S-1호]',
                        },
                        createdAt: {
                            type: 'string',
                            example: '2021-06-12T07:44:38.814Z',
                        },
                    },
                },
            },
        },
    }),
    common_1.Get('order/single'),
    __param(0, common_1.Query('page')),
    __param(1, common_1.Query('per_page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getCanvasSingleOrder", null);
__decorate([
    swagger_1.ApiOperation({ summary: '캔버스 주문 상세 내용 가져오기' }),
    swagger_1.ApiParam({
        name: 'id',
        required: true,
    }),
    swagger_1.ApiResponse({
        status: 201,
        type: CanvasDividedOrder_entities_1.CanvasDividedOrder,
        description: '캔버스 주문 상세 내용',
    }),
    swagger_1.ApiBadRequestResponse({
        description: '일치하는 주문 상세 정보가 없습니다.',
    }),
    common_1.Get('order/single/:id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getCanvasSingleOrderDetail", null);
OrderController = __decorate([
    swagger_1.ApiTags('얼리 어드민'),
    common_1.Controller('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminOrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=admin.controller.js.map