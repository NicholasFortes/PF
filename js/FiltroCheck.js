var checkbox=document.querySelector('.divcheckboxes');
var tabela=document.querySelector('.divtabela');
var button=document.querySelector('.filtrobotao');
button.addEventListener("click",function(event){
    checkSize(window.innerWidth,checkbox,tabela);
    event.preventDefault();
});

function checkSize(size,checkbox,tabela){
    var visivel = checkbox.classList.contains("invisivel");
    if (size<=576){
        if (visivel){
            checkbox.classList.add("visivel","col-2");
            checkbox.classList.remove("invisivel");
            tabela.classList.add("col-10");
        }
        else{
            checkbox.classList.remove("visivel","col-2","col-1");
            checkbox.classList.add("invisivel");
            tabela.classList.remove("col-10","col-11");
        }
    }   
    else if (size<=768){
        if (visivel){
            checkbox.classList.add("visivel","col-2");
            checkbox.classList.remove("invisivel");
            tabela.classList.add("col-10");
        }
        else{
            checkbox.classList.remove("visivel","col-2","col-1");
            checkbox.classList.add("invisivel");
            tabela.classList.remove("col-10","col-11");
        }
    }
    else if (size<=992){
        if(visivel){
            checkbox.classList.add("visivel","col-1");
            checkbox.classList.remove("invisivel");
            tabela.classList.add("col-11");
        }
        else{
            checkbox.classList.remove("visivel","col-2","col-1");
            checkbox.classList.add("invisivel");
            tabela.classList.remove("col-10","col-11");
        }
    }
    else if (size<=1200){
        if (visivel){
            checkbox.classList.add("visivel","col-1");
            checkbox.classList.remove("invisivel");
            tabela.classList.add("col-11");
        }
        else{
            checkbox.classList.remove("visivel","col-2","col-1");
            checkbox.classList.add("invisivel");
            tabela.classList.remove("col-10","col-11");
        }
    }
    else{
        if (visivel){
            checkbox.classList.add("visivel","col-1");
            checkbox.classList.remove("invisivel");
            tabela.classList.add("col-11");
        }
        else{
            checkbox.classList.remove("visivel","col-2","col-1");
            checkbox.classList.add("invisivel");
            tabela.classList.remove("col-10","col-11");
        }
    }
}

    
    
    
    
    
    
    
    
    
    
    














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

