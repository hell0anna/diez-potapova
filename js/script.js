$(document).ready(function(){

	// alert('Hello, world!');
	// $ - найти;		prev - предыдущий дом-узел, next - следующий
	// $('.post p').hide();		

	// var postsText = $('.post p').prev(); 
	// console.log(postsText);

	// var postsText = $('.post').find('span'); //ищем span
	// console.log(postsText);
	//переопределяем атрибут
	// $(postsText).attr('data-number', 'ruihh'); //$('.post').find('span').attr('data-number', 'ruihh'); - тоже самое

	var colWrapperAdd = false; //этой переменной будем проверять есть ли класс

	$(window).on('resize', function() {
		checkColAdd(); //вызываем функцию при любом ресайзе окна
	});

	checkColAdd(); //вызываем функцию при загрузке страницы

	function checkColAdd() {
		// проверяем с какого экрана смотрим 
		var viewportWidth = $(window).innerWidth();
		if ( viewportWidth > 1170 ) {
			if( colWrapperAdd == false ) {
				$('.all-courses-wrapper').wrapAll('<div class="col  col--lg-1">');
				colWrapperAdd = true;
			}
		}
		else{
			if( colWrapperAdd = true ) {
				$('.js-section-header_wrap').wrapAll('<div class="col col--lg-1">');
				$('.all-courses-wrapper').unwrap('<div class="col  col--lg-1">'); //обертка для заголовка

				colWrapperAdd = false;
			}
		}
	};

	

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


});