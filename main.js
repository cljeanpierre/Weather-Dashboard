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
        `<h4>Temperature = ${results.main.temp}</h4>
        <h4>Humidity = ${results.main.humidity}</h4>
        <h4>Wind Speed = ${results.wind.speed}</h4>`;


        $("#currentTempHumWin").html(content);
        // forecast(cityInput);
        // uvIndex(results.coord.lat, results.coord.lon)


    })
}

function forecast(cityInput){
    $.ajax({
        type: "GET",
        url: queryForecast + cityInput
    }).then(function(results){
        console.log(results);
        for (var i = 0; i < results.length; i+=8);
        
        var fiveDays = 
        `<span id="monTemp"> ${results.list[i].main.temp}</span>
        <span id="monHum"> ${results.list[i].main.humidity}</span>`;

        console.log("fiveDays: ", fiveDays);
        console.log("results.list: ", results.list);
        console.log("results.list[i].main.temp: ", results.list[i].main.temp);

        $("#monTemp").html(fiveDays);
        $("#monHum").html(fiveDays);
    })
    
};

function uvIndex(lat, lon){
//set lat, lon = cityInput
}


$(document).ready(function () {
    
    $('#city-form').on('submit', function (event) {
        event.preventDefault();
        console.log("This button has been clicked")
        var cityInput = $('#city-input').val()
        console.log(cityInput)
        $('#citylist').append(`<li class="list-group-item">${cityInput}</li>`)

        currentWeather(cityInput);
        forecast(cityInput);
    


    });
});