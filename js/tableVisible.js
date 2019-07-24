var tbody = document.querySelector("tbody")
var input = document.querySelector("#inpFiltro")

input.addEventListener("input",function(){
    
    var visibilidade = tbody.classList.contains("invisivel")

    if(input.value.length > 0){
        if(visibilidade == true){
            tbody.classList.remove("invisivel")
            tbody.classList.add("visivel")
        }
    }else{
        tbody.classList.remove("visivel")
        tbody.classList.add("invisivel")
    }
})


