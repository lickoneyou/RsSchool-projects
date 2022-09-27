// calendar
const time = document.querySelector('.time');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.innerHTML = currentTime;
  }
  showTime();
  setInterval(showTime, 1000);

const dates = document.querySelector('.dates');

function showDate() {
const date = new Date();
const options = {month: 'long', weekday: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-US', options);
dates.innerHTML = currentDate;
  }
  showDate();
  setInterval(showDate, 1000);

  // calendar end

// Greeting
const greeting = document.querySelector('.greeting');

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    if ( hours >= 6 && hours < 12){
        return 'Good morning'
    }
    if ( hours >= 12 && hours < 18){
        return 'Good afternoon'
    }
    if ( hours >= 18 && hours != 0){
        return 'Good evening'
    }
    if ( hours >= 0 && hours < 6){
        return 'Good night'
    }
      }
      greeting.innerHTML = showGreeting();

      
      const name = document.querySelector('.name');

      function setLocalStorage() {
        localStorage.setItem('name', name.value);
      }
      window.addEventListener('beforeunload', setLocalStorage)

      function getLocalStorage() {
        if(localStorage.getItem('name')) {
          name.value = localStorage.getItem('name');
        }
      }
      window.addEventListener('load', getLocalStorage)
//Greeting end

//Slider

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  if ( hours >= 6 && hours < 12){
      return 'morning'
  }
  if ( hours >= 12 && hours < 18){
      return 'afternoon'
  }
  if ( hours >= 18 && hours != 0){
      return 'evening'
  }
  if ( hours >= 0 && hours < 6){
      return 'night'
  }
    }
    getTimeOfDay()


const body = document.querySelector('.body');
function getRandomz() {
    return Math.floor(Math.random() * 19 + 1);
  }

const setBg = () => {
        const timeOfDay = getTimeOfDay();
        const bgNum = getRandomz();
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/lickoneyou/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
        img.onload = () => {  
        body.style.backgroundImage = `url(${img.src})`;
        }
      }
      setBg()

      const slidePrev = document.querySelector('.slide-prev');
      const slideNext = document.querySelector('.slide-next');
      let numbr = 1

      slideNext.addEventListener('click', function(){
        let randomNum = getRandomz.toString();
    if (randomNum === 20) {
      randomNum = 1;
    } else {
      randomNum = randomNum + 1;
    }
    setBg();
      })

      slidePrev.addEventListener('click', function(){
        let randomNum = getRandomz.toString();
    if (randomNum === 1) {
      randomNum = 20;
    } else {
      randomNum = randomNum + 1;
    }
    setBg();
      })



//Slider end
// weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

let url = `https://api.openweathermap.org/data/2.5/weather?q=minsk&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;

async function getWeather() {
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf'
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = Math.round(data.main.temp) + '°C';
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = 'Wind speed: ' + Math.round(data.wind.speed) + ' ' + 'm/s';
  humidity.textContent = `Humidity: ${data.main.humidity}%`;

}
getWeather()

const city = document.querySelector('.city');

city.addEventListener('change', function(){
url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
getWeather()
})

function setLocalStorages() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorages)

function getLocalStorages() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocalStorages)
// weather end

// (C)

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const quotess = [
  { 
  "quote" : "The only sin is ignorance", 
  "source" : "Christopher Marlowe" 
  },
  {
  "quote" : "A man is his own easiest dupe, for what he wishes to be true he generally believes to be true", 
  "source" : "Demosthenes"
  },
  {
  "quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
  "source" : "Mark Twain"
  },
  {
    "quote" : "If I’m gonna tell a real story, I’m gonna start with my name.", 
    "source" : "Kendrick Lamar"
    },
    {
      "quote" : "Have enough courage to start and enough heart to finish", 
      "source" : "Jessica N. S. Yourko"
      },
      {
        "quote" : "Hate comes from intimidation, love comes from appreciation.", 
        "source" : "Tyga"
        },
        {
          "quote" : "I could agree with you but then we’d both be wrong.", 
          "source" : "Harvey Specter"
          },
          {
            "quote" : "Determine your priorities and focus on them.", 
            "source" : "Eileen McDargh"
            }
 ]

function randomQuote() {
  let random = quotess[Math.floor(Math.random() * quotess.length)];
  quote.innerText = `“${random.quote}.”`;
  author.innerText = random.source;
}
randomQuote();

changeQuote.addEventListener('click', function(){
  randomQuote();
})

// (C) end 

// Audio player
const audio = document.querySelector('audio');
const playPrev = document.querySelector('.play-prev');
const plays = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playList = [
  {      
    title: 'Aqua Caelestis',
    src: 'assets/sounds/Aqua Caelestis.mp3',
    duration: '00:58'
  },  
  {      
    title: 'River Flows In You',
    src: 'assets/sounds/River Flows In You.mp3',
    duration: '03:50'
  },
  {      
    title: 'Ennio Morricone',
    src: 'assets/sounds/Ennio Morricone.mp3',
    duration: '01:37'
  },
  {      
    title: 'Summer Wind',
    src: 'assets/sounds/Summer Wind.mp3',
    duration: '01:50'
  },
]

let numTrack = 0;

function toggleBtn() {
  plays.classList.toggle('pause');
}
plays.addEventListener('click', toggleBtn);


let isPlay = false;

function playAudio() {
    if (!isPlay) {
    audio.src = playList[`${numTrack}`].src;
     isPlay = true
     audio.play();
    }
  else if (isPlay === true) {
  isPlay = false
  audio.pause();
  }
  }

  plays.addEventListener('click', playAudio)


   function playNexts() {
  for(let i = 0; i < playList.length; i++) {
    if ( i <= 3){
      numTrack = numTrack + 1
      audio.src = playList[`${numTrack}`].src;
      audio.play();
    }
if (i > 3) {
  numTrack = 0;
  audio.src = playList[`${numTrack}`].src;
  audio.play();
}
  }
  console.log(numTrack)
}

function playPrevs(){
  if (numTrack > 0) {
  numTrack--
  audio.src = playList[`${numTrack}`].src;
  audio.play();
}
else {
  numTrack = 3
}
console.log(numTrack)
}


playPrev.addEventListener('click', playPrevs)
playNext.addEventListener('click', playNexts)
// Audio player end
  