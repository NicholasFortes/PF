function filter2(){
	var tabela = document.getElementById("tabela");
	var linha = tabela.getElementsByTagName("tr");
	var filter = document.getElementById("inpFiltro").value.toUpperCase();
	var selMes = document.getElementById("selMes").value;
	var selSemana = document.getElementById("selSemana").value;
	var inpData = document.getElementById("inpData").value;
	for (let i = 1; i<linha.length; i++){
		linha[i].style.display = "none";
		coluna = linha[i].getElementsByTagName('td');
		for (let j = 0; j<coluna.length; j++){
			if (checkVerification().length<1){
				var celula = coluna[j].innerText
				if (celula.toUpperCase().indexOf(filter)>-1){
					linha[i].style.display='';
					break;
				}
			} 
		}
	}
}
