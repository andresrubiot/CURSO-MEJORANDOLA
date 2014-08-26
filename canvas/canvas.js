var dibujo, lienzo;
function inicio(){
  dibujo=document.getElementById("grafico");
  lienzo=dibujo.getContext("2d");


  for (i = 0; i < 300; i++) {
    lienzo.beginPath();
    lienzo.strokeStyle="#F00";
    lienzo.moveTo(i*10,0);
    lienzo.lineTo(i*10,300);
    lienzo.stroke();
    lienzo.closePath();
  };

  for (i = 0; i < 300; i++) {
    lienzo.beginPath();
    lienzo.strokeStyle="#F00";
    lienzo.moveTo(0,i*10);
    lienzo.lineTo(300,i*10);
    lienzo.stroke();
    lienzo.closePath();
  };

  lienzo.beginPath();
  lienzo.strokeStyle="#00F";
  lienzo.arc(150,150,100,(Math.PI*2),false);
  lienzo.closePath();
  lienzo.stroke();

}
