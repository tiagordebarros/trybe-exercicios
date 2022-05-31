const hydrate = (string) => {
    const splitString = string.split(' ');
    let sumNumbers = 0;
    for (let index in splitString) {
        const intNumbers = parseInt(splitString[index]);
        if (intNumbers) {
            sumNumbers += intNumbers;
        }
    }

    let glass = 'copo';
    if (sumNumbers > 1) {
        glass = 'copos';
    }

    return `${sumNumbers} ${glass} de água`;
};
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')); // '7 copos de água'

module.exports = hydrate;