var tabela = document.getElementById("tabela");
var linha = tabela.getElementsByTagName("tr");

for (let i = 1; i<linha.length; i++){
	linha[i].style.display = "none";
}

function filter2(){
	var filter = document.getElementById("inpFiltro").value.toUpperCase();
	var selMes = document.getElementById('selMes');
	var selSemana = document.getElementById('selSemana');
	var inpData = document.getElementById('inpData');
	for (let i = 1; i<linha.length; i++){
		linha[i].style.display = "none";
		coluna = linha[i].getElementsByTagName('td');
		for (let j = 0; j<coluna.length; j++){
			var celula = coluna[j].innerText;
			if (checkVerification().length<1){
				if (celula.toUpperCase().indexOf(filter)>-1){
					linha[i].style.display='';
					break;
				}
			}
			else if (checkVerification().indexOf(coluna[j].className)>-1){	
				if (celula.toUpperCase().indexOf(filter)>-1&&filter!=''){
					linha[i].style.display='';
					break;
				}
				if (coluna[j].className.indexOf('dado-periodo')||coluna[j].className.indexOf('dado-dataSub')){
					if (selMes.value==00){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7&&j==0){
								if (celula.indexOf(x[0]+'/')>-1){
									linha[i].style.display='';
									break;
								}
								else{
									linha[i].style.display='none';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14&&j==0){
								if (celula.indexOf(x[0]+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21&&j==0){
								if (celula.indexOf(x[0]+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21&&j==0){
								if (celula.indexOf(x[0]+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (j==11){
								if (celula.indexOf(formData())>-1){
									linha[i].style.display='';
									break;
								}
								else{
									linha[i].style.display='none';
									break;		
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==01){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')>-1){
									linha[i].style.display='';
									break;
								}
								else{
									linha[i].style.display='none';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==02){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==03){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==04){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==05){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==06){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==07){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==08){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==09){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==10){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==11){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}
					else if (selMes.value==12){
						if (selSemana.value==1){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]<=7){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==2){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>7&&x[0]<=14){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==3){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>14&&x[0]<=21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else if (selSemana.value==4){
							var x = new Array;
							x.push(celula.substring(0,2));
							if (x[0]>21){
								if (celula.indexOf(x[0]+'/'+selMes.value+'/')){
									linha[i].style.display='none';
									break;
								}
								else{
									linha[i].style.display='';
									break;
								}
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
						else{
							if (celula.indexOf('/'+selMes.value+'/')>-1){
								linha[i].style.display='';
								break;
							}
							else{
								linha[i].style.display='none';
								break;
							}
						}
					}

				}
			} 
		}
	}
}