 var apiKey = "3641a3ebb47542661e5d31bae15f30e1";
 var citySearchEl = document.getElementById('search');
 var searchBarEl = document.getElementById('city');
 var searchButton = document.getElementById('submitButton');
 var prevSearches = document.getElementById('prevSearches');
 var currentCity = document.getElementById('currentCity');
 var fiveDay = document.getElementById('fiveDayForcast')

//  var weather = {
//       var city = {
//       name: "", 
//       currentDate: ,
//       weather {
//             icon, 
//             temp, 
//             humidity, 
//             wind speed, 
//             uv index {
//                color indicator: favorable, 
//                                  modearate,
//                                  severe
//       }, 
//       5-day {
//          date, 
//          icon, 
//          temp, 
//          wind speed, 
//          humidity
//       }
//    }

console.log('https://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=' + apiKey);
var philly = 'https://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=' + apiKey + '&units=imperial';

function getApi() {
   var requestUrl = philly;
 
   fetch(requestUrl)
     .then(function (response) {
       return response.json();
     })
     .then(function (data) {
       console.log(data);
      //  for (var i = 0; i < data.length; i++) {
      //    var userName = document.createElement('h3');
      //    var issueTitle = document.createElement('p');
      //    userName.textContent = data[i].user.login;
      //    issueTitle.textContent = data[i].title;
      //    issueContainer.append(userName);
      //    issueContainer.append(issueTitle);
      //  }
     });
 }
//  submitButton.addEventListener('click', getApi);
 getApi();

// function getApi() {
//    var cityName = 
//    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
 
//    fetch(requestUrl)
//      .then(function (response) {
//        return response.json();
//      })
//      .then(function (data) {
//        console.log(data);
//        for (var i = 0; i < data.length; i++) {
//          var userName = document.createElement('h3');
//          var issueTitle = document.createElement('p');
//          userName.textContent = data[i].user.login;
//          issueTitle.textContent = data[i].title;
//          issueContainer.append(userName);
//          issueContainer.append(issueTitle);
//        }
//      });
//  }
//  fetchButton.addEventListener('click', getApi);
 