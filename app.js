import Material from './model/Material.js';
import Entrada from './model/Entrada.js';
import Saida from './model/Saida.js';
import Transferencia from './model/Transferencia.js';

const parafusos = new Material('MAT-001', 'Parafusos');
const oleo = new Material('MAT-002', 'Óleo lubrificante');

const entrada = new Entrada(1, 100, 'Fornecedor Industrial');
const saida = new Saida(2, 30, 'Montagem');
const transferencia = new Transferencia(3, 20, 'Almoxarifado Central');

entrada.associarMaterial(parafusos);
saida.associarMaterial(parafusos);
transferencia.associarMaterial(oleo);

console.log('Teste de adicionar unidades na entrada:');
console.log(`Adicionar 10 unidades: ${entrada.adicionarUnidades(10)}`);
console.log(`Quantidade atual: ${entrada.quantidade}`);
console.log(`Adicionar 0 unidades: ${entrada.adicionarUnidades(0)}`);
console.log(`Quantidade atual: ${entrada.quantidade}`);

const movimentacoes = [entrada, saida, transferencia];

console.log('\nMovimentações registradas:');
for (let indice = 0; indice < movimentacoes.length; indice++) {
	const movimentacao = movimentacoes[indice];
	console.log(
		`Número: ${movimentacao.numero} | Material: ${movimentacao.material.codigo} - ${movimentacao.material.nome} | Quantidade: ${movimentacao.quantidade}`
	);
	console.log(movimentacao.descrever());
}
