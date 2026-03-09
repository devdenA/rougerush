// Initialise la carte centrée sur Toulouse
const map = L.map('map').setView([43.6045, 1.444], 13);

// Ajoute une couche de tuiles (tiles) OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Exemple de marqueur sur Toulouse avec popup
L.marker([43.6045, 1.444]).addTo(map)
    .bindPopup('Test') // texte affiché dans la popup

const menuToggle = document.querySelector("#menu-toggle");
const menuLinks = document.querySelector("#menu-links");

menuToggle.addEventListener('click', ()=>{
    menuLinks.classList.toggle('show')
})