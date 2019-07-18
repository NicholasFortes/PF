function filtrar(){
    var input, filter, table, tr,dadoGestor,dadoNome,dadoSede,dadoCliente,dadoEmail,dadoStatus,checkGestor,checkNome,checkSede,checkCliente,checkEmail,checkStatus,td, i, j,cell;
    input = document.getElementById("inputFiltro")
    filter = input.value.toUpperCase()
    table = document.getElementById("tabela")
	tr = table.getElementsByTagName("tr")
	dadoGestor = document.querySelectorAll(".dado-gestor")
	dadoNome = document.querySelectorAll(".dado-nome")
	dadoSede = document.querySelectorAll(".dado-sede")
	dadoCliente = document.querySelectorAll(".dado-cliente")
	dadoEmail = document.querySelectorAll(".dado-email")
	dadoStatus = document.querySelectorAll(".dado-status")
	checkGestor = document.querySelector("#checkGestor")
	checkNome = document.querySelector("#checkNome")
	checkSede = document.querySelector("#checkSede")
	checkCliente = document.querySelectorl("#checkCliente")
	checkEmail = document.querySelector("#checkEmail")
	checkStatus = document.querySelector("#checkStatus")

    for (i = 1; i < tr.length; i++){
    	tr[i].style.display = "none"
		td = tr[i].getElementsByTagName("td")
		
    	for (j = 0; j < td.length; j++){
			cell = tr[i].getElementsByTagName("td")[j]

        	if (cell){
        		if (cell.innerHTML.toUpperCase().indexOf(filter) > -1){
            		tr[i].style.display = ""
    				break
          		} 
        	}
    	}
	}
}
