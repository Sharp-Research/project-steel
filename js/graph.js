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
      }
      ]
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
  new Chart(customerChart, myChartObj);
}

// Calling the renderChart function
renderChart();
