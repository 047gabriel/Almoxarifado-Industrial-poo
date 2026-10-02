const ferramentas = [];

export function cadastrar(Ferramenta){
    ferramentas.push(Ferramenta);
}

export function listar(){
    return ferramentas;
}

export function atualizar(indice, Ferramenta){
    ferramentas[indice] = Ferramenta;
}

export function deletar(indice){
    ferramentas.splice(indice,1);
}

export function buscarPorId(indice){
    return ferramentas[indice];
}