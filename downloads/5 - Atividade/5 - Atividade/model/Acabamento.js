import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Acabamento extends EtapaFabricacao {
  constructor(numero, modeloMovel, unidadesConcluidas, tipoAcabamento) {
    super(numero, modeloMovel, unidadesConcluidas);
    this.tipoAcabamento = tipoAcabamento;
  }

  descreverEtapa() {
    return `Acabamento do móvel ${this.modeloMovel}: ${this.unidadesConcluidas} unidades concluídas com ${this.tipoAcabamento}.`;
  }
}
