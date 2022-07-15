(function($) {	

    //slider

    var moviePictures1=[]

    moviePictures1[0]=('images/movie/presentation.png')
    moviePictures1[1]= ('images/movie/home.png')
    moviePictures1[2]=('images/movie/Side-Menu.png')

    var movie1 = document.getElementById("movie1");


    movie1.src=moviePictures1[0]

    var picture=0

    function cambioMovie(){

        picture++

        if(picture>2){
            picture=0
        }

        movie1.src=moviePictures1[picture]
    }

    setInterval(cambioMovie, 4000);

    //sliderMovie2

    var moviePictures2=[]

    moviePictures2[0]= ('images/movie/coffee.png')
    moviePictures2[1]=('images/movie/beverages.png')
    moviePictures2[2]=('images/movie/snacks.png')
    
    var movie2 = document.getElementById("movie2");


    movie2.src=moviePictures2[0]

    var picture2=0

    function cambioMovie1(){

        picture2++

        if(picture2>2){
            picture2=0
        }

        movie2.src=moviePictures2[picture2]
    }

    setInterval(cambioMovie1, 4000);

    //sliderMovie3

    var moviePictures3=[]

    moviePictures3[0]= ('images/movie/pop-up.png')
    moviePictures3[1]=('images/movie/carusel.png')
    
    var movie3 = document.getElementById("movie3");


    movie3.src=moviePictures3[0]

    var picture3=0

    function cambioMovie3(){

        picture3++

        if(picture3>1){
            picture3=0
        }

        movie3.src=moviePictures3[picture3]
    }

    setInterval(cambioMovie3, 4000);

    //sliderMovie4

    var moviePictures4=[]

    moviePictures4[0]= ('images/movie/Cart.png')
    moviePictures4[1]=('images/movie/pickup.png')
    
    var movie4 = document.getElementById("movie4");


    movie4.src=moviePictures4[0]

    var picture4=0

    function cambioMovie4(){

        picture4++

        if(picture4>1){
            picture4=0
        }

        movie4.src=moviePictures4[picture4]
    }

    setInterval(cambioMovie4, 4000);

    //sliderMovie5

    var moviePictures5=[]

    moviePictures5[0]= ('images/movie/payment.png')
    moviePictures5[1]=('images/movie/payment-filled.png')
    moviePictures5[2]= ('images/movie/thanks.png')
    
    var movie5 = document.getElementById("movie5");


    movie5.src=moviePictures5[0]

    var picture5=0

    function cambioMovie5(){

        picture5++

        if(picture5>2){
            picture5=0
        }

        movie5.src=moviePictures5[picture5]
    }

    setInterval(cambioMovie5, 4000);

    


})(jQuery);