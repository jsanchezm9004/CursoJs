// Crear una tabla de multiplicar
// 127 * 3 = 381
// 127 * 4 = ???

/* ---- COMENTADO PARA QUE NO SE EJECUTE ----
let nro = Number(prompt("Número"))
let i

for(i=1; i<11; i++) {
    console.log(`${nro} * ${i} = ${nro * i}`)
    // console.log(nro + " * " + i + " = " + (nro*i))    Otra forma de concatenar, es menos formal y más compleja
}
*/

// contadores y acumuladores se deben inicializar en CERO
// digitar la nota final de un grupo de 50 estudiantes, imprimir cuantos ganan, cuantos pierden y el promedio

let contPerder = 0
let contGanan = 0
let acumNotas = 0
let i
for (i=0; i<4; i++) {
    let nota = Number(prompt("Nota"))
    nota < 3 ? contPerder++ : contGanan++
    acumNotas += nota
}

let promedio = acumNotas/i
console.log(`*** INFORME ACADÉMICO ***
    Ganaron----> ${contGanan}
    Perdieron--> ${contPerder}
    Promedio---> ${promedio}    
    `);
