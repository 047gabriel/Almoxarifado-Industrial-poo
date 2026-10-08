import { Corte } from "../model/Corte.js";
import { cadastrar, listar, atualizar, deletar, buscarPorId } from "../repository/etapaFabRepository.js"

export function cadastrarAcabamento(numero, modeloMovel, unidadesConcluidas, tipoAcabamento) {
    const acabamento = new Corte(numero, modeloMovel, unidadesConcluidas, tipoAcabamento)

    return cadastrar(acabamento)
}

export function listarAcabamento() {
    const lista = listar()
    return lista
}

export function atualizarAcabamento(indice, numero, modeloMovel, unidadesConcluidas, tipoAcabamento) {
    const acabamento = new Corte(numero, modeloMovel, unidadesConcluidas, tipoAcabamento)

    return atualizar(indice, acabamento)
}

export function deletarAcabamento(indice) {
    return deletar(indice)
}

export function buscarAcabamentoPorId(indice) {
    return buscarPorId(indice)
}