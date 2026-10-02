import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Montagem extends EtapaFabricacao {
  constructor(numero, modeloMovel, unidadesConcluidas, tipoUniao) {
    super(numero, modeloMovel, unidadesConcluidas);
    this.tipoUniao = tipoUniao;
  }

  descreverEtapa() {
    return `Montagem do móvel ${this.modeloMovel}: ${this.unidadesConcluidas} unidades concluídas com união por ${this.tipoUniao}.`;
  }
}
