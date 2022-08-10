var apiKey = "3641a3ebb47542661e5d31bae15f30e1";
var searchForm = document.getElementById('search');
var searchInput = document.getElementById('searchInput');
var searchButton = document.getElementById('submitButton');
var prevSearches = document.getElementById('prevSearches');
var currentCity = document.getElementById('currentCity');
var fiveDay = document.getElementById('fiveDayForcast')

function cityStringMaker(event) {
  event.preventDefault();
  var searchURL = 'https://api.openweathermap.org/data/2.5/weather?q='
                  + searchInput
                  + '&appid=' + apiKey;
  if (event) {
    fetch(searchURL).then(function (response) {
      if(response.ok) {
        response.json().then(function (data) {
          displayWeather(data)
        })
      } else {
        alert('Error: '+ response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Weather Service');
    });
  };
};

function displayWeather(city) {
  var cityEl = document.createElement('a');
  cityEl.classList = 'list-item flex-row justify-space-between align-center';
  cityEl.setAttribute('href', city.html_url);
  cityEl.setAttribute('target', '_blank');

  var cityInfo = document.createElement('span');
  cityInfo.textContent = city.name;
  prevSearches.appendChild(cityInfo);

  var typeEl = document.createElement('span');
};

searchButton.addEventListener('submit', cityStringMaker)

var philly = 'https://api.openweathermap.org/data/2.5/weather?q=philadelphia&appid=' + apiKey + '&units=imperial';

