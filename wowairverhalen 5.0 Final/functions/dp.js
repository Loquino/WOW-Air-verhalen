

//Hiermee roep ik class "mijn acount"
var myAccButton = document.querySelector('nav li:nth-of-type(2)');
var showLogin = document.querySelector('nav fieldset');


///Verhalen-stie
var sec2 = document.querySelector('main section:nth-of-type(2)');
var showSec2 = document.querySelector('main section:nth-of-type(2)');
var sec3 = document.querySelector('main section:nth-of-type(3)');
var showSec3 = document.querySelector('main section:nth-of-type(3)');
var sec4 = document.querySelector('main section:nth-of-type(4)');
var showSec4 = document.querySelector('main section:nth-of-type(4)');
var sec5 = document.querySelector('main section:nth-of-type(5)');
var showSec5 = document.querySelector('main section:nth-of-type(5)');

///Sections verhalen site
sec2.addEventListener('click', function () {

    showSec2.classList.toggle('ss2');

});

sec3.addEventListener('click', function () {

    showSec3.classList.toggle('ss3');

});

sec4.addEventListener('click', function () {

    showSec4.classList.toggle('ss4');

});

sec5.addEventListener('click', function () {

    showSec5.classList.toggle('ss5');

});


//Hieronder geef een functie als je op "mijn account" klikt
myAccButton.addEventListener('click', function () {

    showLogin.classList.toggle('showlogin');

});
