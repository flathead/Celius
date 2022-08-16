jQuery( function( $ ) {
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
	$( 'header.site-header.mobile ul.header-menu li.menu-item.has-child a' ).on( 'click', function() {
		$( this ).toggleClass( 'active' );
		if( $( this ).hasClass( 'active' ) ) {
			$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideDown( 'slow' );
		} else {
			$( this ).closest( '.has-child' ).find( 'ul.sub-menu' ).slideUp( 'slow' );
		}
		return false;
	} );
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
	/* [END]
	 * Слайдеры SwiperJS
	 */
//	[][][][][][][][][][][][][][][][][][][][][][][][][][][][]
} );

