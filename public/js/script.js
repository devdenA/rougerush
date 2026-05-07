// Mobile
const menuToggle = document.querySelector("#menu-toggle");
const menuLinks = document.querySelector("#menu-links");

if (menuToggle && menuLinks) {
    menuToggle.addEventListener('click', () => {
        menuLinks.classList.toggle('show');
    });
}

if (document.querySelector('#map')) {
    const map = L.map('map').setView([43.6045, 1.444], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([43.6045, 1.444]).addTo(map).bindPopup('Test')
}
