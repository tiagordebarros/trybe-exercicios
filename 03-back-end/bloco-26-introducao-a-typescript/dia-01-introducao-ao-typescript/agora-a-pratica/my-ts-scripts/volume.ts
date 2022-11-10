import readlineSync from "readline-sync";

const volumeUnits = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = volumeUnits.indexOf(fromUnit);
  const toIndex = volumeUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  
  return value * Math.pow(1000, exponent);
}

function exec() {
  const value = readlineSync.questionFloat('Digite o valor a ser convertido: \n');
  const baseUnitIndex = readlineSync.keyInSelect(volumeUnits, 'Escolha um número para a unidade base: ');
  const convertUnitIndex = readlineSync.keyInSelect(volumeUnits, 'Escolha um número para a unidade de conversão: ');

  const baseUnitChoice = volumeUnits[baseUnitIndex];
  const convertUnitCHoice = volumeUnits[convertUnitIndex];

  const result = convertVolume(value, baseUnitChoice, convertUnitCHoice);

  const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;

  return console.log(message);
}

exec();
