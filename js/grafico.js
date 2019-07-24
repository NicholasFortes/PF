function loadingraficos(){
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(grafico1);
    google.charts.setOnLoadCallback(grafico2);
    google.charts.setOnLoadCallback(grafico3);
}
function sizeFont(size){
    var fontsize = 0;
    if (size<=576){
      fontsize=6;
    }
    else if (size<=768){
      fontsize=8;
  
    }
    else if (size<=992){
      fontsize=10;
    }
    else if (size<=1200){
      fontsize=12;
    }
    else{
      fontsize=14;
    }
    return fontsize;
}
function grafico1() {
    var data = google.visualization.arrayToDataTable([
        ['Tipo de Resposta', 'Quantidade'],
        ['Estou bem',     12],
        ['Tenho um ponto de atenção',      4],
        ['Não estou contente',  4]
      ]);
      var options = {
        title:'Satisfação Semanal',
        titleTextStyle: {
            color: 'white',
            fontName: 'Arial',
            fontSize: sizeFont(window.innerWidth)+2,
        },
        is3D: true, 
        backgroundColor: 'transparent',
        chartArea:{width:"100%",height:"65%"},
        legend:{textStyle: { fontSize: sizeFont(window.innerWidth),color:'white'},alignment:'center'},
        tooltip:{textStyle: {fontSize: sizeFont(window.innerWidth)}},
        colors: ['#0084ff','#0571ff', '#2254a8']
      };
      var chart = new google.visualization.PieChart(document.getElementById('grafico1'));
      chart.draw(data, options);
}
function grafico2() {
    var data = google.visualization.arrayToDataTable([
        ['Tipo de Resposta', 'Quantidade'],
        ['Pessoal',     10],
        ['Profissional',      2],
        ['Ambos',  8]
      ]);
      var options = {
        title:'Procedência de Contentamento',
        titleTextStyle: {
            color: 'white',
            fontName: 'Arial',
            fontSize: sizeFont(window.innerWidth)+2,
        },
        is3D: true, 
        backgroundColor: 'transparent',
        chartArea:{width:"100%",height:"65%"},
        legend:{textStyle: { fontSize: sizeFont(window.innerWidth),color:'white'},alignment:'center'},
        tooltip:{textStyle: {fontSize: sizeFont(window.innerWidth)}},
        colors: ['#0084ff','#0571ff', '#2254a8']
      };
      var chart = new google.visualization.PieChart(document.getElementById('grafico2'));
      chart.draw(data, options);
}
function grafico3() {
    var data = google.visualization.arrayToDataTable([
        ['Tipo de Resposta', 'Quantidade'],
        ['Estou bem',    9],
        ['Tenho um ponto de atenção',      6],
        ['Não estou contente',  5]
      ]);
      var options = {
        title:'Satisfação Anual',
        titleTextStyle: {
            color: 'white',
            fontName: 'Arial',
            fontSize: sizeFont(window.innerWidth)+2,
        },
        is3D: true, 
        backgroundColor: 'transparent',
        chartArea:{width:"100%",height:"65%"},
        legend:{textStyle: { fontSize: sizeFont(window.innerWidth),color:'white'},alignment:'center'},
        tooltip:{textStyle: {fontSize: sizeFont(window.innerWidth)}},
        colors: ['#0084ff','#0571ff', '#2254a8']
      };
      var chart = new google.visualization.PieChart(document.getElementById('grafico3'));
      chart.draw(data, options);
}
window.onload = function(){
    loadingraficos();

}
var addEvent = function(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return;
    if ( elem.addEventListener ) {
        elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, eventHandle );
    } else {
        elem["on"+type]=eventHandle;
    }
};
addEvent(window, "resize", function(){
    loadingraficos();
});
