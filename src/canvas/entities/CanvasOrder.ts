import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ schema: 'early-api', name: 'canvasOrder' })
export class CanvasOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column('varchar', { name: 'username' })
  username: string;

  @Column('varchar', { name: 'email' })
  email: string;

  @Column('varchar', { name: 'originImgUrl' })
  originImgUrl: string;

  @Column({ type: 'simple-array', name: 'paper' })
  paper: string[];

  @Column({ type: 'simple-array', name: 'dataUrl' })
  dataUrl: string[];
}
