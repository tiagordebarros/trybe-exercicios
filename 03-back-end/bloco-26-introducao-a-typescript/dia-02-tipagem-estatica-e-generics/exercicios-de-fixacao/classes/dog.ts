class Dog {
  constructor(public name: string, public age: number) {};

  get dogName () : string {
    return this.name;
  }

  get dogAge () : number {
    return this.age;
  }

  get bark () : void {
    return console.log('Au, au...');
  }
}

const dogOne = new Dog('Spyke', 6);
console.log(dogOne);
