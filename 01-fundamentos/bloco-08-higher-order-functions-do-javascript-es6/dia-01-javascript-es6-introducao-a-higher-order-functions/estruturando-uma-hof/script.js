const wakeUp = () => {
  return  'Acordando!!';
};

const breakfast = () => {
  return 'Bora tomar café!!';
};

const sleep = () => {
  return 'Partiu dormir!!';
};

doingThings = (callback) => {
  return callback;
};
console.log(doingThings(wakeup()));
console.log(doingThings(breakfest()));
console.log(doingThings(sleep()));
