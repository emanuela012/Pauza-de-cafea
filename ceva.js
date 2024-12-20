// Scroll Buttons
const upButton = document.getElementById('scroll-up');
const downButton = document.getElementById('scroll-down');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const viewportHeight = window.innerHeight;

    if (upButton && downButton) {
        upButton.style.display = scrollY > 200 ? 'block' : 'none';
        downButton.style.display = scrollY < scrollHeight - viewportHeight - 200 ? 'block' : 'none';
    }
});

if (upButton) {
    upButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

if (downButton) {
    downButton.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}

// Meniu burger
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('.nav-list');

if (menuButton && navList) {
    menuButton.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
}

// Formular contact
const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('form-response');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !phone || !message) {
            responseDiv.style.color = 'red';
            responseDiv.textContent = 'Te rog completează toate câmpurile.';
            return;
        }

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

        responseDiv.style.color = 'green';
        responseDiv.textContent = 'Formularul a fost trimis cu succes!';
        form.reset();
    });
}

// Afișează sau ascunde meniul mobil la click
if (menuButton && navList) {
    menuButton.addEventListener('click', () => {
        navList.classList.toggle('open');
    });
}

// Închide meniul mobil dacă un link este accesat
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('open')) {
            navList.classList.remove('open');
        }
    });
});

// Dark Mode
const themeButton = document.querySelector('.theme-button');
const body = document.body;

if (themeButton) {
    themeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            body.style.backgroundImage = "none";
            body.style.backgroundColor = "#000";
            themeButton.textContent = 'Light Mode';
        } else {
            body.style.backgroundImage = "url('./cafea/background.jpg')";
            body.style.backgroundColor = "";
            themeButton.textContent = 'Dark Mode';
        }
    });
}
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll('.istori');
        let found = false;

        // Șterge mesajul de eroare anterior dacă există
        let noResultsMessage = document.getElementById('no-results-message');
        if (noResultsMessage) {
            noResultsMessage.remove();
        }

        sections.forEach(section => {
            const titleElement = section.querySelector('h3');
            const paragraphElement = section.querySelector('p');

            // Resetează conținutul elementelor
            titleElement.innerHTML = titleElement.textContent;
            paragraphElement.innerHTML = paragraphElement.textContent;

            const title = titleElement.textContent.toLowerCase();
            const paragraph = paragraphElement.textContent.toLowerCase();

            if (title.includes(query) || paragraph.includes(query)) {
                section.classList.remove('hidden'); // Afișează secțiunea
                found = true;

                // Evidențiază cuvintele găsite
                const highlightedTitle = title.replace(
                    new RegExp(query, 'gi'),
                    match => `<span class="highlight">${match}</span>`
                );
                const highlightedParagraph = paragraph.replace(
                    new RegExp(query, 'gi'),
                    match => `<span class="highlight">${match}</span>`
                );
                titleElement.innerHTML = highlightedTitle;
                paragraphElement.innerHTML = highlightedParagraph;
            } else {
                section.classList.add('hidden'); // Ascunde secțiunea
            }
        });

        // Dacă nu există rezultate, afișează un mesaj
        if (!found) {
            noResultsMessage = document.createElement('p');
            noResultsMessage.id = 'no-results-message';
            noResultsMessage.textContent = 'Nu există rezultate pentru căutarea dumneavoastră.';
            noResultsMessage.style.color = 'red';
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.marginTop = '20px';
            document.body.appendChild(noResultsMessage);
        }
    });
}


// Carusel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}
