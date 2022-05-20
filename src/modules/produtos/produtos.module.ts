import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutosController } from './produtos.controller';
import { ProdutosRepository } from './produtos.repository';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, ProdutosRepository])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
