var map = L.Wrld.map("map", "da70b0d2173a3f3f5299df3692507b57", {
    center: [1.3490, 103.8391],
    zoom: 16
  });
  var marker = L.marker([1.3490, 103.8391]).addTo(map);  

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