import Pizza from "./IPizza";

type SweetFlavor = "Nutela" | "Goiabada com Queijo" | "Marshmallow";

interface PizzaDoce extends Pizza {
  flavor: SweetFlavor,
  slices: 4,
}

export default PizzaDoce;
