(function($) {	


    //slideRosario

			var bannerRosario=[]

			bannerRosario[0]=('images/verde/home.png')
			bannerRosario[1]=('images/verde/menu-home-fav.png')
			bannerRosario[2]=('images/verde/menu-home-inicio.png')

			var sliderosario = document.getElementById("sliderosario");


			sliderosario.src=bannerRosario[0]

			var indice=0

			function cambioImagen6(){

				indice++

				if(indice>2){
					indice=0
				}

				sliderosario.src=bannerRosario[indice]
			}

			setInterval(cambioImagen6, 3000);


			//slideRosario2

			var bannerRosario2=[]

			bannerRosario2[0]=('images/verde/resto.png')
			bannerRosario2[1]=('images/verde/resto-vegan-liked.png')
			bannerRosario2[2]=('images/verde/resto-vegan.png')

			var sliderosario2 = document.getElementById('sliderosario2');


			sliderosario2.src=bannerRosario2[0]

			var indice=0

			function cambioImagen7(){

				indice++

				if(indice>2){
					indice=0
				}

				sliderosario2.src=bannerRosario2[indice]
			}

			setInterval(cambioImagen7, 3000);

            // //slide3

            // var bannerRosario3=[]

            // bannerRosario3[0]=('images/verde/restos-fast-food.png')
            // bannerRosario3[1]=('images/verde/restos-fast-vegan.png')

            // var sliderosario3 = document.getElementById("sliderosario3");


			// sliderosario3.src=bannerRosario3[0]

			// var indice=0

			// function cambioImagen8(){

			// 	indice++

			// 	if(indice>1){
			// 		indice=0
			// 	}

			// 	sliderosario3.src=bannerRosario3[indice]
			// }

			// setInterval(cambioImagen8, 3000);

})(jQuery);

 