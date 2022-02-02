$.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${29.4252}&lon=${-98.4916}&appid=${weatherKey}`)
    .done(function (weather){
        console.log(weather);
        makeCard();
    })
var mapLong = -98.4916;
var mapLat = 29.4252;
updateWeather(mapLat, mapLong);
function updateWeather(latitude, longitude) {
    var getFiveDayForecast = $.get(
        "https://api.openweathermap.org/data/2.5/onecall",
        {
            APPID: "8d501750ddcb9e174ab01a639fd1edc0",
            lat: latitude,
            lon: longitude,
            units: "imperial",
        }
    );
    //5 day forecast
    getFiveDayForecast.done(function (weatherConditions) {
        var daily = weatherConditions.daily;
        $(".weather-card-container").html("");
        for (var i = 0; i < 5; i++) {
            makeCard(daily[i]);
        }
    });
}
function makeCard(weatherConditions) {
    var weatherCards = "";
    //Converting time to be readbale
    var Time = weatherConditions.dt;
    var milliseconds = Time * 1000;
    var dateObject = new Date(milliseconds);
    var dateFormat = dateObject.toLocaleString();
    var date = dateFormat.split(",");
    date = date[0];
    weatherCards += `<div class='d-inline-flex'>
  <div class='card m-2' style='width: 18rem;'>
      <div class='card-header text-center'> ${date} </div>
          <ul class='list-group list-group-flush'>
              <li class='list-group-item text-center'>
              <strong>  ${weatherConditions.temp.max}  &#8457; /   ${weatherConditions.temp.min}   &#8457;</strong><br>
              <img src='http://openweathermap.org/img/w/${weatherConditions.weather[0].icon}.png' alt='${weatherConditions.weather[0].description} image'>
              <li class='list-group-item'>Description: <strong> ${weatherConditions.weather[0].description}</strong><br><br>
              Humidity: <strong>${weatherConditions.humidity}  </strong></li>
              <li class='list-group-item'>Wind: <strong> ${weatherConditions.wind_speed} </strong></li>
              <li class='list-group-item'>Pressure: <strong>  ${weatherConditions.pressure}  </strong></li>
          </ul>
      </div>
  </div>`;
    $(".weather-card-container").append(weatherCards);

//         function getForecast(){
//             $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${29.4252}&lon=${-98.4916}&appid=${weatherKey}`)
//     .done(function (weather){
//     console.log(weather);
// })
};