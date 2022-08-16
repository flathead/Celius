jQuery( function( $ ) {
	// Search focus animation
	$( 'input#header-search' ).on( 'focus', function() {
		$( this ).closest( 'label' ).addClass( 'focused' );
	} ).on( 'focusout', function() {
		$( this ).closest( 'label' ).removeClass( 'focused' );
	} );

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
	
	// Слайдеры
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
} );

