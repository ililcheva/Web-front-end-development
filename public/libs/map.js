// $(window).on('load', () => {
//     const googleMapsScript = document.createElement("script");
//     googleMapsScript.src= 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBUKkA-pjBrf4LQDBEdZuDX4s6LmWXQeTo&callback=initMap';
//     googleMapsScript.defer = true;
//     googleMapsScript.async = true;
//     $('body').append(googleMapsScript);
// })
function initMap() {
    setTimeout(() => {
        const coords = { lat: 45.485991, lng: -73.720693 };
        map = new google.maps.Map(document.getElementById('map'), {
            center: coords,
            zoom: 16
        });
        marker = new google.maps.Marker({
            map: map,
            position: coords
        });
    }, 2000);
}
