
"use strict";
/** Clase Proveedor.
 * @constructor
 * @returns {Proveedor} */
function Proveedor() {
    this.oyentes = new Array();
}
Proveedor.prototype.observa = function(oyente) { //Es el que hace algo
    this.oyentes.push(oyente);
};
Proveedor.prototype.dispara = function() { //Notifica a los observadores(objetos) u oyentes que les toca hacer sus operaciones.
    var oyentes = this.oyentes;
    for (var i = 0, longitud = oyentes.length; i < longitud; i++) {
        var oyente = oyentes[i];
        /* Invoca la función sin enlazarla a ningún objeto y con los parámetros recibidos
         * por la función dispara, que se encuentran en el arreglo "arguments". */
        oyente.apply(null, arguments);
    }
};

var proveedor1 = new Proveedor();  
var proveedor2 = new Proveedor();  
var forma = document.getElementById("forma");
var salida = document.getElementById("salida");
var txtFecha = forma["fecha"];
var fechaFinal;
forma["enPantalla"].addEventListener("click", enPantalla, false);
forma["enAlerta"].addEventListener("click", enAlerta, false);


proveedor1.observa(function(mensaje) {
    salida.textContent = mensaje;
});
proveedor2.observa(function() {
    formateaFecha();
    alert("Clave: " + clave.value.trim() + " Nombre: " + nombre.value.trim() + " Tel: " + telefono.value.trim() + " Fecha: " + fechaFinal);
});
function enPantalla() {
    formateaFecha();
    if (forma.checkValidity()) {
        proveedor1.dispara(" Clave: " + clave.value.trim() + " Nombre: " + nombre.value.trim() + " Tel: " + telefono.value.trim() + " Fecha: " + fechaFinal);
    }
}
function enAlerta() {
    if (forma.checkValidity()) {
        proveedor2.dispara();
    }
}
function formateaFecha(){
    var miFecha = new Date(txtFecha.value);
    var dia = miFecha.getDate() + 1;
    var mes = miFecha.getMonth() + 1;
    var año = miFecha.getFullYear();
    fechaFinal = dia + "/" + mes + "/" + año;  
}
