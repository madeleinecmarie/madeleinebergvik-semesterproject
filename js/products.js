import { apiUrl, headers } from './config/apiUrl.js';
import { apiCall } from './config/apiCall.js';
import { filteringTheArray } from './components/filter.js';
import alert from './components/alert.js';

const productsArray = await apiCall(`${apiUrl}/skincares`);
console.log(productsArray);
productCards(productsArray);

let searchFilter = document.querySelector('#searchInput');
searchFilter.onkeyup = () => {
  document.querySelector('.productsContainer').innerHTML = '';
  let resultArray = filteringTheArray(productsArray, searchFilter.value);
  console.log(filteringTheArray(productsArray, searchFilter.value));
  productCards(resultArray);

  if (searchFilter.value.trim().innerHTML === '') {
    productCards(productsArray);
  }
  if (resultArray.length === 0) {
    document.querySelector('.productsContainer').innerHTML =
      'No searches found';
  }
};

function productCards(array) {
  array.forEach(({ image, name, price, alt, id }) => {
    document.querySelector('.productsContainer').innerHTML += `
      <div class="col-sm-4 col__products">
      <div class="card">
      <div class="card-body">
        <a href="details.html?id=${id}">
        <img src="${image}" alt="${alt}" class="featured__img">
        </a>
      <div class="card-body">
        <h4>${name}</h4>
        <p>NOK ${price}</p>
      </div>
      </div>
      </div>
      `;
  });
}
