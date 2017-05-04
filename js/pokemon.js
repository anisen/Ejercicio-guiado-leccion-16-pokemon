
function Pokemon(nombre,color,poderDeAtaque){
	this.nombre=nombre;
	this.color=color;
	this.nivelDeAmistad=0;
	this.vida=100;
	this.poderDeAtaque=poderDeAtaque;

	this.mostrarPokemon=function(){
		return ("hola,soy:"+this.nombre+" y soy de color:"+this.color)
	}

	this.aumentrAmistad=function(valor){
		this.nivelDeAmistad=this.nivelDeAmistad + valor;
    }

    this.atacar=function(pokemon){
    	pokemon.vida=pokemon.vida - this.poderDeAtaque;
    }
}
const pikachu=new Pokemon("pikachu","amarillo",100);
const charmander=new Pokemon("charmander","rojo",20);

pikachu.atacar(charmander);

console.log(charmander.vida);
