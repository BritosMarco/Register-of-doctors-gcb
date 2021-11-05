import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDoctorDto } from './dto/create-doctors.dto';
import { DoctorsRepository } from './doctors.repository';
import { Doctors } from './doctors.entity';
import { SpecialtyRepository } from 'src/specialty/specialty.repository';
import { Specialty } from 'src/specialty/specialty.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(DoctorsRepository)
    private doctorsRepository: DoctorsRepository,
    private specialtyRepository: SpecialtyRepository,
  ) {}

  async createDoctor(createDoctorDto: CreateDoctorDto): Promise<Doctors> {
    return this.doctorsRepository.createDoctor(createDoctorDto);
  }

  async findDoctorId(doctorId: string): Promise<Doctors> {
    const doctor = await this.doctorsRepository.findOne(doctorId, {
      select: ['name', 'crm', 'phone', 'celphone', 'cep', 'specialtyId', 'id'],
    });

    if (!doctor) throw new NotFoundException('Profissional não encontrado');
    return doctor;
  }

  async findSpecialtyId(specialtyId: string): Promise<Specialty> {
    const specialty = await this.specialtyRepository.findOne(specialtyId, {
      select: ['name', 'id'],
    });

    if (!specialty) throw new NotFoundException('especialidade não encontrada');

    return specialty;
  }

  async updateDoctor(
    updateDoctorDto: CreateDoctorDto,
    id: string,
  ): Promise<Doctors> {
    const doctor = await this.findDoctorId(id);

    const { name, crm, phone, celphone, cep, specialtyId } = updateDoctorDto;

    doctor.name = name ? name : doctor.name;
    doctor.crm = crm ? crm : doctor.crm;
    doctor.phone = phone ? phone : doctor.phone;
    doctor.celphone = celphone ? celphone : doctor.celphone;
    doctor.cep = cep ? cep : doctor.cep;
    doctor.specialtyId = specialtyId ? specialtyId : doctor.specialtyId;

    try {
      await doctor.save();
      return doctor;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }

  async deleteDoctor(doctorId: string) {
    const result = await this.doctorsRepository.delete({ id: doctorId });

    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado um profissional com o ID informado',
      );
    }
  }
}
