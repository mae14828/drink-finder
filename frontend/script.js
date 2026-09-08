const hamburger = document.getElementById('hamburger');
//const sideMenu = document.getElementById('side-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    sideMenu.classList.toggle('is-active');
});