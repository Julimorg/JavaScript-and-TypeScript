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

const getPosition = function(){
    return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(resolve,reject);
    })
  }
// ? art id = 127616
const whereAmI = async function() {
    try {
    const pos = await getPosition();
    const {latitude: lat, longitude: lng } = pos.coords;
    //? Fetch location
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    const dataGeo = await resGeo.json();    
    console.log(dataGeo);
    console.log(dataGeo.countryName);
    
    //? Fetch Country API
    const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
    console.log(res);

    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city} - ${dataGeo.countryName}`;
  } catch (err){
      alert(err.message);
      renderError(`${err.message}`);
  }
}
// console.log("1: will get location");
//     whereAmI()
//     .then(data =>{ 
//       console.log(data);
//     })
//     .catch(err =>{
//       console.log(`${err.message}`);
//     })
//     .finally(() => {
//       console.log("3: Finished");
//     })

const handleErroWithAsync = async function(){
    console.log("1: will get location");
    try{
      const displayApi = await whereAmI();
      console.log(`${displayApi}`);
    } catch (err){ 
      console.log(`${err.message}`);
    }
    console.log("3: finished");
}

handleErroWithAsync()

