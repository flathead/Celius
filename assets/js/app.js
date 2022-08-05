jQuery( function( $ ) {
	// Search focus animation
	$( 'input#header-search' ).on( 'focus', function() {
		$( this ).closest( 'label' ).addClass( 'focused' );
	} ).on( 'focusout', function() {
		$( this ).closest( 'label' ).removeClass( 'focused' );
	} );
	
	// Слайдеры
	const courseSlider = new Swiper( '.course-slider', {
		slidesPerView: 2,
		grid: {
		  rows: 2,
		},
		spaceBetween: 30,
		pagination: {
			el: '.course-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + '</span>';
			},
		  },
		navigation: {
			prevEl: '.course-prev',
			nextEl: '.course-next',
		}
	});
} );

