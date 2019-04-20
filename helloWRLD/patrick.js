var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var map = L.Wrld.map("map", "da70b0d2173a3f3f5299df3692507b57", {
        center: [position.coords.latitude,position.coords.longitude],
        zoom: 16
        });
    var latlng = event.latlng;
    var marker = L.marker(latlng).addTo(map);
}