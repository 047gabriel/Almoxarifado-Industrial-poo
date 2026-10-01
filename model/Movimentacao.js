export default class Movimentacao {
	#quantidade;

	constructor(numero, quantidade) {
		this.numero = numero;
		this.#quantidade = quantidade;
		this.material = null;
	}

	get quantidade() {
		return this.#quantidade;
	}

	adicionarUnidades(valor) {
		if (valor <= 0) {
			return false;
		}

		this.#quantidade += valor;
		return true;
	}

	associarMaterial(material) {
		this.material = material;
	}

	descrever() {
		throw new Error('O método descrever() deve ser implementado pelas classes filhas.');
	}
}
