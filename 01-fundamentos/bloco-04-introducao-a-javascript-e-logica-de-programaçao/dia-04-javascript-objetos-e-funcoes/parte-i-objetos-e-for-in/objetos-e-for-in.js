let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //Exercício 1

  console.log(`Bem-vinda, ${info.personagem}!`);

  //Exercício 2

  info.recorrente = 'Sim';
  console.table(info);
  console.log(info);

//Exercício 3

for (let dados in info) {
    console.log(dados);
};

//Exercício 4

for (let dados in info) {
    console.log(info[dados]);
};

//Exercício 5

let infoNovo = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

console.log(`${info.personagem} e ${infoNovo.personagem}`);
console.log(`${info.origem} e ${infoNovo.origem}`);
console.log(`${info.nota} e ${infoNovo.nota}`);
if (info.recorrente === infoNovo.recorrente) {
    console.log("Ambos recorrentes");
} else {
    console.log(`${info.recorrente} e ${infoNovo.recorrente}`);
}

//Exercício 6

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

//Exercício 7

leitor.livrosFavoritos[1] = {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
};

console.log(leitor);
console.table(leitor);

    //Solução alternativa para caso eu não soubesse a posição na matriz ou simplesmente quisesse adicionar um objeto ao final da matriz
    // leitor.livrosFavoritos.push(
    //     {
    //       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    //       autor: 'JK Rowling',
    //       editor: 'Rocco',
    //     },
    //   );

//Exercício 8

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos.`);
