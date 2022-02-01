$.get(`https://api.openweathermap.org/data/2.5/weather?lat=${29.4252}&lon=${-98.4916}&appid=${weatherKey}`)
    .done(function (weather){
        console.log(weather);
    })

$.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${29.4252}&lon=${-98.4916}&appid=${weatherKey}`)
    .done(function (weather){
        console.log(weather);
    })

