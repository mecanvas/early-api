import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'early-api', name: 'canvasDividedOrder' })
export class CanvasDividedOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @ApiProperty()
  id: number;

  @Column('bigint', { name: 'orderNo' })
  @ApiProperty()
  orderNo: number;

  @Column('int', { name: 'type' })
  @ApiProperty()
  type: number;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;

  @Column('varchar', { name: 'username' })
  @ApiProperty()
  username: string;

  @Column('varchar', { name: 'phone' })
  @ApiProperty()
  phone: string;

  @Column('varchar', { name: 'orderRoute' })
  @ApiProperty()
  orderRoute: string;

  @Column('mediumtext', { name: 'originImgUrl' })
  @ApiProperty()
  originImgUrl: string;

  @Column({ type: 'simple-array', name: 'paper' })
  @ApiProperty()
  paperNames: string[];

  @Column({ type: 'simple-array', name: 'dataUrl' })
  @ApiProperty()
  canvasFrameUrls: string[];
}
