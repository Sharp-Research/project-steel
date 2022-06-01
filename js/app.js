'use strict';

console.log('hello project steel!');

//***********Global variables***********
// let busmallCount = 25;
let userData = [];

//***********DOM references***********
let customerData = document.getElementById('myForm');
let workoutData = document.getElementById('workouts');


// ********** CANVAS REFERENCE ***************
let customerChart = document.getElementById('my-chart');

//***********Constructor***********
let workoutType = [];
function User(name, weight, workout, time) {
  this.name = name;
  this.weight = weight;
  // this.workoutType = type;
  this.workout = workout;
  this.aveCal = 0;
  this.userCal = 0;
  this.time = time;
  workoutType.push(this);
}

User.prototype.getUserCal = function () {
  let userCal = (this.weight / 2.2) * this.aveCal * 0.075 * this.time;
  console.log(userCal);
  this.userCal += userCal;
  return userCal;
};

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

User.prototype.aveCalories = function () {
  if (this.workout === 'Push Up') {
    this.aveCal += 9;
  }else if (this.workout === 'Sit-Up') {
    this.aveCal += 8;
  } else if (this.workout === 'Jumping Jack') {
    this.aveCal += 7;
  } else if (this.workout === 'Squat') {
    this.aveCal += 5;
  }
  return this.aveCal;
};


//********Chart render function***********
function renderChart() {
  let userName = [];
  let userCalories = [];

  for (let i = 0; i < workoutType.length; i++) {
    userName.push(workoutType[i].name);
    userCalories.push(workoutType[i].userCal);
  }
  let myChartObj = {
    type: 'bar',
    data: {
      labels: userCalories,
      datasets: [{
        label: '# of Calories',
        data: userCalories,
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
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(customerChart, myChartObj);
}

//***********Event Handlers***********
function handleClick(event) {
  // let submitClicked = event.target.alt;
  event.preventDefault();
  let name = event.target.userName.value;
  let weight = +event.target.userWeight.value;
  let workout = event.target.activities.value;
  let time = +event.target.time.value;
  let newUser = new User(name, weight, workout, time);
  newUser.aveCalories();
  newUser.getUserCal();
  console.log(newUser);
}


renderChart();
//***********Event listeners***********
customerData.addEventListener('submit', handleClick);
