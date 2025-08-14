let loadingText;
const weather_container = document.getElementById(
    "weather_container"
);
const fetchWeather = (event) => {
    event.preventDefault();
    loadingText = true;
    const City = document.getElementsByName("City");
    console.log(City[0].value);
    fetchWeatherFromApi(City[0].value);

    if (loadingText) {
        weather_container.innerText = "loading....";
    }
};

const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=imperial&lang=en';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'acf611fb36mshaf2f4da8691f15bp1c7df6jsn194007332945',
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
} finally {
    loadingText = false;
}

  // render wheather data

function renderData(data) {
    weather_container.innerText = " ";
    weather_container.innerHTML = " ";
    weather_container.innerHTML = `
        <h3>Weather for ${data.name} </h3>
        <p><strong>Temprature: <strong/> ${data.main.temp}</p>
          <img src=${data.weather[0].icon} alt = ${data.name} />
        `;
}