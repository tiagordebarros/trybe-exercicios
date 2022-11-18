import Pizza from "./IPizza";

type VegetarianFlavor = "Marguerita" | "Palmito" | "Cogumelo";

interface PizzaVegetariana extends Pizza {
  flavor: VegetarianFlavor;
};

export default PizzaVegetariana;
