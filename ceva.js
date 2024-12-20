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
// Search Functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase(); // Textul introdus
        const sections = document.querySelectorAll('.istori'); // Secțiunile cu clasa .istori
        let found = false; // Inițial, presupunem că nu s-a găsit nimic

        sections.forEach(section => {
            const title = section.dataset.title ? section.dataset.title.toLowerCase() : ''; // Atributele data-title
            const heading = section.querySelector('h3') ? section.querySelector('h3').textContent.toLowerCase() : ''; // Textul din h3

            if (title.includes(query) || heading.includes(query)) {
                section.style.display = 'block'; // Afișăm secțiunea dacă există o potrivire
                found = true;
            } else {
                section.style.display = 'none'; // Ascundem secțiunea dacă nu există o potrivire
            }
        });

        const noResultsMessage = document.getElementById('no-results-message');
        if (!found) {
            if (!noResultsMessage) {
                const message = document.createElement('p');
                message.id = 'no-results-message';
                message.textContent = 'Nu există rezultate pentru căutarea ta.';
                message.style.color = 'red';
                message.style.textAlign = 'center';
                document.body.appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
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
