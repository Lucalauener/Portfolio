// Beispiel: Konsolenausgabe beim Klicken auf einen Link
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        console.log("Navigiere zu: " + this.getAttribute('href'));
    });
});