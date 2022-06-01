'use strict';

let customerChart = document.getElementById('my-chart');
let getCalorieTotal = document.getElementById('totalCals');
let totalCalories = 0;

function renderChart() {
  let userName = [];
  let userCalories = [];
  // Step 3 ********** Get out of local storage **********/
  let retrievedUsers = localStorage.getItem('userInfo');

  // Step 4 ********** Parse Data for code **********/
  let parsedUsers = JSON.parse(retrievedUsers);
  console.log(parsedUsers);


  for (let i = 0; i < parsedUsers.length; i++) {
    userName.push(parsedUsers[i].workout);
    userCalories.push(parsedUsers[i].userCal);
    totalCalories += Math.floor(parsedUsers[i].userCal);
    console.log(totalCalories);
  }
  Math.floor(getCalorieTotal.append(totalCalories));
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
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(customerChart, myChartObj);
}

renderChart();
