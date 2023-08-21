var notas = [
    [4, 5, 6, 8], [5, 8, 4, 3], [6, 5, 9, 7], [8, 5, 2, 9]
];

var msg = '';
var mediaAnual = 0;

for (var i = 0; i < notas.length; i++) {
    console.log(notas[i]);
    msg += '<p> Notas do ' + (i + 1) + 'º' + ' bimestre: ' + notas[i].join(', ') + '</p>'

    var totalBimestre = 0;
 

    for (var j = 0; j < notas[i].length; j++) {
        totalBimestre += notas[i][j];

    }

    var mediaBimestre = totalBimestre / notas[i].length;
    mediaAnual += mediaBimestre; //somatório das notas do bimestre

    msg += '<p> Media do bimestre ' + (i + 1) + 'º' + ' bimestre: ' + mediaBimestre.toFixed(1) + '</p><hr>';
}

mediaAnual = mediaAnual / notas.length;

msg += '<p> Media anual: ' + mediaAnual.toFixed(1) + '</p>';


document.querySelector('#output').innerHTML = msg;