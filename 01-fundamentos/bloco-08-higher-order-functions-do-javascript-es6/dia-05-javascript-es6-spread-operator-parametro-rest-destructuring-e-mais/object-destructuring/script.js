
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const userGeneralInfo = {
    ...user,
    ...jobInfos
};
console.log(userGeneralInfo);

const {name: firstname, age, nationality, profession, squad, squadInitials} = userGeneralInfo;

console.log(`Hi, my name is ${firstname}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);
