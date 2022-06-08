import { apiCall } from './config/apiCall.js';
import { apiUrl, headers } from './config/apiUrl.js';

export const featuredDetails = await apiCall(`${apiUrl}/skincares`);
console.log(featuredDetails);

for (let i = 0; i < featuredDetails.length; i++) {
  if (i === 3) {
    break;
  }

  document.querySelector('.featuredDetailsContainer').innerHTML += `
  <div class="col-sm-4">
  <div class="card">
   <a href="details.html?id=${featuredDetails[i].id}">
   <img
    src="${featuredDetails[i].image}"
    alt="${featuredDetails[i].alt}"
    class="featured__img"/>
   </a>
  <div class="card-body">
   <h4>${featuredDetails[i].name}</h4>
   <p>NOK ${featuredDetails[i].price}</p>
  </div>
  </div>
  </div>
  `;
}
