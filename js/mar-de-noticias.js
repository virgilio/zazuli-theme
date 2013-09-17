jQuery(document).ready(function() {
	jQuery('#mar-de-noticias').masonry({
		itemSelector: '.noticia-do-mar',
		columnWidth: function() {
			var colWidth = jQuery('.one').width();
    		return colWidth;
  		},
	  	isAnimated: true,
		animationOptions: {
		    duration: 750,
		    easing: 'linear',
		    queue: false
	  	}
	});
});