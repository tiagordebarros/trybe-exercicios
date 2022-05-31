function techList(tecnologias, name) {
    let resuldadoFinal = [];
    let listaOrdenada = {};
    let obetosOrdenados = tecnologias.sort();
    if (tecnologias.length === 0) {
        return 'Vazio!';
    }
    for (let index = 0; index < obetosOrdenados.length; index += 1) {
        listaOrdenada = {
            tech: obetosOrdenados[index],
            name,
        };
        resuldadoFinal.push(listaOrdenada);
    }
    return resuldadoFinal;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Tiago'));

module.exports = techList;
