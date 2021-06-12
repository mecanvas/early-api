import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdminOrderService } from './admin.service';

@ApiTags('주문 리스트')
@Controller('admin')
export class OrderController {
  constructor(private readonly orderService: AdminOrderService) {}

  @ApiOperation({ summary: '캔버스 주문 목록 가져오기' })
  @ApiQuery({
    description: '/admin/order/?page=1&per_page=3',
  })
  @ApiResponse({
    status: 201,
    description: '캔버스 주문 목록',
  })
  @Get('order')
  getCanvasOrder(
    @Query('page', ParseIntPipe) page: number,
    @Query('per_page', ParseIntPipe) perPage: number,
  ) {
    return this.orderService.getCanvasOrder(page, perPage);
  }
}
