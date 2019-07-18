function save(){
    var com = document.getElementById("com")
    var tdComentario = document.querySelector("#comentario1")
    var submit = document.querySelector("#botaoSubmit")
    
    com.addEventListener("input",function(){
        submit.addEventListener("click",function(){
            tdComentario.value = com.value
        }) 
    })
}


