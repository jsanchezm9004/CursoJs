/*
1. palabra reservada function
2. Nombre
3. () parámetros opcionales
4. {} bloques de código
5. algunas con la palabra return
*/

/* --- Se comenta para continuar con otras funciones ---
function saludar() { //fx sin parámetros
    console.log("Hola bb cómo estas...😁😁😁")
}

// una fx no se ejecuta si no es llamada
saludar()
saludar()
saludar()
saludar()
saludar()
saludar()
*/

/* Se comenta para continuar con otras funciones
function saludarName(nombre) {
    console.log(`Hola ${nombre}, cómo estas...😁😁😁😁`)
}

let nombre = prompt("Nombre")
saludarName(nombre)
saludarName("Manuel")
saludarName("Juan")
saludarName("Daniela")
saludar()
*/


/*
function informe(nombre,programa,nota,asignatura) {
    console.log(`** Informe Académico **
        Nombre------> ${nombre}
        Programa----> ${programa}
        Asignatura--> ${asignatura}
        Nota--------> ${nota}
        `)
}

informe("Paco","Desarrollo de Software",1.7,"BackEnd")
informe("Luis","Gastronomia",5,"Arroz")
informe(1.5,"desarrollo","Luis","BackEnd") // la info se tiene que colocar en el mismo orden que la funcion usa las variables
*/

/*
function informe(nombre,programa,nota,asignatura="Front I") {
    console.log(`** Informe Académico **
        Nombre------> ${nombre}
        Programa----> ${programa}
        Asignatura--> ${asignatura}
        Nota--------> ${nota}
        `)
}

informe("Paco","Desarrollo de Software",1.7,"BackEnd")
informe("Luis","Gastronomia",5,"Arroz")
informe(1.5,"desarrollo","Luis","BackEnd")
informe("Juliana","Desarrollo",4.3)
informe("Pedro","Desarrollo",4.3)
*/

/*
function informe(nombre,programa="Mecatrónica",nota,asignatura="Front I") {
    console.log(`** Informe Académico **
        Nombre------> ${nombre}
        Programa----> ${programa}
        Asignatura--> ${asignatura}
        Nota--------> ${nota}
        `)
}

informe("Paco","Desarrollo de Software",1.7,"BackEnd")
informe("Luis","Gastronomia",5,"Arroz")
informe(1.5,"desarrollo","Luis","BackEnd")
informe("Juliana","Desarrollo",4.3)
informe("Pedro","Desarrollo",4.3)
informe("Angela",undefined,4.3)
*/


function informe(nombre,salario){
    let vlrDia=salario/30
    let vlrHora=vlrDia/8
    let eps=salario*4/100
    let neto=salario-eps
    console.log(`** Salario Diario **
        Nombre-------> ${nombre}
        Salario------> ${salario}
        Valor día----> ${vlrDia.toFixed(2)}
        Valor hora---> ${vlrHora.toFixed(2)}
        EPS----------> ${eps}
        Neto---------> ${neto}
        `)    
}

let nombre = prompt("Nombre")
let salario = prompt("Salario Mensual")
informe(nombre,salario)