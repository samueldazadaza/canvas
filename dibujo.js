var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporclick );


var d = document.getElementById("dibujito");
var ancho = 300; d.widht;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoporclick()
{

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorsito = "blue";
  var colorsito2 = "red";
  var colorsito3 = "black";
  var colorsito4 = "green";
  var espacio = ancho / lineas;

  while(l < lineas)
  {
  yi = espacio * l;
  xf = espacio * (l + 1)
    dibujarLinea(colorsito, yi, xf, 300, 0);//solo inverti posicion(300 por 0)
    dibujarLinea(colorsito2, 0, 300, yi, xf);

    console.log(colorsito+l);
    l = l + 1;

  }

  dibujarLinea(colorsito, 299,1,1,1);
  dibujarLinea(colorsito, 1,299,1,299);


}
