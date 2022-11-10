"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const scripts = [
    { name: 'Converter comprimento', scriptPath: './length' },
    { name: 'Converter massa', scriptPath: './mass' },
    { name: 'Converter capacidade', scriptPath: './capacity' },
    { name: 'Converter área', scriptPath: './area' },
    { name: 'Converter volume', scriptPath: './volume' },
];
const scriptNames = scripts.map((script) => script.name);
const choice = readline_sync_1.default.keyInSelect(scriptNames, 'Escolha um número para executar o script de conversão de unidade: \n');
require(scripts[choice].scriptPath);
