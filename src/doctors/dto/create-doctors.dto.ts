import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty({ message: 'Informe o nome' })
  @MaxLength(120, {
    message: 'O nome deve ter menos de 120 carcateres',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Informe o CRM, somente números' })
  @MaxLength(7, { message: 'CRM máximo 7 caracteres' })
  crm: number;

  @IsNumber()
  @IsOptional({ message: 'Informe o telefone, somente números' })
  @MaxLength(11, { message: 'Telefone máximo 11 caracteres' })
  phone: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Informe o telefone celular, somente números' })
  @MaxLength(11, { message: 'Telefone máximo 11 caracteres' })
  celphone: number;

  @IsNumber()
  @IsOptional({ message: 'Informe o cep, somente números' })
  @Length(8, 8, { message: 'informe o cep com 8 caracteres' })
  cep: number;

  @IsNotEmpty()
  @IsNumber()
  specialty: number;
}
