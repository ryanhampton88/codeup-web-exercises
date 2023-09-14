"use strict";

const BASE_CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const FIVE_DAY_WEATHER_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

let defaultLocation = `San Antonio,TX,USA`;

// ------Loading default location-------//
$.get(FIVE_DAY_WEATHER_FORECAST_URL + `q=${defaultLocation}&appid=${WEATHER_MAP_KEY}&units=imperial`).done(
    (data) => {
        // console.log(data.list);
        let html = "";
        let weatherImage = "";

        for (let i = 0; i < data.list.length; i += 8) {

            if (data.list[i].weather[0].description === `clear sky`) {
                weatherImage = `<img src="img/sun.svg" style="width: 70px; height: 70px;">`;
            } else if ( data.list[i].weather[0].description === `few clouds` || data.list[i].weather[0].description === `overcast clouds` ||
                data.list[i].weather[0].description === `broken clouds`) {
                weatherImage = `<img src="img/white-fluffy-cloud.svg" style="width: 80px; height: 80px;">`
            } else if (data.list[i].weather[0].description === `light rain`) {
                weatherImage = `<img src="img/rain-cloud.svg" style="width: 70px; height: 70px;">`
            }

            html += `
                        <div class="col display-card" style="height: 300px;">
                            <div class="weather-image"style="line-height: 93px;">${weatherImage}</div>
                            <div class="date"> ${data.list[i].dt_txt.slice(0, 10)}</div>
                            <div class="temp" style="font-size: 40px;"> ${data.list[i].main.temp.toFixed(0)}&deg </div>
                            <div class="description"> ${data.list[i].weather[0].description}</div>
                            <div class="humidity">Humidity: ${data.list[i].main.humidity}</div>
                            <div class="wind">Wind: ${data.list[i].wind.speed}</div>
                        </div>
                </div>
                `
        }
        $("#insert-weather").html(html);
        $("#current-location").html(defaultLocation);
    })

//  ----- Added Map ------- //
mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-day-v1',
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 11, // starting zoom
});

// ------Default pin location--------//
let droppedPin = new mapboxgl.Marker()
    .setLngLat([-98.4946, 29.4252])
    .addTo(map)

// --------Pin location updated when user clicks------//
map.on("click", (e) => {
    droppedPin.setLngLat(e.lngLat.wrap())
    $.get(FIVE_DAY_WEATHER_FORECAST_URL + `lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&appid=${WEATHER_MAP_KEY}&units=imperial`).done(
        (data) => {
            console.log(data)
            let html = "";
            let weatherImage = "";
            let location = `${data.city.name}`

            for (let i = 0; i < data.list.length; i += 8) {

                if (data.list[i].weather[0].description === `clear sky`) {
                    weatherImage = `<img src="img/sun.svg" style="width: 70px; height: 70px;">`;
                } else if ( data.list[i].weather[0].description === `few clouds` || data.list[i].weather[0].description === `overcast clouds` ||
                    data.list[i].weather[0].description === `broken clouds`) {
                    weatherImage = `<img src="img/white-fluffy-cloud.svg" style="width: 80px; height: 80px;">`
                } else if (data.list[i].weather[0].description === `light rain`) {
                    weatherImage = `<img src="img/rain-cloud.svg" style="width: 70px; height: 70px;">`
                } else if (data.list[i].weather[0].description === `scattered clouds`) {
                    weatherImage = `<img src="img/white-fluffy-cloud.svg" style="width: 70px; height: 70px;">`
                }

                html += `
                        <div class="col display-card" style="height: 300px;">
                            <div class="weather-image"style="line-height: 93px;">${weatherImage}</div>
                            <div class="date"> ${data.list[i].dt_txt.slice(0, 10)}</div>
                            <div class="temp" style="font-size: 40px;"> ${data.list[i].main.temp.toFixed(0)}&deg </div>
                            <div class="description"> ${data.list[i].weather[0].description}</div>
                            <div class="humidity">Humidity: ${data.list[i].main.humidity}</div>
                            <div class="wind">Wind: ${data.list[i].wind.speed}</div>
                        </div>
                </div>
                `
            }
            $("#insert-weather").html(html);
            $("#current-location").html(location);
        })
})

// -----Change location using search input----------//
$("#submit").on("click", function () {
    // droppedPin.setLngLat(e.lngLat.wrap())
    let searchForm = document.getElementById("searchForm")
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let search = searchForm.elements.input.value;
        console.log(searchForm.elements.input.value);
        let searchArray = search.split(",")
        console.log(search);
        console.log(searchArray[0]);

        geocode(`${searchArray[0]}` + `,` + `${searchArray[1]}`, MAPBOX_API_TOKEN).then(function(result) {
            console.log(result);
            map.setCenter(result);
            map.setZoom(11);
            droppedPin.setLngLat(result)
        });

        // let currentCity = `Current Location: ${search}`;

        $.get(FIVE_DAY_WEATHER_FORECAST_URL + `q=${searchArray[0]},${searchArray[1]},${searchArray[3]}&appid=${WEATHER_MAP_KEY}&units=imperial`).done(
            (data) => {
                let html = "";
                let weatherImage = "";
                let location = `${data.city.name}`

                for (let i = 0; i < data.list.length; i += 8) {

                    if (data.list[i].weather[0].description === `clear sky`) {
                        weatherImage = `<img src="img/sun.svg" style="width: 70px; height: 70px;">`;
                    } else if ( data.list[i].weather[0].description === `few clouds` || data.list[i].weather[0].description === `overcast clouds` ||
                        data.list[i].weather[0].description === `broken clouds`) {
                        weatherImage = `<img src="img/white-fluffy-cloud.svg" style="width: 80px; height: 80px;">`
                    } else if (data.list[i].weather[0].description === `light rain`) {
                        weatherImage = `<img src="img/rain-cloud.svg" style="width: 70px; height: 70px;">`
                    } else if (data.list[i].weather[0].description === `scattered clouds`) {
                        weatherImage = `<img src="img/white-fluffy-cloud.svg" style="width: 70px; height: 70px;">`
                    }

                    html += `
                        <div class="col display-card" style="height: 300px;">
                            <div class="weather-image"style="line-height: 93px;">${weatherImage}</div>
                            <div class="date"> ${data.list[i].dt_txt.slice(0, 10)}</div>
                            <div class="temp" style="font-size: 40px;"> ${data.list[i].main.temp.toFixed(0)}&deg </div>
                            <div class="description"> ${data.list[i].weather[0].description}</div>
                            <div class="humidity">Humidity: ${data.list[i].main.humidity}</div>
                            <div class="wind">Wind: ${data.list[i].wind.speed}</div>
                        </div>
                </div>
                `
                }
                $("#insert-weather").html(html);
                $("#current-location").html(location);
            })
    })
})


// ------This helped me find the objects I needed for targeting.------
// console.log(map);

// ------This helped me find the lng & lat of the mouse.--------
// map.on('mousemove', (e) => {
//     document.getElementById('info').innerHTML =
// // `e.point` is the x, y coordinates of the `mousemove` event
// // relative to the top-left corner of the map.
//         JSON.stringify(e.point) +
//         '<br />' +
//         // `e.lngLat` is the longitude, latitude geographical position of the event.
//         JSON.stringify(e.lngLat.wrap());
// });


// --------Pin location updated when user clicks------
