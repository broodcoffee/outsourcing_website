import { countries } from "./data.js";
import { $, renderElement, search } from "./functions.js";


let searchData =[];
let searchButton = $('#search-button');
let searchInput = $('#search');

function runSearch() {
    $('#list').textContent = '';
    searchData = search(countries, $('#search').value);
    if(searchData.length === 0 ) {
        return renderElement('h3', 'No Results Found', '#list');
    }
    searchData.forEach( country => {
        renderElement('li', `${country}`, '#list')
    });
}

searchButton.addEventListener('click', () => {
    runSearch();
});

searchInput.addEventListener('keypress', () => {
    // if(e.key !== "Enter") return;
    runSearch();
})

// window.onload = () => {
//     countries.forEach( country => {
//         renderElement('li', `${country}`, '#list')
//     });
// }