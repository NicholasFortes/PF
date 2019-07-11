function loginAdm(){
    var passAdm = document.querySelector("#passAdm").value

    if(passAdm == "pass"){
        window.location="tela_adm.html"
    }else{
        var ul = document.querySelector("#ul")
        ul.innerHTML("erro")
    }
}

function enable(){
    var inputAdm = document.querySelector(".inputAdm")

    inputAdm.classList.remove("inputAdm")
    inputAdm.classList.add("inputAdm_on")
}