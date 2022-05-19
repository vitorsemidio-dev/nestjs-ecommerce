import { Promocoes } from 'src/modules/promocoes/entities/promocoes.entity';

export class CreateProdutoDto {
  nome: string;
  preco: number;
  promocao?: Promocoes;
}
