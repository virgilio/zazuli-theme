jQuery(document).ready(function() {
	var notificacoes_wrapper = jQuery('div#notificacoes-wrapper');
	
	//Painel de notificações inicia escondido
	notificacoes_wrapper.toggle();
	
	jQuery('body').on('click', 'a#notificacoes-link', function() {
		// Expande ou retrai o menu
			notificacoes_wrapper.slideToggle('fast');
	});
	
	jQuery('body').on('mouseenter', 'a#notificacoes-link', function() {
		// Expande ou retrai o menu
		
		jQuery('.janela').filter(":visible").slideToggle('fast');
		
		if( !( notificacoes_wrapper.is( ":visible" ) ) ) {
			notificacoes_wrapper.slideToggle('slow');
		}
	});
	
	jQuery('body').on('mouseleave', '#area-perfil', function() {
		// Expande ou retrai o menu
		if( ( notificacoes_wrapper.is( ":visible" ) ) ) {
			notificacoes_wrapper.slideToggle('fast');
		}
	});
	
	jQuery('body').on('click', '.notificacao p a', function(e) {
		e.preventDefault();
		
		marcarComoLida(jQuery(this));
	});
	
	//alert('/wp-content/plugins/funcionalidades/zazu_notificacoes_commander.php');
	
	function requisitarNovasNotificacoes() {
		//alert("requisitando");
		jQuery.ajax({
			url: ajaxAdmin.adminUrl,
        	data: {action: 'zazu_atualizar_notificacoes'},
        	type: 'POST'
		}).done(function(resultado) {
				jQuery('#area-notificacoes').html(resultado);
				notificacoes_wrapper = jQuery('div#notificacoes-wrapper');
				
				if(( notificacoes_wrapper.is( ":visible" ) ) && !( jQuery('#area-notificacoes').is(':hover') ) ) {
					notificacoes_wrapper.toggle();
				}
				if(jQuery('#area-notificacoes .notificacao p a').text() == "Nenhuma notificação nova..."){
					apagarLuzNotificacao();
				} else{
					acenderLuzNotificacao();
				}
			 });
	}
	
	function apagarLuzNotificacao() {
		jQuery('#numero-notificacoes').addClass('notificacoes-apagado').removeClass('notificacoes-aceso');
	}
	
	function acenderLuzNotificacao() {
		jQuery('#numero-notificacoes').addClass('notificacoes-aceso').removeClass('notificacoes-apagado');
	}
	
	function marcarComoLida(notificacao) {
		var idNotificacao = notificacao.parent().siblings('.id-notificacao').val();
		var urlNotificacao = notificacao.attr('href');
		
		jQuery.ajax({
			url: ajaxAdmin.adminUrl,
        	data: {action: 'zazu_marcar_notificacao_como_lida',
        			id_notificacao: idNotificacao},
        	type: 'POST'
		}).done(function(resultado) {
			 	window.location = urlNotificacao;
			 });
	}
	
	//A cada 5 segundos busca novas notificações.
	requisitarNovasNotificacoes();
	setInterval(function () {
    	requisitarNovasNotificacoes();
	}, 5000);
});