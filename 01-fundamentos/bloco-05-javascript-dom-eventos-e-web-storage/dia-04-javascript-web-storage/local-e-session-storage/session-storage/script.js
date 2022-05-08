console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0
sessionStorage.setItem('firstname', 'Tiago'); // salva uma entrada com a key = 'firstname' e value = 'Tiago'
sessionStorage.setItem('lastname', 'Ribeiro de Barros'); // salva uma entrada com a key = 'lastname' e value = 'Ribeiro de Barros'
console.log(sessionStorage.getItem('lastname')); // retorna o valor 'Ribeiro de Barros'
console.log(sessionStorage.length); // possui duas entradas, então o retorno é o valor: 2
sessionStorage.removeItem('lastname'); // remove a entrada referente a key = 'lastname'
console.log(sessionStorage.length); // possui uma entrada, então o retorno é o valor: 1
sessionStorage.clear(); // limpa todas as entradas salvas em sessionStorage
console.log(sessionStorage.length); // não possui nada salvo, então o retorno é o valor: 0