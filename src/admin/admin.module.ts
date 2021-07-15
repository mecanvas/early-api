import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminOrderService } from './admin.service';
import { OrderController } from './admin.controller';
import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';

@Module({
  imports: [TypeOrmModule.forFeature([CanvasDividedOrder])],
  providers: [AdminOrderService],
  controllers: [OrderController],
})
export class AdminModule {}
