const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'df3a643770aa5aca3d0a6d2383650a0b';

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then (displayResult)
}

const setQuery = function(e) {
    if(e.key == 'Enter')
    getResult(searchBar.value)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}`

    let humidity = document.querySelector('.humidity')
    temp.innerText = `${Math.round(result.main.temp)}%`

    let wind = document.querySelector('.wind')
    wind.innerText = `${result.wind.speed} km/h`
}

const searchBar = document.getElementById('searchbar');
searchBar.addEventListener('keypress', setQuery);


