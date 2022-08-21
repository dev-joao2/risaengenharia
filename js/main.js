function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length

for (let i = 0; i < menuLength; i++) {
  if(menuItem[i].href === currentLocation) {
    menuItem[i].className = 'active'
  }
}


// $(document).ready(function() {
//   $('.menu-toggle').click(function(){
//     $('nav').toggleClass('active')
//   })
//   $('ul li.').click(function(){
//     $(this).siblings().removeClass('active');
//     $(this).toggleClass('active');
//   })
// })

const navigation = document.querySelector('.navigation');
document.querySelector('.sub-menu').onclick = function() {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
}