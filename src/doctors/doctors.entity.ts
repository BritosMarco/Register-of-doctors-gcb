import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Specialty } from 'src/specialty/specialty.entity';


@Entity()
export class Doctors extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 120 })
  name: string;

  @Column({ unique: true })
  crm: number;

  @Column({ type: 'int' })
  phone: number;

  @Column()
  celphone: number;

  @Column()
  cep: number;

  @CreateDateColumn()
  createdAd: Date;

  @UpdateDateColumn()
  updatedAd: Date;

  @OneToOne(() => Specialty)
  @JoinColumn()
  specialtyId: Specialty;
}
