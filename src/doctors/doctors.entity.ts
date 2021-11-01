import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Doctors extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 120 })
  name: string;

  @Column({ nullable: false, type: 'int', length: 7 })
  crm: number;

  @Column({ type: 'int', length: 11 })
  phone: number;

  @Column({ nullable: false, type: 'int', length: 11 })
  celphone: number;

  @Column({ nullable: false, type: 'int', length: 8 })
  cep: number;

  @CreateDateColumn()
  createdAd: Date;

  @UpdateDateColumn()
  updatedAd: Date;

  @Column()
  specialty: number;
}
