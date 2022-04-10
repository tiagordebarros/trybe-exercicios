// Salário Líquido a receber v.0.1.0
// Autor: Tiago Ribeiro de Barros

let salarioBruto = 3000.00; //Entrada usuário

//INSS (Instituto Nacional do Seguro Social) - alíquitas
let aliquota8 = salarioBruto * 0.08;
let aliquota9 = salarioBruto * 0.09;
let aliquota11 = salarioBruto * 0.11;
let aliquotaMaxima = 570.88;

let salarioBase = null;

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - aliquota8;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - aliquota9;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - aliquota11;
} else { // salario bruto > 5189.82
    salarioBase = salarioBruto - aliquotaMaxima;
}

//IR (Imposto de Renda) - alíquotas
//const salarioBase = salarioBruto - aliquotaINSS (uma das quatro acima)

let isentoImposto = salarioBase * 1.0;
let aliquotaIRPF7_5 = (salarioBase * 0.075) - 142.80; //57,45
let aliquotaIRPF15 = (salarioBase * 0.15) - 354.80;
let aliquotaIRPF22_5 = (salarioBase * 0.225) - 636.13;
let aliquotaIRPF27_5 = (salarioBase * 0.275) - 869.36;

if (salarioBase < 1903.98) {
    console.log("Salário líquido = R$ " + isentoImposto);
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    console.log("Salário líquido = R$ " + (salarioBase - aliquotaIRPF7_5));
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    console.log("Salário líquido = R$ " + (salarioBase - aliquotaIRPF15));
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    console.log("Salário líquido = R$ " + (salarioBase - aliquotaIRPF22_5));
} else { // salario base > 4664.68
    console.log("Salário líquido = R$ " + (salarioBase - aliquotaIRPF27_5));
}
