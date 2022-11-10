import readlineSync from "readline-sync";

const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(vale: number, fromUnit: string, toUnit: string): number {
  const fromIndex = massUnits.indexOf(fromUnit);
  const toIndex = massUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  
  return vale * Math.pow(10, exponent);
}

function exec() {
  const value = readlineSync.questionFloat('Digite o valor a ser convertido: \n');
  const baseUnitIndex = readlineSync.keyInSelect(massUnits, 'Escolha um número para a unidade base: ');
  const convertUnitIndex = readlineSync.keyInSelect(massUnits, 'Escolha um número para a unidade de conversão: ');

  const baseUnitChoice = massUnits[baseUnitIndex];
  const convertUnitCHoice = massUnits[convertUnitIndex];

  const result = convertMass(value, baseUnitChoice, convertUnitCHoice);

  const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;

  return console.log(message);
}

exec();
