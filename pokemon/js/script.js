function Pokemon(n,v,a,g,i){
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.grito=g;
	this.imagen=i;
	this.gritar=function(){
		alert(this.grito);
	}
}

function yoTeElijo(poke1){
	if (poke1==0) {var poke1=new Pokemon("Pikachu",100,55,"Pika!","pikachu.png");}
	else if (poke1==1) {var poke1=new Pokemon("Charmander",100,30,"Char!","charmander.jpeg");}
	else if (poke1==2) {var poke1=new Pokemon("Giglipop",100,20,"Giglip!","giglipop.png");}
	else if (poke1==3) {var poke1=new Pokemon("Eevee",100,34,"Four!","eevee.png");}
	else if (poke1==4) {var poke1=new Pokemon("Bulbasaur",100,50,"Five!","bulbasaur.jpg");}
	else if (poke1==5) {var poke1=new Pokemon("Chikorita",100,35,"Six!","chikorita.jpg");}
	nombrePokemon1.innerText="Elegiste a "+poke1.nombre;
	imagenPokemon1.innerHTML='<img src="imagenes/'+poke1.imagen+'" alt="'+poke1.nombre+'" height="100" />';
	datosPokemon1.innerText="Tiene una vida de : "+poke1.vida+", un ataque: "+poke1.ataque+" y su grito es: "+poke1.grito;
	document.getElementById("ataque1").value=poke1.ataque;
}

function yoTeElijo2(poke2){
	if (poke2==0) {var poke2=new Pokemon("Pikachu",100,55,"Pika!","pikachu.png");}
	else if (poke2==1) {var poke2=new Pokemon("Charmander",100,30,"Char!","charmander.jpeg");}
	else if (poke2==2) {var poke2=new Pokemon("Giglipop",100,20,"Giglip!","giglipop.png");}
	else if (poke2==3) {var poke2=new Pokemon("Eevee",100,34,"Four!","eevee.png");}
	else if (poke2==4) {var poke2=new Pokemon("Bulbasaur",100,50,"Five!","bulbasaur.jpg");}
	else if (poke2==5) {var poke2=new Pokemon("Chikorita",100,35,"Six!","chikorita.jpg");}
	nombrePokemon2.innerText="Elegiste a "+poke2.nombre;
	imagenPokemon2.innerHTML='<img src="imagenes/'+poke2.imagen+'" alt="'+poke2.nombre+'" height="100" />';
	datosPokemon2.innerText="Tiene una vida de : "+poke2.vida+", un ataque: "+poke2.ataque+" y su grito es: "+poke2.grito;

	document.getElementById("ataque2").value=poke2.ataque;
	resultado();
}

function resultado(){
	var atak1=document.getElementById("ataque1").value;
	var atak2=document.getElementById("ataque2").value;

	if (atak1!='' && atak2!='') {
		if (atak1==atak2) {
			batalla1.innerText="Empate";
			batalla2.innerText="Empate";
		}else if (atak1>atak2) {
			batalla1.innerText="Ganaste!!!";
			batalla2.innerText="Perdiste, pide la revancha";
		}else{
			batalla1.innerText="Perdiste, pide la revancha";
			batalla2.innerText="Ganaste!!!";
		}
	};


}

function bolas1(){
	for (var i = 0; i < 6; i++) {
		document.write('<article id="balls'+i+'" class="balls" onclick="yoTeElijo('+i+')"><div class="pokeballRed"></div><div class="pokeballWhite"></div><div class="pokeballBlack"></div><div class="pokeballCircle"></div><div class="pokeballCircle2"></div></article>');
	};
}

function bolas2(){
	for (var i = 0; i < 6; i++) {
		document.write('<article id="balls2'+i+'" class="balls" onclick="yoTeElijo2('+i+')"><div class="pokeballRed"></div><div class="pokeballWhite"></div><div class="pokeballBlack"></div><div class="pokeballCircle"></div><div class="pokeballCircle2"></div></article>');
	};
}