const etapasFabricacoes = [];

export function cadastrar(EtapaFabricacao){
    etapasFabricacoes.push(EtapaFabricacao);
}

export function listar(){
    return etapasFabricacoes;
}

export function atualizar(indice, EtapaFabricacao){
    etapasFabricacoes[indice] = EtapaFabricacao;
}

export function deletar(indice){
    etapasFabricacoes.splice(indice,1);
}

export function buscarPorId(indice){
    return etapasFabricacoes[indice];
}