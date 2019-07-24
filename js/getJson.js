var request = new XMLHttpRequest()
request.open("GET","https://api.myjson.com/bins/nqu95")
request.onload = function(){
    var dados = JSON.parse(request.responseText)
    renderPeriodo(dados)
    renderGestor(dados)
    renderNome(dados)
    renderSede(dados)
    renderCliente(dados)
    renderEmail(dados)
    renderStatus(dados)
    renderSatisPess(dados)
    renderSatisProf(dados)
    renderComentario(dados)
    renderSolucao(dados)
    renderDataSub(dados)
}
request.send()

function renderPeriodo(data){
    var dadoPeriodo = document.getElementsByClassName("dado-periodo")

    for(i = 0; i < data.length; i++){
        var periodo = data[i].periodo
        dadoPeriodo[i].insertAdjacentHTML("beforeend",periodo)
    }
}

function renderGestor(data){
    var dadoGestor = document.getElementsByClassName("dado-gestor")

    for(i = 0; i < data.length; i++){
        var gestor = data[i].gestor
        dadoGestor[i].insertAdjacentHTML("beforeend",gestor)
    }
}

function renderNome(data){
    var dadoNome = document.getElementsByClassName("dado-nome")

    for(i = 0; i < data.length; i++){
        var nome = data[i].nome
        dadoNome[i].insertAdjacentHTML("beforeend",nome)
    }
}

function renderSede(data){
    var dadoSede = document.getElementsByClassName("dado-sede")

    for(i = 0; i < data.length; i++){
        var sede = data[i].sede
        dadoSede[i].insertAdjacentHTML("beforeend",sede)
    }
}

function renderCliente(data){
    var dadoCliente = document.getElementsByClassName("dado-cliente")

    for(i = 0; i < data.length; i++){
        var cliente = data[i].cliente
        dadoCliente[i].insertAdjacentHTML("beforeend",cliente)
    }
}

function renderEmail(data){
    var dadoEmail = document.getElementsByClassName("dado-email")

    for(i = 0; i < data.length; i++){
        var email = data[i].email
        dadoEmail[i].insertAdjacentHTML("beforeend",email)
    }
}

function renderStatus(data){
    var dadoStatus = document.getElementsByClassName("dado-status")

    for(i = 0; i < data.length; i++){
        var status = data[i].status
        dadoStatus[i].insertAdjacentHTML("beforeend",status)
    }
}

function renderSatisPess(data){
    var dadoSatisPess = document.getElementsByClassName("dado-satisPess")

    for(i = 0; i < data.length; i++){
        var satisPess = data[i].satisPess
        dadoSatisPess[i].insertAdjacentHTML("beforeend",satisPess)
    }
}

function renderSatisProf(data){
    var dadoSatisProf = document.getElementsByClassName("dado-satisProf")

    for(i = 0; i < data.length; i++){
        var satisProf = data[i].satisProf
        dadoSatisProf[i].insertAdjacentHTML("beforeend",satisProf)
    }
}

function renderComentario(data){
    var dadoComentario = document.getElementsByClassName("dado-comentario")

    for(i = 0; i < data.length; i++){
        var comentario = data[i].comentario
        dadoComentario[i].insertAdjacentHTML("beforeend",comentario)
    }
}

function renderSolucao(data){
    var dadoSolucao = document.getElementsByClassName("dado-solucao")

    for(i = 0; i < data.length; i++){
        var solucao = data[i].solucao
        dadoSolucao[i].insertAdjacentHTML("beforeend",solucao)
    }
}

function renderDataSub(data){
    var dadoDataSub = document.getElementsByClassName("dado-dataSub")

    for(i = 0; i < data.length; i++){
        var dataSub = data[i].dataSub
        dadoDataSub[i].insertAdjacentHTML("beforeend",dataSub)
    }
}