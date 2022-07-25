const randomNumber = () => (Math.random() * 100).toFixed(0);
console.log(randomNumber());

module.exports = { randomNumber };