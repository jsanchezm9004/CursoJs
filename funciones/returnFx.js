/* esta funcion está bien, pero me ahorro espacio y tiempo si lo hago como la segunda forma:

function calcFinal(nota1,nota2,nota3){
    let definitiva = (nota1+nota2+nota3)/3
    return definitiva
}
*/


function calcFinal(nota1,nota2,nota3){
    return (nota1+nota2+nota3)/3
}

/* --- Se comenta para continuar con otras funciones ---
console.log(`Nota final = ${calcFinal(4,5,3)}`)
let xx=calcFinal(4,5,3) * 2
console.log(xx)
*/


function informeAcademico(nombre,programa,mensaje,definitiva,asignatura) {
    console.log(`** Informe Académico **
        Nombre--------> ${nombre}
        Programa------> ${programa}
        Asignatura----> ${asignatura}
        Definitiva----> ${definitiva}
        Observación---> ${mensaje}
        `)
    // el mensaje debe decir si ganó o perdió por vago
}


function pedirDatos() {
    let nombre = prompt("Nombre")
    let programa = prompt("Programa")
    let asignatura = prompt("Asignatura")
    let nota1 = Number(prompt("Nota 1"))
    let nota2 = Number(prompt("Nota 2"))
    let nota3 = Number(prompt("Nota 3"))
    let definitiva = calcFinal(nota1,nota2,nota3)
    let mensaje = definitiva >= 3 ? "Ganó" : "Perdió por vago 😡 😡 😁"
    informeAcademico(nombre,programa,mensaje,definitiva,asignatura)
}

// Llamado de funciones
pedirDatos()