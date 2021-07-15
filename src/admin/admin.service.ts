import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { Repository } from 'typeorm';

@Injectable()
export class AdminOrderService {
  constructor(
    @InjectRepository(CanvasDividedOrder)
    private canvasOrderRepository: Repository<CanvasDividedOrder>,
  ) {}

  async getCanvasOrder(page: number, perPage: number) {
    const defaultPerPage = perPage || 10;
    const defaultPage = page || 1;
    const results = await this.canvasOrderRepository.find({
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

    const total = await this.canvasOrderRepository.count();
    return { total, results };
  }

  async getCanvasOrderDetail(id: number) {
    const results = await this.canvasOrderRepository.findOne(id);
    if (!results) {
      throw new NotFoundException('일치하는 주문 상세 정보가 없습니다.');
    }
    return results;
  }
}
