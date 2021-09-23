'use strict'
//console.log('Cargado JS')
class Pelicula {
  constructor() {
    //console.log('Se ha creado una pelicula')
    //this es el onjeto que ejecuta el codigo.
    this.titulo= 'Tiroteo en el MISSISIPI'
    this.pueblo= new Pueblo ('TodoPolvo', 'muy povloriento, en mitad del desierto de Arizona')
    this.narrador=new Narrador()
    this.paco=new PersonajeBueno('Paco')
    this.maria=new PersonajeBueno('Maria')
    this.morgan=new PersonajeMalo('Morgan')



    this.iniciar()
  }
  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`)
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}.</p>`)
    this.narrador.hablar('Era una soleada mañana')
    this.paco.hablar(`Hola ${this.maria.nombre}. Hoy hace un dia estupendo.`)
    this.maria.hablar(`Hola ${this.paco.nombre}. La verdad es que si.`)
    this.narrador.hablar('Ambos se miran un momento y siguen andando')
    this.morgan.hablar('Vaya ruina de pueblo. Viva er Betissssss y no me entero de nada')
    this.morgan.hablar('Eres feo y del Madrid')
    this.morgan.arma.disparar()
    this.morgan.arma.cargador--
    console.log(  this.morgan.arma.cargador);
    this.morgan.arma.disparar()
    this.morgan.arma.disparar()
    this.morgan.hablar('JAJA NO, KA PASAO?')
    this.narrador.hablar('Paco muere despues de evitar la bala pero caerse a un precipicio')
    this.narrador.hablar('María se tira a por Paco y muere tambien')

  }
}
class Pueblo{
  constructor(nombre, descripcion){
    this.nombre= nombre
    this.descripcion= descripcion
  }
}
class Narrador{
  hablar(texto){
    document.write(`-${texto}.`)
  }
}
class Personaje{
  constructor(nombre){
    this.nombre=nombre
    this.arma=new Arma()
  }

}
class PersonajeBueno extends Personaje{
  hablar(texto){
    document.write(`<p class=bueno><span >${this.nombre}:</span>${texto}</p>`)

  }
}
  class PersonajeMalo extends Personaje{
    hablar(texto){
      document.write(`<p class=malo><span >${this.nombre}:GGRRRRRR...${texto} </span></p>`)

    }
}
class Arma
{
  
  disparar(){
    document.write(`<p>¡¡PUM!!</p>`)
  }

}

new Pelicula()
