document.addEventListener('DOMContentLoaded', function() {
    // Suppression des animations et des interactivités liées

    // Ajout du défilement fluide pour les liens de navigation
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Mise à jour de l'URL sans saut de page
            window.history.pushState(null, null, '#' + targetId);
        });
    });

    // Gestion du hash initial dans l'URL
    if (window.location.hash) {
        var targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(function() {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
}); // Fin de l'écouteur d'événement 'DOMContentLoaded'

