import { getUser } from '../libs/localStorage.js';

let logout = document.querySelector('.loginBtnContainer');
(function () {
  if (getUser('user')) {
    logout.innerHTML = `
    <div class="login__btn">Log out</div>
    <a href="/shoppingcart.html">
    <span class="iconify shopping-bag" data-icon="akar-icons:shopping-bag"></span>
    </a>
	`;
  }

  logout.onclick = function () {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    window.location.href = './index.html';
  };
})();
