"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convertLength(value, fromUnit, toUnit) {
    const fromIndex = lengthUnits.indexOf(fromUnit);
    const toIndex = lengthUnits.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const baseUnitIndex = readline_sync_1.default.keyInSelect(lengthUnits, 'Escolha um número para a unidade base: ');
    const convertUnitIndex = readline_sync_1.default.keyInSelect(lengthUnits, 'Escolha um número para a unidade de conversão: ');
    const baseUnitChoice = lengthUnits[baseUnitIndex];
    const convertUnitCHoice = lengthUnits[convertUnitIndex];
    const result = convertLength(value, baseUnitChoice, convertUnitCHoice);
    const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;
    return console.log(message);
}
exec();
