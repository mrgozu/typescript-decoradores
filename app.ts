
// Decoradores de clase

function consola (constructor:Function){
    console.log(constructor);
}
@consola
class Villano {
    constructor (public nombre:string){
        this.nombre = nombre;
    }
}

// Decorador de fabrica

function imprimirConsola ( imprimir:boolean):Function{
    if( imprimir){
        return consola;
    }
    else{
       return () => null;
    }
}
@imprimirConsola(false)
class VillanoFabrica {
    constructor (public nombre:string){
        this.nombre = nombre;
    }
}
//Ejemplo practico

function planVillano(constructor:Function){
    constructor.prototype.imprimirPlan = function(){
        console.log(`El plan de ${this.nombre} es dominar el mundo!`);
    }
}

@planVillano // Se pueden anidar
class VillanoPlan {
    constructor (public nombre:string){}
}

let lex = new VillanoPlan ('Lex Luthor');
(<any>lex).imprimirPlan(); 


