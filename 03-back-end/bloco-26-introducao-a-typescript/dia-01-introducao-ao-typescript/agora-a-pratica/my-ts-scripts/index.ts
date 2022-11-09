import readlineSync from "readline-sync";

const scripts = [
  { name: 'Converter comprimento', scriptPath: './length' },
  { name: 'Converter massa', scriptPath: './mass' },
  { name: 'Converter capacidade', scriptPath: './capacity' },
  { name: 'Converter área', scriptPath: './area' },
  { name: 'Converter volume', scriptPath: './volume' },
];

const scriptNames = scripts.map((script) => script.name);

const choice = readlineSync.keyInSelect(scriptNames, 'Escolha um número para executar o script de conversão de unidade: \n');

require(scripts[choice].scriptPath);
