export default function alert(alertCLass, errMessage) {
  document.querySelector(
    '.alert',
  ).innerHTML = `<div class="alert  ${alertCLass}">
    ${errMessage}
  </div>`;

  setTimeout(() => {
    document.querySelector('.alert').innerHTML = '';
  }, 3000);
}
