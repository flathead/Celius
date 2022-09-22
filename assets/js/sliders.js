jQuery( function( $ ) {
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

	new Swiper( '.product-gallery', {
		slidesPerView: 1,
		autoplay: {
			delay: 4000,
		},
		spaceBetween: 20,
		loop: true,
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
} );
