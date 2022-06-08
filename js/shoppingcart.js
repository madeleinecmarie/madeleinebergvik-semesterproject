import { getStorageItem, shoppingCartStorage } from './libs/localStorage.js';
import { shoppingCartToDom } from '../js/cartToDom.js';

let cartProductsFromLocalStorage = getStorageItem('cart');
shoppingCartToDom(cartProductsFromLocalStorage, '.cartProducts');
shoppingCartStorage('.fa-trash-alt');
