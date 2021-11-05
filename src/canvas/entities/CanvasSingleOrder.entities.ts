import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'early-api', name: 'canvasSingleOrder' })
export class CanvasSingleOrder {
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

  @Column('int', { name: 'orderRoute' })
  @ApiProperty()
  orderRoute: number;

  @Column('varchar', { name: 'scaleType' })
  @ApiProperty()
  scaleType: number; // 1 = 흰색 2 = 배경 3 = 좌우반전

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
