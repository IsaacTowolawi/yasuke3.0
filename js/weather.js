let weather ={
    "apiKey": "ccbc725dbc2560181fc0ec86eab99c03",
   
    fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=ccbc725dbc2560181fc0ec86eab99c03").then((Response) => Response.json())
        .then((data) => console.log(data));
    },
};