const api = 'https://api.openweathermap.org/data/2.5/';
const key = 'df3a643770aa5aca3d0a6d2383650a0b';
const getResult = (cityName) => {
    console.log(cityName);
}

const setQuery = (e) => {
    if(e.keycode == '13')
    getResult(searchBar.value)
}


const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keypress', setQuery);


