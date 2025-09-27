let map, directionsService , directionsRenderer;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: { lat: 41.85, lng: -87.65 }, //default center 
    });

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    //add Autocompletes 
    const originInput = new google.maps.places.Autocomplete(
        document.getElementById("origin")
    )

    const destinationInput = new google.maps.places.Autocomplete(
        document.getElementById("destination")
    )

} ;

window.onload = initMap;

function calculateRoute() {
    const origin = document.getElementById("origin").value;
    const destination = document.getElementById("destination").value;

    if(!origin || !destination){
        alert("Please enter both origin and destination");
        return;
    }
    const request = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request,(result,status) => {
        if(status === "OK"){
            directionsRenderer.setDirections(result);

        } else {
            alert("Direction request Failed")
        }
    })

}