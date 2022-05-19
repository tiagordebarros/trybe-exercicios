// Incrementa de um em um no campo de número
const clickCount = () => {
  const button = document.getElementById('btn');
  button.addEventListener('click', () => {
    let incrementoField = document.getElementById('textField');
    let incremento = 1;
    let value = parseInt(incrementoField.value);
    value += incremento;
    incrementoField.value = value;
    return incrementoField.value;
});
}
clickCount();