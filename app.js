fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => displayData(data));

const displayData = (countries) => {
  for (let i = 0; i < countries.length; i++) {
    const element = countries[i];
    console.log(element.name);
    const countryItems = document.getElementById("all-country");
    const items = document.createElement("li");
    const info = `
            <h3>${element.name}</h3>
            <p>${element.capital}</p>
            <button onclick = "countrieDetails('${element.name}')">Details</button>

        `;
    items.innerHTML = info;

    countryItems.appendChild(items);
  }
};

const countrieDetails = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name};
  `;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => countriesInfo(data[0]));
};

function countriesInfo(data) {
  const displayInfo = document.getElementById("countri-info");
  const name = data.name;
  const flag = data.flag;
  const capital = data.capital;
  const area = data.area;
  const currencies = data.currencies[0].code;
  const sName = data.currencies[0].name;
  const symbol = data.currencies[0].symbol;
  const nativeName = data.nativeName;
  const numericCode = data.numericCode;
  const region = data.region;
  const timezones = data.timezones;

  displayInfo.innerHTML = `
     <div class="row crd ">
     <div class="col-lg-6 col-md-6 col-12 mt-2">
         <h1>${name}</h1>
         <h5>Capital : ${capital}</h5>
         <h5>Area : ${area}</h5>
         <h5>Currencies : ${currencies}</h5>
         <h5>Language : ${sName}</h5>
         
         
     </div>
     <div class="col-lg-6 col-md-6 col-12 mt-2">
         <img src="${flag}" class="img-fluid" alt="flag" />
     </div>
 </div>
     <div class="row crd fd p-0 mt-3">
         <div class="col-lg-6 col-md-6 col-12 cr cr-1">
            <div class="f">
            <h5>Symbol : ${symbol}</h5>
            <h5>Region : ${region}</h5>
            <h5>NativeName : ${nativeName}</h5>
            </div>      
         </div>
         <div class="col-lg-6 col-md-6 col-12 cr cr-2">
            <div class="f fs">
            <h5>Timezzones : ${timezones}</h5>
            <h5>Timeones : ${timezones}</h5>
            <h5>NumericCode : ${numericCode}</h5>
            </div>
         </div>
     </div>
     
 </div>
     `;
}
