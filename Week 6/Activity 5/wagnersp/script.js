// Two requests - openweathermap (GET) and HTTPbin (POST)

// Bind the buttons to functions on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
document.addEventListener("DOMContentLoaded", httpBin);

// Request weather from openweathermap 
var apiKey = "ef9275502b390b553029a158a75e738a"; // Unique API key
function getWeather(){
  document.getElementById("locSubmit").addEventListener("click", function(event){
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
    event.preventDefault();
  });
}


// Httpbin POST request
function httpBin(){
  document.getElementById("httpBinReq").addEventListener("click", function(event){
    var userText = document.getElementById("someText").value;

    var req = new XMLHttpRequest();
    req.open("POST", "http://httpbin.org/post", true);
    req.setRequestHeader("Content-type", "application/json");
    
    // Output the response when loaded
    req.addEventListener('load', function(){
      if (req.status >= 200 && req.status < 400){
        var res = JSON.parse(req.responseText);
        
        // Append the returned data in a new div
        var newDiv = document.createElement("div");
        var newPar = document.createElement("p");
        newPar.textContent = "Httpbin Response: " + String(res.data);
        newDiv.appendChild(newPar);

        document.getElementById("form2").appendChild(newDiv);
        }
      });

    req.send(userText);
    event.preventDefault();
  });
}