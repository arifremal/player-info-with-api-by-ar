// let allDta
const load=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>showAll(data.slice(0,9)))
}
const showAll=(countries)=>{
    // console.log(data);
    const container = document.getElementById('countries-info')
    container.innerHTML=""
    countries.forEach((country)=>{
        // console.log(country.flags.png);
        const div =document.createElement('div')
        div.innerHTML=`
        <div class="card w-full h-96 bg-base-100 shadow-2xl">
        <figure class="px-10 pt-10">
          <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">${country.name.common}</h2>
          <p>Population: ${country.population}</p>
          <p>Currency: ${Object.keys(country.currencies)[0]}</p>
          <div class="card-actions">
            <label onclick="showSingleCountry('${
              country.cca2
            }')" class="btn btn-primary" for="my-modal-3" class="btn">Show Details</label>
          </div>
        </div>
      </div>
        
        `
        container.appendChild(div)
    })

}
const showSingleCountry=(id)=>{
// console.log(id);
const url =`https://restcountries.com/v3.1/${id}`
fetch(url)
.then(res =>res.json())
.then(data=>console.log(data))
}
const showAllDataTogether=()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>showAll(data))

}
load()