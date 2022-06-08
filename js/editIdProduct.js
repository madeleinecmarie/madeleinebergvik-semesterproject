import alert from './components/alert.js';
import { apiUrl, headers } from './config/apiUrl.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

let name = document.querySelector('#name');
let price = document.querySelector('#price');
let image = document.querySelector('#image');
let description = document.querySelector('#exampleFormControlTextarea1');
const form = document.querySelector('.editForm');
let featuredCheckbox = document.querySelector('#checkbox');

async function getSpecificProduct() {
  const response = await axios.get(`${apiUrl}/skincares/${id}`);
  let product = response.data;

  name.value = product.name;
  description.value = product.description;
  image.value = product.image;
  price.value = product.price;
  featuredCheckbox.checked = product.featured;
}

getSpecificProduct();

form.onsubmit = async function (event) {
  event.preventDefault();
  let updatedProduct = {
    name: name.value,
    price: price.value,
    image: image.value,
    description: description.value,
  };

  const response = await axios.put(
    `${apiUrl}/skincares/${id}`,
    updatedProduct,
    headers,
  );

  alert('alert-success', 'Product has been updated successfully');
  console.log(response);
};
