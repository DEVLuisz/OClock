/*==================== RELOGIOO ====================*/
const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    // Adicionando a rotação, em relação aos ponteiros
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s

/*==================== CLOCK & DATE TEXTO ====================*/
const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textSeconds = document.getElementById('clock__text-seconds'),
    textAmPm = document.getElementById('text-ampm'),
    dateWeek = document.getElementById('date-day-week'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        sc = date.getSeconds(),
        day = date.getDate(),
        dayweek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear()



    /*    
    // Mudando a hora, deixando do jeot US
    if (hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    // Detectando se é  0 AM para transformar em 12 AM
    if (hh == 0) {
        hh = 12
    }
*/
    // Mostrando um zero nas horas
    if (hh < 10) {
        hh = `0${hh}`
    }

    //Mostrando zero nos segundos
    if(sc <10){
        sc = `0${sc}`
    }

    // Show time
    textHour.innerHTML = `${hh}:`

    // Mostrando zero nos minutos
    if (mm < 10) {
        mm = `0${mm}`
    }

    // Mostrando os minutos
    textMinutes.innerHTML = mm

    /*
    // Show am or pm
    textAmPm.innerHTML = ampm
*/
     


    textSeconds.innerHTML = sc;

    // Dias da semana
    let week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

    // Pegando e mostrando o mes
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezemrbo']

    // Dia, semana, mes e ano
    dateDay.innerHTML = day
    dateWeek.innerHTML = `${week[dayweek]}`
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000) // 1000 = 1s

/*==================== DARK/LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


//Temperatura

const CITY = document.getElementById('city');
const TEMPERATURE = document.getElementById('temperature');
const URL_MAIN = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '8f57cb746c4c1d4b48b7f35eba6f6230';
const UNITS = 'metric';

navigator.geolocation.getCurrentPosition(loadUrl);

function loadUrl(pos) {
  let lat = pos.coords.latitude;
  let long = pos.coords.longitude;
  let url = `${URL_MAIN}?lat=${lat}&lon=${long}&units=${UNITS}&APPID=${API_KEY}`;
  fetchApi(url);
};

async function fetchApi(url) {
  let response = await fetch(url);
  let { main, name } = await response.json();
  let temperature = (main.temp).toFixed(1);
  CITY.innerText = `${name}:`;
  TEMPERATURE.innerText = ` ${temperature} ºC`;

}


//setTimeout(function() {
   // window.location.reload(1);
 // }, 180000); 
