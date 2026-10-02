import { Corte } from "../model/Corte.js";
import {cadastrar, listar, atualizar, deletar, buscarPorId} from "../repository/etapaFabRepository.js"

export function cadastrarCorte(numero, modeloMovel, unidadesConcluidas, tipoCorte) {
    const corte = new Corte(numero, modeloMovel, unidadesConcluidas, tipoCorte)

    cadastrar(corte)

    return `Corte cadastrado com sucesso!`
}

export function listarCorte() {
    const lista = listar()

    console.log(lista)
}

export function atualizarCorte(indice, numero, modeloMovel, unidadesConcluidas, tipoCorte) {
    const corte = new Corte(numero, modeloMovel, unidadesConcluidas, tipoCorte)

    atualizar(indice, corte)

    return `Corte atualizado com sucesso`
}

export function deletarCorte(indice) {
    deletar(indice)

    return "Corte deletado com sucesso!"
}

export function buscarCortePorId(indice) {
    buscarPorId(indice)

    return `Corte encontrado`
}