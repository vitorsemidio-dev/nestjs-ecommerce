import { BaseEntity } from 'src/core/common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Promocoes extends BaseEntity {
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
}
