const lengthUnits = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convertLength(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = lengthUnits.indexOf(fromUnit);
  const toIndex = lengthUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  
  return value * Math.pow(10, exponent);
}
