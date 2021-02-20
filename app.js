"use strict";
// Decoradores de clase
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
// Decorador de fabrica
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return function () { return null; };
    }
}
var VillanoFabrica = /** @class */ (function () {
    function VillanoFabrica(nombre) {
        this.nombre = nombre;
        this.nombre = nombre;
    }
    VillanoFabrica = __decorate([
        imprimirConsola(false)
    ], VillanoFabrica);
    return VillanoFabrica;
}());
//Ejemplo practico
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo!");
    };
}
var VillanoPlan = /** @class */ (function () {
    function VillanoPlan(nombre) {
        this.nombre = nombre;
    }
    VillanoPlan = __decorate([
        planVillano // Se pueden anidar
    ], VillanoPlan);
    return VillanoPlan;
}());
var lex = new VillanoPlan('Lex Luthor');
lex.imprimirPlan();
