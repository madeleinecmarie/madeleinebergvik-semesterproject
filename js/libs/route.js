import { getUser } from '../libs/localStorage.js';

if (getUser('jwt') === null) {
  window.location.href = './login.html';
}
