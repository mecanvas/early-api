import { Module } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { CanvasController } from './canvas.controller';
import { Canvas } from 'src/canvas/entities/Canvas';
import { CanvasFrame } from 'src/canvas/entities/CanvasFrame';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanvasPaper } from './entities/CanvasPaper';

@Module({
  imports: [TypeOrmModule.forFeature([Canvas, CanvasFrame, CanvasPaper])],
  providers: [CanvasService],
  controllers: [CanvasController],
})
export class CanvasModule {}
