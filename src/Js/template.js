import menu from '../menu.json';
import menuTpl from '../templates/markup.hbs';

const menuRef = document.querySelector('.js-menu')
const markup = menuTpl(menu)
menuRef.insertAdjacentHTML('beforeend', markup)
