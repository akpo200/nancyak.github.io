document.addEventListener("DOMContentLoaded", function() {
    // Sélectionnez tous les éléments avec la classe "typewriter"
    const typewriterElements = document.querySelectorAll('.typewriter');

    // Appliquez l'effet de texte qui s'écrit progressivement à chaque élément
    typewriterElements.forEach(element => {
        const text = element.getAttribute("data-typed-text");
        element.innerHTML = ''; // Efface le texte original

        // Initialisez la bibliothèque Typed.js
        const typed = new Typed(element, {
            strings: [text],
            typeSpeed: 50, // Vitesse de frappe (plus le nombre est petit, plus c'est rapide)
            showCursor: false, // Masque le curseur de frappe
        });
    });
});
