let inputSearch = document.querySelector(".search");
let searchBtn = document.querySelector(".Btn");

const fetchDat = async() => {
    let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearch.value}&appid=a7c5ee73587dfb323b63bb7bb38facf0`);

    let data = await responce.json();
    console.log(data)
    let content = document.querySelector(".content");
    let error = document.querySelector(".error");
    if(responce.status >= "400") {
        content.style.display = "none";
        error.style.display = "block"
    }
    else {
        error.style.display = "none"
        content.style.display = "flex";

    }
     temp = document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
     city = document.querySelector(".city").innerText = data.name;
     humi = document.querySelector(".humidity").innerText = data.main.humidity + "%";
     wind = document.querySelector(".wind").innerText = data.wind.speed + "km/h"

    let img = document.querySelector(".image");
    if (data.weather[0].main === "Rain") {
        img.src = "/images/rainy.png"
    }
    if (data.weather[0].main === "Clear") {
        img.src = "/images/sunny.png"
    }
    if (data.weather[0].main === "Storm") {
        img.src = "/images/stormy.png"
    }
    if (data.weather[0].main === "Clouds") {
        img.src = "/images/cloud.png"
    }
    if (data.weather[0].main === "Smoke") {
        img.src = "/images/snowy.png"
    }
}

searchBtn.addEventListener('click', () => {
    fetchDat();
})