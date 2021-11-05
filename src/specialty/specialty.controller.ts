import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { SpecialtyService } from './specialty.service';
import { ReturnSpecialtyDto } from './dto/return-specialty.dto';
import { SpecialtyRepository } from './specialty.repository';
@Controller('specialty')
export class SpecialtyController {
  constructor(
    private specialtyService: SpecialtyService,
    private specialtyRepository: SpecialtyRepository,
  ) {}

  @Post()
  async createSpecialty(
    @Body(ValidationPipe) createSpecialtyDto: CreateSpecialtyDto,
  ): Promise<ReturnSpecialtyDto> {
    const specialty = await this.specialtyService.createSpecialty(
      createSpecialtyDto,
    );

    return {
      specialty,
      message: 'Especialidade cadastrada com sucesso',
    };
  }

  @Get(':id')
  async findSpecialtyId(@Param('id') id): Promise<ReturnSpecialtyDto> {
    const specialty = await this.specialtyService.findSpecialtyId(id);
    return {
      specialty,
      message: 'Especialidade Localizada',
    };
  }

  @Delete(':id')
  async deleteSpecialty(@Param('id') id: number) {
    await this.specialtyService.deleteSpecialty(id);
    return {
      message: 'Especialidade removida com sucesso',
    };
  }

  @Get()
  async findSpecialtyAll() {
    const found = await this.specialtyService.findSpecialtyAll();

    return {
      found,
      message: 'Especialidades encontradas',
    };
  }
}
