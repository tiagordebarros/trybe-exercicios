import readlineSync from "readline-sync";

const capacityUnits = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

function convertCapacity(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = capacityUnits.indexOf(fromUnit);
  const toIndex = capacityUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  
  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readlineSync.questionFloat('Digite o valor a ser convertido: \n');
  const baseUnitIndex = readlineSync.keyInSelect(capacityUnits, 'Escolha um número para a unidade base: ');
  const convertUnitIndex = readlineSync.keyInSelect(capacityUnits, 'Escolha um número para a unidade de conversão: ');

  const baseUnitChoice = capacityUnits[baseUnitIndex];
  const convertUnitCHoice = capacityUnits[convertUnitIndex];

  const result = convertCapacity(value, baseUnitChoice, convertUnitCHoice);

  const message = `O valor ${value}${baseUnitChoice} é igual a ${result}${convertUnitCHoice}`;

  return console.log(message);
}

exec();
