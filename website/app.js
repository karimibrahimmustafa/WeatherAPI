/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
const api = "02f0213a86ba7ad6b6268154ca020f86";
const url = "http://api.openweathermap.org/data/2.5/weather?zip=";
const postData = async(url = '', data = {}) => {
    // console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

function app() {
    let zip = document.getElementById("zip").value;
    let user = document.getElementById("feelings").value;
    getData(url, zip, api).then(function(data) {
        postData('/add', { city: data.name, temperature: data.main.temp, date: newDate, user_response: user }).then(function(data) {
            updateGUI(data.city, data.temperature, data.date, data.user_response);
        });
    });
}

function updateGUI(city, temp, date, user) {
    document.getElementById('date').innerHTML = 'Date: ' + date;
    document.getElementById('city').innerHTML = 'City: ' + city;
    document.getElementById('temp').innerHTML = 'Temp: ' + ((temp) * (9 / 5) - 459.67).toFixed(1) + ' F';
    // document.getElementById('description').innerHTML ='Forecast: ' + allData.description; 
    document.getElementById('content').innerHTML = 'Feeling: ' + user;
}
const getData = async(url, zip, api) => {
    const res = await fetch(url + zip + "&APPID=" + api);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}
document.getElementById("generate").addEventListener("click", app);