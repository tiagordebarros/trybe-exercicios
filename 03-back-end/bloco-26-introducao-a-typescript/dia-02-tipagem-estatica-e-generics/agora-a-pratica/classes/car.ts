class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log("Bip, bip");
  }
  turnOn(): boolean {
    return true;
  }

  turnOff(): boolean {
    return false;
  }

  speedUp(): void {
    return console.log("Acelerando a velocidade do carro.");
  }

  speedDown(): void {
    return console.log("Reduzindo a velocidade do carro.");
  }

  stop(): boolean {
    return false;
  }
  turn(direction: string): void {
    return console.log(`Mudando para a direção ${direction}`);
  }
}

export default Car;
