// JavaScript Document
/*
function openNav(){
	document.getElementById("myNavbar").style.display="block";
	document.getElementById("openNav").style.display="none";
	document.getElementById("closeNav").style.display="block";	
}
function closeNav(){
	document.getElementById("myNavbar").style.display="none";
	document.getElementById("openNav").style.display="block";	
    document.getElementById("closeNav").style.display="none";	
}*/
		$(document).ready(function() {

			/*
			* Plugin intialization
			*/
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3', 'page4'],
			    sectionsColor: ['white', '#ee005a', '#2C3E50', '#39C'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
			   	},
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    }
			});


			/*
		    * Internal use of the demo website
		    */
		    $('#showExamples').click(function(e){
				e.stopPropagation();
				e.preventDefault();
				$('#examplesList').toggle();
			});

			$('html').click(function(){
				$('#examplesList').hide();
			});
	    });


function myFunction(x) {
    x.classList.toggle("change");
}







