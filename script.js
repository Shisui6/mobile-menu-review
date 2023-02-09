// Declare Variables

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu-id');
const closeButton = document.getElementById('close');

// Create event listener functions
function showMenu() {
  menu.classList.replace('hide', 'show');
}

function hideMenu() {
  menu.classList.replace('show', 'hide');
}

// Add event listeners to html elements
menuButton.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

// const menuItems = document.getElementsByClassName('menu-item');
// for (let i = 0; i < menuItems.length; i += 1) {
//   menuItems[i].addEventListener('click', hideMenu);
// }