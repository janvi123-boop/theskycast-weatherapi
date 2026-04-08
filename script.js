const apiKey = "44ae101e59e9f6ba7bfa451a120f69bb";
const input=document.getElementById("cin");
let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    const city=input.value;
    console.log(city);
    getweather(city);
});
input.addEventListener("keydown",function(e){
    if(e.key=="Enter"){
        getweather(input.value);
    }
});
let c=document.querySelector("#c");
let t=document.querySelector("#t");
let wd=document.querySelector("#wd");
let h=document.querySelector("#h");
let err=document.querySelector("#error");
let icon=document.querySelector("#icon");
let wm="❓";
async function getweather(city){
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data=await response.json();
    console.log(data);
    if(data.cod=="404"){
        err.innerText="Invalid city name.try again!!"
        c.innerText="";
        t.innerText="";
        wd.innerText="";
        h.innerText="";
        input.value="";
        icon.innerText="";
        document.body.style.backgroundColor = "#bfdbfe"; 
        document.body.style.backgroundImage = "none";
    }
    else{
        c.innerText="city-\n"+city;
        t.innerText="temperature-\n"+data.main.temp+"\u00B0C";
        wd.innerText="Weather-\n"+data.weather[0].description;
        h.innerText="humidity="+data.main.humidity+"%";
        input.value="";
        err.innerText="";
        wm=data.weather[0].main;
        icon.innerText=icons[wm] ;
        document.body.style.backgroundImage = bgImages[wm];
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
    }
}
const icons = {
  Clear: "☀️",
  Clouds: "☁️",
  Rain: "🌧️",
  Drizzle: "🌦️",
  Thunderstorm: "⛈️",
  Snow: "❄️",
  Mist: "🌫️",
  Fog: "🌫️",
  Haze: "🌫️"
};
const bgImages = {
  Clear: "url('clear.jpg')",
  Clouds: "url('cloud.jpg')",
  Rain: "url('rain.jpg')",
  Drizzle: "url('drizzle.jpg')",
  Thunderstorm: "url('thunderstorm.jpg')",
  Snow: "url('snow.jpg')",
  Mist: "url('fog.jpg')",
  Fog: "url('fog.jpg')",
  Haze: "url('haze.jpg')"
};
icon.style.fontSize = "50px";
function preloadImages() {
  const imageFiles = [
    "clear.jpg", "cloud.jpg", "rain.jpg", "drizzle.jpg",
    "thunderstorm.jpg", "snow.jpg", "fog.jpg", "haze.jpg"
  ];
  imageFiles.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}
preloadImages();