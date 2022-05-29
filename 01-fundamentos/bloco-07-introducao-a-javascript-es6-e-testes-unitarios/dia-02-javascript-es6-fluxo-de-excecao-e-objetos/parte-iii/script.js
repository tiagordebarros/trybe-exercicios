const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const novoTurno = (object, key, value) => {
    return object[key] = value;
};
// console.log(novoTurno(lesson2, 'turno', 'noite'));
// console.log(Object.entries(lesson2));

const listarChaves = (object) => {
  return Object.keys(object);
};
// console.log(listarChaves(lesson1)); // [ 'materia', 'numeroEstudantes', 'professor', 'turno' ]

const tamanhoObjeto = (object) => {
  return Object.entries(object).length;
};
// console.log(tamanhoObjeto(lesson3)); // 4

const listarValores = (object) => {
  return Object.values(object);
};
// console.log(listarValores(lesson2)); // [ 'História', 20, 'Carlos' ]

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const totalEstudantes = (object) => {
    let total = 0;
    const objectArray = Object.keys(object);
    for (let index in objectArray) {
        total += object[objectArray[index]].numeroEstudantes;
    }
    return total;
};
// console.log(totalEstudantes(allLessons)); // 50

const getValueByNumber = (object, index) => {
  return Object.values(object)[index];
};
// console.log(getValueByNumber(lesson1, 0)); // 'Matemática'

const verifyPair = (object, key, value) => {
let result = false;
const arrayEntradas = Object.entries(object);
for (let index in arrayEntradas) {
   if (arrayEntradas[index][0] == key && arrayEntradas[index][1] == value) result = true;
}
  return result;
};
console.log(verifyPair(lesson3, 'turno', 'noite')); // true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // false
