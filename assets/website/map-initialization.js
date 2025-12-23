// 1. Initialize the map and set its view to chosen coordinates and zoom level
let map = L.map("map").setView([51.505, -0.09], 13);

// 2. Add an OpenStreetMap tile layer
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// 3. Optional: Add a marker
let marker = L.marker([51.505, -0.09]).addTo(map);
// marker.bindPopup("<b>Hello!</b><br>This is London.").openPopup();
