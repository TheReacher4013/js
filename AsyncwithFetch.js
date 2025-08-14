// Featching wheather Function to caputure the user city input
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

async function fetchWeatherFromApi(City) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${City}&lang=EN`;

    const options = {
        method: "GET",
        headers: {
            'x-rapidapi-key': 'acf611fb36mshaf2f4da8691f15bp1c7df6jsn194007332945',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        },
    };

    try {
        const response = await fetch(url, options);
        console.log(response);
        if (!response.ok) {
            throw new console.error("Failed to fetch details");
        }

        const result = await response.json();
        renderData(result);
    } catch (error) {
        console.error(error);
    } finally {
        loadingText = false;
    }

    // render wheather data
}

function renderData(data) {
    weather_container.innerText = " ";
    weather_container.innerHTML = " ";
    weather_container.innerHTML = `
        <h3>Weather for ${data.name} </h3>
        <p><strong>Temprature: <strong/> ${data.main.temp}</p>
          <img src=${data.weather[0].icon} alt = ${data.name} />
        `;
}