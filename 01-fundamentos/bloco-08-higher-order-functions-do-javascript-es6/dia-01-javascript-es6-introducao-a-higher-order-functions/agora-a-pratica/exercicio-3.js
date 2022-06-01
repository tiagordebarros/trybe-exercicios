const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerCheckers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers) {
        return 1;
    } else if (studentAnswers === 'N.A') {
        return 0;
    } else {
        return -0.5;
    }
};
// console.log(answerCheckers(rightAnswers, studentAnswers));

const countAnswers = (rightAnswers, studentAnswers, callback) => {
    let result = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        const verify = callback(rightAnswers[index], studentAnswers[index]);
        result += verify;
    }
    return `Resultado final: ${result} pontos`;
};

console.log(countAnswers(rightAnswers, studentAnswers, answerCheckers));
