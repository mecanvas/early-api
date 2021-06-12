import { Module } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { CanvasController } from './canvas.controller';
import { CanvasOrder } from 'src/canvas/entities/CanvasOrder';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CanvasOrder])],
  providers: [CanvasService],
  controllers: [CanvasController],
})
export class CanvasModule {}
