// Met deze variabelen roepen we CSS selectoren
var filterButton = document.querySelector('aside button:nth-of-type(1)');
var sortButton = document.querySelector('aside button:nth-of-type(2)');
var showContent1 = document.querySelector('aside fieldset:nth-of-type(1)');
var showContent2 = document.querySelector('aside fieldset:nth-of-type(2)');

//Hiermee roepen we de like buttons elementen aan
var likeButton = document.querySelector('article footer p button');
var showBounce = document.querySelector('i.far.fa-heart');

//Hiermee roepen we de favorieten buttons elementen aan
var favoriteButton = document.querySelector('article > button');
var showBackground = document.querySelector('article button');
var showStar = document.querySelector('i.far.fa-star');
var showNavStar = document.querySelector('nav li:nth-of-type(2)');

var countStar = document.getElementById('count');


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


});

favoriteButton.addEventListener('click', function () {

    //hiermee veranderen we de achtergrond van van de favorieten knoppen
    showBackground.classList.toggle('bg-fav');
    showStar.classList.toggle('showfav');
    countStar.innerHTML = "1";
    showNavStar.classList.toggle('shownavfav');



});
