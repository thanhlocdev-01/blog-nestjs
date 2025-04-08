import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_Name: string;

  @Column()
  last_Name: string;

  @Column({ default: 1 })
  status: number;
}
