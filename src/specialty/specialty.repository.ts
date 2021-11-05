import { EntityRepository, Repository } from 'typeorm';
import { Specialty } from './specialty.entity';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Specialty)
export class SpecialtyRepository extends Repository<Specialty> {
  FindSpecialty?: any;
  async createSpecialty(
    createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<Specialty> {
    const { name } = createSpecialtyDto;
    const specialty = this.create();
    specialty.name = name;

    try {
      await specialty.save();
      return specialty;
    } catch (error) {
      if (error.code.toString() === '23505') {
        throw new ConflictException('Especialidade já cadastrada');
      } else {
        throw new InternalServerErrorException(
          'Erro ao cadastrar especialidade',
        );
      }
    }
  }
}
