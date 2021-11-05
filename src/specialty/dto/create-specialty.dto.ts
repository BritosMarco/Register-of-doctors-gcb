import { IsNotEmpty, MaxLength } from 'class-validator';
export class CreateSpecialtyDto {
  @IsNotEmpty({ message: 'Informe a especialidade' })
  @MaxLength(40, {
    message: 'expexialidade deve ter menos de 40 carcateres',
  })
  name: string;
}
