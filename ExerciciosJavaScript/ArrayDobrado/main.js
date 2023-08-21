var arr = [1, 3, 6, 9];
var arrDobrado = dobrar(arr);

var msg = '';

function dobrar(arr) {
    var arrTemp = [];
    for (var i = 0; i < arr.length; i++) {
        arrTemp[i] = arr[i] * 2;

    }

    return arrTemp

}
var msg = "Array original: " + arr.join(', ') + "<br>Array dobrado: " + arrDobrado.join(', ');

document.querySelector('#output').innerHTML = msg;

console.log(arr);
console.log(arrDobrado);