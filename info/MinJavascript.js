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




//för skrolleffekterna


$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});