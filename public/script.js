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

//this code shows the display that matches the user's input
function displayMatches() {
    const matchArray = findMatches(this.value, restaurants)
    const html = matchArray.map(place => {
        return `<li>
        <span class="name"><b>${place.name}</b></span><br>
        <span class="category"><b>${place.category}</b></span>
        <address><b>${place.address_line_1}</b><br>
        <b>${place.city}</b><br>
        <b>${place.state}</b><br>
        <b>${place.zip}</b><address>
        <b>${place.type}</b><address>
        <b>${place.owner}</b><address>
      </li>`;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.SearchBar')
const suggestions = document.querySelector('.ListOfRestaurants')

searchInput.addEventListener('keyup', displayMatches);
