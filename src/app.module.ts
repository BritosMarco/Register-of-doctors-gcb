import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { SpecialtyModule } from './specialty/specialty.module';

@Module({
  imports: [DoctorsModule, SpecialtyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
