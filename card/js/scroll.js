$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	});
	
$(function(){
    $("#scroll").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },800);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 200){
            $('#scroll').fadeIn("fast");
        } else {
            $('#scroll').stop().fadeOut("fast");
        }
    });
});