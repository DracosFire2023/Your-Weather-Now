//Get local user time
var date = "" + new Date();
var dateString = date.split(" ");
var time = dateString[4];
//var time = "19:00:00";

//button setup
document.getElementById("Farenheit").style.display = "inline";
document.getElementById("Celsius").style.display = "none";

//console.log("time:", time);

$(document).ready(function() {
  $.ajaxSetup({
    cache: true
  });

  //div to place user location
  var location = document.getElementById("quote");

  //div to place weather of location
  var weatherNow = document.getElementById("weather");

  //get location from IP
  var getLocation = "http://ip-api.com/json/";

  //div to place icon
  var icon = document.getElementById("icon");

  //div to place weather condition description
  var conditions = document.getElementById("conditions");

  $.getJSON(getLocation).done(function(locations) {
    var city = locations.city;
    var state = locations.region;
    var hot = "<br><p>Hot</p>";
    var loc = city + ", " + state;
    location.innerHTML = "<p>" + loc + "</p>";

    var urlCelsius =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&mode=json&units=metric&cnt=7&appid=1b00fa11362e72132cd49a662d0868d5";

    function getWeather() {
      //pass JSON weather data to b
      $.getJSON(urlCelsius, function(b) {
        var tempCelsius = b.main.temp;
        var tempFarenheit = tempCelsius * 1.8 + 32;
        weatherNow.innerHTML +=
          "<p class='tmp'>" +
          Math.round(tempFarenheit) +
          '<i class="degrees wi wi-degrees"</i>' +
          "</p>";
        var arr = b.weather;
        var describe = arr[0];
        var iconType = describe.description;
        weatherDescription = describe.main;
        //	var iconType = undefined;  uncomment for testing error handling
        console.log("iconType:", iconType);
        console.log("time", time);
        console.log("temperature in Farenheit", tempFarenheit);
        console.log("temperature in Celsius", tempCelsius);
        console.log("Everything in the JSON:", b);

        $("#Farenheit").on("click", function() {
          weatherNow.innerHTML =
            "<p class='tmp'>" +
            Math.round(tempCelsius) +
            '<i class="degrees wi wi-degrees"</i>' +
            "</p>";
          document.getElementById("Farenheit").style.display = "none";
          document.getElementById("Celsius").style.display = "inline";
        });

        $("#Celsius").on("click", function() {
          weatherNow.innerHTML =
            "<p class='tmp'>" +
            Math.round(tempFarenheit) +
            '<i class="degrees wi wi-degrees"</i>' +
            "</p>";
          document.getElementById("Farenheit").style.display = "inline";
          document.getElementById("Celsius").style.display = "none";
        });

        let weatherStates = {
          "clear sky": {
            classes: "wi wi-day-sunny",
            description: weatherDescription,
            "night-classes": "wi wi-night-clear"
          },
          thunderstorm: {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-night-thunderstorm"
          },
          "overcast clouds": {
            classes: "wi wi-day-cloudy",
            description: weatherDescription,
            "night-classes": "wi wi-night-cloudy"
          },
          "few clouds": {
            classes: "wi wi-day-cloudy",
            description: weatherDescription,
            "night-classes": "wi wi-night-cloudy"
          },
          "broken clouds": {
            classes: "wi wi-day-cloudy",
            description: weatherDescription,
            "night-classes": "wi wi-night-cloudy"
          },
          "scattered clouds": {
            classes: "wi wi-day-cloudy",
            description: weatherDescription,
            "night-classes": "wi wi-night-cloudy"
          },
          "shower rain": {
            classes: "wi wi-day-showers",
            description: weatherDescription,
            "night-classes": "wi wi-night-showers"
          },
          rain: {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "light rain": {
            classes: "wi wi-day-rain-mix",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain-mix"
          },
          "light intensity drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-day-rain"
          },
          "moderate rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          drizzle: {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy intensity drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "light intensity drizzle rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "drizzle rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy intensity drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy intensity drizzle rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "shower rain and drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy shower rain and drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "shower drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy intensity rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "very heavy rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "extreme rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "freezing rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "light intensity shower rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "ragged shower rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          thunderstorm: {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-night-thunderstorm"
          },
          "thunderstorm with light rain": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-night-thunderstorm"
          },
          "thunderstorm with rain": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-night-thunderstorm"
          },
          "thunderstorm with heavy rain": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-night-thunderstorm"
          },
          "light intensity drizzle rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy intensity drizzle rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "shower rain and drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy shower rain and drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "shower drizzle": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "heavy intensity rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "very heavy rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "extreme rain": {
            classes: "wi wi-day-rain",
            description: weatherDescription,
            "night-classes": "wi wi-night-rain"
          },
          "light thunderstorm": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-day-thunderstorm"
          },
          "heavy thunderstorm": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-day-thunderstorm"
          },
          "ragged thunderstorm": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-day-thunderstorm"
          },
          "thunderstorm with light drizzle": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-day-thunderstorm"
          },
          "thunderstorm with heavy drizzle": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-day-thunderstorm"
          },
          "thunderstorm with drizzle": {
            classes: "wi wi-day-thunderstorm icon-helper",
            description: weatherDescription,
            "night-classes": "wi wi-day-thunderstorm"
          },
          snow: {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "light snow": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "heavy snow": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          sleet: {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "shower sleet": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "light rain and snow": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "rain and snow": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "light shower snow": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "shower snow": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          "heavy shower snow": {
            classes: "wi wi-day-snow",
            description: weatherDescription,
            "night-classes": "wi wi-night-snow"
          },
          mist: {
            classes: "wi wi-day-fog",
            description: weatherDescription,
            "night-classes": "wi wi-night-fog"
          },
          fog: {
            classes: "wi wi-day-fog",
            description: weatherDescription,
            "night-classes": "wi wi-night-fog"
          },
          smoke: {
            classes: "wi wi-day-fog",
            description: weatherDescription,
            "night-classes": "wi wi-night-fog"
          },
          haze: {
            classes: "wi wi-day-haze",
            description: weatherDescription,
            "night-classes": "wi wi-night-fog"
          },
          "sand, dust whirls": {
            classes: "wi wi-sandstorm",
            description: weatherDescription,
            "night-classes": "wi wi-sandstorm"
          },
          sand: {
            classes: "wi wi-day-fog",
            description: weatherDescription,
            "night-classes": "wi wi-night-fog"
          },
          dust: {
            classes: "wi wi-day-fog",
            description: weatherDescription,
            "night-classes": "wi wi-night-fog"
          },
          "volcanic ash": {
            classes: "wi wi-day-fog",
            description: weatherDescription,
            "night-classes": "wi wi-night-fog"
          },
          tornado: {
            classes: "wi wi-tornado",
            description: weatherDescription,
            "night-classes": "wi wi-tornado"
          },
          "tropical storm": {
            classes: "wi wi-storm-warning",
            description: weatherDescription,
            "night-classes": "wi wi-storm-warning"
          },
          cold: {
            classes: "wi wi-snowflake-cold",
            description: weatherDescription,
            "night-classes": "wi wi-snowflake-cold"
          },
          windy: {
            classes: "wi wi-windy",
            description: weatherDescription,
            "night-classes": "wi wi-windy"
          },
          hail: {
            classes: "wi wi-day-hail",
            description: weatherDescription,
            "night-classes": "wi wi-night-hail"
          },
          calm: {
            classes: "wi wi-day-sunny",
            description: weatherDescription,
            "night-classes": "wi wi-night-clear"
          },
          "light breeze": {
            classes: "wi wi-windy",
            description: weatherDescription,
            "night-classes": "wi wi-windy"
          },
          "gentle breeze": {
            classes: "wi wi-windy",
            description: weatherDescription,
            "night-classes": "wi wi-windy"
          },
          "moderate breeze": {
            classes: "wi wi-windy",
            description: weatherDescription,
            "night-classes": "wi wi-windy"
          },
          "fresh breeze": {
            classes: "wi wi-windy",
            description: weatherDescription,
            "night-classes": "wi wi-windy"
          },
          "strong breeze": {
            classes: "wi wi-windy",
            description: weatherDescription,
            "night-classes": "wi wi-windy"
          },
          "high wind, near gale": {
            classes: "wi wi-windy",
            description: weatherDescription,
            "night-classes": "wi wi-windy"
          },
          gale: {
            classes: "wi wi-gale-warning",
            description: weatherDescription,
            "night-classes": "wi wi-gale-warning"
          },
          "severe gale": {
            classes: "wi wi-gale-warning",
            description: weatherDescription,
            "night-classes": "wi wi-gale-warning"
          },
          squalls: {
            classes: "wi wi-gale-warning",
            description: weatherDescription,
            "night-classes": "wi wi-gale-warning"
          },
          "violent storm": {
            classes: "wi wi-storm-warning",
            description: weatherDescription,
            "night-classes": "wi wi-storm-warning"
          },
          hurricane: {
            classes: "wi wi-hurricane",
            description: weatherDescription,
            "night-classes": "wi wi-hurricane"
          },
          hot: {
            classes: "wi wi-hot",
            description: weatherDescription,
            "night-classes": "wi wi-storm-warning"
          },
          undefined: {
            classes: "fa fa-exclamation-circle",
            description: "<p>Report Unavailable</p>",
            "night-classes": "fa fa-exclamation-circle"
          }
        };

        if (time > "7:00:00" || time < "18:00:00") {
          console.log("It is daytime.");
          if (weatherStates[iconType] !== undefined) {
            icon.className = weatherStates[iconType]["classes"];
            conditions.innerHTML =
              "<p>" + weatherStates[iconType]["description"] + "</p>";
          } else {
            icon.className = weatherStates["undefined"]["classes"];
            conditions.innerHTML = weatherStates["undefined"]["description"];
          }
        } else if (time < "7:00:00" || time > "18:00:00") {
          console.log("It is nighttime.");
          if (weatherStates[iconType] !== undefined) {
            icon.className = weatherStates[iconType]["night-classes"];
            conditions.innerHTML =
              "<p>" + weatherStates[iconType]["description"] + "</p>";
          }
        }
      });
    }

    getWeather();
  });
});
