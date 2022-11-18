import Pizza from "./IPizza";

type CommonFlavor = "Calabresa" | "Frango" | "Pepperoni";

interface PizzaComum extends Pizza {
  flavor: CommonFlavor;
};

export default PizzaComum;
