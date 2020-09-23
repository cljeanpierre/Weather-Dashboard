

$(document).ready(function () {
 // This is my API key
 var APIKey = "e2430c230d3e4cfb83bfa51840a196d3";
 //These are the URLs needed to query the database
 var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=" + APIKey + "&q="
 
 var queryForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=" + APIKey + "&q="

 var queryIndex = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey +"&q="
 // APIKey {appid}&lat={lat}&lon={lon}

 $('#city-form').on('submit', function (event) {
event.preventDefault();
    console.log("click button")
    var cityInput=$('#city-input').val()
    console.log("city input")
    $('#citylist').append(`<li class="list-group-item">${cityInput}</li>`)


// Run AJAX call to the OpenWeatherMap API
  $.ajax({
 url: queryURL + cityInput,
  method: "GET"
  })
 // Store all of the retrieved data inside of an object called "response"
 .then(function(response) {

 // Log the queryURLs
 console.log(queryURL);
 console.log(queryForecast);
 console.log(queryIndex);

 // Log the resulting object
 console.log(response);

 // // Transfer content to HTML
 // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
 // $(".wind").text("Wind Speed: " + response.wind.speed);
 // $(".humidity").text("Humidity: " + response.main.humidity);
 
 // Log the data in the console as well
 // console.log("Wind Speed: " + response.wind.speed);
 // console.log("Humidity: " + response.main.humidity);
 // console.log("Temperature (F): " + tempF);
});

});
});