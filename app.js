// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=4ccbb32f9b3a6e1b3ec5f5770b382113&units=metric;

let form=document.querySelector(".top-banner form");
let input=document.querySelector(".top-banner input");
let msg=document.querySelector(".top-banner .msg");
let list=document.querySelector(".ajax-section .cities");

let apiKey="4ccbb32f9b3a6e1b3ec5f5770b382113";

form.addEventListener("submit",beta => {
    beta.preventDefault();
    let inputvalue=input.value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=${apiKey}&units=metric;`
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        let {main,name,sys,weather}=data
        let icon=`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
        let li=document.createElement("li");
        li.classList.add("city");
        let markup=`
        <h2 class='city-name' data-name=${name},${sys.country}>
        <span>${name}</span>
        <span>${sys.country}</span>
        </h2>
        <div class='city-temp'>${Math.round(main.temp)}</div>
        <figure>
        <img class='city-icon' src='${icon}' alt='city'>
        <figurecaption>${weather[0]["description"]}</figurecaption>
        </figure>`
        li.innerHTML=markup;
        list.appendChild(li);
        msg.innerText = "";
    })
    .catch(()=>{
        msg.innerHTML="Invalid city"
    })
    input.value = ""
});

