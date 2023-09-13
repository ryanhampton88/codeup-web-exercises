"use strict";

const BASE_CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const FIVE_DAY_WEATHER_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?'

$.get(FIVE_DAY_WEATHER_FORECAST_URL + `q=San Antonio,TX,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done(
    (data) => {
        // console.log(data.list);
        let html = "";
        for (let i = 0; i < data.list.length; i += 8) {
            html += `
                        <div class="col">
                            <div>Date: ${data.list[i].dt_txt.slice(0, 10)}</div>
                            <div>Temperature: ${data.list[i].main.temp.toFixed(0)}</div>
                            <div>Conditions: ${data.list[i].weather[0].description}</div>
                            <div>Humidity: ${data.list[i].main.humidity}</div>
                            <div>Wind: ${data.list[i].wind.speed}</div>
                        </div>
                </div>
                `
        }
        $("#insert-weather").html(html)
    })

//  ----- Added Map -------
mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-day-v1',
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 11, // starting zoom
});

// ------Default pin location--------
let droppedPin = new mapboxgl.Marker()
    .setLngLat([-98.4946, 29.4252])
    .addTo(map)

// --------Pin location updated when user clicks------
map.on("click", (e) => {
    droppedPin.setLngLat(e.lngLat.wrap())
    $.get(FIVE_DAY_WEATHER_FORECAST_URL + `lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&appid=${WEATHER_MAP_KEY}&units=imperial`).done(
        (data) => {
            console.log(data)
            let html = "";
            for (let i = 0; i < data.list.length; i += 8) {
                html += `
                        <div class="col">
                            <div>Date: ${data.list[i].dt_txt.slice(0, 10)}</div>
                            <div>Temperature: ${data.list[i].main.temp.toFixed(0)}</div>
                            <div>${data.list[i].weather[0].description}</div>
                            <div>Humidity: ${data.list[i].main.humidity}</div>
                            <div>Wind: ${data.list[i].wind.speed}</div>
                        </div>
                        `
            }
            $("#insert-weather").html(html)
        })
})

$("#submit").on("click", function () {
    // droppedPin.setLngLat(e.lngLat.wrap())

    let searchForm = document.querySelector("#searchForm")
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let search = searchForm.elements.searchInput.value;
        let searchArray = search.split(",")
        console.log(search);
        console.log(searchArray[0]);

        geocode(`${searchArray[0]}` + `,` + `${searchArray[1]}`, MAPBOX_API_TOKEN).then(function(result) {
            console.log(result);
            map.setCenter(result);
            map.setZoom(11);
            droppedPin.setLngLat(result)
        });

        let currentCity = `Current Location: ${search}`;

        $.get(FIVE_DAY_WEATHER_FORECAST_URL + `q=${searchArray[0]},${searchArray[1]},${searchArray[3]}&appid=${WEATHER_MAP_KEY}&units=imperial`).done(
            (data) => {
                let html = "";
                for (let i = 0; i < data.list.length; i += 8) {
                    html += `
                        <div class="col">
                            <div>Date: ${data.list[i].dt_txt.slice(0, 10)}</div>
                            <div>Temperature: ${data.list[i].main.temp.toFixed(0)}</div>
                            <div>Conditions: ${data.list[i].weather[0].description}</div>
                            <div>Humidity: ${data.list[i].main.humidity}</div>
                            <div>Wind: ${data.list[i].wind.speed}</div>
                        </div>
                </div>
                `
                    document.getElementById('search-input').value = '';
                }
                $("#insert-weather").html(html)
                $("#current-location").html(currentCity);
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
