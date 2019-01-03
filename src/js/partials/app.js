
$(document).ready(function(){

	$('.loader').css({
		opacity : 0,
		visibility: 'hidden'
	});
	
	$('.nav-open-btn').on('click', function() {
		$('body').toggleClass('no-scroll');
		$('.nav-mob').addClass('active-nav');
	});

	$(document).keyup(function(e) {     
    if(e.keyCode== 27) {
			$('body').removeClass('no-scroll');
			$('.nav-mob').removeClass('active-nav');
    } 
	});

	$("body").click(function(e) {
		if(e.target.id !== 'nav-open-btn'){
			$('.nav-mob').removeClass('active-nav');
		}      
	});

	$('.close-btn').on('click', function() {
		$('body').removeClass('no-scroll');
		$('.nav-mob').removeClass('active-nav');
	});

	$('.folio-cards').slick( {
		dots: false,
		arrows: false,
		autoplay: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	AOS.init();

});