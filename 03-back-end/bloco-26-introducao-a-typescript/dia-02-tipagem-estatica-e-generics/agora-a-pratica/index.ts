import Car from "./classes/car";
import Pizza from "./interfaces/IPizza";
import PizzaComum from "./interfaces/IPizzaCommon";
import PizzaVegetariana from "./interfaces/IPizzaVegetarian";
import PizzaDoce from "./interfaces/IPizzaSweet";

const gol = new Car("Volkswagen", "prata", 4);

gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();

const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8,
}
console.log(calabresa);

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6,
}
console.log(marguerita);

const nutela: Pizza = {
  flavor: "Nutela",
  slices: 4,
}
console.log(nutela);

const calabresaComum: PizzaComum = {
  flavor: "Calabresa",
  slices: 4,
}
console.log(calabresaComum);

const frango: PizzaComum = {
  flavor: "Frango",
  slices: 6,
}
console.log(frango);

const pepperoni: PizzaComum = {
  flavor: "Pepperoni",
  slices: 8,
}
console.log(pepperoni);

const palmito: PizzaVegetariana = {
  flavor: "Palmito",
  slices: 4,
}
console.log(palmito);

const cogumelo: PizzaVegetariana = {
  flavor: "Cogumelo",
  slices: 8,
}
console.log(cogumelo);

const nutelaDoce: PizzaDoce = {
  flavor: "Nutela",
  slices: 4,
}
console.log(nutelaDoce);
