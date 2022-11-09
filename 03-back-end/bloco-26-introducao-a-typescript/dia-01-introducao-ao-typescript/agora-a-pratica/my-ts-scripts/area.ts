import readlineSync from "readline-sync";

const areaUnits = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = areaUnits.indexOf(fromUnit);
  const toIndex = areaUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  
  return value * Math.pow(100, exponent);
}

function exec() {
  const value = readlineSync.questionFloat('Digite o valor a ser convertido: \n');
  const baseUnitIndex = readlineSync.keyInSelect(areaUnits, 'Escolha um número para a unidade base: ');
  const convertUnitIndex = readlineSync.keyInSelect(areaUnits, 'Escolha um número para a unidade de conversão: ');

  const baseUnitChoice = areaUnits[baseUnitIndex];
  const convertUnitCHoice = areaUnits[convertUnitIndex];

  const result = convertArea(value, baseUnitChoice, convertUnitCHoice);

  const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;

  return console.log(message);
}

exec();
