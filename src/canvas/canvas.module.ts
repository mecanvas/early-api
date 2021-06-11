import { Module } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { CanvasController } from './canvas.controller';
import { Canvas } from 'src/entities/Canvas';
import { CanvasFrame } from 'src/entities/CanvasFrame';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Canvas, CanvasFrame])],
  providers: [CanvasService],
  controllers: [CanvasController],
})
export class CanvasModule {}
