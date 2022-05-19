import { BaseEntity } from 'src/core/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Produto extends BaseEntity {
  @Column()
  nome: string;

  @Column({
    type: 'decimal',
  })
  preco: number;
}
