interface Automobile {
  name: string;
  brand: string;
  color: string;
  doors: number;
  gears: number;

  turOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}
