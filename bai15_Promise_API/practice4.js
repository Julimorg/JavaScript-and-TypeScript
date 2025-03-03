const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countriesName = document.querySelector(".country-name");
const loading = document.querySelector(".loading");
const longitude = document.querySelector(".longtitude");
const latitude = document.querySelector(".latitude");
// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
const API = "https://restcountries.com/v2/name/portugal";
const dataCloud_API = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}";
const request = fetch(API);

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const whereAmI = function(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`);
        console.log(countryName)
        return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
    })
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(data => {
        renderCountry(data[0],"Country");
    })
    .catch(err =>{
        console.log(`${err.message}`);
    })
}
btn.addEventListener("click", () => {
    const renderCountryName = countriesName.value;
    const longtitudeValue = longitude.value;
    const latitudeValue = latitude.value;
    if (longtitudeValue === "" || latitudeValue === "") {
      alert("Please type a country");
    } else {
        whereAmI(latitudeValue,longtitudeValue);
    }
  });
  