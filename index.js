var apiKey = "072d855dd44247d411caa1806be3db71";

getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const fullUrl = `${URL}?q=${city}&appid=${apiKey}&units=imperial`;
    const weatherPromise = fetch(fullUrl);
    return weatherPromise
    .then((response) => {
      return response.json()
    })
}

searchCity = () => {
    const city = document.getElementById("city-input").value;
    getWeatherData(city)
    .then((response) => {
        showWeatherData(response)
        //  console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })
}

showWeatherData = (data) =>{
    document.getElementById("city-name").innerText = data.name;
    document.getElementById("climate").innerText = data.weather[0].main;
    document.getElementById("temp").innerText = Math.floor((data.main.temp - 32) * 5/9);
    document.getElementById("minTemp").innerText = Math.floor((data.main.temp_min - 32) * 5/9) ;
    document.getElementById("maxTemp").innerText = Math.floor((data.main.temp_max - 32) * 5/9);
}



