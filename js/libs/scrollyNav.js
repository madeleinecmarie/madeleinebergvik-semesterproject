const navbar = document.querySelector('.navbar');

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add('activeNav');
  } else {
    navbar.classList.remove('activeNav');
  }
};
