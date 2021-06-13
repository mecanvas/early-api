import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CanvasOrder } from 'src/canvas/entities/CanvasOrder.entities';
import { Repository } from 'typeorm';

@Injectable()
export class AdminOrderService {
  constructor(
    @InjectRepository(CanvasOrder)
    private canvasOrderRepository: Repository<CanvasOrder>,
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
        'email',
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
      throw new NotFoundException();
    }
    return results;
  }
}
