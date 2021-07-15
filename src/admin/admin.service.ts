import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { CanvasSingleOrder } from 'src/canvas/entities/CanvasSingleOrder.entities';
import { Repository } from 'typeorm';

@Injectable()
export class AdminOrderService {
  constructor(
    @InjectRepository(CanvasDividedOrder)
    private canvasDividedOrderRepository: Repository<CanvasDividedOrder>,
    private canvasSingleOrderRepository: Repository<CanvasSingleOrder>,
  ) {}

  async getCanvasDividedOrder(page: number, perPage: number) {
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
      ],
      order: { createdAt: 'DESC' },
      skip: (defaultPage - 1) * defaultPerPage,
      take: defaultPerPage,
    });

    const total = await this.canvasDividedOrderRepository.count();
    return { total, results };
  }

  async getCanvasDividedOrderDetail(id: number) {
    const results = await this.canvasDividedOrderRepository.findOne(id);
    if (!results) {
      throw new NotFoundException('일치하는 주문 상세 정보가 없습니다.');
    }
    return results;
  }

  // 싱글 어드민
  async getCanvasSingleOrder(page: number, perPage: number) {
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
      ],
      order: { createdAt: 'DESC' },
      skip: (defaultPage - 1) * defaultPerPage,
      take: defaultPerPage,
    });

    const total = await this.canvasSingleOrderRepository.count();
    return { total, results };
  }

  async getCanvasSingleOrderDetail(id: number) {
    const results = await this.canvasDividedOrderRepository.findOne(id);
    if (!results) {
      throw new NotFoundException('일치하는 주문 상세 정보가 없습니다.');
    }
    return results;
  }
}
