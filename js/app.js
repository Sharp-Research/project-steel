'use strict';

console.log('hello project steel!');

//***********Global variables***********
// let busmallCount = 25;
let userData = [];

//***********DOM references***********
let customerData = document.getElementById('myForm');
let workoutData = document.getElementById('workouts');
// let imgOne = document.getElementById('img-one');
// let imgTwo = document.getElementById('img-two');
// let imgThree = document.getElementById('img-three');
// let shwoResultsBtn = document.getElementById('show-result-btn');
// let resultsList = document.getElementById('results-list');

// ********** CANVAS REFERENCE ***************
// let ctx = document.getElementById('my-chart').getContext('2d');

//***********Constructor***********
let workoutType = [];
function User(name, weight, workout) {
  this.name = name;
  this.weight = weight;
  this.workoutType = type;
  this.avgCal = avgCal;
  this.workout = workout;
  userData.push(this);
  type.push(this);
}

User.prototype.getUserCal = function () {
  let userCal = (weight / 2.2) * aveCal * 0.075 * this.time;
  return;
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
  let imgClicked = event.target.alt;

  for (let i = 0; i < busmallItems.length; i++) {
    if (imgClicked === busmallItems[i].name) {
      busmallItems[i].votes++;
    }
  }

  renderImgs();

  if (busmallCount === 0) {
    imgContainer.removeEventListener('click', handleClick);
    // renderChart();
  }

  // ******** LOCAL STORAGE PART 1 ************

  //   // STEP 1: STRINGIFY DATA
  //   let stringifieItems = JSON.stringify(busmallItems);

  //   console.log(stringifieItems);

  //   // STEP 2: ADD TO LOCAL STORAGE
  //   localStorage.setItem('busmallItems', stringifieItems);

  // }

  function handleShowResult() {
    let chart = document.getElementById('chart-container');
    chart.hidden = false;
    if (busmallCount === 0) {
      renderChart();
      //     for (let i = 0; i < busmallItems.length; i++) {
      //       let liElement = document.createElement('li');
      //       liElement.textContent = `${busmallItems[i].name} showed ${busmallItems[i].views} times and voted for ${busmallItems[i].votes}
      // times.`;
      //       resultsList.appendChild(liElement);
      //     }
    }
  }
  //***********Event listeners***********
  workOutContainer.addEventListener('click', handleClick);
  // shwoResultsBtn.addEventListener('click', handleShowResult);