const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function getWeather(city){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a16841ab03a0d8718af0e9c3ddbf9d5&&units=metric`);
    var data = await res.json();
    console.log(data)
document.querySelector('.celcius').innerHTML= Math.round(data.main.temp) + "C";
document.querySelector('.city').innerHTML= data.name ;
document.querySelector('.humidityP').innerHTML=  Math.round(data.main.humidity) + "%";
document.querySelector('.windS').innerHTML= Math.round(data.wind.speed) + "km/h";
}

searchBtn.addEventListener('click' ,()=>{
    getWeather(searchInput.value);
})