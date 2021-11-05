import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { SpecialtyRepository } from './specialty.repository';
import { Specialty } from './specialty.entity';

@Injectable()
export class SpecialtyService {
  constructor(
    @InjectRepository(SpecialtyRepository)
    private specialtyRepository: SpecialtyRepository,
  ) {}

  async createSpecialty(
    createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<Specialty> {
    return this.specialtyRepository.createSpecialty(createSpecialtyDto);
  }

  async findSpecialtyId(specialtyId: string): Promise<Specialty> {
    const specialty = await this.specialtyRepository.findOne(specialtyId, {
      select: ['name', 'id'],
    });

    if (!specialty) throw new NotFoundException('especialidade não encontrada');

    return specialty;
  }

  async findSpecialtyAll(): Promise<Specialty[]> {
    const specialties = await this.specialtyRepository.find({
      select: ['name', 'id'],
    });

    if (!specialties)
      throw new NotFoundException('especialidades não encontrada');

    return specialties;
  }

  async updateSpecialty(
    updateSpecialtyDto: CreateSpecialtyDto,
    id: string,
  ): Promise<Specialty> {
    const specialty = await this.findSpecialtyId(id);

    const { name } = updateSpecialtyDto;

    specialty.name = name ? name : specialty.name;

    try {
      await specialty.save();
      return specialty;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao salvar os dados no banco de dados',
      );
    }
  }

  async deleteSpecialty(specialtyId: number) {
    const result = await this.specialtyRepository.delete({ id: specialtyId });

    if (result.affected === 0) {
      throw new NotFoundException(
        'Não foi encontrado especialidade com o ID informado',
      );
    }
  }
}
