import { IsString } from 'class-validator';
import { Doctors } from 'src/doctors/doctors.entity';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  Unique,
} from 'typeorm';

@Entity()
export class Specialty extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 40, unique: true })
  @IsString()
  name: string;

  @CreateDateColumn()
  createdAd: Date;

  @OneToOne(() => Doctors, (doctors) => doctors.specialty)
  doctors: Doctors;
}
