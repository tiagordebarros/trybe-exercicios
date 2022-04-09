const primeiroAngulo = 60;
const segundoAngulo = 60;
const terceiroAngulo = -10;

somaAngulos = primeiroAngulo + segundoAngulo + terceiroAngulo;
angulosPositivos = primeiroAngulo > 0 && segundoAngulo > 0 && terceiroAngulo > 0;
if (angulosPositivos) {
    if (somaAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Valor inválido. Não são permitidos ângulos negativos")
} 

// Solução alternativa
const primeiroAnguloInterno = 60;
const segundoAnguloInterno = 60;
const terceiroAnguloInterno = 60;

let somaAngulosTriangulo = primeiroAnguloInterno + segundoAnguloInterno + terceiroAnguloInterno;

let valoresPositivosIndividuaisAngulos = primeiroAnguloInterno > 0 && segundoAnguloInterno > 0 && terceiroAnguloInterno > 0;

if (somaAngulosTriangulo === 180) {
    console.log(true);
}else if (valoresPositivosIndividuaisAngulos > 0) {
    console.log(false);
}else {
    console.log("Valor inválido. Não são permitidos ângulos negativos")
}
