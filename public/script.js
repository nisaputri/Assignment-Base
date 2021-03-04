const data = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';
const user_input = document.querySelector('.SearchBar');
const restaurant_list = document.querySelector('.ListOfRestaurants');
const restaurant_type = [];
    
fetch(data) 
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

  user_input.addEventListener('change', displayMatches);
  user_input.addEventListener('keyup', displayMatches);
