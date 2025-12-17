// --- Zwinge die Seite beim Neuladen immer nach oben (Reset) ---
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    
    // Start oben
    window.scrollTo(0, 0);

    // 1. NAVIGATION ACTIVE LINK
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");

    function updateActiveNav() {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href").substring(1) === current) {
                a.classList.add("active");
            }
        });
    }

    // 2. SCROLL ANIMATION (Gekoppelt mit Bremse & Puffer)
    const expSection = document.querySelector('#experience');
    const leftBlock = document.querySelector('.animate-from-left');
    const rightBlock = document.querySelector('.animate-from-right');

    function updateScrollAnimation() {
        // NUR FÜR DESKTOP (Breiter als 900px)
        if (window.innerWidth > 900) {
            
            const rect = expSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Berechnung: Abstand der Sektions-Mitte zur Bildschirm-Mitte
            let distFromCenter = rect.top - (windowHeight / 2) + (rect.height / 2);

            // --- NEU: DER PUFFER ---
            // Wir ziehen 150 Pixel ab. Das heißt:
            // Die Animation erreicht den Zielwert "0" (Mitte), wenn die Sektion 
            // eigentlich noch 150px unterhalb der Mitte ist.
            // Sie sind also "früher" da.
            distFromCenter = distFromCenter - 150;
            
            // Faktor: Geschwindigkeit
            let offset = distFromCenter / 2.5;

            // --- DIE BREMSE ---
            // Sobald wir den Punkt erreicht haben (offset < 0), bleiben wir bei 0 stehen.
            if (offset < 0) {
                offset = 0;
            }

            // Opacity: Je näher dran, desto sichtbarer
            let opacityVal = 1 - (offset / 400); 
            if (opacityVal < 0) opacityVal = 0;
            if (opacityVal > 1) opacityVal = 1;

            // --- ANWENDUNG ---
            leftBlock.style.transform = `translateX(${-offset}px)`;
            rightBlock.style.transform = `translateX(${offset}px)`;

            leftBlock.style.opacity = opacityVal;
            rightBlock.style.opacity = opacityVal;

        } else {
            // MOBILE RESET
            if (leftBlock) {
                leftBlock.style.transform = "translateX(0)";
                leftBlock.style.opacity = "1";
            }
            if (rightBlock) {
                rightBlock.style.transform = "translateX(0)";
                rightBlock.style.opacity = "1";
            }
        }
    }

    // --- GLOBALER LISTENER ---
    window.addEventListener("scroll", () => {
        updateActiveNav();
        updateScrollAnimation();
    });

    window.addEventListener("resize", updateScrollAnimation);

    // Initialer Aufruf
    updateActiveNav();
    updateScrollAnimation();

});