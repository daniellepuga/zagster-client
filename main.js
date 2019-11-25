const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateGraph() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data : {
            labels: ['January', 'February', 'March', 'April', 'June', 'July'],
            database: [{
                label: 'My first dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        }
    })
    options: {}
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}