// generar las fx de los cálculos
// las fns flecha y anónimas no sufren de hoisting

// fn de los cálculos
const vlrSubtotal = function(precio,cantidad){return precio*cantidad}
const vlrDescuento = function(vlrSubtotal){return vlrSubtotal*0.10}
const vlrIva = function(vlrSubtotal,vlrDescuento){return (vlrSubtotal-vlrDescuento)*0.19}
const vlrNeto = function(vlrSubtotal,vlrDescuento,vlrIva){return vlrSubtotal-vlrDescuento+vlrIva}

function imprimirFactura(producto,precio,cantidad,subtotal,descuento,iva,neto){
    console.log("*** TIRILLA DE PAGO ***");
    console.log(`
        Producto-> ${producto}
        Precio---> ${precio}
        Cantidad-> ${cantidad}
        ───────────────────────────────
        Subtotal---> ${subtotal}
        Desc 10%---> ${descuento}
        Iva 19%----> ${iva}
        Neto Pagar-> ${neto}

        *** GRACIAS POR SU COMPRA 😁😁😁 ***
    `);
}


// fn pedirDatos, nombreProducto, precio, cantidad
function pedirDatos(){
    let producto = prompt("Producto")
    let precio = Number(prompt("Precio"))
    let cantidad = parseFloat(prompt("Cantidad"))

    // llamar las funciones que hacen los cálculos
    let subtotal = vlrSubtotal(precio,cantidad)
    let descuento = vlrDescuento(subtotal)
    let iva = vlrIva(subtotal,descuento)
    let neto = vlrNeto(subtotal,descuento,iva)
    imprimirFactura(producto,precio,cantidad,subtotal,descuento,iva,neto)
}

// llamar
pedirDatos()