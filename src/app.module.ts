import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produto } from './modules/produtos/entities/produto.entity';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { Promocoes } from './modules/promocoes/entities/promocoes.entity';
import { PromocoesModule } from './modules/promocoes/promocoes.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Produto, Promocoes],
      synchronize: true,
      autoLoadEntities: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    ProdutosModule,
    PromocoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
