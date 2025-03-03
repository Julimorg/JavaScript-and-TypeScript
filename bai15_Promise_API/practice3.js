const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const countriesName = document.querySelector(".country-name");
const loading = document.querySelector(".loading");
// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
const API = "https://restcountries.com/v2/name/portugal";

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

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = country => {
  getJSON(`https://restcountries.com/v2/name/${country}`,
 "Country not found")
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      
      if (!neighbour) throw new Error("No neighbour found");

      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((neightbourData) => {
      renderCountry(neightbourData, "neighbour");
    })
    .catch((error) => {
      renderError(`Failed ${error.message}. Try again`);
    })
    .finally(() => {
      alert("Loading....");
    });
};
btn.addEventListener("click", () => {
  const renderCountryName = countriesName.value;
  if (renderCountryName === "") {
    alert("Please type a country");
  } else {
    getCountryData(renderCountryName);
  }
});
