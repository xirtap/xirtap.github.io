var homeLat=1.3490;
var homeLng=103.8391;
var apidelay=1000;
var map = L.Wrld.map("map", "da70b0d2173a3f3f5299df3692507b57", {
    center: [homeLat,homeLng],
    zoom: 18
    });
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

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function moveToLoc(Lat,Long) {
    map.setView([Lat, Long], 18, {
        headingDegrees: 30,
        animate: true,
        durationSeconds:5
    });

    var mker = L.marker([Lat,Long]).addTo(map);
}

function showPosition(position) {
    moveToLoc(position.coords.latitude,position.coords.longitude);
    var marker = L.marker([position.coords.latitude,position.coords.longitude]).addTo(map);
}

function Cloud(searchEncoded){
    var Lat=0;
    var Lng=0;
    var str1="https://developers.onemap.sg/commonapi/search?searchVal=";
    var str2="&returnGeom=Y&getAddrDetails=Y&pageNum=1";
    var apiurl=str1.concat(searchEncoded, str2);

    $.ajax({
    url: apiurl,
    success: function(result){
        Lat = result.results[0].LATITUDE;
        Lng = result.results[0].LONGITUDE;
    }});

    setTimeout(function(){ moveToLoc(Lat,Lng); }, apidelay);
}

function getsearchval(){
    var search = document.getElementById('searchval').value;
    var searchEncoded = encodeURIComponent(search);
    Cloud(searchEncoded);
}    

function balikkampung(){
    setTimeout(function(){ moveToLoc(homeLat,homeLng); }, apidelay);
}  
