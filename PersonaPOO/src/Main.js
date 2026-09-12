// Importar las clases o subclases que se van a usar

import Persona from "./Persona.js";

// Crear objetos de la clase Persona
// new -> indica instancias o crear un objeto

// Primer objeto persona1 de la clase Persona
const persona1 = new Persona("102030","Albeiro","Muriel",50,"albeiro@","3174722992",1.68);

// Segundo objeto persona2 de la clase Persona
const mariana = new Persona("101010","Mariana","Sanchez",17,"mariana@","3003003003",1.80);

console.log(persona1.mostrarDatos());
console.log(mariana.mostrarDatos());