const emailLink = document.querySelector('a.email');

emailLink.addEventListener('click', event => {
  event.preventDefault();
  mailto('qwefghjklgfd@gmail.com');
});

function mailto(address) {
  window.location.href = `mailto:${address}`;
}
