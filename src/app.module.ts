import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { TypeOrmConfig } from './configs/typeorm.configs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { SpecialtyRepository } from './specialty/specialty.repository';

@Module({
  imports: [
    HttpModule,
    DoctorsModule,
    SpecialtyModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    TypeOrmModule.forFeature([SpecialtyRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
