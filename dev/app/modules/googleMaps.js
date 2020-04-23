export default function initMap() {
    let coordinates = {lat: -22.999075, lng: -43.348948},
        map = new google.maps.Map(document.querySelector(".main-map__google-map"), {
            center: coordinates,
            zoom: 17
        });

    // let markerImage = {
    //     url: './img/content/icon_map-marker.png',
    //     size: new google.maps.Size(24, 36),
    //     origin: new google.maps.Point(0, 0),
    //     anchor: new google.maps.Point(10, 0)
    // };
    let marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        // icon: markerImage,
        // height: 32,
        // width: 24,
    });
}

