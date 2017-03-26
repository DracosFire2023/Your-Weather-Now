//Get local user time
var date = "" + new Date();
var dateString = date.split(" ");
var time = dateString[4];
//var time = "18:00:00";

//remove Farenheit button
document.getElementById("Farenheit").style.display = "none";

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
  var getLocation = 'http://ip-api.com/json/';

  //div to place icon
  var icon = document.getElementById("icon");

  //div to place weather condition description
  var conditions = document.getElementById("conditions");
  
$.getJSON(getLocation).done(function(locations) 
  {   
  var city = (locations.city);
  var state = (locations.region);
  var hot = "<br><p>Hot</p>";
  var location = city + ", " + state;
  location.innerHTML = "<p>" + loc + "</p>";
  
  var urlCity = ("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&mode=json&units=metric&cnt=7&appid=API-Key-Here");
 
function getWeather()
{		
  //pass JSON weather data to b  
  $.getJSON(urlCity, function(b) 
  {
    var tempC = b.main.temp;
	var tempF = (tempC * 1.8 + 32); 
    weatherNow.innerHTML += "<p class='tmp'>" + Math.round(tempF) + '<i class="degrees wi wi-degrees"</i>' + "</p>";
    var arr = b.weather;
    var describe = arr[0];
    var iconType = describe.description;
//	var iconType = undefined;
    console.log("inconType:",iconType);
    console.log("time",time);
	console.log("temperature in Farenheit",tempF);
	console.log("temperature in Celsius",tempC);
    console.log("Everything in the JSON:",b);

    function day()
    {
      if (iconType === "clear sky") 
      {
        icon.innerHTML = '<i class="wi wi-day-sunny"></i>'; 
		conditions.innerHTML = "<br>" + "<p>Clear Sky</p>";
      } 
      else if (iconType === "few clouds") 
      {
        icon.innerHTML = '<i class="wi wi-day-cloudy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Slightly Cloudy</p>";
      }  
      else if (iconType === "scattered clouds") 
      {
        icon.innerHTML = '<i class="wi wi-day-cloudy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Scattered Clouds</p>";
      } 
      else if (iconType === "broken clouds") 
	  {
        icon.innerHTML = '<i class="wi wi-day-cloudy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Broken Clouds</p>";
      } 
      else if (iconType === "overcast clouds") 
	  {
        icon.innerHTML = '<i class="wi wi-day-cloudy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Overcast Clouds</p>";
      }
      else if (iconType === "shower rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-showers"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Rain Showers</p>";
      } 
      else if (iconType === "rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Rain</p>";
      } 
      else if (iconType === "light rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain-mix"</i>';
		conditions.innerHTML = "<br>" + "<p>Light Rain</p>";
      } 
      else if (iconType === "light intensity drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Light Drizzle</p>";
      }
      else if (iconType === "moderate rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Moderate Rain</p>";
      }
      else if (iconType === "drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle</p>";
      }
      else if (iconType === "heavy intensity drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Heavy Drizzle</p>";
      }
      else if (iconType === "light intensity drizzle rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Light Drizzle, Some Rain</p>";
      }
      else if (iconType === "drizzle rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle, Rain</p>";
      }
      else if (iconType === "heavy intensity drizzle rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Heavy Drizzle, Some Rain</p>";
      }
      else if (iconType === "shower rain and drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle, Rain Showers</p>";
      }
      else if (iconType === "heavy shower rain and drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle, Heavy Rain Showers</p>";
      }
      else if (iconType === "shower drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Rain Showers, Drizzle</p>";
      }
      else if (iconType === "heavy intensity rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Heavy Intensity Rain</p>";
      }
      else if (iconType === "very heavy rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Very Heavy Rain</p>";
      }
      else if (iconType === "extreme rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Very Heavy Rain</p>";
      }
      else if (iconType === "freezing rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Freezing Rain</p>";
      }
      else if (iconType === "light intensity shower rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Rain Showers</p>";
      }
      else if (iconType === "heavy intensity shower rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Intense, Heavy Rain Showers/p>";
      }
      else if (iconType === "ragged shower rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Irregular Rain Showers</p>";
      }
      else if (iconType === "thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Thunderstorm</p>";
      } 
      else if (iconType === "thunderstorm with light rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Thunderstorm, Light Rain</p>";
      } 
      else if (iconType === "thunderstorm with rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Thunderstorm, Rain</p>";
      } 
      else if (iconType === "thunderstorm with heavy rain") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Thunderstorm, Heavy Rain</p>";
      } 
      else if (iconType === "light thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Light Thunderstorm</p>";
      } 
      else if (iconType === "heavy thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Heavy Thunderstorm</p>";
      } 
      else if (iconType === "ragged thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Irregular Thunderstorms</p>";
      } 
      else if (iconType === "thunderstorm with light drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Thunderstorms, Light Drizzle</p>";
      } 
      else if (iconType === "thunderstorm with drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Thunderstorms, Drizzle</p>";
      } 
      else if (iconType === "thunderstorm with heavy drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-day-thunderstorm icon-helper"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Thunderstorms, Heavy Drizzle</p>";
      } 
      else if (iconType === "snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Snow</p>";
      } 
      else if (iconType === "light snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Light Snow</p>";
      } 
      else if (iconType === "heavy snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Heavy Snow</p>";
      } 
      else if (iconType === "sleet") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Sleet</p>";
      } 
      else if (iconType === "shower sleet") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Sleet Showers</p>";
      } 
      else if (iconType === "light rain and snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Snow, Light Rain</p>";
      } 
      else if (iconType === "rain and snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Snow, Rain</p>";
      } 
      else if (iconType === "light shower snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Light Snow Showers</p>";
      } 
      else if (iconType === "shower snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Snow Showers</p>";
      } 
      else if (iconType === "heavy shower snow") 
      {
        icon.innerHTML = '<i class="wi wi-day-snow"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Heavy Snow Showers</p>";
      } 
      else if (iconType === "mist") 
      {
        icon.innerHTML = '<i class="wi wi-day-fog"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Mist</p>";
      }
      else if (iconType === "fog") 
      {
        icon.innerHTML = '<i class="wi wi-day-fog"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Fog</p>";
      }
      else if (iconType === "smoke") 
      {
        icon.innerHTML = '<i class="wi wi-day-fog"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Smoke</p>";
      }
      else if (iconType === "haze") 
      {
        icon.innerHTML = '<i class="wi wi-day-haze"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Haze</p>";
      }
      else if (iconType === "sand, dust whirls") 
      {
        icon.innerHTML = '<i class="wi wi-sandstorm"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Sand, Dust Whirls</p>";
      }
      else if (iconType === "sand") 
      {
        icon.innerHTML = '<i class="wi wi-day-fog"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Sand</p>";
      }
      else if (iconType === "dust") 
      {
        icon.innerHTML = '<i class="wi wi-day-fog"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Dust</p>";
      }
      else if (iconType === "volcanic ash") 
      {
        icon.innerHTML = '<i class="wi wi-day-fog"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Volcanic Ash</p>";
      }
      else if (iconType === "tornado") 
      {
        icon.innerHTML = '<i class="wi wi-tornado"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Tornado</p>";
      }
      else if (iconType === "tropical storm") 
      {
        icon.innerHTML = '<i class="wi wi-storm-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Storm Warning</p>";
      }
      else if (iconType === "cold") 
      {
        icon.innerHTML = '<i class="wi wi-snowflake-cold"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Cold</p>";
      }
      else if (iconType === "windy") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Windy</p>";
      }
      else if (iconType === "hail") 
      {
        icon.innerHTML = '<i class="wi wi-day-hail"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Hail</p>";
      }
      else if (iconType === "calm") 
      {
        icon.innerHTML = '<i class="wi wi-day-sunny"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Calm</p>";
      }
      else if (iconType === "light breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Light Breeze</p>";
      }
      else if (iconType === "gentle breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Gentle Breeze</p>";
      }
      else if (iconType === "moderate breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Moderate Breeze</p>";
      }
      else if (iconType === "fresh breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Fresh Breeze</p>";
      }
      else if (iconType === "strong breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Strong Breeze</p>";
      }
      else if (iconType === "high wind, near gale") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>High Winds, Approaching Gale</p>";
      }
      else if (iconType === "gale") 
      {
        icon.innerHTML = '<i class="wi wi-gale-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Gale</p>";
      }
      else if (iconType === "severe gale") 
      {
        icon.innerHTML = '<i class="wi wi-gale-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Severe Gale</p>";
      }
      else if (iconType === "squalls") 
      {
        icon.innerHTML = '<i class="wi wi-gale-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Squalls</p>";
      }
      else if (iconType === "violent storm") 
      {
        icon.innerHTML = '<i class="wi wi-storm-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Violent Storms</p>";
      }
      else if (iconType === "hurricane") 
      {
        icon.innerHTML = '<i class="wi wi-hurricane"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Hurricane</p>";
      }
      else if (iconType === "hot") 
      {
        icon.innerHTML = '<i class="wi wi-hot"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Hot</p>";
      }
	  else if (iconType === undefined) 
      {
        icon.innerHTML = '<i class="fa fa-exclamation-circle"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Report Unavailable</p>";
      }
    }
 
	function night()
    {
      if (iconType === "clear sky") 
      {
        icon.innerHTML = '<i class="wi wi-night-clear"></i>';
	    conditions.innerHTML = "<br>" + "<p>Clear Sky</p>";
       } 
	  else if (iconType === "few clouds") 
      {
        icon.innerHTML = '<i class="wi wi-night-cloudy"</i>';
		conditions.innerHTML = "<br>" + "<p>Few Clouds</p>";
	  } 
	  else if (iconType === "scattered clouds") 
	  {
        icon.innerHTML = '<i class="wi wi-night-cloudy"</i>';
		conditions.innerHTML = "<br>" + "<p>Scattered Clouds</p>";
      } 
      else if (iconType === "broken clouds") 
	  {
        icon.innerHTML = '<i class="wi wi-night-cloudy"</i>';
		conditions.innerHTML = "<br>" + "<p>Broken Clouds</p>";
      } 
	  else if (iconType === "overcast clouds") 
	  {
        icon.innerHTML = '<i class="wi wi-night-cloudy"</i>' + "<br>" + "<p>Broken Clouds</p>";
		conditions.innerHTML = "<br>" + "<p>Overcast Clouds</p>";
      }
      else if (iconType === "shower rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-showers"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Rain Showers</p>";
      } 
      else if (iconType === "rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-rain"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Rain</p>";
      } 
      else if (iconType === "light rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-rain-mix"</i>';
		conditions.innerHTML = "<br>" + "<p>Light Rain</p>";
      } 
      else if (iconType === "moderate rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-rain"</i>';
        conditions.innerHTML = "<br>" + "<p>Moderate Rain</p>";
      } 
	  else if (iconType === "light intensity drizzle") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Light Drizzle</p>";
      }
      else if (iconType === "drizzle") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle</p>";
      }
      else if (iconType === "heavy intensity drizzle") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Heavy Drizzle</p>";
      }
      else if (iconType === "light intensity drizzle rain") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Light Drizzle, Some Rain</p>";
      }
      else if (iconType === "drizzle rain") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle, Rain</p>";
      }
      else if (iconType === "heavy intensity drizzle rain") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Heavy Drizzle, Some Rain</p>";
      }
      else if (iconType === "shower rain and drizzle") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle, Rain Showers</p>";
      }
      else if (iconType === "heavy shower rain and drizzle") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Drizzle, Heavy Rain Showers</p>";
      }
      else if (iconType === "shower drizzle") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        iconditions.innerHTML = "<br>" + "<p>Rain Showers, Drizzle</p>";
      }
      else if (iconType === "heavy intensity rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-showers"</i>';
        conditions.innerHTML = "<br>" + "<p>Heavy Intensity Rain</p>";
      }
      else if (iconType === "very heavy rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-showers"</i>';
        conditions.innerHTML = "<br>" + "<p>Very Heavy Rain</p>";
      }
      else if (iconType === "extreme rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-showers"</i>';
        conditions.innerHTML = "<br>" + "<p>Very Heavy Rain</p>";
      }
      else if (iconType === "freezing rain") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Freezing Rain</p>";
      }
      else if (iconType === "light intensity shower rain") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Rain Showers</p>";
      }
      else if (iconType === "heavy intensity shower rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-showers"</i>';
        conditions.innerHTML = "<br>" + "<p>Intense, Heavy Rain Showers/p>";
      }
      else if (iconType === "ragged shower rain") 
      {
        icon.innerHTML = '<i class="wi-night-rain-mix"</i>';
        conditions.innerHTML = "<br>" + "<p>Irregular Rain Showers</p>";
      } 
      else if (iconType === "thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
		conditions.innerHTML = "<br>" + "<p>Thunderstorm</p>";
      } 
      else if (iconType === "thunderstorm with light rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
		conditions.innerHTML = "<br>" + "<p>Thunderstorms, Light Rain</p>";
      } 
      else if (iconType === "thunderstorm with heavy rain") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
		conditions.innerHTML = "<br>" + "<p>Thunderstorms, Heavy Rain</p>";
      } 
      else if (iconType === "light thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
		conditions.innerHTML = "<br>" + "<p>Light Thunderstorms</p>";
      } 
      else if (iconType === "thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
		conditions.innerHTML = "<br>" + "<p>Thunderstorm</p>";
      } 
      else if (iconType === "heavy thunderstorms") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
	    conditions.innerHTML = "<br>" + "<p>Heavy Thunderstorm</p>";
      } 
      else if (iconType === "ragged thunderstorm") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
	    conditions.innerHTML = "<br>" + "<p>Irregular Thunderstorms</p>";
      } 
      else if (iconType === "thunderstorm with light drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
	    conditions.innerHTML = "<br>" + "<p>Thunderstorms, Light Drizzle</p>";
      } 
	  else if (iconType === "thunderstorm with drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
	    conditions.innerHTML = "<br>" + "<p>Thunderstorms, Drizzle</p>";
      } 
	  else if (iconType === "thunderstorm with heavy drizzle") 
      {
        icon.innerHTML = '<i class="wi wi-night-thunderstorm"</i>';
		conditions.innerHTML = "<br>" + "<p>Thunderstorms, Heavy Drizzle</p>";
      } 
      else if (iconType === "snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
	    conditions.innerHTML = "<br>" + "<p>Snow</p>";
      } 
      else if (iconType === "light snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
		conditions.innerHTML = "<br>" + "<p>Light Snow</p>";
      } 
      else if (iconType === "heavy snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
	    conditions.innerHTML = "<br>" + "<p>Heavy Snow</p>";
      } 
      else if (iconType === "sleet") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
        conditions.innerHTML = "<br>" + "<p>Sleet</p>";
      } 
      else if (iconType === "shower sleet") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
		conditions.innerHTML = "<br>" + "<p>Sleet Showers</p>";
	  } 
      else if (iconType === "light rain and snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
		conditions.innerHTML = "<br>" + "<p>Snow, Light Rain</p>";
      } 
      else if (iconType === "rain and snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
     	conditions.innerHTML = "<br>" + "<p>Snow, Rain</p>";
      } 
      else if (iconType === "light shower snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
     	conditions.innerHTML = "<br>" + "<p>Light Snow Showers</p>";
      } 
      else if (iconType === "shower snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
        conditions.innerHTML = "<br>" + "<p>Snow Showers</p>";
      } 
      else if (iconType === "heavy shower snow") 
      {
        icon.innerHTML = '<i class="wi wi-night-snow"</i>';
	    conditions.innerHTML = "<br>" + "<p>Heavy Snow Showers</p>";
      } 
      else if (iconType === "mist") 
      {
        icon.innerHTML = '<i class="wi wi-night-fog"</i>';
	    conditions.innerHTML = "<br>" + "<p>Mist</p>";
      }
	  else if (iconType === "fog") 
      {
        icon.innerHTML = '<i class="wi wi-night-fog"</i>';
	    conditions.innerHTML = "<br>" + "<p>Fog</p>";
      }    
	  else if (iconType === "smoke") 
      {
        icon.innerHTML = '<i class="wi wi-night-fog"</i>';
	    conditions.innerHTML = "<br>" + "<p>Smoke</p>";
      }
      else if (iconType === "haze") 
      {
        icon.innerHTML = '<i class="wi wi-night-fog"</i>';
    	conditions.innerHTML = "<br>" + "<p>Haze</p>";
      }
      else if (iconType === "sand, dust whirls") 
      {
        icon.innerHTML = '<i class="wi wi-sandstorm"</i>';
		conditions.innerHTML = "<br>" + "<p>Sand, Dust Whirls</p>";
      }
      else if (iconType === "sand") 
      {
        icon.innerHTML = '<i class="wi wi-night-fog"</i>';
		conditions.innerHTML = "<br>" + "<p>Sand</p>";
      }
	  else if (iconType === "dust") 
      {
        icon.innerHTML = '<i class="wi wi-night-fog"</i>';
		conditions.innerHTML = "<br>" + "<p>Dust</p>";
      }
	  else if (iconType === "volcanic ash") 
      {
        icon.innerHTML = '<i class="wi wi-night-fog"</i>';
		conditions.innerHTML = "<br>" + "<p>Fog</p>";
      }
	  else if (iconType === "tornado") 
      {
        icon.innerHTML = '<i class="wi wi-tornado"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Tornado</p>";
      }
	  else if (iconType === "tropical storm") 
      {
        icon.innerHTML = '<i class="wi wi-storm-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Storm Warning</p>";
      }
	  else if (iconType === "cold") 
      {
        icon.innerHTML = '<i class="wi wi-snowflake-cold"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Cold</p>";
      }
	  else if (iconType === "windy") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Windy</p>";
      }
	  else if (iconType === "hail") 
      {
        icon.innerHTML = '<i class="wi wi-night-hail"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Hail</p>";
      }
	  else if (iconType === "calm") 
      {
        icon.innerHTML = '<i class="wi wi-night-clear"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Calm</p>";
      }
      else if (iconType === "light breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Light Breeze</p>";
      }
      else if (iconType === "gentle breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Gentle Breeze</p>";
      }
      else if (iconType === "moderate breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Moderate Breeze</p>";
      }
      else if (iconType === "fresh breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Fresh Breeze</p>";
      }
      else if (iconType === "strong breeze") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Strong Breeze</p>";
      }
      else if (iconType === "high wind, near gale") 
      {
        icon.innerHTML = '<i class="wi wi-windy"</i>'; 
		conditions.innerHTML = "<br>" + "<p>High Winds, Approaching Gale</p>";
      }
      else if (iconType === "gale") 
      {
        icon.innerHTML = '<i class="wi wi-gale-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Gale</p>";
      }
      else if (iconType === "severe gale") 
      {
        icon.innerHTML = '<i class="wi wi-gale-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Severe Gale</p>";
      }
      else if (iconType === "squalls") 
      {
        icon.innerHTML = '<i class="wi wi-gale-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Squalls</p>";
      }
      else if (iconType === "violent storm") 
      {
        icon.innerHTML = '<i class="wi wi-storm-warning"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Violent Storms</p>";
      }
      else if (iconType === "hurricane") 
      {
        icon.innerHTML = '<i class="wi wi-hurricane"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Hurricane</p>";
      }
      else if (iconType === "hot") 
      {
        icon.innerHTML = '<i class="wi wi-hot"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Hot</p>";
      }
	  else if (iconType === undefined) 
      {
        icon.innerHTML = '<i class="fa fa-exclamation-circle"</i>'; 
		conditions.innerHTML = "<br>" + "<p>Report Unavailable</p>";
      } 
    }  
	  if((time < "7:00:00") || (time > "18:00:00"))
      {
        night();
        console.log("It is nighttime.")
      }
	  if((time > "7:00:00") || (time < "18:00:00"))
      {
	    day();
        console.log("It is daytime.")
      } 
	  console.log("time:",time)
      // 00:00:00 - time format
      // testicon.innerHTML = '<i class="wi wi-day-fog"</i>';
      $("#Celsius").on("click", function() 
      {
        weatherNow.innerHTML = "<p class='tmp'>" + Math.round(tempC) + '<i class="degrees wi wi-degrees"</i>' + "</p>";
        document.getElementById("Farenheit").style.display = "inline";
        document.getElementById("Celsius").style.display = "none";
      });
          
      $("#Fahrenheit").on("click", function()  
      {
	    weatherNow.innerHTML = "<p class='tmp'>" + Math.round(tempF) + '<i class="degrees wi wi-degrees"</i>' + "</p>";
        document.getElementById("Farenheit").style.display = "none";
        document.getElementById("Celsius").style.display = "inline";
      });
	    if(tempF >= 90)
	    {
	      icon.innerHTML = '<i class="wi wi-hot"</i>'; 
		  conditions.innerHTML = "<br>" + "<p>Hot</p>";
	    }
    });
	
  }
  getWeather();
  });
  

});
  
