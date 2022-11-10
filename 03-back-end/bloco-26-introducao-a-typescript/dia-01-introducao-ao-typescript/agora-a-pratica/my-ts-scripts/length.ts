import readlineSync from "readline-sync";

const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertLength(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = lengthUnits.indexOf(fromUnit);
  const toIndex = lengthUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readlineSync.questionFloat('Digite o valor a ser convertido: \n');
  const baseUnitIndex = readlineSync.keyInSelect(lengthUnits, 'Escolha um número para a unidade base: ');
  const convertUnitIndex = readlineSync.keyInSelect(lengthUnits, 'Escolha um número para a unidade de conversão: ');

  const baseUnitChoice = lengthUnits[baseUnitIndex];
  const convertUnitCHoice = lengthUnits[convertUnitIndex];

  const result = convertLength(value, baseUnitChoice, convertUnitCHoice);

  const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;

  return console.log(message);
}

exec();
