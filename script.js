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
        document.body.style.backgroundColor="blue-200";
    }
    else{
        c.innerText=city;
        t.innerText=data.main.temp+"\u00B0C";
        wd.innerText=data.weather[0].description;
        h.innerText="humidity="+data.main.humidity+"%";
        input.value="";
        err.innerText="";
        wm=data.weather[0].main;
        icon.innerText=icons[wm] ;
        document.body.style.backgroundColor = bgColors[wm];

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
const bgColors = {
  Clear: "#87CEEB",       
  Clouds: "#B0C4DE",     
  Rain: "#4682B4",        
  Drizzle: "#5F9EA0",     
  Thunderstorm: "#2F4F4F",
  Snow: "#E0FFFF",        
  Mist: "#778899",        
  Fog: "#708090",
  Haze: "#C0C0C0"
};

