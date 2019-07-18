var checkbox=document.querySelector('.divcheckboxes');
var tabela=document.querySelector('.divtabela');
var button=document.querySelector('.filtrobotao');
button.addEventListener("click",function(event){
    var visibilidade = checkbox.classList.contains("invisivel");
    if (visibilidade==true){
        checkbox.classList.add("visivel","col-1");
        checkbox.classList.remove("invisivel");
        tabela.classList.add("col-11");
    }
    else{
        checkbox.classList.remove("visivel","col-1");
        checkbox.classList.add("invisivel");
        tabela.classList.remove("col-11");
    }
    event.preventDefault();
});
    
    
    
    
    
    
    
    
    
    
    














    // if (Pradio==''||Sradio==''){
    //     event.preventDefault();
    //     var radio1=document.querySelector('#radio1');
    //     var radio2=document.querySelector('#radio2');
    //     if (Pradio==''){
    //         radio1.classList.remove("erroroff");
    //         radio1.classList.add("erroron");
    //     }
    //     else{
    //         radio1.classList.remove("erroron");
    //         radio1.classList.add("erroroff");
    //     }
    //     if (Sradio==''){
    //         radio2.classList.remove("erroroff");
    //         radio2.classList.add("erroron");
    //     }
    //     else{
    //         radio2.classList.remove("erroron");
    //         radio2.classList.add("erroroff");
    //     }
    // }        

