const notaConvertida = 100;
const notaValida = notaConvertida >= 0 && notaConvertida <= 100;

if (notaValida){
    if (notaConvertida >= 90) {
        console.log("A");
    } else if (notaConvertida >= 80) {
        console.log("B");
    } else if (notaConvertida >= 70) {
        console.log("C");    
    } else if (notaConvertida >= 60) {
        console.log("D");    
    } else if (notaConvertida >= 50) {
        console.log("E");
    } else {
        console.log("F");
    }
} else {
    console.log("ERRO: A nota deve ter um valor entre 0 e 100.");
}

//Outra possível solução: a soulução abaixo realiza um conceito inverso do acima
const grade = 90;

if (grade < 0 || grade > 100) {
  console.log("ERRO: A nota deve ter um valor entre 0 e 100.");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}
