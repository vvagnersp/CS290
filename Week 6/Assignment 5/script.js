// Two requests - openweathermap (GET) and HTTPbin (POST)

// Bind the specified button of getWeather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Request weather from openweathermap 
var apiKey = "ef9275502b390b553029a158a75e738a"; // Unique API key
function getWeather(){
  document.getElementById("locSubmit").addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var loc = document.getElementById("location").value;

    req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" +
    loc + "&appid=" + apiKey, false);
    req.send(null);

    // Format and append the response to the form div
    var response = JSON.parse(req.responseText);
    var newDiv = document.createElement("div");
    var newPar = document.createElement("p");
    newPar.textContent = String(response.name) + " Temperature: " + 
    String(response.main.temp) + " Kelvin";
    newDiv.appendChild(newPar)
     
    document.getElementById("form1").appendChild(newDiv);
  });
}