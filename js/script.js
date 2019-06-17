$(document).ready(function(){

	// alert('Hello, world!');
	// $ - найти;		prev - предыдущий дом-узел, next - следующий
	// $('.post p').hide();		

	// var postsText = $('.post p').prev(); 
	// console.log(postsText);

	var postsText = $('.post').find('span'); //ищем span
	// console.log(postsText);
	//переопределяем атрибут
	// $(postsText).attr('data-number', 'ruihh'); //$('.post').find('span').attr('data-number', 'ruihh'); - тоже самое

	// посмотреть как менять текст в зависимости от ширины экрана
	$('.js-text-guitar').html('Начни играть, как Джими Хендрикс'); //заменяем текст внутри тега
	$('.js-text-vocal').html('Пой, как Селин Дион и Эми Вайнхаус');
	$('.js-text-fortepiano').html('Чувствуй клавиши, как Людовико Эйнауди');

	

	ymaps.ready(init);
	    function init(){ 
	        // Создание карты.    
	        var myMap = new ymaps.Map("map", {
	            // Координаты центра карты.
	            // Порядок по умолчанию: «широта, долгота».
	            // Чтобы не определять координаты центра карты вручную,
	            // воспользуйтесь инструментом Определение координат.
	            center: [59.957008, 30.317885],
	            // Уровень масштабирования. Допустимые значения:
	            // от 0 (весь мир) до 19.
	            zoom: 16
	        });

	        var myPlacemark = new ymaps.Placemark([59.957008, 30.317885], {
	            hintContent: 'Собственный значок метки',
	            balloonContent: 'Это красивая метка'
	        }, {
	            // Опции.
	            // Необходимо указать данный тип макета.
	            iconLayout: 'default#image',
	            // Своё изображение иконки метки.
	            iconImageHref: './img/icon-geotag.svg',
	            // Размеры метки.
	            iconImageSize: [17, 22],
	            // Смещение левого верхнего угла иконки относительно
	            // её "ножки" (точки привязки).
	            iconImageOffset: [0, -20]
	        });

	        myMap.geoObjects.add(myPlacemark);

	    };


		var toggler = document.getElementById('toggler');
		toggler.addEventListener('click', mainNavVisibleToggle); //слушаем клик
		function mainNavVisibleToggle(e) {
		  e.preventDefault();
		  toggler.classList.toggle('toggler--close');
		  document.getElementById('main-nav__list').classList.toggle('main-nav__list--visible'); //переключили класс
		}


});