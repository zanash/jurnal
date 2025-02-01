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
// Cari elemen <li> yang memiliki anak <a> dengan href tertentu
const listItems = document.querySelectorAll('li > a[href="https://journal.walisongo.ac.id/index.php/economica/search"]');

// Loop melalui hasil dan sembunyikan elemen <li>
listItems.forEach(anchor => {
    const parentLi = anchor.parentElement;
    if (parentLi) {
        parentLi.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function () {
  // Membuat elemen modal secara dinamis
  const modalContainer = document.createElement("div");
  modalContainer.id = "welcome";
  modalContainer.className = "modal modal-fixed-footer";
  modalContainer.style.cssText = "z-index: 1003; display: none; opacity: 0; top: 4%; transform: scaleX(0.8) scaleY(0.8);";
  modalContainer.innerHTML = `
    <div class="modal-content">
      <img src="https://zanash.id/widget/gambar/header-2025-rajawali.webp"/>
    </div>
  `;

  document.body.appendChild(modalContainer);

  const welcomeModal = document.getElementById("welcome");
  
  if (welcomeModal) {
    // Menggunakan metode Materialize untuk membuka modal jika tersedia
    if (typeof M !== "undefined" && M.Modal) {
      const instance = M.Modal.init(welcomeModal, { dismissible: false });
      instance.open();
    } else {
      // Jika Materialize tidak tersedia, atur manual CSS untuk menampilkan modal
      welcomeModal.style.display = "block";
      welcomeModal.style.opacity = "1";
      welcomeModal.style.transform = "scaleX(1) scaleY(1)";
    }
  }
});
