"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const capacityUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function convertCapacity(value, fromUnit, toUnit) {
    const fromIndex = capacityUnits.indexOf(fromUnit);
    const toIndex = capacityUnits.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const baseUnitIndex = readline_sync_1.default.keyInSelect(capacityUnits, 'Escolha um número para a unidade base: ');
    const convertUnitIndex = readline_sync_1.default.keyInSelect(capacityUnits, 'Escolha um número para a unidade de conversão: ');
    const baseUnitChoice = capacityUnits[baseUnitIndex];
    const convertUnitCHoice = capacityUnits[convertUnitIndex];
    const result = convertCapacity(value, baseUnitChoice, convertUnitCHoice);
    const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;
    return console.log(message);
}
exec();
