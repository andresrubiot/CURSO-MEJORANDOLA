
function playerOpc(opc){
	var minimo=0;
	var maximo=4;
	var opciones=["Piedra","Papel","Tijera","Lagarto","Spock"];
	alert("Elegiste "+opciones[opc]);

	var javascriptOpc=Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
	alert("Javascript eligió "+opciones[javascriptOpc]);

	if ((opc==0) && (javascriptOpc==3) || (opc==0) && (javascriptOpc==2)) {
		alert("Ganaste!!!");
	}else if ((opc==1) && (javascriptOpc==0) || (opc==1) && (javascriptOpc==4)) {
		alert("Ganaste!!!");
	}else if ( (opc==2) && (javascriptOpc==1) || (opc==2) && (javascriptOpc==3) ) {
		alert("Ganaste!!!");
	}else if ((opc==3) && (javascriptOpc==4) || (opc==3) && (javascriptOpc==1)) {
		alert("Ganaste!!!");
	}else if ((opc==4) && (javascriptOpc==2) || (opc==4) && (javascriptOpc==0)) {
		alert("Ganaste!!!");
	}else if (opc==javascriptOpc) {
		alert("Empate, Juega de nuevo");
	}
	else{
		alert("Perdiste :'(");
	}

}