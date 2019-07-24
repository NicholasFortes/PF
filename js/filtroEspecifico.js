var checkboxGestor = document.getElementById('checkGestor');
var checkboxNome = document.getElementById('checkNome');
var checkboxSede = document.getElementById('checkSede');
var checkboxCliente = document.getElementById('checkCliente');
var checkboxEmail = document.getElementById('checkEmail');
var checkboxStatus = document.getElementById('checkStatus');
var checkboxSatispess = document.getElementById('checkSatisPess');
var checkboxSatisprof = document.getElementById('checkSatisProf');
checkboxGestor.addEventListener("click",function(event){
    checkVerification();
    filter2();
});
checkboxNome.addEventListener("click",function(event){
    checkVerification();
    filter2();
});
checkboxSede.addEventListener("click",function(event){
    checkVerification();
    filter2();
});
checkboxCliente.addEventListener("click",function(event){
    checkVerification();
    filter2();
});
checkboxEmail.addEventListener("click",function(event){
    checkVerification();
    filter2();
});
checkboxStatus.addEventListener("click",function(event){
    checkVerification();
    filter2();
});
checkboxSatispess.addEventListener("click",function(event){
    checkVerification();
    filter2();
});
checkboxSatisprof.addEventListener("click",function(event){
    checkVerification();
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
    return retorno;
}
