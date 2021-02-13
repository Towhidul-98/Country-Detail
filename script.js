function countryCapital (){
    fetch("https://restcountries.eu/rest/v2/all")
    .then( res => res.json() )
    .then( data => displayData(data) )
}

countryCapital();

function displayData(userData){
    const displaySegments = document.getElementById("Country-list");

    userData.map( countryInfo => {
        const displayZone = document.createElement("div");
        displayZone.className = 'displayCountry';
        const countryData = `
            <h3 class="country">${countryInfo.name}</h3>
            <p>${countryInfo.capital}</p>
            <button onclick = "displayCountryDetails('${countryInfo.name}')">Show Detail</button>
        `
        displayZone.innerHTML=countryData;
        //displayZone.onclick= displayCountryDetails('${countryInfo.name}');
        displaySegments.appendChild(displayZone)
    });
    
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then ( res => res.json())
    .then ( data => renderCountryDetail( data[0] ))
 
}

const renderCountryDetail = country => {
    console.log(country)
    const renderResult= document.getElementById("renderResult");
    renderResult.innerHTML = `
        <h3 class ="Header">${country.name}</h3>
        <p>Capital : ${country.capital}</p>
        <p>Population : ${ country.population}</p>
        <p>Adjacent Borders : ${country.borders}</p>
        <img src="${country.flag}">
    `
}