import Movimentacao from './Movimentacao.js';

export default class Entrada extends Movimentacao {
	constructor(numero, quantidade, fornecedor) {
		super(numero, quantidade);
		this.fornecedor = fornecedor;
	}

	descrever() {
		return `Entrada de ${this.quantidade} unidades do material ${this.material.nome}, recebida do fornecedor ${this.fornecedor}.`;
	}
}
