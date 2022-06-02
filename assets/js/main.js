/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

			//slider

			var bannerPictures=[]

			bannerPictures[0]= ('images/dance/frame-paper.png')
			bannerPictures[1]=('images/dance/frame-paper2.png')
			bannerPictures[2]=('images/dance/frame-profile.png')
			bannerPictures[3]=('images/dance/digital-home.png')
			bannerPictures[4]=('images/dance/digital-styles.png')
			bannerPictures[5]=('images/dance/digital-video.png')



			var primerBanner = document.getElementById("slides");


			primerBanner.src=bannerPictures[0]

			var indice=0

			function cambioImagen1(){

				indice++

				if(indice>5){
					indice=0
				}

				primerBanner.src=bannerPictures[indice]
			}

			setInterval(cambioImagen1, 5000);

			//slide1
			var bannerPictures1=[]

			bannerPictures1[0]=('images/dance/styles.png')
			bannerPictures1[1]=('images/dance/styles-search.png')
			bannerPictures1[2]=('images/dance/home-mobile.png')



			var slide1 = document.getElementById("slide1");


			slide1.src=bannerPictures1[0]

			var indice=0

			function cambioImagen2(){

				indice++

				if(indice>2){
					indice=0
				}

				slide1.src=bannerPictures1[indice]
			}

			setInterval(cambioImagen2, 3000);

			//slide2
			var bannerPictures2=[]

			bannerPictures2[0]=('images/dance/beginners.png')
			bannerPictures2[1]=('images/dance/intermediate.png')
			bannerPictures2[2]=('images/dance/advanced.png')



			var slide2 = document.getElementById("slide2");


			slide2.src=bannerPictures2[0]

			var indice=0

			function cambioImagen3(){

				indice++

				if(indice>2){
					indice=0
				}

				slide2.src=bannerPictures2[indice]
			}

			setInterval(cambioImagen3, 3000);

			//slide3

	
			var bannerPictures3=[]

			bannerPictures3[0]=('images/dance/video.png')
			bannerPictures3[1]=('images/dance/video2.png')
			bannerPictures3[2]=('images/dance/video3.png')



			var slide3 = document.getElementById("slide3");


			slide3.src=bannerPictures3[0]

			var indice=0

			function cambioImagen4(){

				indice++

				if(indice>2){
					indice=0
				}

				slide3.src=bannerPictures3[indice]
			}

			setInterval(cambioImagen4, 3000);

			//slide4

	
			var bannerPictures4=[]

			bannerPictures4[0]=('images/dance/profile.png')
			bannerPictures4[1]=('images/dance/profile2.png')
		



			var slide4 = document.getElementById("slide4");


			slide4.src=bannerPictures4[0]

			var indice=0

			function cambioImagen5(){

				indice++

				if(indice>1){
					indice=0
				}

				slide4.src=bannerPictures4[indice]
			}

			setInterval(cambioImagen5, 3000);


})(jQuery);