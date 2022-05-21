const Redux = require('redux')
const { createStore, combineReducers } = Redux

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

//arrow function
//historicoDePedidosCashbackReducer
//recebe uma fatia de estado sobre a qual operar (uma lista chamada historicoDePedidosCashback. Por padrão, ela é uma lista vazia)
//recebe uma ação
//devolve: uma lista que contém todos os pedidos da lista recebida e o pedido descrito no payload da ação 
//detalhe: somente operar no estado se o type for apropriado
//detalhe2: obgatório usar o spread (...)

const historicoDePedidosCashbackReducer = (historicoDePedidosCashback = [], acao) => {
    if (acao.type === "SOLICITAR_CASHBACK") {
        return [...historicoDePedidosCashback, acao.payload]
    }
    return historicoDePedidosCashback
}

//implementar o reducer que manipula o caixa 
//o caixa começa zerado

const caixaReducer = (valorDeCaixa = 0, acao) => {
    if (acao.type === "CRIAR_CONTRATO") {
        return valorDeCaixa + acao.payload.valor
    }

    if (acao.type === "SOLICITAR_CASHBACK") {
        return valorDeCaixa - acao.payload.valor
    }

    return valorDeCaixa
}

//implementar o reducer que lida com a lista de contratos
//elepode criar contrato e cancelar contratos

const listaReducer = (contratos = [], acao) => {
    if (acao.type === "CRIAR_CONTRATO") {
        return [...contratos, acao.payload]
    }

    if (acao.type === "CANCELAR_CONTRATO") {
        return contratos.filter(contrato => contrato.nome !== acao.payload.nome )
    }

    return contratos
}

const todosOsReducers = combineReducers({
    historicoDePedidosCashbackReducer,
    caixaReducer,
    listaReducer
})

const store = createStore(todosOsReducers)

//criar um contrato para o josé
const acaoContratoDoZé = criarContratos("José", 50)
store.dispatch(acaoContratoDoZé) 

const acaoContratoDoBelo = criarContratos(" Belo", 50000000)
store.dispatch(acaoContratoDoBelo)

const acaoContratoDaGraci = criarContratos("Graci", 1000000000)
store.dispatch(acaoContratoDaGraci)

const cashbackBelo = solicitarCashback("Belo", 20)
store.dispatch(cashbackBelo)

const cancelarJose = cancelarContrato("José")
store.dispatch(cancelarJose)

console.log(store.getState())