$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				// http://mixitup.io
				$('#portfoliolist').mixItUp({
  				selectors: {
    			  target: '.portfolio',
    			  filter: '.filter'	
    		  },
    		  load: {
      		  filter: '.all'  
      		}     
				});								
			
			}

		};
		
		// Run the show!
		filterList.init();
		
		
	});	
	
	$(document).ready(function(){
		$("#srch-term").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#portfoliolist div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
      $('body').append('<div id="keatas" class="btn btn-success"><span class="glyphicon glyphicon-chevron-up"></span></div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#keatas').fadeIn();
			} else {
				$('#keatas').fadeOut();
			}
		}); 
    $('#keatas').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
$('#ojs').click(function(e) {
     doSomething();
     return false;
});
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('li > a[href="https://journal.walisongo.ac.id/index.php/economica/search"]');
    listItems.forEach(anchor => {
        const parentLi = anchor.parentElement;
        if (parentLi) {
            parentLi.style.display = 'none';
        }
    });
});


