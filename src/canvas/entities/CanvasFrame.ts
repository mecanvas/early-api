import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Canvas } from './Canvas';

@Entity({ schema: 'early-api', name: 'canvasFrame' })
export class CanvasFrame {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'dataUrl' })
  dataUrl: string;

  @ManyToOne(() => Canvas, (canvas) => canvas.CanvasFrame)
  @JoinColumn([{ name: 'CanvasId', referencedColumnName: 'id' }])
  Canvas: Canvas;
}
