google.charts.load('current', {'packages':['corechart']});
        
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['Estou Bem', 3],
    ['Tenho um Problema', 1],
    ['Tenho um Ponto de Interesse', 1],
    ]);

    var options = {'title':'Acompanhamento Semanal',
                    'width':400,
                    'height':300,
                    backgroundColor: 'transparent',
                    legend:{textStyle:{color:'white'}},
                    titleTextStyle: {color: 'white'}};

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}