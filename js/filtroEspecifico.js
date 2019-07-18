var checkboxGestor = document.getElementById('checkGestor');
var checkboxNome = document.getElementById('checkNome');
var checkboxSede = document.getElementById('checkSede');
var checkboxCliente = document.getElementById('checkCliente');
var checkboxEmail = document.getElementById('checkEmail');
var listaChecked = [checkboxGestor,checkboxNome,checkboxSede,checkboxCliente,checkboxEmail]
checkboxGestor.addEventListener("click",function(event){
    checkVerification();
});
checkboxNome.addEventListener("click",function(event){
    checkVerification();
});
checkboxSede.addEventListener("click",function(event){
    checkVerification();
});
checkboxCliente.addEventListener("click",function(event){
    checkVerification();
});
checkboxEmail.addEventListener("click",function(event){
    checkVerification();
});

function checkVerification(){
    var checkboxGestor = document.getElementById('checkGestor');
    var checkboxNome = document.getElementById('checkNome');
    var checkboxSede = document.getElementById('checkSede');
    var checkboxCliente = document.getElementById('checkCliente');
    var checkboxEmail = document.getElementById('checkEmail');
    console.log('Checkverification')
    var retorno ="";
    if (checkboxGestor.checked){
        retorno = retorno.concat('dado-gestor');
        console.log('gestor checked');
    }
    else{
        retorno = retorno.replace('dado-gestor','');}
    console.log(retorno);
}
