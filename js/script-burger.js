$(document).ready(function(){

document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

		var toggler = document.getElementById('toggler');
		toggler.addEventListener('click', mainNavVisibleToggle); //слушаем клик
		function mainNavVisibleToggle(e) {
		  e.preventDefault();
		  toggler.classList.toggle('toggler--close');
		  document.getElementById('main-nav').classList.toggle('main-nav--visible'); //переключили класс

		  // document.getElementById('.header-wrapper').classList.toggle('.header-wrapper_color');
		};

});