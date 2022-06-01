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
      		  filter: '.app, .card, .icon, .logo, .web, .kosong'  
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
