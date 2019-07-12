var inputFiltro = document.querySelector("#inputFiltro")

inputFiltro.addEventListener("input",function(){
    var dados = document.querySelectorAll(".dados")
    var dadosNome = document.querySelectorAll(".dado-nome")

    for(var i = 0; i < dadosNome.length; i++){
       if(dadosNome != this.value){
            dados.classList.add("invisivel")
       }else{
           dados.classList.remove("invisivel")
       }
        
    }

})