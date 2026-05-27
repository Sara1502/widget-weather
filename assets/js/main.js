

navigator.geolocation.getCurrentPosition(
    function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat, lon);
    },
    function (error) {
        alert('This browser does not suport geolocation')
    }
);
