let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    let key = '2c1240fafa5c474e22e59cb3a918f9d6';
    
    // Corrected the URL syntax and added backticks for template literals
    let url = https://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key};

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);

        // Corrected template literals syntax
        weatherCountry.innerText = ${data.name} / ${data.sys.country};
        temperature.innerHTML = ${data.main.temp}°<b>C</b>;
        
        // Added a valid URL for the background image
        document.body.style.backgroundImage = url('https://source.unsplash.com/1600x900/?${data.weather[0].main}');

        // Using only the first item from the weather array
        let weatherItem = data.weather[0];

        // Updated the condition for setting the weather icon
        if (weatherItem.id < 250) {
            tempIcon.src = 'tempicons/storm.svg';
        } else if (weatherItem.id < 350) {
            tempIcon.src = 'tempicons/drizzle.svg';
        } else if (weatherItem.id < 550) {
            tempIcon.src = 'tempicons/snow.svg';
        } else if (weatherItem.id < 650) {
            tempIcon.src = 'tempicons/rain.svg';
        } else if (weatherItem.id < 800) {
            tempIcon.src = 'tempicons/atmosphere.svg';
        } else if (weatherItem.id === 800) {
            tempIcon.src = 'tempicons/sun.svg';
        } else if (weatherItem.id > 800) {
            tempIcon.src = 'tempicons/clouds.svg';
        }

        // Corrected template literals syntax and added "Feels Like" text
        feelsLike.innerText = Feels Like ${data.main.feels_like}°C;

        // Corrected template literals syntax and added "Humidity" text
        humidity.innerText = Humidity ${data.main.humidity};
        
        // Corrected the texts for latitude and longitude
        latitude.innerText = Latitude ${data.coord.lat};
        longitude.innerText = Longitude ${data.coord.lon};
    });

    // Resetting input values after fetching weather data
    country.value = "";
    city.value = "";
});