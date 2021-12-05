//active (underlined) navmenu elements
function juices() {
var juices = document.getElementById("onclickjuices");
juices.classList.add("active");
var shakes = document.getElementById("onclickshakes");
shakes.classList.remove("active");
var bowls = document.getElementById("onclickbowls");
bowls.classList.remove("active");
var savoury = document.getElementById("onclicksavoury");
savoury.classList.remove("active");
var drinks = document.getElementById("onclickdrinks");
drinks.classList.remove("active");
}

function shakes() {
var juices = document.getElementById("onclickjuices");
juices.classList.remove("active");
var shakes = document.getElementById("onclickshakes");
shakes.classList.add("active");
var bowls = document.getElementById("onclickbowls");
bowls.classList.remove("active");
var savoury = document.getElementById("onclicksavoury");
savoury.classList.remove("active");
var drinks = document.getElementById("onclickdrinks");
drinks.classList.remove("active");
}

function bowls() {
var juices = document.getElementById("onclickjuices");
juices.classList.remove("active");
var shakes = document.getElementById("onclickshakes");
shakes.classList.remove("active");
var bowls = document.getElementById("onclickbowls");
bowls.classList.add("active");
var savoury = document.getElementById("onclicksavoury");
savoury.classList.remove("active");
var drinks = document.getElementById("onclickdrinks");
drinks.classList.remove("active");
}

function savoury() {
var juices = document.getElementById("onclickjuices");
juices.classList.remove("active");
var shakes = document.getElementById("onclickshakes");
shakes.classList.remove("active");
var bowls = document.getElementById("onclickbowls");
bowls.classList.remove("active");
var savoury = document.getElementById("onclicksavoury");
savoury.classList.add("active");
var drinks = document.getElementById("onclickdrinks");
drinks.classList.remove("active");
}

function drinks() {
var juices = document.getElementById("onclickjuices");
juices.classList.remove("active");
var shakes = document.getElementById("onclickshakes");
shakes.classList.remove("active");
var bowls = document.getElementById("onclickbowls");
bowls.classList.remove("active");
var savoury = document.getElementById("onclicksavoury");
savoury.classList.remove("active");
var drinks = document.getElementById("onclickdrinks");
drinks.classList.add("active");
}


// flexible form
$("#reason").change(function() {
  if ($(this).val() == "booking") {
    $('.phone').show();
    $('#phone').attr('required', '');
    $('.date').show();
    $('#date').attr('required', '');
    $('.time').show();
    $('#time').attr('required', '');
    $('.comment').show();
    $('.message').hide();
    $('#message').removeAttr('required');
  } else {
    $('.phone').hide();
    $('#phone').removeAttr('required');
    $('.date').hide();
    $('#date').removeAttr('required');
    $('.time').hide();
    $('#time').removeAttr('required');
    $('.comment').hide();
    $('.message').show();
    $('#message').attr('required', '');
    $('#message').attr('data-error', 'This field is required.');
  }
});
$("#reason").trigger("change");


//adjusted time selection
// source: https://timepicker.co
$(document).ready(function(){
  $('#timefield').timepicker({
      timeFormat: 'h:mm a',
      interval: 30,
      minTime: '8:00am',
      maxTime: '5:30pm',
      startTime: '8:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true,
  });
});

// // todays min date form
// // source: https://www.codegrepper.com/code-examples/html/input+type%3Ddate+min+today
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0'+dd;
}
if (mm < 10) {
  mm = '0'+mm;
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datefield").setAttribute("placeholder", today);
document.getElementById("datefield").setAttribute("min", today);


//hamburger mobile menu 
function hamburgerMenuFunction() {
  var x = document.getElementById("grownavbar");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}

// As A Vanilla JavaScript Plugin
var gallery = new SimpleLightbox('.gallery a', {
    /* options */
// shows fullscreen overlay
overlay: true,

// shows navigation arrows
nav: true,

// shows close button
close: true,

// text for close button
closeText: 'X',

// swipe up or down to close gallery
swipeClose: true,

// file extensions
fileExt: 'png|jpg|jpeg|gif',

// weather to slide in new photos or not, disable to fade
animationSlide: true,

// animation speed in ms
animationSpeed: 250,

// image preloading
preloading: true,

// keyboard navigation
enableKeyboard: true,

// endless looping
loop:  true,

// group images by rel attribute of link with same selector
//rel: false,

// closes the lightbox when clicking outside
docClose:  true,

// how much pixel you have to swipe
swipeTolerance: 50,

// lightbox wrapper Class
className: 'simple-lightbox',

// width / height ratios
//widthRatio: 0.8,
//heightRatio: 0.9,

// scales the image up to the defined ratio size
//scaleImageToRatio: false,

// disable right click
disableRightClick: false,

// disable page scroll
//disable<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: true,

// show an alert if image was not found
alertError:  true,

// alert message
alertErrorMessage: 'Image not found, next image will be loaded',


// enable history back closes lightbox instead of reloading the page
history: true,

// time to wait between slides
throttleInterval: 0,

// Pinch to <a href="https://www.jqueryscript.net/zoom/">Zoom</a> feature for touch devices
doubleTapZoom: 2,
maxZoom: 10,

// adds class to html element if lightbox is open
//htmlClass: 'has-lightbox',



// fade speed in ms
fadeSpeed: 300,

// whether to uniqualize images
uniqueImages: true,

// focus the lightbox on open to enable tab control
focus: true,
});

// As A jQuery Plugin -->
/*var gallery = $('.gallery a').simpleLightbox({
    /* options */
/*});*/

