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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

const estudantesMatematica = (object) => {
  let total = 0;
  const arrayKeys = Object.keys(object);
  for (let index in arrayKeys) {
    if (object[arrayKeys[index]].materia === 'Matemática') {
        total += object[arrayKeys[index]].numeroEstudantes;
    }
  }
  return total;
};
console.log(estudantesMatematica(allLessons));
