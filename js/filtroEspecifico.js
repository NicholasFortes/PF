var checkboxGestor = document.getElementById('checkGestor');
var checkboxNome = document.getElementById('checkNome');
var checkboxSede = document.getElementById('checkSede');
var checkboxCliente = document.getElementById('checkCliente');
var checkboxEmail = document.getElementById('checkEmail');
var checkboxStatus = document.getElementById('checkStatus');
var checkboxSatispess = document.getElementById('checkSatisPess');
var checkboxSatisprof = document.getElementById('checkSatisProf');
var checkboxVisual = document.getElementById('checkVisual');
var selMes = document.getElementById('selMes');
var selSemana = document.getElementById('selSemana');
var inpData = document.getElementById('inpData');
checkboxGestor.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxNome.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxSede.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxCliente.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxEmail.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxStatus.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxSatispess.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxSatisprof.addEventListener("click",function(event){
    checkboxVisual.checked=false;
    filter2();
});
checkboxVisual.addEventListener("click",function(event){
    var tabela = document.getElementById("tabela");
    var linha = tabela.getElementsByTagName("tr");
    var filter = document.getElementById("inpFiltro")
    if (checkboxVisual.checked){
        for (let i = 1; i<linha.length; i++){
            linha[i].style.display = "";   
        }
    }
    else{
        for (let i = 1; i<linha.length; i++){
            linha[i].style.display = "none";   
        }
    }
});
selMes.addEventListener("change",function(event){
    checkboxVisual.checked=false;
    filter2();
});
selSemana.addEventListener("change",function(event){
    checkboxVisual.checked=false;
    filter2();
});
inpData.addEventListener("keyup",function(event){
    checkboxVisual.checked=false;
    filter2();
});
function checkVerification(){
    var retorno=[];
    if (checkboxGestor.checked){
        retorno.push('dado-gestor');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-gestor') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (checkboxNome.checked){
        retorno.push('dado-nome');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-nome') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (checkboxSede.checked){
        retorno.push('dado-sede');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-sede') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (checkboxCliente.checked){
        retorno.push('dado-cliente');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-cliente') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (checkboxEmail.checked){
        retorno.push('dado-email');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-email') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (checkboxStatus.checked){
        retorno.push('dado-status');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-status') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (checkSatisPess.checked){
        retorno.push('dado-satisPess');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-satisPess') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (checkSatisProf.checked){
        retorno.push('dado-satisProf');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-satisProf') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (selMes.value>0){
        retorno.push('dado-periodo','dado-dataSub');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-periodo') {
                retorno.splice(i, 1); 
            }
            if (retorno[i]==='dado-dataSub') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (selSemana.value>0){
        retorno.push('dado-periodo');
    }
    else{
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-periodo') {
                retorno.splice(i, 1); 
            }
        }
    }
    if (inpData.value.length==10){
        retorno.push('dado-dataSub');
        selSemana.value = 0;
        selSemana.disabled = true;
        selSemana.style.opacity='0.2';
        selMes.value = 0;
        selMes.disabled = true;
        selMes.style.opacity='0.2';
    }
    else{
        selSemana.disabled = false;
        selSemana.style.opacity='';
        selMes.disabled = false;
        selMes.style.opacity='';
        for(let i = 0; i<retorno.length; i++){ 
            if (retorno[i]==='dado-dataSub'&&selMes==0) {
                retorno.splice(i, 1); 
            }
        }
    }
    return retorno;
}