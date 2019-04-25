function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
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
}

function moveToLoc(Lat,Long) {
    map.setView([Lat, Long], 18, {
    headingDegrees: 30,
    animate: true,
    durationSeconds:5
    });
}

function Cloud(searchEncoded){
    $.ajax({
    url: 'https://developers.onemap.sg/commonapi/search?searchVal='+searchEncoded+'&returnGeom=Y&getAddrDetails=Y&pageNum=1',
    success: function(result){
        var Lat = result.results[0].LATITUDE;
        var Lng = result.results[0].LONGITUDE;
        //document.getElementById("results").innerHTML = "Long & Lat: " + Lng + "," + Lat;
        moveToLoc(Lat,Lng);
        alert(Lat+","+Lng);
    }});
}

function getsearchval(){
    var search = document.getElementById('searchval').value;
    var searchEncoded = encodeURIComponent(search);
    //alert(searchEncoded);
    Cloud(searchEncoded);
}    
