import {Ferramenta} from "../model/Ferramenta.js"
import {cadastrar, listar, atualizar, deletar, buscarPorId} from "../repository/ferramentaRespository.js"

export function cadastrarFerramenta(codigo, nome){
    const ferramenta = new Ferramenta(codigo, nome)

    cadastrar(ferramenta);

    return "Ferramenta cadastrada com sucesso"
}

export function listarFerramenta(){
    const lista = listar();

    console.log(lista);
}

export function atualizarFerramenta(indice, codigo, nome){
    const ferramenta = new Ferramenta(codigo, nome);

    atualizar(indice, ferramenta)

    return "Ferramenta atualizada com sucesso"
}

export function deletarFerramenta(indice){
    deletar(indice);
}

export function buscarFerramentaPorId(indice){
    buscarPorId(indice);
}