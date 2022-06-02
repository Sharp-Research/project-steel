'use strict';

//***********DOM references***********
let customerData = document.getElementById('myForm');
let shwoResultsBtn = document.getElementById('show-result-btn');

//***********Constructor***********
function User(name, weight, workout, time) {
  this.name = name;
  this.weight = weight;
  this.workout = workout;
  this.aveCal = 0;
  this.userCal = 0;
  this.time = time;
  User.workoutType.push(this);
}
User.workoutType = [];

// Function that calculates the calories burned per exercise
// Forumla used from https://burned-calories.com
User.prototype.getUserCal = function () {
  let userCal = (this.weight / 2.2) * this.aveCal * 0.075 * this.time;
  console.log(userCal);
  this.userCal += Math.floor(userCal);
};

// This function determines the MET (Metabolic Equivalent of Task) represented by this.aveCal which is a variable in the equation in User.prototype.getUserCal
User.prototype.aveCalories = function () {
  if (this.workout === 'Push Up') {
    this.aveCal = 9;
  } else if (this.workout === 'Sit-Up') {
    this.aveCal = 8;
  } else if (this.workout === 'Jumping Jack') {
    this.aveCal = 7;
  } else if (this.workout === 'Squat') {
    this.aveCal = 5;
  } else if (this.workout === 'Burpee') {
    this.aveCal = 8;
  } else if (this.workout === 'Running') {
    this.aveCal = 11;
  }
  return this.aveCal;
};

//***********Event Handlers***********
function handleClick(event) {
  event.preventDefault();

  let name = event.target.userName.value;
  let weight = +event.target.userWeight.value;
  let workout = event.target.activities.value;
  let time = +event.target.time.value;
  let newUser = new User(name, weight, workout, time);
  newUser.aveCalories();
  newUser.getUserCal();

  // Step 1 of data storage: Stringify data from User.workoutType array
  let stringifiedUsers = JSON.stringify(User.workoutType);

  // Step 2: store data to local system
  localStorage.setItem('userInfo', stringifiedUsers);
  console.log(stringifiedUsers);
  console.log(newUser);
}

// Redirect the user to graph.html upon clicking "view performance chart"
function handleShowResult() {
  window.location.assign('graph.html');
}

//***********Event listeners***********
customerData.addEventListener('submit', handleClick);
shwoResultsBtn.addEventListener('click', handleShowResult);
