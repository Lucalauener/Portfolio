# Portfolio

Luca Tim Lauener – Creative Portfolio Website
Willkommen im Repository meiner persönlichen Portfolio-Website. Als Multimedia Producer und kreativer Allrounder war es mein Ziel, eine digitale Heimat für meine Arbeiten zu schaffen, die nicht auf Standard-Baukästen basiert, sondern meine visuelle Sprache exakt in Code übersetzt.

Dieses Projekt verbindet meine Disziplinen: Fotografie, Video (FOOH), Design und Development.

🎯 Projektziel
Die Website dient als minimalistische, aber technisch versierte Visitenkarte. Der Fokus lag auf einer "Distraction-Free" User Experience, die meine visuellen Arbeiten (Editorials, Videos, Grafikdesign) in den Vordergrund rückt, unterstützt durch subtile, interaktive Elemente.

🛠 Tech Stack
Ich habe mich bewusst für einen Vanilla-Ansatz entschieden, um maximale Kontrolle über Performance und Animationen zu haben, ohne den Overhead großer Frameworks.

HTML5: Semantische Strukturierung der Inhalte.

CSS3: Custom Styling, CSS Grid/Flexbox Layouts, Responsive Design.

JavaScript (ES6): Eigene Logik für Scroll-Interaktionen und Navigation.

🎨 Design & Entwicklungsprozess
1. Konzept & visuelle Identität
Das Design basiert auf einem dunklen, erdigen Farbschema (#2e2827), das Eleganz ausstrahlt, ohne vom Inhalt abzulenken.

Typografie: Eine Kombination aus Playfair Display (für Headlines, um den Editorial-Charakter zu betonen) und Montserrat (für Lesbarkeit in Fließtexten).

Layout: Ein One-Page-Scroll-Ansatz für den schnellen Überblick, ergänzt durch Detailseiten (gallery.html, fooh.html) für tiefere Einblicke.

2. Technische Herausforderungen & Lösungen
Während der Entwicklung habe ich mich intensiv mit dem Verhalten von Medien im Browser auseinandergesetzt:

Responsive Bilddarstellung: Eine große Herausforderung war es, unterschiedliche Formate (Hochglanz-Magazincover vs. Querformat-Fotografie) in einem einheitlichen Grid darzustellen, ohne dass wichtige Bildinhalte abgeschnitten werden.

Lösung: Ich habe eine differenzierte CSS-Logik mit object-fit: cover für atmosphärische Bilder und object-fit: contain (mit left center Ausrichtung) für Mockups und Print-Produkte entwickelt.

Scroll-Gekoppelte Animationen: Für die Sektionen Experience und Education wollte ich keinen statischen Text.

Lösung: Ich habe ein JavaScript-Modul geschrieben, das die Scroll-Position des Users überwacht. Die Textblöcke fliegen dynamisch von links und rechts ein. Um ein "Überkreuzen" der Blöcke zu verhindern, habe ich eine mathematische "Bremse" implementiert, die die Animation exakt in der Mitte arretiert, sobald der User den Bereich erreicht.

Video-Integration (FOOH): Für das "Fake Out Of Home"-Projekt war eine Standard-Einbettung nicht ausreichend. Ich habe eine dedizierte Landingpage (fooh.html) mit eigenem Stylesheet (fooh.css) erstellt, die sicherstellt, dass das Hochformat-Video auf Desktop-Screens responsive bleibt (max-height: 80vh), ohne den Viewport zu sprengen.

3. Struktur
/
├── index.html        # Hauptseite (One-Pager)
├── gallery.html      # Detailansicht Fashion Editorial
├── fooh.html         # Detailansicht Videokampagne
├── style.css         # Globales Styling & Animationen
├── fooh.css          # Spezifisches Styling für den Video-Player
├── script.js         # Scroll-Logik, Navigations-Highlighting, Reset-Logik
├── /bilder           # Assets (Web-Optimiert)
├── /footage          # Galerie-Assets
└── /Video            # Lokale Videodateien
🚀 Features
Custom Parallax Effects: Eigene JS-Berechnungen für flüssige Bewegungen.

Smart Navigation: Die Navigation erkennt automatisch, in welcher Sektion sich der User befindet (Intersection Logic).

Media Optimization: Spezifische Anpassungen für verschiedene Endgeräte (Mobile vs. Desktop Animationen).

Browser Reset: Logik, die erzwingt, dass die Seite beim Neuladen oben beginnt, um die Animations-Choreografie nicht zu brechen.
