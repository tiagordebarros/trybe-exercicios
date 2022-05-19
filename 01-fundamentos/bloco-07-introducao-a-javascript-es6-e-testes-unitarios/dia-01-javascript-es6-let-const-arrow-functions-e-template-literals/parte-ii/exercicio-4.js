let mySkills = ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Jest'];

const hello = (string) => {
    x = string;
    let newString = `Tryber ${x} aqui!`;
    return newString;
}
hello('Tiago');
// console.log(hello('Tiago'));

const skills = (fn, array) => {
    sortArray = array.sort();
    resultString = `${fn}
Minhas cinco principais habilidades são:
  - ${sortArray[0]};
  - ${sortArray[1]};
  - ${sortArray[2]};
  - ${sortArray[3]};
  - ${sortArray[4]};
#goTrybe`
    return resultString;
}
skills(hello('Tiago'), mySkills);
console.log(skills(hello('Tiago'), mySkills));
