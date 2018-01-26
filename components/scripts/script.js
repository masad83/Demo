	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);


//-------------------------------------Mobile nave------------------------------------------------//

var navbarToggle = $(".navbar-toggle");
navbarToggle.on('click',function(){
	navbarToggle.parent().toggleClass('show');
})

//-------------------------------------Sliders breakpoints------------------------------------------------//	
	  
	  var breakpoints = [
			{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		];


	//------------------------------------- Event Slider------------------------------------------------//	
      $(".event-sld").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
		responsive: breakpoints
      });

	  $(".event-sld-next").click(function(e){
		  e.preventDefault();
		  $(".event-sld").slick("next");
		  return false;
	  });
	  
	  $(".event-sld-prev").click(function(e){
		  e.preventDefault();
		  $(".event-sld").slick("prev");
		   return false;
	  });



	  
	  
	  //------------------------------------- Member Ship Slider------------------------------------------------//	
      $(".memberships-sld").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
		responsive: breakpoints
		
      });
	
	 $(".memberships-sld-next").click(function(e){
		  e.preventDefault();
		  $(".memberships-sld").slick("next");
		  return false;
	  });
	  
	  $(".memberships-sld-prev").click(function(e){
		  e.preventDefault();
		  $(".memberships-sld").slick("prev");
		   return false;
	  });


	  //------------------------------------- Seasonal Slider------------------------------------------------//	
	  

      $(".seasonal-sld").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
		responsive: breakpoints
      });

	  $(".seasonal-sld-next").click(function(e){
		  e.preventDefault();
		  $(".seasonal-sld").slick("next");
		  return false;
	  });
	  
	  $(".seasonal-sld-prev").click(function(e){
		  e.preventDefault();
		  $(".seasonal-sld").slick("prev");
		   return false;
	  });


$(document).ready(function(){
	
	
//------------------------------------- Navigation setup ------------------------------------------------//

});