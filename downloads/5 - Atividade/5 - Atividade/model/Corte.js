import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Corte extends EtapaFabricacao {
  constructor(numero, modeloMovel, unidadesConcluidas, tipoCorte) {
    super(numero, modeloMovel, unidadesConcluidas);
    this.tipoCorte = tipoCorte;
  }

  descreverEtapa() {
    return `Corte do móvel ${this.modeloMovel}: ${this.unidadesConcluidas} unidades concluídas usando ${this.tipoCorte}.`;
  }
}
