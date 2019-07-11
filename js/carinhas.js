function changeDefault(){
    document.querySelector("#feliz").src = 'img/feliz.png';
    document.querySelector("#normal").src = 'img/normal.png';
    document.querySelector("#triste").src = 'img/triste.png';
  }

function change1(){
    changeDefault()
    var image = document.querySelector("#feliz")
    image.src = "img/feliz2.png"
    p2()
    p3()
}

function change2(){
    changeDefault()
    var image = document.querySelector("#normal")
    image.src = "img/normal2.png"
    p1()
    p3()
}

function change3(){
    changeDefault()
    var image = document.querySelector("#triste")
    image.src = "img/triste2.png"
    p1()
    p2()
}