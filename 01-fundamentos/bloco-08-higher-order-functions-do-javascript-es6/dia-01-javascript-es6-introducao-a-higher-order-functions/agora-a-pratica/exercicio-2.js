const numberCheker = (myNumber, winNumber) => myNumber === winNumber;

const sortNumbers = (myNumber, callback) => {
  const winNumber = Math.round(Math.random() * 5);
  return callback(myNumber, winNumber) ? 'Parabéns, você ganhou!' : 'Tente novamente!';
};

console.log(sortNumbers(5, numberCheker));
