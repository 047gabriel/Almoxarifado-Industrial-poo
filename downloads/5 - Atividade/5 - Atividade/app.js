import { cadastrarFerramenta,
    listarFerramenta, 
    atualizarFerramenta, 
    deletarFerramenta,
} from "./controller/ferramentaController.js";

const resultado = cadastrarFerramenta("0001", "Martelo");
console.log(resultado)
cadastrarFerramenta("0002", "Alicate");

listarFerramenta();

const resu = atualizarFerramenta(1, "0002", "Alicate de pressão");
console.log(resu)

deletarFerramenta(0);

listarFerramenta();
