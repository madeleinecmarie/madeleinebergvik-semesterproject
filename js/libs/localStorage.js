import { shoppingCartToDom } from '../cartToDom.js';

export const saveToLocalStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = function (key) {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export const getUser = function (userKey) {
  return localStorage.getItem(userKey);
};

export function shoppingCartStorage(domElm) {
  let cartItems = document.querySelectorAll(domElm);
  cartItems.forEach((element) => {
    element.onclick = function () {
      let localStorageObject = {
        id: element.dataset.id,
        name: element.dataset.name,
        image: element.dataset.image,
        price: element.dataset.price,
      };
      console.log(element);

      let cartItems = getStorageItem('cart');
      let isInStorage = cartItems.find(
        (cartObject) => cartObject.id === localStorageObject.id,
      );

      if (isInStorage === undefined) {
        cartItems.push(localStorageObject);
        saveToLocalStorage('cart', cartItems);
        element.innerHTML = 'Added to cart';
      } else {
        element.innerHTML = 'Removed';
        let removedElementArray = cartItems.filter(
          (cartObject) => cartObject.id !== localStorageObject.id,
        );

        saveToLocalStorage('cart', removedElementArray);
      }

      if (document.querySelector('.cartProducts')) {
        let updateCart = getStorageItem('cart');
        shoppingCartToDom(updateCart, '.cartProducts');
        console.log('Code runs');
      }
    };
  });
}
shoppingCartStorage();
