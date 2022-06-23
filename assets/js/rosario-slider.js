(function($) {	


    //slideRosario

			var bannerRosario=[]

			bannerRosario[0]=('images/verde/home.png')
			bannerRosario[1]=('images/verde/menu-home-fav.png')
			bannerRosario[2]=('images/verde/menu-home-inicio.png')

			var sliderosario = document.getElementById("sliderosario");


			sliderosario.src=bannerRosario[0]

			var indice1=0

			function cambioImagen6(){

				indice1++

				if(indice1>2){
					indice1=0
				}

				sliderosario.src=bannerRosario[indice1]
			}

			setInterval(cambioImagen6, 3000);


			//slideRosario2

			var bannerRosario2=[]

			bannerRosario2[0]=('images/verde/resto.png')
			bannerRosario2[1]=('images/verde/resto-vegan-liked.png')
			bannerRosario2[2]=('images/verde/resto-vegan.png')

			var sliderosario2 = document.getElementById('sliderosario2');


			sliderosario2.src=bannerRosario2[0]

			var indice2=0

			function cambioImagen7(){

				indice2++

				if(indice2>2){
					indice2=0
				}

				sliderosario2.src=bannerRosario2[indice2]
			}

			setInterval(cambioImagen7, 3000);

            //slide3

            var bannerRosario3=[]

            bannerRosario3[0]=('images/verde/restos-fast-food.png')
            bannerRosario3[1]=('images/verde/restos-fast-vegan.png')
            bannerRosario3[2]=('images/verde/restos-pizzeria.png')

            var sliderosario3 = document.getElementById("sliderosario3");


			sliderosario3.src=bannerRosario3[0]

			var indice3=0

			function cambioImagen8(){

				indice3++

				if(indice3>2){
					indice3=0
				}

				sliderosario3.src=bannerRosario3[indice3]
			}

			setInterval(cambioImagen8, 3000);

            //slide4

            var bannerRosario4=[]

            bannerRosario4[0]=('images/verde/tiendas.png')
            bannerRosario4[1]=('images/verde/tiendas-comestibles.png')
            bannerRosario4[2]=('images/verde/tiendas-indumentaria.png')
            bannerRosario4[3]=('images/verde/tiendas-cosmetica.png')

            var sliderosario4 = document.getElementById("sliderosario4");


			sliderosario4.src=bannerRosario4[0]

			var indice4=0

			function cambioImagen9(){

				indice4++

				if(indice4>3){
					indice4=0
				}

				sliderosario4.src=bannerRosario4[indice4]
			}

			setInterval(cambioImagen9, 3000);

})(jQuery);

 