import { apiUrl, headers } from './config/apiUrl.js';
import { apiCall } from './config/apiCall.js';
import alert from './components/alert.js';

// background hero image

const getBgdImg = await apiCall(`${apiUrl}/hero-imgs`);
console.log(getBgdImg);
const hero = document.querySelector('.bgd-img');

getBgdImg.forEach(({ image }) => {
  hero.style.backgroundImage = `url(${image})`;
});

// featured products

const products = await apiCall(`${apiUrl}/skincares`);
const featuredContainer = document.querySelector('.featuredContainer');
console.log(products);

products.forEach(({ featured, image, name, price, id }) => {
  if (featured === true) {
    featuredContainer.innerHTML += `
    <div class="col-sm-4">
    <div class="card featured">
      <a href="details.html?id=${id}">
      <img src="${image}" alt="Caia product image" class="featured__img">
      </a>
    <div class="card-body">
      <h4>${name}</h4>
      <p>NOK ${price}</p>
    </div>
    </div>
    `;
  }
});
