$(document).ready(function(){


// document.onscroll = function(){
//   var what = document.querySelector("courses").getBoundingClientRect().top;
//   document.getElementById('header-wrapper').classList.toggle(
//     "header-wrapper__color", what <= window.innerHeight
//    );
// }






	// var colWrapperAdd = false; //этой переменной будем проверять есть ли класс

	// $(window).on('resize', function() {
	// 	checkColAdd(); //вызываем функцию при любом ресайзе окна
	// });

	// checkColAdd(); //вызываем функцию при загрузке страницы

	// function checkColAdd() {
	// 	// проверяем с какого экрана смотрим 
	// 	var viewportWidth = $(window).innerWidth();
	// 	if ( viewportWidth > 1170 ) {
	// 		if( colWrapperAdd == false ) {
	// 			$('.all-courses-wrapper').wrapAll('<div class="col  col--lg-1">');
	// 			// $('.button-active__rotate').unwrap('<div class="col  col--lg-2">');
	// 			colWrapperAdd = true;
	// 		}
	// 	}
	// 	else{
	// 		if( colWrapperAdd = true ) {
	// 			$('.js-section-header_wrap').wrapAll('<div class="col col--lg-1">');
	// 			// $('.button-active__rotate').wrapAll('<div class="col  col--lg-2">'); //обертка для заголовка

	// 			colWrapperAdd = false;
	// 		}
	// 	}
	// };

	$('.form-select').selectric();


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
            iconImageSize: [40, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, -20]
        });

        myMap.geoObjects.add(myPlacemark);

    };




	var slickOn = false; //этой переменной будем проверять включен ли слацдер / делаем изначально выключенным при загрузке страницы

	$(window).on('resize', function() {
		checkCarouselOn(); //вызываем функцию при любом ресайзе окна
	});

	checkCarouselOn(); //вызываем функцию при загрузке страницы

	function checkCarouselOn() {
		// проверяем с какого экрана смотрим и включаем или нет карусель
		var viewportWidth = $(window).innerWidth();
		if ( viewportWidth < 600 ) {
			if( slickOn == false ) {
				$('.carousel').slick();
				slickOn = true;
			}
			// просто подсключили карусель
			// $('.carousel').slick();
			// console.log('mobile. carousel on');
		}
		else{
			if( slickOn = true ) {
				$('.carousel').slick('unslick');
				slickOn = false;
			}
			// $('.carousel').slick('unslick'); //выключаем слайдер
			// console.log('desktop. carousel off');
		}
		// console.log(viewportWidth);
	}

	



});