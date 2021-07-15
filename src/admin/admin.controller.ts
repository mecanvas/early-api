import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { AdminOrderService } from './admin.service';

@ApiTags('얼리 어드민')
@Controller('admin')
export class OrderController {
  constructor(private readonly orderService: AdminOrderService) {}

  @ApiOperation({ summary: '캔버스 주문 목록 가져오기' })
  @ApiQuery({
    name: 'page',
    example: '1',
    required: false,
  })
  @ApiQuery({
    name: 'per_page',
    example: '10',
    required: false,
  })
  @ApiResponse({
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
  })
  @Get('canvasorder')
  getCanvasOrder(
    @Query('page') page: number,
    @Query('per_page') perPage: number,
  ) {
    return this.orderService.getCanvasOrder(page, perPage);
  }

  @ApiOperation({ summary: '캔버스 주문 상세 내용 가져오기' })
  @ApiParam({
    name: 'id',
    required: true,
  })
  @ApiResponse({
    status: 201,
    type: CanvasDividedOrder,
    description: '캔버스 주문 상세 내용',
  })
  @ApiBadRequestResponse({
    description: '일치하는 주문 상세 정보가 없습니다.',
  })
  @Get('canvasorder/:id')
  getCanvasOrderDetail(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.getCanvasOrderDetail(id);
  }
}
