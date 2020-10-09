// This is my API key
var APIKey = "appid=e2430c230d3e4cfb83bfa51840a196d3";
//These are the URLs needed to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + APIKey + "&q="

var queryForecast = "https://api.openweathermap.org/data/2.5/forecast?" + APIKey + "&q="

var queryIndex = "http://api.openweathermap.org/data/2.5/uvi?" + APIKey + "&q="
// APIKey {appid}&lat={lat}&lon={lon}

function currentWeather(cityInput){
    $.ajax({
        type: "GET",
        url: queryURL + cityInput
    }).then(function(results){
        console.log(results);
        console.log(results.main.temp);
        console.log(results.main.humidity);
        console.log(results.wind.speed);

        var content = 
        `<h1>Temperature = ${results.main.temp}</h1>
        <h1>Humidity = ${results.main.humidity}</h1>
        <h1>Wind Speed = ${results.wind.speed}</h1>`;


        $("#currentTempHumWin").html(content);
        forecast(cityInput);
        // uvIndex(results.coord.lat, results.coord.lon)


    })
}

function forecast(cityInput){
    $.ajax({
        type: "GET",
        url: queryForecast + cityInput
    }).then(function(results){
        console.log(results);
    })
    
}

function uvIndex(lat, lon){

}


$(document).ready(function () {
    
    $('#city-form').on('submit', function (event) {
        event.preventDefault();
        console.log("this button has been clicked")
        var cityInput = $('#city-input').val()
        console.log(cityInput)
        $('#citylist').append(`<li class="list-group-item">${cityInput}</li>`)

        currentWeather(cityInput);
        
        // // Run AJAX call to the OpenWeatherMap API
        // $.ajax({
        //     url: queryURL + cityInput,
        //     method: "GET"
        // })
        // $.ajax({
        //     url: queryForecast + cityInput,
        //     method: "GET"
        // })
        // $.ajax({
        //     url: queryIndex + cityInput,
        //     method: "GET"
        // })
        //     // Store all of the retrieved data inside of an object called "results"
        //     .then(function (results) {
        //         console.log(results);
        //         var initialResults = results.response.docs;
        //         console.log(initialResults);
        //         for (var i = 0; i < initialResults.length; i++) {
        //             var articleDiv = $("<div>");
        //             var h = $("<h3>").text(results[i].main);
        //             console.log(h);
        //             articleDiv.append(h);
        //             $("#city-input").append (articleDiv);
        //         }

        //         // // Transfer content to HTML
        //         // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        //         // $(".wind").text("Wind Speed: " + response.wind.speed);
        //         // $(".humidity").text("Humidity: " + response.main.humidity);

        //         // Log the data in the console as well
        //         // console.log("Wind Speed: " + response.wind.speed);
        //         // console.log("Humidity: " + response.main.humidity);
        //         // console.log("Temperature (F): " + tempF);
        //     });

    });
});
