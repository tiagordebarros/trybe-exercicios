const bmi = (weight, height) => {
   return (weight / (height ** 2)).toFixed(2)
}

console.log(bmi(60, 1.73));