//AOS animate on scroll library
//source: https://michalsnik.github.io/aos/
AOS.init();

//top button
//sources: https://codepen.io/matthewcain/pen/ZepbeR, https://www.geeksforgeeks.org/how-to-animate-scrolltop-using-jquery/
$(window).scroll(function() {
  var btn = $('#myBtn');
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
function topFunction() {
  $("html, body").animate(
    { scrollTop: "0" }, 1000);
}


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
  if ($(this).val() != "booking") {
    $('.phone').hide();
    $('#phone').removeAttr('required');
    $('.date').hide();
    $('#datefield').removeAttr('required');
    $('.time').hide();
    $('#timefield').removeAttr('required');
    $('.comment').hide();
    $('.message').show();
    $('#message').attr('required');  
 }else{
    $('.phone').show();
    $('#phone').attr('required');
    $('.date').show();
    $('#datefield').attr('required');
    $('.time').show();
    $('#timefield').attr('required');
    $('.comment').show();
    $('.message').hide();
    $('#message').removeAttr('required');
  }
});
$("#reason").trigger("change");


//adjusted time selection
//source: https://timepicker.co
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



