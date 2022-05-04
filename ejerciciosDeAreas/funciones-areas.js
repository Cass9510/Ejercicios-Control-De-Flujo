
var res;

function areaCuadrado(lado) {
 res = parseFloat(lado) * parseFloat(lado);
 document.getElementById('lblResultado').innerHTML = res;
}

function areaRectangulo(baseR,alturaR) {
 res = parseFloat(baseR) * parseFloat(alturaR);
 document.getElementById('lblResultado').innerHTML = res;
}

function areaTriangulo(baseT,alturaT) {
 res = parseFloat(baseT) * parseFloat(alturaT) / 2;
 document.getElementById('lblResultado').innerHTML = res;
}

function areaCirculo(radio) {
 res = Math.PI*Math.pow(radio,2);
 document.getElementById('lblResultado').innerHTML = res;
}
