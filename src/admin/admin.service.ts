import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CanvasOrder } from 'src/canvas/entities/CanvasOrder.entities';
import { Repository } from 'typeorm';

@Injectable()
export class AdminOrderService {
  constructor(
    @InjectRepository(CanvasOrder)
    private canvasOrderRepository: Repository<CanvasOrder>,
  ) {}

  async getCanvasOrder(page?: number, perPage?: number) {
    const defaultPerPage = perPage || 10;
    const defaultPage = page || 1;
    const res = await this.canvasOrderRepository
      .createQueryBuilder()
      .orderBy('createdAt', 'DESC')
      .skip((defaultPage - 1) * defaultPerPage)
      .take(defaultPerPage)
      .getMany();

    return res;
  }
}
