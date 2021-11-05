import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoctorsRepository } from './doctors.repository';
import { SpecialtyRepository } from 'src/specialty/specialty.repository';
import { SpecialtyService } from 'src/specialty/specialty.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoctorsRepository, SpecialtyRepository])],
  providers: [DoctorsService, SpecialtyService],
  controllers: [DoctorsController],
})
export class DoctorsModule {}
