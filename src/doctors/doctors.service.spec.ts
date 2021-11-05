import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsService } from './doctors.service';
import { DoctorsRepository } from './doctors.repository';
import { CreateDoctorDto } from './dto/create-doctors.dto';
import { NotFoundException } from '@nestjs/common';

const mockDoctorsRepository = () => ({
  createDoctors: jest.fn(),
  findOne: jest.fn(),
  delete: jest.fn(),
});

describe('DoctorsService', () => {
  let service;
  let doctorsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DoctorsService,
        {
          provide: DoctorsRepository,
          useFactory: mockDoctorsRepository,
        },
      ],
    }).compile();

    doctorsRepository = await module.get<DoctorsRepository>(DoctorsRepository);
    service = await module.get<DoctorsService>(DoctorsService);
  });

  it('should be defined', () => {
    expect(doctorsRepository).toBeDefined();
    expect(service).toBeDefined();
  });

  describe('CreateDoctor', () => {
    let mockCreateDoctorDto: CreateDoctorDto;

    beforeEach(() => {
      mockCreateDoctorDto = {
        name: 'Test1',
        crm: 123,
        phone: 123,
        celphone: 123,
        cep: 123,
        specialty: 1,
      };
    });
    it('should create an doctor', async () => {
      doctorsRepository.createDoctor.mockResolvedValue('mockDoctor');
      const result = await service.createDoctor(mockCreateDoctorDto);

      expect(doctorsRepository.createDoctor).toHaveBeenCalledWith(
        mockCreateDoctorDto,
      );
      expect(result).toEqual('mockDoctor');
    });
  });

  describe('findDoctorId', () => {
    it('should return the found doctor', async () => {
      doctorsRepository.findOne.mockResolvedValue('dataBaseTest');

      const result = await service.findDoctorId('idTest');
      const select = ['name', 'id', 'crm', 'phone'];
      expect(doctorsRepository.findOne).toHaveBeenLastCalledWith('idTest', {
        select,
      });
      expect(result).toEqual('result');
    });
    it('should throw error as doctor is nor found', async () => {
      doctorsRepository.findOne.mockResolvedValue(null);
      expect(service.findDoctorId('resultado')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  /*  describe('deleteDoctor', () => {
    it('should return the found doctor', async () => {
      doctorsRepository.delete.mockResolvedValue('dataBaseTest');

      const result = await service.deleteDoctor('idTest');
      expect(doctorsRepository.delete).toHaveBeenLastCalledWith('idTest', {
        doctorsRepository,
      });
      expect(result).toEqual('result');
    });
    it('should throw error as doctor is nor found', async () => {
      doctorsRepository.delete.mockResolvedValue(null);
      expect(service.deleteDoctor('resultado')).rejects.toThrow(
        NotFoundException,
      );
    });
  }); */
});
