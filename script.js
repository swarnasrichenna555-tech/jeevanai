function getLocation() {
    fetchWeather(17.3850, 78.4867); // Hyderabad
}

function fetchWeather(lat, lon) {
    const API_KEY = "c1828cef746d69e1141fdf07264ef460";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => {
            let temp = data.main.temp;
            let aqi = Math.floor(Math.random() * 200);

            let risk = "LOW";

            if (temp > 40 || aqi > 150) {
                risk = "HIGH";
            } else if (temp > 35 || aqi > 100) {
                risk = "MEDIUM";
            }

            document.getElementById("data").innerHTML = `
        <h2>Temp: ${temp}°C</h2>
        <h2>AQI: ${aqi}</h2>
        <h2 class="${risk.toLowerCase()}">Risk: ${risk}</h2>
      `;
        });
}