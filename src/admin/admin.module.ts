import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminOrderService } from './admin.service';
import { OrderController } from './admin.controller';
import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { CanvasSingleOrder } from 'src/canvas/entities/CanvasSingleOrder.entities';

@Module({
  imports: [TypeOrmModule.forFeature([CanvasDividedOrder, CanvasSingleOrder])],
  providers: [AdminOrderService],
  controllers: [OrderController],
})
export class AdminModule {}
