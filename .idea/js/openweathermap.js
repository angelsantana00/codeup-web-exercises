"use strict";


//MAP
var accessToken = 'pk.eyJ1Ijoic2FudGFuYWJveTAwIiwiYSI6ImNreXhneHB0aDBpZHUyb3B0NDJpamw0cXkifQ.X8lYKRJ7bGPI3m-bmQpGsA';
mapboxgl.accessToken = accessToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]


});
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            updateWeather(data.features[0].center[1], data.features[0].center[0]);
            //console.log(data.features[0].center[0]);
        });
}

//Search Function
$("#searchbtn").click(function (){
    console.log($("#searchtext").val());
    var city = $("#searchtext").val();
    geocode(city, accessToken);
})

//MARKER
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;

    reverseGeocode(lngLat, accessToken).then(function (result) {
        $('#currentCity').html('Current City: ' + result);
        marker
            .setLngLat([mapLong, mapLat])

        map.flyTo({
            center: [mapLong, mapLat],
            essential: true
        })

    });
    mapLong = lngLat.lng
    mapLat = lngLat.lat
    updateWeather(mapLat, mapLong);

}

marker.on('dragend', onDragEnd);

//Getting Info
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
    console.log(weatherConditions);
    //Converting time to be readbale
    var Time = weatherConditions.dt;
    var milliseconds = Time * 1000;
    var dateObject = new Date(milliseconds);
    var dateFormat = dateObject.toLocaleString();
    var date = dateFormat.split(",");
    date = date[0];
    weatherCards += `<div class='d-inline-flex'>
  <div class='card m-2' style='width: 20rem;'>
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
    $(".weather-card-container").append(weatherCards);}
