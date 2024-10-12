const emailLink = document.querySelector('a.email');

emailLink.addEventListener('click', event => {
  event.preventDefault();
  mailto('info@freshwash.com');
});

function mailto(address) {
  window.location.href = `mailto:${address}`;
}
