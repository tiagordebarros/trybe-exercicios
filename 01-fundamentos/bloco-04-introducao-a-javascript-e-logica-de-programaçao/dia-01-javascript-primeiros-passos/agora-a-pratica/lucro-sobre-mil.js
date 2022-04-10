const valorCusto = 1.00;
const valorVenda = 2.00;
const impostoSobreOCusto = 0.2;

const valorCustoTotal = valorCusto + impostoSobreOCusto
const lucro = valorVenda - valorCustoTotal

const lucroPorMil = lucro * 1000;

//  console.log(valorCustoTotal);
//  console.log(lucro);

 if (valorCusto < 0 || valorVenda < 0 || impostoSobreOCusto < 0) {
     console.log("ERRO: o valor informado é menor que zero.");
 } else {
     console.log("O lucro de 1000 produtos é de R$ " + lucroPorMil);
 }

// Solução alternativa

// const costOfProduct = 1;
// const saleValue = 3;

// if (costOfProduct >= 0 && saleValue >= 0) {
//   const totalCostOfProduct = costOfProduct * 1.2;
//   const totalProfit = (saleValue - totalCostOfProduct) * 1000;
//   console.log(totalProfit);
// } else {
//   console.log("Error, os valores não podem ser negativos");
// };
