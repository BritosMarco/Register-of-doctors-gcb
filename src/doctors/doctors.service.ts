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
      relations: ['specialty'],
      select: ['name', 'crm', 'phone', 'celphone', 'cep', 'specialty', 'id'],
    });
    if (!doctor) throw new NotFoundException('Profissional não encontrado');
    return doctor;
  }

  async findDoctorsAll(): Promise<Doctors[]> {
    const doctors = await this.doctorsRepository.find({
      select: ['name', 'id', 'crm', 'specialty'],
    });

    if (!doctors) throw new NotFoundException('Profissionais  não encontrados');

    return doctors;
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
    doctor.specialty = specialtyId ? specialtyId : doctor.specialty;

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
