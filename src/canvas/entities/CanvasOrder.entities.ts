import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'early-api', name: 'canvasOrder' })
export class CanvasOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @ApiProperty()
  id: number;

  @Column('bigint', { name: 'orderNo' })
  @ApiProperty()
  orderNo: number;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;

  @Column('varchar', { name: 'username' })
  @ApiProperty()
  username: string;

  @Column('int', { name: 'phone' })
  @ApiProperty()
  phone: number;

  @Column('varchar', { name: 'orderRoute' })
  @ApiProperty()
  orderRoute: string;

  @Column('varchar', { name: 'originImgUrl' })
  @ApiProperty()
  originImgUrl: string;

  @Column({ type: 'simple-array', name: 'paper' })
  @ApiProperty()
  paperNames: string[];

  @Column({ type: 'simple-array', name: 'dataUrl' })
  @ApiProperty()
  canvasFrameUrls: string[];
}
