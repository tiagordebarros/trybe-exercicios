"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const areaUnits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];
function convertArea(value, fromUnit, toUnit) {
    const fromIndex = areaUnits.indexOf(fromUnit);
    const toIndex = areaUnits.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(100, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const baseUnitIndex = readline_sync_1.default.keyInSelect(areaUnits, 'Escolha um número para a unidade base: ');
    const convertUnitIndex = readline_sync_1.default.keyInSelect(areaUnits, 'Escolha um número para a unidade de conversão: ');
    const baseUnitChoice = areaUnits[baseUnitIndex];
    const convertUnitCHoice = areaUnits[convertUnitIndex];
    const result = convertArea(value, baseUnitChoice, convertUnitCHoice);
    const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;
    return console.log(message);
}
exec();
