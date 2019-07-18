function validacao() {
    var botaoSubmit = document.getElementById("botaoSubmit")
    
	event.preventDefault()
	if (document.form1.satisfacao[0].checked == false 
    && document.form1.satisfacao[1].checked == false
    && document.form1.satisfacao[2].checked == false
    || document.form1.motivo[0].checked == false
    && document.form1.motivo[1].checked == false
    && document.form1.motivo[2].checked == false){
    alert('Preencha os campos obrigatórios!')
    return false
    }else{
	window.location="tela_obg.html"
    return true
    }
}                       