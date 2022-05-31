// Codifica
let stringQueSeraCodificada = '1234567890';
function encode(codificaString) {
  let palavraCodificada = '';
  for (let index = 0; index < codificaString.length; index += 1) {
    if (codificaString[index] === 'a') {
      palavraCodificada += 1;
    } else if (codificaString[index] === 'e') {
      palavraCodificada += 2;
    } else if (codificaString[index] === 'i') {
      palavraCodificada += 3;
    } else if (codificaString[index] === 'o') {
      palavraCodificada += 4;
    } else if (codificaString[index] === 'u') {
      palavraCodificada += 5;
    } else {
      palavraCodificada += codificaString[index];
    }
  }
  return palavraCodificada;
}
console.log(encode(stringQueSeraCodificada));

// Decodifica
let stringQueSeraDescodificada = '1234567890';
function decode(decodificaString) {
  let palavraDescodificada = '';
  for (let index = 0; index < decodificaString.length; index += 1) {
    if (decodificaString[index] === '1') {
      palavraDescodificada += 'a';
    } else if (decodificaString[index] === '2') {
      palavraDescodificada += 'e';
    } else if (decodificaString[index] === '3') {
      palavraDescodificada += 'i';
    } else if (decodificaString[index] === '4') {
      palavraDescodificada += 'o';
    } else if (decodificaString[index] === '5') {
      palavraDescodificada += 'u';
    } else {
      palavraDescodificada += decodificaString[index];
    }
  }
  return palavraDescodificada;
}
console.log(decode(stringQueSeraDescodificada));

module.exports = { encode, decode }