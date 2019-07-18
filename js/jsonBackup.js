var dadoGestor1 = document.getElementById("dado-gestor1")
// var dadoNome = document.getElementById("dado-nome1")
// var dadoSede = document.getElementById("dado-sede1")
// var dadoCliente = document.getElementById("dado-cliente1")
// var dadoEmail = document.getElementById("dado-email1")
// var dadoStatus = document.getElementById("dado-status1")

var request = new XMLHttpRequest()
request.open("GET","https://api.myjson.com/bins/nrish")
request.onload = function(){
    var dados = JSON.parse(request.responseText)
    renderGestor1(dados)
}
request.send()

function renderGestor1(data){
    for(i = 0; i < data.length; i++){
        var gestor = data[0].gestor1
    }

    dadoGestor1.insertAdjacentHTML("beforeend",gestor)
}