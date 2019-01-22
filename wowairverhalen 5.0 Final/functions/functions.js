// Met deze variabelen roepen we CSS selectoren
var filterButton = document.querySelector('aside button:nth-of-type(1)');
var sortButton = document.querySelector('aside button:nth-of-type(2)');
var showContent1 = document.querySelector('aside fieldset:nth-of-type(1)');
var showContent2 = document.querySelector('aside fieldset:nth-of-type(2)');

//Hiermee roepen we de like buttons elementen aan
var likeButton = document.querySelector('article footer p button');
var showBounce = document.querySelector('i.far.fa-heart');
var countHeart = document.querySelector('article footer p button span:nth-of-type(1)')

//Hiermee roepen we de favorieten buttons elementen aan
var favoriteButton = document.querySelector('article > button');
var showBackground = document.querySelector('article button');
var showStar = document.querySelector('i.far.fa-star');
var showNavStar = document.querySelector('nav li:nth-of-type(3)');

//Hiermee maken we een counter voor de like in de navigatiebalk
var countStar = document.getElementById('count');

//Hiermee wordt de id opgehaald van de popup
var popupOn = document.getElementById('popup');

//Hiermee roep ik class "mijn acount"
var myAccButton = document.querySelector('nav li:nth-of-type(2)');
var showLogin = document.querySelector('nav fieldset');


//Hieronder maken we een click-event, waar er een functie wordt uitgevoerd.
sortButton.addEventListener('click', function () {

    //Hieronder roepen we de CSS class op die we al gemaakt hebben in de CSS file.
    showContent1.classList.add('off');
    showContent2.classList.add('show');
    sortButton.classList.add('active');
    filterButton.classList.add('noactive');
});

filterButton.addEventListener('click', function () {

    //Hieronder roepen we de CSS class op die we al gemaakt hebben in de CSS file.
    showContent1.classList.remove('off');
    showContent2.classList.remove('show');
    sortButton.classList.remove('active');
    filterButton.classList.remove('noactive');
});

likeButton.addEventListener('click', function () {

    //hiermee veradneren de element van de like knoppen
    showBounce.classList.toggle('like');

    //Hieronder wordt een count or discount aangemaakt
    if (countHeart.innerHTML == "150") {
        countHeart.innerHTML = "151";
    } else {
        countHeart.innerHTML = "150";
    }

});

favoriteButton.addEventListener('click', function () {

    //hiermee veranderen we de achtergrond van van de favorieten knoppen
    showBackground.classList.toggle('bg-fav');
    showStar.classList.toggle('showfav');
    showNavStar.classList.toggle('shownavfav');



    //Hieronder wordt een count or discount aangemaakt
    if (countStar.innerHTML == "0") {
        countStar.innerHTML = "1";
    } else {
        countStar.innerHTML = "0";
    }

    //Hieronder wordt de popup geupdate
    if (popupOn.innerHTML == "") {

        popupOn.innerHTML = "<section><h2>Verhaal 'Repcept' is nu in jouw favorieten bewaard!</h2><p>Dit verhaal downloaden als PDF?<p> <a href='images/Alzheimer-Poster-V2.jpg'download><button>Downloaden <i class='fas fa-download'></i></button></a></section>";
    } else {
        popupOn.innerHTML = "";
    }

});

//Hieronder geef een functie als je op "my account" klikt
myAccButton.addEventListener('click', function () {

    showLogin.classList.toggle('showlogin');

});


