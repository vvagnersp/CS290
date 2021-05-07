var req = new XMLHttpRequest();
req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Corvallis, us&appid=ef9275502b390b553029a158a75e738a", false);
req.send(null);
console.log(JSON.parse(req.responseText));