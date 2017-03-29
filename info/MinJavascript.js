// JavaScript Document
function openNav(){
	document.getElementById("myNavbar").style.display="block";
	document.getElementById("openNav").style.display="none";
	document.getElementById("closeNav").style.display="block";	
}
function closeNav(){
	document.getElementById("myNavbar").style.display="none";
	document.getElementById("openNav").style.display="block";	
    document.getElementById("closeNav").style.display="none";	
}

$(window).scroll(function() {
	var fall = $(window).height();
  
  if ($(document).scrollTop() > fall) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});