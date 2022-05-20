import { BaseEntity } from 'src/core/common/base.entity';
import { Produto } from 'src/modules/produtos/entities/produto.entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Promocoes extends BaseEntity {
  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  leveX?: number;

  @Column({ nullable: true })
  pagueY?: number;

  @Column({ nullable: true })
  compreX?: number;

  @Column({
    nullable: true,
    type: 'float',
  })
  porY?: number;

  @OneToMany(() => Produto, (produto) => produto.promocao)
  @JoinColumn({ name: 'produto_id' })
  produtos: Produto[];
}
