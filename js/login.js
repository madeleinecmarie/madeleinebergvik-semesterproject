import { apiUrl, headers } from './config/apiUrl.js';
import { textboxLength, emailAddress } from './libs/validation.js';
import alert from './components/alert.js';

let form = document.querySelector('.form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

form.onsubmit = async function (event) {
  event.preventDefault();

  if (textboxLength(password.value, 1) && emailAddress(email.value)) {
    try {
      const response = await axios.post(`${apiUrl}/auth/local`, {
        identifier: email.value,
        password: password.value,
      });

      localStorage.setItem('jwt', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      window.location.href = './dashboard.html';
    } catch (error) {
      alert('alert-danger', error);
    }
  } else {
    alert(
      'alert-danger',
      'The username or password you have entered is not correct',
    );
  }
};
