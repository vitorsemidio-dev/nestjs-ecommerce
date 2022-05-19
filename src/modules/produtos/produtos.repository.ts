import { EntityRepository, Repository } from 'typeorm';
import { Produto } from 'src/modules/produtos/entities/produto.entity';

@EntityRepository(Produto)
export class ProdutosRepository extends Repository<Produto> {}
