$(document).ready(function(){
	$('.navigation ul li').click(function(){
	$(this).children('ul').slideToggle(300);
	return false;
});



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


$(window).scroll(function(){
	$('p').css('background-color','red')
	return false;
});



    $('a').smoothScroll({
		speed : 3000,
	});
	
	
    $(document).ready(function(){
		
      var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
      });
      $('#google_map').submit(function(e){
        e.preventDefault();
        GMaps.geocode({
          address: $('#search').val().trim(),
          callback: function(results, status){
            if(status=='OK'){
              var latlng = results[0].geometry.location;
              map.setCenter(latlng.lat(), latlng.lng());
              map.addMarker({
                lat: latlng.lat(),
                lng: latlng.lng()
              });
            }
          }
        });
      });
    });
	

});



