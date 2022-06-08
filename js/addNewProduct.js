import alert from './components/alert.js';
import { apiUrl, headers } from './config/apiUrl.js';

let productForm = document.querySelector('.addForm');

productForm.onsubmit = async function (event) {
  event.preventDefault();
  console.log(event);
  let name = document.querySelector('#name');
  let price = document.querySelector('#price');
  let image = document.querySelector('#image');
  let description = document.querySelector('#exampleFormControlTextarea1');
  let featuredCheckbox = document.querySelector('#checkbox');

  try {
    let newProduct = {
      name: name.value,
      price: price.value,
      image: image.value,
      description: description.value,
      featured: featuredCheckbox.checked,
    };

    let response = await axios.post(`${apiUrl}/skincares`, newProduct, headers);
    alert('alert-success', 'Product has been created successfully');
    name.value = '';
    price.value = '';
    image.value = '';
    description.value = '';

    console.log(response);
  } catch (error) {
    alert('alert-danger', 'There was an error creating the product');
  }
};
