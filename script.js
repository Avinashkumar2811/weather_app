const apikey = "c4ce13121d3b81fe7eae0377cac65b14";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericons = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main =="clouds"){
        weathericons.src="images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weathericons.src="images/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weathericons.src="images/rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weathericons.src="images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weathericons.src="images/mist.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    
}

searchBtn.addEventListener("click", function() {
    checkweather(searchBox.value);
});
