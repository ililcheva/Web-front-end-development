const initMap = () => {
    const coords = { lat: 45.485991, lng: -73.720693 };
    const map = new google.maps.Map(document.getElementById('map'), {
            center: coords,
            zoom: 16
    });
    const marker = new google.maps.Marker({
            map: map,
            position: coords
    });
}

export {initMap};
