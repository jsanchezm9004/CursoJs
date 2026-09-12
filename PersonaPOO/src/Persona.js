// 1. Crear la clase Persona
export default class Persona {
    // 2. Crear las propiedades (atributos)
    #identificacion
    #nombres
    #apellidos
    #edad
    #correo
    #celular
    #estatura

    // 3. Crear el CONSTRUCTOR
    constructor(identificacion,nombres,apellidos,edad,correo,celular,estatura) {
    this.#identificacion = identificacion;
    this.#nombres = nombres;
    this.#apellidos = apellidos;
    this.#edad = edad;
    this.#correo = correo;
    this.#celular = celular;
    this.#estatura = estatura;
    }

    // #region SET --- la palabra 'region' sirve para agrupar líneas
        // 4. Crear los get/set
        get identificacion() {return this.#identificacion}
        get nombres() {return this.#nombres}
        get apellidos() {return this.#apellidos}
        get edad() {return this.#edad}
        get correo() {return this.#correo}
        get celular() {return this.#celular}
        get estatura() {return this.#estatura}
    // #endregion

    // 5. Crear los métodos
    mostrarDatos(){
        return `
        ***** Datos de la persona *****
        Identificación--> ${this.#identificacion}
        Nombres---------> ${this.#nombres}
        Apellidos-------> ${this.#apellidos}
        Edad------------> ${this.#edad}
        Celular---------> ${this.#celular}
        Correo----------> ${this.#correo}
        Estatura--------> ${this.#estatura}
        -------------Fin Datos---------------
        `
    }

    actualizarDatos(dato,valor) {
    }
    
}