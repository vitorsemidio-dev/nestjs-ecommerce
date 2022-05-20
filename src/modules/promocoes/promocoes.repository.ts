import { EntityRepository, Repository } from 'typeorm';
import { Promocoes } from 'src/modules/promocoes/entities/promocoes.entity';

@EntityRepository(Promocoes)
export class PromocoesRepository extends Repository<Promocoes> {}
