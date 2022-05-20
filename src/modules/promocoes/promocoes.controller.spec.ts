import { Test, TestingModule } from '@nestjs/testing';
import { PromocoesController } from './promocoes.controller';
import { PromocoesService } from './promocoes.service';

describe('PromocoesController', () => {
  let controller: PromocoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromocoesController],
      providers: [PromocoesService],
    }).compile();

    controller = module.get<PromocoesController>(PromocoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
