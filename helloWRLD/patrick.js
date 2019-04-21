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
    if (hours > 19) {
        map.themes.setTheme(
            L.Wrld.themes.season.Summer,
            L.Wrld.themes.time.Night,
            L.Wrld.themes.weather.Clear
        );
    } else if (hours > 18) {
        map.themes.setTheme(
            L.Wrld.themes.season.Summer,
            L.Wrld.themes.time.Dusk,
            L.Wrld.themes.weather.Clear
        );
    } else if (hours > 8) {
        map.themes.setTheme(
            L.Wrld.themes.season.Summer,
            L.Wrld.themes.time.Day,
            L.Wrld.themes.weather.Clear
        );
    } else if (hours > 6) {
        map.themes.setTheme(
            L.Wrld.themes.season.Summer,
            L.Wrld.themes.time.Dawn,
            L.Wrld.themes.weather.Clear
        );
    } else {
        map.themes.setTheme(
            L.Wrld.themes.season.Summer,
            L.Wrld.themes.time.Night,
            L.Wrld.themes.weather.Clear
        );
    }
}
