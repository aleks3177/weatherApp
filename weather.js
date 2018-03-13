class Weather{
  constructor(city, state){
    this.apiKey = 'b138bcc527f828f5';
    this.city = city;
    this.state = state;
    this.autoIP = 'autoip';
  }

  // Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

   // Fetch weather from API
   async getAutoWeather(){
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/geolookup/q/${this.autoIP}.json`);

    const responseData = await response.json();

    return responseData.location;
  }

  // Change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}