import {
  BaseEntity as TypeOrmBaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export interface IBaseEntity {
  id: Uuid;
  criadoEm: Date;
  atualizadoEm: Date;
  deletadoEm: Date;
}

export abstract class BaseEntity
  extends TypeOrmBaseEntity
  implements IBaseEntity
{
  @PrimaryGeneratedColumn('uuid')
  id: Uuid;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'criado_em',
  })
  criadoEm: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'atualizado_em',
  })
  atualizadoEm: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deletado_em',
  })
  deletadoEm: Date;
}
