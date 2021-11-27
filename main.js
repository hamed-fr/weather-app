// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=88d39285a5f490f6b1f2e7138910b9be&units=metric
const form = document.querySelector("form");
const input = document.querySelector("input");
const msg = document.querySelector(".msg");
const li = document.querySelector(".cities");

const apiKey = "d0f16e1380d0d711ba807a58dd2f0c54";

form.addEventListener("submit", e => {
    e.preventDefault();
let inputVal = input.value;
let url =`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}=metric`;
console.log(url);
fetch(url)
.then(Response =>Response.json())
.then(data => console.log(data))
})