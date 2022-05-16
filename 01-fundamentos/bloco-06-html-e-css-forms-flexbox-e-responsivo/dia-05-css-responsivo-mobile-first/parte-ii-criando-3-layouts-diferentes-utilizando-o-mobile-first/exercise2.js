// Hamburguer Menu: para telas pequenas e médias
const toogleHamburguerMenu = () => {
    const hamburguerMenuIcon = document.getElementById('hamburguerMenu');
    hamburguerMenuIcon.addEventListener("click", () => {
        let myLinks = document.getElementById('myLinks');
        if (myLinks.style.display === 'block') {
            myLinks.style.display = 'none';
        } else {
            myLinks.style.display = 'block';
        }
    });
}
toogleHamburguerMenu();