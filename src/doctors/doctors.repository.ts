import { EntityRepository, Repository } from 'typeorm';
import { Doctors } from './doctors.entity';
import { CreateDoctorDto } from './dto/create-doctors.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Doctors)
export class DoctorsRepository extends Repository<Doctors> {
  FindDoctors: any;

  async createDoctor(createDoctorDto: CreateDoctorDto): Promise<Doctors> {
    const { name, crm, phone, celphone, cep, specialtyId } = createDoctorDto;
    const doctors = this.create();
    doctors.name = name;
    doctors.crm = crm;
    doctors.phone = phone;
    doctors.celphone = celphone;
    doctors.cep = cep;
    doctors.specialty = specialtyId;

    try {
      await doctors.save();
      return doctors;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('CRM Já cadastrado');
      } else {
        throw new InternalServerErrorException('Erro ao cadastrar Médico');
      }
    }
  }
}
