'use strict';

// ANCHOR Функции статичных модальных окон
function phonesModal() {
	Swal.fire( {
		showCloseButton: true,
		showConfirmButton: false,
		html: '<div class="phone-container"><div class="title">' +
			'<img src="./assets/img/png/Телефон.png" alt="">' +
			'<span>Телефоны</span>' +
		'</div>' +
		'<div class="phone">' +
			'<p class="title">Администор центра:</p>' +
			'<a href="tel:8 (909)-930-00-70" class="phone">8 (909)-930-00-70</a>' +
			'<a href="tel:8 (916)-584-68-57" class="phone">8 (916)-584-68-57</a>' +
			'<a href="tel:8 (495)-640-25-62" class="phone">8 (495)-640-25-62</a>' +
		'</div>' +
		'<div class="phone">' +
			'<p class="title">Интернет-магазин:</p>' +
			'<a href="tel:8 (909)-930-10-70" class="phone">8 (909)-930-10-70</a>' +
		'</div>' +
		'<div class="phone">' +
			'<p class="title">Онлайн-школа:</p>' +
			'<a href="tel:8 (909)-930-10-70" class="phone">8 (909)-930-10-70</a>' +
		'</div>' +
		'<div class="open">' +
			'<p class="title">График работы:</p>' +
			'<p>Ежедневно с 10:00 - 19:00</p>' +
		'</div></div>',
	} );
}

function forgotModal() {
	Swal.fire( {
		showCloseButton: true,
		showConfirmButton: false,
		html: '<div class="forgot-container">' +
			'<div class="title">' +
				'<p>Восстановление пароля</p>' +
			'</div>' +
			'<div class="form">' +
				'<form class="auth-register" id="forgot-password" method="POST" action="/Celius-Static/account">' +
					'<label for="email">Введите ваш Email <span class="needs">*</span></label>' +
					'<input type="text" id="email" placeholder="Введите Email" />' +
					'<input class="action-btn" type="submit" id="remind-password" value="Отправить письмо" />' +
				'</form>' +
			'</div>' +
		'</div>',
	} );

	$( 'input#remind-password' ).on( 'click', function() {
		Swal.fire( {
			showCloseButton: false,
			showConfirmButton: true,
			icon: 'success',
			title: 'Отлично!',
			text: 'Мы отправили письмо с информацией о восстановлении пароля на указанный Вами Email',
			confirmButtonText: 'Хорошо',
			timer: 5000,
		} );
	} )
}

function authModal() {
	Swal.fire( {
		showCloseButton: true,
		showConfirmButton: false,
		html: '<div class="auth-container"><div class="title">' +
			'<p>Вход в личный кабинет</p>' +
		'</div>' +
		'<div class="break">' +
			'<p>через</p>' +
		'</div>' +
		'<div class="social">' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Яндекс.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Google.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Мейл.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Вконтакте.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Одноклассники.svg" alt="" /></a>' +
		'</div>' +
		'<div class="break">' +
			'<p>или</p>' +
		'</div>' +
		'<div class="form">' +
			'<form method="POST" action="/Celius-Static/account" id="auth-form" class="auth-register">' +
				'<label for="login">Логин <span class="needs">*</span></label>' +
				'<input type="text" name="login" id="login" placeholder="Введите Email" />' +
				'<label for="password">Пароль <span class="needs">*</span></label>' +
				'<input type="password" name="password" id="password" placeholder="Введите пароль" />' +
				'<button id="forgot">Забыли пароль?</button>' +
				'<input class="action-btn" type="submit" value="Войти">' +
			'</form>' +
			'<p class="question">Ещё нет аккаунта? <button type="button" id="register">Зарегистрируйтесь</button></p>' +
		'</div></div>',
	} );

	// Если нажата кнопка Регистрации - открыть окно регистрации
	$( 'button#register' ).on( 'click', registerModal );
	// Если нажата кнопка "Забыли пароль?" - открыть окно восстановления пароля
	$( 'button#forgot' ).on( 'click', forgotModal );
}

function registerModal() {
	Swal.fire( {
		showCloseButton: true,
		showConfirmButton: false,
		html: '<div class="auth-container"><div class="title">' +
			'<p>Регистрация на сайте</p>' +
		'</div>' +
		'<div class="break">' +
			'<p>через</p>' +
		'</div>' +
		'<div class="social">' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Яндекс.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Google.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Мейл.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Вконтакте.svg" alt="" /></a>' +
			'<a href="#"><img src="../Celius-Static/assets/img/svg/socials/Одноклассники.svg" alt="" /></a>' +
		'</div>' +
		'<div class="break">' +
			'<p>или</p>' +
		'</div>' +
		'<div class="form">' +
			'<form method="POST" action="/Celius-Static/account" id="reg-form" class="auth-register">' +
				'<label for="login">Укажите Ваш Email <span class="needs">*</span></label>' +
				'<input type="text" name="login" id="login" placeholder="Введите Email" />' +
				'<div class="grid">' +
					'<div>' +
						'<label for="firstname">Имя <span class="needs">*</span></label>' +
						'<input type="text" name="firstname" id="firstname" placeholder="Введите Имя" />' +
					'</div>' +
					'<div>' +
						'<label for="secondname">Фамилия <span class="needs">*</span></label>' +
						'<input type="text" name="secondname" id="secondname" placeholder="Ваша Фамилия" />' +
					'</div>' +
				'</div>' +
				'<label for="password">Придумайте Пароль <span class="needs">*</span></label>' +
				'<input type="password" name="password" id="password" placeholder="Рекомендуем от 6 символов" />' +
				'<button id="forgot">Забыли пароль?</button>' +
				'<input class="action-btn" type="submit" value="Зарегистрироваться" />' +
				'<p class="warning">Нажимая на кнопку, я соглашаюсь на обработку <a href="/Celius-Static/maintenance" target="_blank">персональных данных</a></p>' +
			'</form>' +
			'<p class="question">Ещё нет аккаунта? <button type="button" id="auth">Войдите</button></p>' +
		'</div></div>',
	} );

	// Если нажата кнопка Авторизации - открыть окно авторизации
	$( 'button#auth' ).on( 'click', authModal );
	// Если нажата кнопка "Забыли пароль?" - открыть окно восстановления пароля
	$( 'button#forgot' ).on( 'click', forgotModal );
}

// ANCHOR DOM Ready

jQuery( function( $ ) {

	// Inits START
	Fancybox.bind( '[data-fancybox="gallery"]' );
	// Inits END

	/* [START]
	 * Модальные окна
	 */
	$( 'span.show-phones' ).on( 'click', phonesModal );
	$( 'button#auth' ).on( 'click', authModal );
	$( 'button#register' ).on( 'click', registerModal );
	/* [END]
	 * Модальные окна
	 */

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

	/* [START]
	 * Анимация поля поиска при форкусировке на нём
	 */
	$( 'input#header-search' ).on( 'focus', function() {
		$( this ).closest( 'label' ).addClass( 'focused' );
	} ).on( 'focusout', function() {
		$( this ).closest( 'label' ).removeClass( 'focused' );
	} );
	/* [END]
	 * Анимация поля поиска при форкусировке на нём
	 */

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

	/* [START]
	 * Открытие и закрытие подменю по наведению курсора
	 */
	$( 'header.site-header:not(.mobile) ul.header-menu li.menu-item.has-child' ).on( 'mouseenter', function() {
		$( this ).find( '.sub-menu' ).slideDown( 300 );
	} );
	$( 'header.site-header:not(.mobile) ul.header-menu li.menu-item.has-child .sub-menu' ).on( 'mouseleave', function() {
		$( this ).slideUp( 200 );
	} );
	/* [END]
	 * Открытие и закрытие подменю по наведению курсора
	 */

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

	/* [START]
	 * Открытие подменю на мобильных устройствах
	 */

	let touchtime = 0;
	$( 'header.site-header.mobile ul.header-menu li.menu-item.has-child a' ).on( 'click', function() {
		$( this ).toggleClass( 'active' );
		if (touchtime == 0) {
			// первый клик
			touchtime = new Date().getTime();
			if( $( this ).hasClass( 'active' ) ) {
				$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideDown( 'slow' );
			} else {
				$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideUp( 'slow' );
			}
			
			return false;
		} else {
			if (((new Date().getTime()) - touchtime) < 800) {
				// двойной клик
				
				window.location = this.href;
				touchtime = 0;
        		return false;
				
			} else {
				// не двойной и не первый клики
				touchtime = new Date().getTime();

				if( $( this ).hasClass( 'active' ) ) {
					$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideDown( 'slow' );
				} else {
					$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideUp( 'slow' );
				}
				
				return false;
			}
		}
	} );

	$( 'header.site-header.mobile ul.header-menu li.menu-item.has-child ul.sub-menu li.sub-menu-item a.sub-link' ).on( 'click', function() {
		if (touchtime == 0) {
			// первый клик
			touchtime = new Date().getTime();
			return true;
		} else {
			if (((new Date().getTime()) - touchtime) < 800) {
				// двойной клик
				
				window.location = this.href;
				touchtime = 0;
        		return false;
				
			} else {
				// не двойной и не первый клики
				touchtime = new Date().getTime();

				if( $( this ).hasClass( 'active' ) ) {
					$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideDown( 'slow' );
				} else {
					$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideUp( 'slow' );
				}
				
				return false;
			}
		}
	} );
	/* [END]
	 * Открытие подменю на мобильных устройствах
	 */

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

	/* [START]
	 * Мобильное меню
	 */
	$( '#mobile-menu' ).hide();
	$( 'button#toggle' ).on( 'click', function() {
		$( 'header.mobile' ).toggleClass( 'menu-toggled' );

		if( $( 'header.mobile' ).hasClass( 'menu-toggled' ) ) {
			$( '#mobile-menu' ).slideDown();
		} else {
			$( '#mobile-menu' ).slideUp();
		}
		
		$( 'button#toggle' ).toggleClass( 'toggled' );
		$( 'body' ).toggleClass( 'noscroll' );
	} );
	/* [END]
	 * Мобильное меню
	 */

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

	/* [START]
	 * Модальное окно записи к специалисту
	 */
	$( '.specialist' ).on( 'click', function() {
		const specialistName = $( this ).find( '.name' ).text();
		const specialistPhoto = $( this ).find( '.face' ).attr( 'src' );
		Swal.fire( {
			showCloseButton: true,
			showConfirmButton: false,
			html: '<div class="specialist-container">' +
				'<div class="title">' +
					'<p>Запись к специалисту</p>' +
				'</div>' +
				'<div class="specialist">' +
					'<img class="specialist-photo" src="'+ specialistPhoto +'" alt="'+ specialistName +'" />' +
					'<p class="specialist-name">'+ specialistName +'</p>' +
				'</div>' +
				'<div class="form">' +
					'<form class="auth-register" id="specialist" method="POST" action="/">' +
						'<label for="name">Введите Ваше имя <span class="needs">*</span></label>' +
						'<input type="text" id="name" placeholder="Ваше имя" />' +
						'<label for="phone">Укажите Ваш номер телефона <span class="needs">*</span></label>' +
						'<input type="tel" id="phone" placeholder="Ваш номер" />' +
						'<input class="action-btn" type="submit" id="appointment" value="Записаться" />' +
					'</form>' +
				'</div>' +
			'</div>',
		} );
		$( '#appointment' ).on( 'click', function() {
			Swal.fire( {
				icon: 'success',
				title: 'Вы записаны',
				text: 'В ближайшее время мы перезвоним вам для уточнения деталей',
				confirmButtonText: 'Хорошо',
				timer: 5000,
			} )
		} );
	} )
	/* [END]
	* Модальное окно записи к специалисту
	*/

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

	/* [START]
	* 1. Получение месяца и автовыбор на странице семинаров
	* 2. Фильтрация семинаров по клику на месяц
	*/
	const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	const date = new Date();
	const currentMonth = monthNames[date.getMonth()];
	
	$( '.month-filter-item' ).each( function() {
		const filterData = $( this ).data( 'filter' );

		if ( filterData == currentMonth ) {
			$( this ).addClass( 'active' );
		}
	} );

	$( '#event-list li.event-object-item' ).hide();
	$( '#event-list li.event-object-item' ).filter( `[data-filter="${currentMonth}"]` ).show();

	$( '.month-filter-item' ).on( 'click', function() {
		const month = $( this ).data( 'filter' );
		$( '.month-filter-item' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
		
		if ( month == 'All' ) {
			$( '#event-list li.event-object-item' ).fadeIn();
		} else {
			$( '#event-list li.event-object-item' ).hide();
			$( '#event-list li.event-object-item' ).filter( `[data-filter="${month}"]` ).fadeIn();
		}
	} );

	/* [START]
	* 1. Получение месяца и автовыбор на странице семинаров
	* 2. Фильтрация семинаров по клику на месяц
	*/

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

	/* [START]
	 * Слайдеры SwiperJS
	 */
	const courseSlider = new Swiper( '.course-slider', {
		loop: false,
		slidesPerView: 1,
		grid: false,
		spaceBetween: 30,
		pagination: {
			el: '.course-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		  },
		navigation: {
			prevEl: '#course-prev',
			nextEl: '#course-next',
		},
		breakpoints: {
			960: {
				slidesPerView: 2,
				grid: {
					rows: 2,
				},
			},
		},
	} );

	const teamSlider = new Swiper( '.team-slider', {
		loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: '.team-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		  },
		navigation: {
			prevEl: '#team-prev',
			nextEl: '#team-next',
		},
		breakpoints: {
			580: {
				slidesPerView: 2,
			},
			960: {
				slidesPerView: 3,
			},
		},
	} );

	const certSlider = new Swiper( '.cert-slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		navigation: {
			prevEl: '#cert-prev',
			nextEl: '#cert-next',
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			900: {
				slidesPerView: 4,
			},
		},
	} );
	/* [END]
	 * Слайдеры SwiperJS
	 */

//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]

} );
