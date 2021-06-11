import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Canvas } from './Canvas';

@Entity({ schema: 'early-api', name: 'canvasPaper' })
export class CanvasPaper {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'paper' })
  paper: string;

  @ManyToOne(() => Canvas, (canvas) => canvas.CanvasPaper)
  @JoinColumn([{ name: 'CanvasId', referencedColumnName: 'id' }])
  Canvas: Canvas;
}
