(function($) {	

			//slider

			var bannerPictures=[]

			bannerPictures[0]= ('images/dance/paper-home.png')
			bannerPictures[1]=('images/dance/paper-video.png')
			bannerPictures[2]=('images/dance/paper-profile.png')
			bannerPictures[3]=('images/dance/digital-home.png')
			bannerPictures[4]=('images/dance/digital-video.png')
			bannerPictures[5]=('images/dance/digital-profile.png')

			var primerBanner = document.getElementById("slides");


			primerBanner.src=bannerPictures[0]

			var index=1

			function cambioImagen1(){

				index++

				if(index>5){
					index=0
				}

				primerBanner.src=bannerPictures[index]
			}

			setInterval(cambioImagen1, 4000);

			//slide1
			var bannerPictures1=[]

			bannerPictures1[0]=('images/dance/home-mobile.png')
			bannerPictures1[1]=('images/dance/styles.png')
			bannerPictures1[2]=('images/dance/styles-search.png')



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