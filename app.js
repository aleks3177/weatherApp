// Init storage
const storage = new Storage();

// Get storage location data
const weatherLocation = storage.getLocation();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init weather object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w_change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value.toUpperCase();
  const state = document.getElementById('state').value.toUpperCase();

  // Change location
  weather.changeLocation(city, state);

  // Set location in local storage
  storage.setLocation(city, state);
  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}

// function getAutoWeather(){
//   weather.getAutoWeather()
//   .then(results => 
//     {
//       console.log(results)
//       ui.paint(results)
//     }
//     )
//   .catch(err => console.log(err));
// }