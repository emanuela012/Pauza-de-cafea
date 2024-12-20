document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Scroll Buttons
    const upButton = document.getElementById('scroll-up');
    const downButton = document.getElementById('scroll-down');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const scrollHeight = document.body.scrollHeight;
        const viewportHeight = window.innerHeight;

        upButton.style.display = scrollY > 200 ? 'block' : 'none';
        downButton.style.display = scrollY < scrollHeight - viewportHeight - 200 ? 'block' : 'none';
    });

    upButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    downButton.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    // Search Functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll('.istori');
        let found = false;

        sections.forEach(section => {
            const titleElement = section.querySelector('h3');
            const descriptionElement = section.querySelector('p');
            const title = titleElement.textContent.toLowerCase();
            const description = descriptionElement.textContent.toLowerCase();

            // Reset highlight
            titleElement.innerHTML = titleElement.textContent;
            descriptionElement.innerHTML = descriptionElement.textContent;

            if (title.includes(query) || description.includes(query)) {
                section.style.display = 'block';
                found = true;

                // Highlight in title
                titleElement.innerHTML = titleElement.textContent.replace(
                    new RegExp(`(${query})`, 'gi'),
                    '<span class="highlight">$1</span>'
                );

                // Highlight in description
                descriptionElement.innerHTML = descriptionElement.textContent.replace(
                    new RegExp(`(${query})`, 'gi'),
                    '<span class="highlight">$1</span>'
                );
            } else {
                section.style.display = 'none';
            }
        });

        const noResultsMessage = document.getElementById('no-results');
        if (!found && query.trim() !== '') {
            if (!noResultsMessage) {
                const message = document.createElement('p');
                message.id = 'no-results';
                message.textContent = 'Nu există rezultate pentru căutarea ta.';
                message.style.color = 'red';
                message.style.textAlign = 'center';
                document.querySelector('#istorie').appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne reîncărcarea paginii

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !message) {
            responseDiv.style.color = 'red';
            responseDiv.textContent = 'Te rog completează toate câmpurile.';
            return;
        }

        // Verifică dacă email-ul și telefonul sunt valide
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;

        if (!emailPattern.test(email)) {
            responseDiv.style.color = 'red';
            responseDiv.textContent = 'Te rog introdu un email valid.';
            return;
        }

        if (!phonePattern.test(phone)) {
            responseDiv.style.color = 'red';
            responseDiv.textContent = 'Te rog introdu un număr de telefon valid (10 cifre).';
            return;
        }

        // Dacă toate sunt valide
        responseDiv.style.color = 'green';
        responseDiv.textContent = 'Formularul a fost trimis cu succes!';
        form.reset(); // Resetează formularul
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1; // Slide-ul inițial
    showSlides(slideIndex); // Afișează primul slide când pagina se încarcă

    // Funcție pentru butoanele "Next" și "Previous"
    window.plusSlides = function (n) {
        showSlides(slideIndex += n);
    };

    // Funcție pentru a afișa slide-ul selectat de dots
    window.currentSlide = function (n) {
        showSlides(slideIndex = n);
    };

    // Funcția care controlează afișarea slide-urilor
    function showSlides(n) {
        const slides = document.querySelectorAll(".mySlides");
        const dots = document.querySelectorAll(".dot");

        if (n > slides.length) { slideIndex = 1; } // Revine la primul slide
        if (n < 1) { slideIndex = slides.length; } // Revine la ultimul slide

        slides.forEach(slide => slide.style.display = "none"); // Ascunde toate slide-urile
        dots.forEach(dot => dot.classList.remove("active"));   // Elimină clasa "active"

        slides[slideIndex - 1].style.display = "block"; // Afișează slide-ul curent
        dots[slideIndex - 1].classList.add("active");   // Marchează dot-ul activ
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Funcționalitate de căutare
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll('.coffee-card');
        let found = false;

        sections.forEach(section => {
            const titleElement = section.querySelector('h3');
            const descriptionElement = section.querySelector('p');
            const title = titleElement.textContent.toLowerCase();
            const description = descriptionElement.textContent.toLowerCase();

            // Reset highlight
            titleElement.innerHTML = titleElement.textContent;
            descriptionElement.innerHTML = descriptionElement.textContent;

            if (title.includes(query) || description.includes(query)) {
                section.style.display = 'block';
                found = true;

                // Highlight in title
                titleElement.innerHTML = titleElement.textContent.replace(
                    new RegExp(`(${query})`, 'gi'),
                    '<span class="highlight">$1</span>'
                );

                // Highlight in description
                descriptionElement.innerHTML = descriptionElement.textContent.replace(
                    new RegExp(`(${query})`, 'gi'),
                    '<span class="highlight">$1</span>'
                );
            } else {
                section.style.display = 'none';
            }
        });

        const noResultsMessage = document.getElementById('no-results');
        if (!found && query.trim() !== '') {
            if (!noResultsMessage) {
                const message = document.createElement('p');
                message.id = 'no-results';
                message.textContent = 'Nu există rezultate pentru căutarea ta.';
                message.style.color = 'red';
                message.style.textAlign = 'center';
                document.querySelector('#coffee-types').appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            console.log('Buton apăsat!'); // Log pentru debugging
            document.body.classList.toggle('dark-mode');

            // Schimbă textul butonului
            themeToggleButton.textContent = document.body.classList.contains('dark-mode')
                ? 'Light Mode'
                : 'Dark Mode';

            console.log('Clasa dark-mode:', document.body.classList.contains('dark-mode'));
        });
    } else {
        console.error('Butonul Dark/Light Mode nu a fost găsit!');
    }
});
