import { shoppingCartStorage } from '../js/libs/localStorage.js';

export const shoppingCartToDom = (array, domElm) => {
  let subTotalPrice = 0;
  document.querySelector(domElm).innerHTML = '';
  document.querySelector('.cartProducts').innerHTML = '';
  document.querySelector('.cartProducts__total').innerHTML = '';

  if (array.length === 0) {
    document.querySelector('.cartProducts').innerHTML =
      'No products added to cart';
  }

  array.forEach(({ name, image, price, id, alt }) => {
    console.log(id);
    document.querySelector(domElm).innerHTML += `
        <div class="cart">
        <a href="details.html?id=${id}">
        <div class="cart__imgDiv">
          <img class="cart__img" src="${image}" alt="${alt}"/>
        </a>
        <div class="cart__text">
          <h5 class="cart__headline">${name}</h5>
          <p class="cart__price">NOK ${price}</p>
        <div class="cart__editDiv">
          <span class="iconify cart__minus" data-icon="eva:minus-fill"></span>
          <span class="cart__editBtn">1</span>
          <span class="iconify cart__plus" data-icon="bi:plus"></span>
        </div>
        <div class="cart__remove">
        <i class="far fa-trash-alt" data-id="${id}">
          <span class="iconify" data-icon="akar-icons:cross">
          </span>
        </i>
        </div>
        </div>
        </div>
        </div>
        `;

    subTotalPrice += parseInt(price);
  });

  document.querySelector('.cartProducts__total').innerHTML += `
      <div class="container">
      <div class="row cartProducts__row">
      <div class="col-sm-10 cartProducts__col-10">
      <div class="cartProducts__redirect">
        <a href="products.html">
         <span class="iconify cartProducts__arrow" data-icon="akar-icons:arrow-left"> 
         </span>
         <span class="cartProducts__arrowText">Keep shopping</span>
        </a>
      </div>
      </div>

      <div class="col-sm-2 cartProducts__col-2">
      <div class="cartProducts__text">
        <p class="cartProducts__subtotal">Subtotal:
        <span class="cartProducts__totalPrice">NOK ${subTotalPrice}</span>
        </p>
        <p class="cartProducts__shipping">Free shipping</p>
      </div>
      <div class="cartProducts__btnDiv">
        <a href="/index.html">
      <div class="cartProducts__btn">Buy</div>
        </a>
      </div>
      </div>
      </div>
      </div>
          `;

  shoppingCartStorage('.fa-trash-alt');
};
