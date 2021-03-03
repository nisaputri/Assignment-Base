<<<<<<< Updated upstream
const data = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const user_input = document.querySelector('SearchBar');
const restaurant_list = document.querySelector('.ListOfRestaurants');
const restaurant_type = [];
    
fetch(endpoint) 
  .then(res => res.json()) 
  .then(data => restaurant_type.push(...data));

function findMatches(wordToMatch, restaurant_type) {
    return restaurant_type.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.restaurant_type.match(regex) || place.zipcode.match(regex);
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, restaurant_type);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const restaurantName = place.restaurant.replace(regex, `<span class="hl">${this.value}</span>`);
      const Zipcode = place.zipcode.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${restaurantName}, ${Zipcode}</span>
          
        </li>`
    }).join('');
    suggestions.innerHTML = html;
  }

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
=======
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const restaurants = [];

fetch(endpoint)
.then(blob => blob.json())
.then(data => restaurants.push(...data));

function findMatches(wordToMatch, restaurants) {
    return restaurants.filter(place => {

    const regex = new RegExp(wordToMatch, 'gi');
    return place.name.match(regex) || place.zip.match(regex) || place.category.match(regex) 
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, restaurants)
    const html = matchArray.map(place => {
        return `<li>
        <span class="name"><b>${place.name}</b></span><br>
        <span class="category"><b>${place.category}</b></span>
        <address><b>${place.address_line_1}</b><br>
        <b>${place.city}</b><br>
        <b>${place.zip}</b><address>
      </li>`;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.SearchBar')
const suggestions = document.querySelector('.ListOfRestaurants')

searchInput.addEventListener('change', displayMatches);
>>>>>>> Stashed changes
