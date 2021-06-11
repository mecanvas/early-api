import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CanvasFrame } from './CanvasFrame';
import { CanvasPaper } from './CanvasPaper';

@Entity({ schema: 'early-api', name: 'canvas' })
export class Canvas {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'username' })
  username: string;

  @Column('varchar', { name: 'email', unique: true })
  email: string;

  @OneToMany(() => CanvasPaper, (canvasPaper) => canvasPaper.Canvas)
  CanvasPaper: CanvasPaper[];

  @OneToMany(() => CanvasFrame, (canvasFrame) => canvasFrame.Canvas)
  CanvasFrame: CanvasFrame[];
}