let map, directionsService, directionsRenderer;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 41.85, lng: -87.65 }, // default Chicago
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map);
}

window.onload = initMap;

function calculateRoute() {
  const originInput = document.getElementById("origin");
  const destinationInput = document.getElementById("destination");

  const origin = originInput.value;
  const destination = destinationInput.value;

  if (!origin || !destination) {
    alert("Please enter both origin and destination");
    return;
  }

  const request = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING,
  };

  directionsService.route(request, (result, status) => {
    if (status === "OK") {
      directionsRenderer.setDirections(result);
    } else {
      alert("Directions request failed: " + status);
    }
  });
}
