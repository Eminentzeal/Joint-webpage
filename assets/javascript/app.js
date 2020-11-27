const open = document.querySelector('#open');
const menuList = document.querySelector('#menu-list')
const close = document.querySelector('.close');

open.addEventListener('click, openMenu');
function openMenu(){
  menuList.style.display = 'block';
}