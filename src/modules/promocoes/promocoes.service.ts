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
    return await this.promocoesRepository.find({
      relations: ['produtos'],
    });
  }

  async findOne(id: Uuid) {
    return await this.promocoesRepository.findOne(id, {
      relations: ['produtos'],
    });
  }

  async update(id: Uuid, updatePromocaoDto: UpdatePromocaoDto) {
    return await this.promocoesRepository.update(id, updatePromocaoDto);
  }

  async remove(id: Uuid) {
    const hasProdutoWithPromocao = await this.promocoesRepository.findOne({
      where: { id },
      relations: ['produtos'],
    });
    if (hasProdutoWithPromocao.produtos.length > 0) {
      throw new Error(
        'Não é possível remover uma promoção que possui produtos',
      );
    }
    return await this.promocoesRepository.softRemove({ id });
  }
}
