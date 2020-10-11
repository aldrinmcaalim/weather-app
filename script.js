window.addEventListener('load', () => {
    let longitude;
    let latitude;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            longitude = position.coords.longitude;
            latitude = position.coords.latitude;
        });
    } else {
        h1.textContent = "Turn on the location for the application to work"
    }
});