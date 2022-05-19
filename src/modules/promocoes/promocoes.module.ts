import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promocoes } from './entities/promocoes.entity';
import { PromocoesController } from './promocoes.controller';
import { PromocoesRepository } from './promocoes.repository';
import { PromocoesService } from './promocoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Promocoes, PromocoesRepository])],
  controllers: [PromocoesController],
  providers: [PromocoesService],
})
export class PromocoesModule {}
