const massUnits = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

function convertMass(vale: number, fromUnit: string, toUnit: string): number {
  const fromIndex = massUnits.indexOf(fromUnit);
  const toIndex = massUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  
  return vale * Math.pow(10, exponent);
}
