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
    var marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(map);
    var today = new Date();
    var hours = today.getHours();
    if (hours > 20) {
        map.themes.setTime([L.Wrld.themes.time.Night]);
    } else if (hours > 17) {
        map.themes.setTime([L.Wrld.themes.time.Dusk]);
    } else if (hours > 10) {
        map.themes.setTime([L.Wrld.themes.time.Day]);
    } else if (hours > 7) {
        map.themes.setTime([L.Wrld.themes.time.Dawn]);
    } else {
        map.themes.setTime([L.Wrld.themes.time.Night]);
    }
    
    x.innerHTML = "Time is " + hours;
}
