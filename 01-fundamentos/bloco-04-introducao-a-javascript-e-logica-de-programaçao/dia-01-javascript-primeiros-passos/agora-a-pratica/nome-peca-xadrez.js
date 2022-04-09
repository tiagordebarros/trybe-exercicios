let pecaXadrez = "rei";

switch (pecaXadrez) {
    case "rei":
        console.log("Avança em todas as direções somente uma casa por vez");
        break;

    case "rainha":
        console.log("Avança em todas as direções qualquer número de casas por vez");
        break;

    case "bispo":
        console.log("Avança quantas casas desejar somente na diagonal");
        break;

    case "torre":
        console.log("Avança quantas casas desejar somente na horizontal e na vertical");
        break;

    case "cavalo":
        console.log("Avança em movimentos de 'L'");
        break;

    case "peão":
        console.log("Avança uma casa por vez somente para frente. Na primeira vez, pode andar duas casas.");
        break;

    default:
        console.log ("Por favor, informe uma peça do jogo de xadrez!");
        break;
}