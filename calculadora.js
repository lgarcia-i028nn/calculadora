"use strict"

//Definimos variables a utilizar
let primerNumero , SegundoNumero ,  tipoOperacion , resultado;

//Definimos una funcion para limpiar la pantalla
function limpiarPantalla() {

pantalla.value = " ";

}

//Definimos una funcion para marcar botones
function marcarBoton(boton) {

    pantalla.value = pantalla.value + boton;

}

//Definimos una funcion para cambiar el signo
function cambiarSigno() {

    pantalla.value = Number(pantalla.value) * -1;

}

//Definimos una funcion para cambiar el signo
function operacion(op) {

    primerNumero = Number(pantalla.value);
    limpiarPantalla();
    tipoOperacion = Number(op);

}

//Definimos una funcion para calcular la operacion
function calcular() {

    SegundoNumero = Number(pantalla.value);
    limpiarPantalla();

    switch (tipoOperacion) {

        case 1: 
            resultado = primerNumero + SegundoNumero;
        break;
        case 2: 
            resultado = primerNumero - SegundoNumero;
        break;
        case 3: 
            resultado = primerNumero * SegundoNumero;
        break;
        case 4: 
            resultado = primerNumero / SegundoNumero;
        break;
        case 5: 
        resultado = Math.pow(primerNumero , SegundoNumero);
        break;

    }

    pantalla.value = resultado;

}

//Definimos una funcion para el porcentaje
function porcentaje () {

    SegundoNumero = Number(pantalla.value);
    limpiarPantalla();
    resultado = primerNumero * (SegundoNumero / 100);
    pantalla.value = resultado;

}
