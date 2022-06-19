'use strict'

// SELECTOR
const form = document.querySelector('form')
const input = document.querySelector('.input')
const butt = document.querySelector('.butt')
  const msg = document.querySelector('.msg')
  const list = document.querySelector('.cities')
// console.log(form, butt)
// CODE
const apiKey = '869756b306cd8ce1d7d03ff5d3028a70'
let inputVal;


form.addEventListener('submit', function(e){
    e.preventDefault()
   inputVal = input.value
   const listItems = list.querySelectorAll('.city')
let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`

  
 fetch(url)
  .then(response => response.json())
  .then(data => {  
    // console.log(data)
    const {main, name, sys, weather } = data
const icon = `https://openweathermap.org/img/wn/${
  weather[0]["icon"]
}@2x.png`;

const li = document.createElement('li')
li.classList.add('city')
const markup = `
<h2 class="city-name" data-name="${name},${sys.country}">
<span>${name}</span> 
<sup>${sys.country}</sup>
</h2>

<div class="city-temp">${Math.round(main.temp) - 273}<sup>°C</sup></div>

<figure>
<img src="${icon}" alt="${weather[0]['main']}" class="city-icon">
<figcaption>${weather[0]['description']}</figcaption>
</figure>
`
li.innerHTML = markup;
list.appendChild(li)

msg.textContent= ''
form.reset()
input.focus()
})
  .catch( (e) => {
       msg.textContent = "Please search for a valid city 😩"
  })
});








