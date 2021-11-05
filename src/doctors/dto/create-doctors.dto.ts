import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
  IsOptional,
  MinLength,
} from 'class-validator';
import { Specialty } from 'src/specialty/specialty.entity';

export class CreateDoctorDto {
  @IsNotEmpty({ message: 'Informe o nome' })
  @MinLength(2, { message: 'Nome deve ter no minimo 2 caracteres' })
  @MaxLength(120, {
    message: 'O nome deve ter menos de 120 carcateres',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  crm: number;

  @IsNumber()
  @IsOptional()
  phone: number;

  @IsNumber()
  @IsNotEmpty()
  celphone: number;

  @IsNumber()
  @IsOptional()
  cep: number;

  @IsNotEmpty()
  specialtyId: Specialty;
}
