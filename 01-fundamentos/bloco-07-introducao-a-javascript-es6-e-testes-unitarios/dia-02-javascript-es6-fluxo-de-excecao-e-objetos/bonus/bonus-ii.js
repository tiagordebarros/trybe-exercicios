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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

const getReport = (object, teacher) => {
  let allLessons = [];
  let totalStudents = 0;
  const arrayKeys = Object.values(object);
  for (let index in arrayKeys) {
   if (arrayKeys[index].professor === teacher) {
    allLessons.push(arrayKeys[index].materia);
    totalStudents += arrayKeys[index].numeroEstudantes;
   }
  }
  return {
    aulas: allLessons,
    estudantes: totalStudents
  };
};
// console.log(getReport(allLessons, 'Maria Clara'));

const createReport = (object, teacher) => {
  const report = {};
  report.professor = teacher;
  Object.assign(report, getReport(object, teacher));
  return report;
};
console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
