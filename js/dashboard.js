import { apiUrl, headers } from './config/apiUrl.js';
import alert from './components/alert.js';

async function getProductsAndDeleteProducts() {
  let response = await axios.get(`${apiUrl}/skincares`);
  console.log(response);

  let products = response.data;
  let table = document.querySelector('.tableBody');
  table.innerHTML = '';

  products.forEach(({ id, name }, iteration) => {
    table.innerHTML += `
      <tr>
      <th scope="row">${iteration + 1}</th>
      <td>${name}</td>
      <td>
        <a href="editProduct.html?id=${id}"><i class="far fa-edit"></i></a>
      </td>
      <td>
        <i class="far fa-trash-alt" data-id=${id}></i>
      </td>
      </tr>`;
  });

  document.querySelector('.loading').classList.add('hide');

  let deleteBtn = document.querySelectorAll('.fa-trash-alt');
  console.log(deleteBtn);

  deleteBtn.forEach(function (deleteBtn) {
    deleteBtn.onclick = async function () {
      console.log('Clicked, id: ', deleteBtn.dataset.id);
      let response = await axios.delete(
        `${apiUrl}/skincares/${deleteBtn.dataset.id}`,
        headers,
      );

      console.log(response);
      getProductsAndDeleteProducts();
    };
  });
}

getProductsAndDeleteProducts();
