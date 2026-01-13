// Récupère tous les boutons du clavier
const buttons = document.querySelectorAll(".key");

// Ajoute un écouteur de clic sur chaque bouton
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
    });
});
