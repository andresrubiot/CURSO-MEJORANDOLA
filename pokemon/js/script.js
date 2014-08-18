/*function Pokemon(nombrePokemon, vidaPokemon, ataquePokemon){
	var estructuraPokemon =
	{
		nombre:nombrePokemon,
		vida:vidaPokemon,
		ataque:ataquePokemon
	};
	return estructuraPokemon;
}

var pikachu=Pokemon("Pikachu",100,55);
var bulbasor=Pokemon("Bulbasor",90,50);

console.log(bulbasor);*/

function Pokemon(n,v,a,g){
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.grito=g;
	this.gritar=function(){
		alert(this.grito);
	}
}

function inicio(){
	var pikachu=new Pokemon("Pikachu",100,55,"Pika!");
	nombrePokemon.innerText="El pokemon se llama "+pikachu.nombre;
	datosPokemon.innerText="Tiene una vida de : "+pikachu.vida+", un ataque: "+pikachu.ataque+" y su grito es: "+pikachu.grito;
}