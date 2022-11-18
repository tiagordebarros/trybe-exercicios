import Car from "./classes/car";
import Pizza from "./interfaces/IPizza";

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
