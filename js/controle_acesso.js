function loginAdm(){
    var passAdm = document.querySelector("#passAdm").value

    if(passAdm == "pass"){
        window.location="tela_adm.html"
    }else{
        alert("Senha Incorreta!")
    }
}

function enable(){
    var inputAdm = document.querySelector(".inputAdm")

    inputAdm.classList.remove("inputAdm")
    inputAdm.classList.add("inputAdm_on")
}