google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['Satisfeito', 3],
    ['Não Satisfeito', 1],
    ['Com uma Observação', 1],
    ]);

    var options = {'title':'Satisfação Profissional',
                    'width':400,
                    'height':300,
                    backgroundColor: 'transparent',
                    legend:{textStyle:{color:'white'}},
                    titleTextStyle: {color: 'white'}};

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

//COLOQUEI MAIS 2 GRAFICOS PARA EXEMPLIFICAR//

//GRAFICO 1
function drawChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['Satisfeito', 4],
    ['Não Satisfeito', 0],
    ['Com uma Observação', 1],
    ]);

    var options = {'title':'Satisfação Pessoal',
                    'width':400,
                    'height':300,
                    backgroundColor: 'transparent',
                    legend:{textStyle:{color:'white'}},
                    titleTextStyle: {color: 'white'}};

    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}
//GRAFICO 2
function drawChart2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['Solucionados', 3],
    ['Não Solucionados', 1],
    ['Em Andamento', 1],
    ]);

    var options = {'title':'Status',
                    'width':400,
                    'height':300,
                    backgroundColor: 'transparent',
                    legend:{textStyle:{color:'white'}},
                    titleTextStyle: {color: 'white'}};

    var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

//AQUI EU INVOCO AS FUNÇÕES
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);