// a memory location that never changes

const BASE_URL = "https://zagster-service.herokuapp.com"
const PI = 3.14159


//jQuary command. Wait until web page loads call function
// Whose name is in parenthesis
// function call nmeans run the code

//$(greeter)
add(2,3);
//greeter is the function identifier. name is the function
//argument (info it needs to do its job)
function add(num1, num2){
  answer = num1 + num2;
  console.log("The answer is: " + answer);
  return answer;
}

function greeter(name){
  alert("Welcome to " + name + " data visualization.")
}

greeter("Danielle Puga's")

var person = {name: "Danielle", age: 23, car:{model: "Jetta", year: 2017}}
console.log ("My name is " + person.name)
console.log ("My age is " + person.age)
console.log ("My car model is " + person.car.model)

if (person.age > 50){
  alert("You're old")
}
var data = {"2016": [{"9":220},{"10":141},{"11":89},{"12":16}]}
var year_list = data[2016]
console.log('year list is ' + year_list)

console.log(year_list[0][9])
console.log(year_list[1][10])
console.log(year_list[2][11])
console.log(year_list[3][12])

$(updateView)

let years = []
let months2016 = []
let months2017 = []
let months2018 = []

function updateView() {
  $.getJSON(BASE_URL + "/rides/count", updateRideCount)

  $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),).then(updateChart);
}

function perYear(data) {
  for (var index = 0, month = 9; index <=3, month <=12; ++index, ++month){
    months2016.push(data[2016] [index] [month]);
  }
  console.log("2016 data by months is easy " + months2016)
}
for (var index = 0, month = 1; index <=11, month <=12; ++index, ++month){
  months2017.push(data[2017] [index] [month]);
}
console.log("2017 data by months is  " + months2017)

  for (var index = 0, month = 1; index <=data.length, month <=10; ++index, ++month){
    months2018.push(data[2018] [index] [month]);
  }
  console.log("2018 data by months is  " + months2018)

//add phone pic here & commit as exercise 16
// $(updateGraph)

// function updateView() {
//   $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
// }

// function updateGraph() {
//   var ctx = document.getElementById('myChart').getContext('2d');
//   var chart = new Chart(ctx, {
//       // The type of chart we want to create
//       type: 'line',
  
//       // The data for our dataset
//       data: {
//           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//           datasets: [{
//               label: 'My First dataset',
//               backgroundColor: 'rgb(255, 99, 132)',
//               borderColor: 'rgb(255, 99, 132)',
//               data: [0, 10, 5, 2, 20, 30, 45]
//           }]
//       },
  
//       // Configuration options go here
//       options: {}
//   });

// // function updateRideCount(data) {
// //   numberOfRides = data.count
// //   $("h2#rideCount").html(numberOfRides)
// }