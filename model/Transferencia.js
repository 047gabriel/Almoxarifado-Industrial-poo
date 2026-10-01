import Movimentacao from './Movimentacao.js';

export default class Transferencia extends Movimentacao {
	constructor(numero, quantidade, almoxarifadoDestino) {
		super(numero, quantidade);
		this.almoxarifadoDestino = almoxarifadoDestino;
	}

	descrever() {
		return `Transferência de ${this.quantidade} unidades do material ${this.material.nome}, destinada ao almoxarifado ${this.almoxarifadoDestino}.`;
	}
}
