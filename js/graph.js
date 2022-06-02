'use strict';

//***********DOM references***********
let customerChart = document.getElementById('my-chart');
let getCalorieTotal = document.getElementById('totalCals');
let getWeightLoss = document.getElementById('weightLoss');
let totalCalories = 0;
let totalWeightLoss = 0;


// This function is from Chart.js which we are using to take the data from local storage and produce a bar chart to the "Performance Chart" page or graph.html
function renderChart() {
  let userName = [];
  let userCalories = [];
  // Step 3 of local storage ********** Get out of local storage **********/
  let retrievedUsers = localStorage.getItem('userInfo');

  // Step 4 of local storage ********** Parse Data for code **********/
  let parsedUsers = JSON.parse(retrievedUsers);
  console.log(parsedUsers);

  // This for loop goes through the data from local storage "parsedUsers" and pushes it to empty arrays to produce the data for the chart axis. In addition it calculates the total calories.
  for (let i = 0; i < parsedUsers.length; i++) {
    userName.push(parsedUsers[i].workout);
    userCalories.push(parsedUsers[i].userCal);
    totalCalories += Math.floor(parsedUsers[i].userCal);
    console.log(totalCalories);
  }
  Math.floor(getCalorieTotal.append(totalCalories));
  totalWeightLoss += (totalCalories/3500);
  getWeightLoss.append(totalWeightLoss.toFixed(2));
  let myChartObj = {
    type: 'bar',
    data: {
      labels: userName,
      datasets: [{
        label: '# of Calories',
        data: userCalories,
        backgroundColor: [
          '#006466',
          '#065A60',
          '#0b525b',
          '#144552',
          '#1b3a4b',
          '#212f45',
          '#272640',
          '#312244'
        ],
        borderColor: [
          '',
          '#dee2e6',
          '#dee2e6',
          '#dee2e6',
          '#dee2e6',
          '#dee2e6',
          '#dee2e6',
          '#dee2e6'
        ],
        borderWidth: 1
      }
      ]
    },
    options: {
      scaleFontColor: '#dee2e6',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: 'black',
          }
        },
        x: {
          ticks: {
            color: 'black',
          }
        }
      }
    }
  };
  new Chart(customerChart, myChartObj);
}

// Calling the renderChart function
renderChart();
