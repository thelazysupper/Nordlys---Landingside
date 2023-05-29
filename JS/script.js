/* Change color and padding on navbar when scrolling */

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navigation_menu_container');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });