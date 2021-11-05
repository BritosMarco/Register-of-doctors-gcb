import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  ValidationPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctors.dto';
import { DoctorsService } from './doctors.service';
import { ReturnDoctorsDto } from './dto/return-doctors.dto';
import { SpecialtyService } from 'src/specialty/specialty.service';

@Controller('doctors')
export class DoctorsController {
  constructor(
    private doctorsService: DoctorsService,
    private specialtyService: SpecialtyService,
  ) {}

  @Post()
  async createDoctors(
    @Body(ValidationPipe) createDoctorDto: CreateDoctorDto,
  ): Promise<ReturnDoctorsDto> {
    const doctor = await this.doctorsService.createDoctor(createDoctorDto);
    return {
      doctor,
      message: 'Médico cadastrado com sucesso',
    };
  }

  @Get(':id')
  async findDoctorId(@Param('id') id): Promise<ReturnDoctorsDto> {
    const doctor = await this.doctorsService.findDoctorId(id);
    return {
      doctor,
      message: 'Profissional Localizado',
    };
  }

  @Get()
  async findDoctorsAll() {
    const found = await this.doctorsService.findDoctorsAll();

    return {
      found,
      message: 'Profissionais encontradas',
    };
  }

  @Patch(':id')
  async updateDoctor(
    @Body(ValidationPipe) updateDoctorDto: CreateDoctorDto,
    @Param('id') id: string,
  ) {
    return this.doctorsService.updateDoctor(updateDoctorDto, id);
  }

  @Delete(':id')
  async deleteDoctor(@Param('id') id: string) {
    await this.doctorsService.deleteDoctor(id);
    return {
      message: 'Cadastro removido com sucesso',
    };
  }
}
