import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminOrderService } from './admin.service';
import { OrderController } from './admin.controller';
import { CanvasOrder } from 'src/canvas/entities/CanvasOrder';

@Module({
  imports: [TypeOrmModule.forFeature([CanvasOrder])],
  providers: [AdminOrderService],
  controllers: [OrderController],
})
export class AdminModule {}
