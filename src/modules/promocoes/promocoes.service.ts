import { Injectable } from '@nestjs/common';
import { CreatePromocaoDto } from './dto/create-promocoe.dto';
import { UpdatePromocaoDto } from './dto/update-promocoe.dto';
import { PromocoesRepository } from './promocoes.repository';

@Injectable()
export class PromocoesService {
  constructor(private readonly promocoesRepository: PromocoesRepository) {}
  async create(createPromocaoDto: CreatePromocaoDto) {
    const promocao = this.promocoesRepository.create(createPromocaoDto);
    return await this.promocoesRepository.save(promocao);
  }

  async findAll() {
    return await this.promocoesRepository.find();
  }

  async findOne(id: Uuid) {
    return await this.promocoesRepository.findOne(id);
  }

  async update(id: Uuid, updatePromocaoDto: UpdatePromocaoDto) {
    return await this.promocoesRepository.update(id, updatePromocaoDto);
  }

  async remove(id: Uuid) {
    return await this.promocoesRepository.softRemove({ id });
  }
}
