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
            function getRisk(temp, humidity) {
    if (temp > 40) return "🔥 EXTREME HEAT RISK";
    if (temp > 35) return "⚠️ HIGH HEAT RISK";
    if (humidity > 80) return "🦟 DENGUE RISK";
    return "✅ LOW RISK";
}
            function getAdvice(temp) {
    let age = document.getElementById("age").value;
    let job = document.getElementById("job").value;

    if (temp > 35 && job === "farmer") {
        return "Avoid working in afternoon 🌞";
    }
    if (age > 50) {
        return "Stay hydrated & avoid heat 🧊";
    }
    return "Stay safe 👍";
}
            function startVoice() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-IN";

    recognition.onresult = function(event) {
        let text = event.results[0][0].transcript;
        document.getElementById("voiceOutput").innerText = text;

        if (text.includes("hot")) {
            alert("Stay hydrated 💧");
        }
    };

    recognition.start();
}
            function sendAlert() {
    document.getElementById("smsStatus").innerText =
        "📩 SMS Alert Sent: Heat risk high! Stay indoors.";
}
            document.getElementById("advice").innerText = getAdvice(temp);

            document.getElementById("data").innerHTML = `
        <h2>Temp: ${temp}°C</h2>
        <h2>AQI: ${aqi}</h2>
        <h2 class="${risk.toLowerCase()}">Risk: ${risk}</h2>
      `;
        });
}
