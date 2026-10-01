import Movimentacao from './Movimentacao.js';

export default class Saida extends Movimentacao {
	constructor(numero, quantidade, setorDestino) {
		super(numero, quantidade);
		this.setorDestino = setorDestino;
	}

	descrever() {
		return `Saída de ${this.quantidade} unidades do material ${this.material.nome}, destinada ao setor ${this.setorDestino}.`;
	}
}
