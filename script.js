document.addEventListener("DOMContentLoaded", function () {
    // Obtener la ubicación del usuario (reemplaza 'e2aa3e5282af50' con tu clave de API)
    fetch("https://ipinfo.io/json?token=e2aa3e5282af50")
        .then(response => response.json())
        .then(data => {
            document.getElementById("location").textContent = data.city;
            document.getElementById("country").textContent = data.country;
        })
        .catch(error => console.error(error));

    // Obtener la hora actual
    const timeElement = document.getElementById("time");
    setInterval(() => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        timeElement.textContent = formattedTime;
    }, 1000);
});
