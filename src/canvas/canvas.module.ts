import { Module } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { CanvasController } from './canvas.controller';
import { CanvasDividedOrder } from 'src/canvas/entities/CanvasDividedOrder.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanvasSingleOrder } from './entities/CanvasSingleOrder.entities';

@Module({
  imports: [TypeOrmModule.forFeature([CanvasDividedOrder, CanvasSingleOrder])],
  providers: [CanvasService],
  controllers: [CanvasController],
})
export class CanvasModule {}
