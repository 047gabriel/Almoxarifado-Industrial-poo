export class EtapaFabricacao {
  #unidadesConcluidas;

  constructor(numero, modeloMovel, unidadesConcluidas) {
    if (new.target === EtapaFabricacao) {
      throw new Error("A classe EtapaFabricacao não pode ser instanciada diretamente.");
    }

    this.numero = numero;
    this.modeloMovel = modeloMovel;
    this.#unidadesConcluidas = unidadesConcluidas;
    this.ferramentas = [];
  }

  get unidadesConcluidas() {
    return this.#unidadesConcluidas;
  }

  adicionarUnidades(valor) {
    if (valor > 0) {
      this.#unidadesConcluidas += valor;
      return true;
    }

    return false;
  }

  adicionarFerramenta(ferramenta) {
    this.ferramentas.push(ferramenta);
  }

  descreverEtapa() {
    throw new Error("O método descreverEtapa() deve ser implementado pela classe filha.");
  }
}
