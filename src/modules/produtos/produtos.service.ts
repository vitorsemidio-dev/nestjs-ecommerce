import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutosRepository } from './produtos.repository';

@Injectable()
export class ProdutosService {
  constructor(private readonly repository: ProdutosRepository) {}
  async create(createProdutoDto: CreateProdutoDto) {
    const product = this.repository.create(createProdutoDto);
    return await this.repository.save(product);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: Uuid) {
    return await this.repository.findOne(id);
  }

  async update(id: Uuid, updateProdutoDto: UpdateProdutoDto) {
    return await this.repository.update(id, updateProdutoDto);
  }

  async remove(id: Uuid) {
    return await this.repository.softRemove({ id });
  }
}
