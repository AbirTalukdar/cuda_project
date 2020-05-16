jQuery(document).ready(function($){
	
//slick nav..............

	$('.menu').slicknav({
		label:"",
	});
	
	
//sticky header..............

	$('.header').sticky();

	
//1 page smothscroller..............
	
	$('a').smoothScroll({
		speed : 1000,
	});
	
	
//scroller botton top..............

	$('.tiptop').click(function(){
	$('html,body').animate({
		scrollTop:0
	},500);
	return false;
});


$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top>700){
		$('.tiptop').fadeIn();
		return false;
	}
	else{
		$('.tiptop').fadeOut();
		return false;
	}
});

//pie_progress, progressbar..............

$('.pie_progress1').asPieProgress({
        namespace: 'pie_progress',
        barsize: '8',
		speed: 15,
		barcolor: '#30bae7',
		trackcolor: '#dfe8ed',
		size:100,
		max:100,
});
$('.pie_progress1').asPieProgress('start');

$('.pie_progress2').asPieProgress({
        namespace: 'pie_progress',
        barsize: '8',
		speed: 15,
		barcolor: '#d74680',
		trackcolor: '#dfe8ed',
		size:100,
		max:100,
});
$('.pie_progress2').asPieProgress('start');

$('.pie_progress3').asPieProgress({
        namespace: 'pie_progress',
        barsize: '8',
		speed: 15,
		barcolor: '#15c7a8',
		trackcolor: '#dfe8ed',
		size:100,
		max:100,
});
$('.pie_progress3').asPieProgress('start');

$('.pie_progress4').asPieProgress({
        namespace: 'pie_progress',
        barsize: '8',
		speed: 15,
		barcolor: '#eb7d4b',
		trackcolor: '#dfe8ed',
		size:100,
		max:100,
});


//progressbar function.............

$('.pie_progress4').asPieProgress('start');

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.protfolio_nav').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});



});
