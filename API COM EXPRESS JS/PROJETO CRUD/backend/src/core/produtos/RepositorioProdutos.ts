import Produto from "./Produto";

export default class RepositorioProdutos {
  itens: Produto[] = [
    new Produto("Colher", 5.99),
    new Produto("Mouse", 5.99),
    new Produto("Teclado", 5.99),
  ];

  obterTodos(){
    return this.itens
  }
}
