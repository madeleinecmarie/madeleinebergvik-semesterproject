import { apiCall } from './config/apiCall.js';
import { apiUrl, headers } from './config/apiUrl.js';
import { featuredDetails } from './featuredDetails.js';
import { shoppingCartStorage } from './libs/localStorage.js';
import alert from './components/alert.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const details = await apiCall(`${apiUrl}/skincares/${id}`, headers);
console.log(details);

document.title = details.name;

const { image, name, description, price, alt, meta } = details;

// Meta tag description
document
  .querySelector('meta[name="description"]')
  .setAttribute('content', `${meta}`);

document.querySelector('.detailsContainer').innerHTML += `
  <div class="container details">
  <div class="row details__row">
  <div class="col-sm-7 details__col7">
    <div class="details__img"${alt}></div>
    </div>
    <div class="col-sm-5 details__col5">
    <div class="details__text">
    <h1 class="details__h1">${name}</h1>
    <div class="stars">
    <span class="iconify stars__reviews" data-icon="ant-design:star-filled"></span>
    <span class="iconify stars__reviews" data-icon="ant-design:star-filled"></span>
    <span class="iconify stars__reviews" data-icon="ant-design:star-filled"></span>
    <span class="iconify stars__reviews" data-icon="ant-design:star-filled"></span>
    <span class="iconify stars__reviews" data-icon="ant-design:star-outlined"></span>
    <p class="stars__p">Reviews</p>
    </div>
    <div class="details__bodytext">
    <p class="details__description">${description}</p>
    <p class="details__price">NOK ${price}</p>
    <div class="details__btnDiv">
    <button class="details__btn" data-name="${name}" data-price="${price}" data-image="${image}" data-id="${id}">Add to cart</button>
    </div>
    </div>
    </div>
   </div>
   </div>
   `;

document.querySelector(`.details__img`).style.backgroundImage = `url(${image})`;
shoppingCartStorage('.details__btn');
