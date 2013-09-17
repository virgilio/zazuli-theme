jQuery(document).ready(function() {

	//Inicia as caixas expansíveis escondidas
	jQuery('div.expansible-content').toggle();
	
	jQuery('a.expansible-link').click(function() {
		// Expande ou retrai o menu
			jQuery(this).parents('div.expansible-box').children('div.expansible-content').slideToggle(700);
	});

});

