"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function convertMass(vale, fromUnit, toUnit) {
    const fromIndex = massUnits.indexOf(fromUnit);
    const toIndex = massUnits.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return vale * Math.pow(10, exponent);
}
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const baseUnitIndex = readline_sync_1.default.keyInSelect(massUnits, 'Escolha um número para a unidade base: ');
    const convertUnitIndex = readline_sync_1.default.keyInSelect(massUnits, 'Escolha um número para a unidade de conversão: ');
    const baseUnitChoice = massUnits[baseUnitIndex];
    const convertUnitCHoice = massUnits[convertUnitIndex];
    const result = convertMass(value, baseUnitChoice, convertUnitCHoice);
    const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;
    return console.log(message);
}
exec();
