import { Promocoes } from 'src/modules/promocoes/entities/promocoes.entity';
import { BaseEntity } from 'src/core/common/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Produto extends BaseEntity {
  @Column()
  nome: string;

  @Column({
    type: 'float',
  })
  preco: number;

  @ManyToOne(() => Promocoes, (promocao) => promocao.produtos)
  @JoinColumn({ name: 'promocao_id' })
  promocao: Promocoes;
}
