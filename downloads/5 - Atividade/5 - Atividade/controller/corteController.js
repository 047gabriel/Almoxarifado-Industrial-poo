import { Corte } from "../model/Corte.js";
import { cadastrar, listar, atualizar, deletar, buscarPorId } from "../repository/etapaFabRepository.js"

export function cadastrarCorte(numero, modeloMovel, unidadesConcluidas, tipoCorte) {
    const corte = new Corte(numero, modeloMovel, unidadesConcluidas, tipoCorte)

    return cadastrar(corte)
}

export function listarCorte() {
    const lista = listar()
    return lista
}

export function atualizarCorte(indice, numero, modeloMovel, unidadesConcluidas, tipoCorte) {
    const corte = new Corte(numero, modeloMovel, unidadesConcluidas, tipoCorte)

    return atualizar(indice, corte)
}

export function deletarCorte(indice) {
    return deletar(indice)
}

export function buscarCortePorId(indice) {
    return buscarPorId(indice)
}