// This is my API key
var APIKey = "appid=e2430c230d3e4cfb83bfa51840a196d3";
//These are the URLs needed to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + APIKey + "&q="

var queryForecast = "https://api.openweathermap.org/data/2.5/forecast?" + APIKey + "&q="

var queryIndex = "http://api.openweathermap.org/data/2.5/uvi?" + APIKey + "&q="
// APIKey {appid}&lat={lat}&lon={lon}


function currentWeather(cityInput) {
    $.ajax({
        type: "GET",
        url: queryURL + cityInput
    }).then(function (results) {
        console.log(results);
        console.log(results.main.temp);
        console.log(results.main.humidity);
        console.log(results.wind.speed);

        var content =
            `<h4>Temperature = ${results.main.temp}</h4>
        <h4>Humidity = ${results.main.humidity}</h4>
        <h4>Wind Speed = ${results.wind.speed}</h4>`;

        function tempConvert() {
            var kelvin = Temperature;
            var celsius = Temperature - 273;
            var fahrenheit = Math.floor(celsius * (9 / 5) + 32);
            console.log(tempConvert);
        }

        $("#currentTempHumWin").html(content);
        // forecast(cityInput);
        // uvIndex(results.coord.lat, results.coord.lon)


    })
}
function forecast(cityInput) {
    $.ajax({
        type: "GET",
        url: queryForecast + cityInput
    }).then(function (results) {
        console.log("RESULTS: ", results);
        console.log("RESULTS.LENGTH: ", results.list.length);
        for (var i = 0; i < results.list.length; i += 8) {

            var fiveDaysTemp = `<span> ${results.list[i].main.temp}</span>`;
            var fiveDaysHum = `<span> ${results.list[i].main.humidity}</span>`;
            var tuesdayTemp = `<span> ${results.list[i].main.temp}</span>`;
            var tuesdayHum = `<span> ${results.list[i].main.humidity}</span>`;
            var wedTemp = `<span> ${results.list[i].main.temp}</span>`
            var wedHum = `<span> ${results.list[i].main.humidity}</span>`
            var thursTemp = `<span> ${results.list[i].main.temp}</span>`
            var thursHum = `<span> ${results.list[i].main.humidity}</span>`
            var friTemp = `<span> ${results.list[i].main.temp}</span>`
            var friHum = `<span> ${results.list[i].main.humidity}</span>`
    
            console.log("fiveDays: ", fiveDaysTemp);
            console.log("results.list: ", results.list);
            console.log("results.list[i].main.temp: ", results.list[i].main.temp);
            console.log("HERE", $("#monTemp"))
    
            $("#monTemp").html(fiveDaysTemp);
            $("#monHum").html(fiveDaysHum);
            $("#tuesTemp").html(tuesdayTemp);
            $("#tuesHum").html(tuesdayHum);
            $("#wedTemp").html(wedTemp);
            $("#wedHum").html(wedHum);
            $("#thursTemp").html(thursTemp);
            $("#thursHum").html(thursHum);
            $("#friTemp").html(friTemp);
            $("#friHum").html(friHum);
        }


    })

};

function uvIndex(lat, lon) {
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