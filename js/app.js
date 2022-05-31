'use strict';

console.log('hello project steel!');

//***********Global variables***********
// let busmallCount = 25;
let userData = [];

//***********DOM references***********
let customerData = document.getElementById('myForm');
let workoutData = document.getElementById('workouts');

// ********** CANVAS REFERENCE ***************
// let ctx = document.getElementById('my-chart').getContext('2d');

//***********Constructor***********
let workoutType = [];
function User(name, weight, workout, time) {
  this.name = name;
  this.weight = weight;
  // this.workoutType = type;
  this.workout = workout;
  this.time = time;
  workoutType.push(this);
}

User.prototype.getUserCal = function () {
  let userCal = (this.weight / 2.2) * aveCal * 0.075 * this.time;
  console.log(userCal) 
  return userCal;
}

// ***function Workout()

//*************local storage part 2 */

//step 3: geit it out of the local storage

// let retrivedItems = localStorage.getItem('busmallItems');

// Parse data for reuse

// let parsedItems = JSON.parse(retrivedItems);
// console.log('Parsed >>>>', parsedItems);

// if (retrivedItems) {
//   busmallItems = parsedItems;
// }
// else {
//   new Busmall('sweep', 'png');
//   new Busmall('bag');
//   new Busmall('banana');

//***********Helper functions/Executable code***********

function aveCal() {

  if (workoutType = "Push Up") {
    aveCal = 9;
  }else if (workoutType = "Sit Up") {
    aveCal = 8;
  } else if (workoutType = "Jumping Jacks") {
    aveCal = 7;
  } else if (workoutType = "Squat") {
    aveCal = 5;
  }
}

//********Chart render function*********** 
function renderChart() {
  let busmallNames = [];
  let busmallVotes = [];
  let busmallViews = [];

  for (let i = 0; i < busmallItems.length; i++) {
    busmallNames.push(busmallItems[i].name);
    busmallVotes.push(busmallItems[i].votes);
    busmallViews.push(busmallItems[i].views);
  }
  let myChartObj = {
    type: 'bar',
    data: {
      labels: busmallNames,
      datasets: [{
        label: '# of Votes',
        data: busmallVotes,
        backgroundColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: busmallViews,
        backgroundColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderColor: [
          '#ff0000',
          '#ff7300',
          '#fffb00',
          '#48ff00',
          '#00ffd5',
          '#002bff',
          '#7a00ff',
          '#ff00c8',
          '#ff0000'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, myChartObj);
}
//***********Event Handlers***********
function handleClick(event) {
  // let submitClicked = event.target.alt;
  event.preventDefault();
  let name = event.target.userName.value;
  let weight = +event.target.userWeight.value;
  let time = +event.target.time.value
  let newUser = new User(name, weight, 'push up');
  console.log(newUser)


}

  function handleShowResult() {
    let chart = document.getElementById('chart-container');
    chart.hidden = false;
    if (busmallCount === 0) {
      renderChart();

  //***********Event listeners***********
  document.getElementById('myForm').addEventListener('submit', handleClick);
 