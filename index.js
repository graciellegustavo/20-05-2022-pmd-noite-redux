//arrow function
//nome: criarContratos
//recebe: nome e valor
//deveolve: um JSON com type CRIAR CONTRATO e payload igual ao JSON com nome valores

const criarContratos = (nome, valor) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: { nome, valor }
     }
}

//function regular (usar function)
//cancelarContrato
//recebe: nome
//devolve: um JSON com type = CANCELAR_CONTRATO e payload = JSON com nome

function cancelarContrato(nome) {
    return {
        type: "CANCELAR_CONTRATO",
        payload: { nome }
     }
}

//uma função criadora de ação para solicitações

const solicitarCashback = (nome, valor) => {
    return {
        type: "SOLICITAR_CASHBACK",
        payload: { nome, valor }
    }
}
