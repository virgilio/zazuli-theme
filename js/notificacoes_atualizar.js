jQuery(document).ready(function() {
	var notificacoes_wrapper = jQuery('div#notificacoes-wrapper');
	
	//Painel de notificações inicia escondido
	notificacoes_wrapper.toggle();
	
	jQuery('a#notificacoes-link').click(function() {
		// Expande ou retrai o menu
			notificacoes_wrapper.slideToggle('fast');
	});
	
	jQuery('a#notificacoes-link').mouseenter(function() {
		// Expande ou retrai o menu
		if( !( notificacoes_wrapper.is( ":visible" ) ) ) {
			notificacoes_wrapper.slideToggle('fast');
		}
	});
	
	jQuery('#area-perfil').mouseleave(function() {
		// Expande ou retrai o menu
		if( ( notificacoes_wrapper.is( ":visible" ) ) ) {
			notificacoes_wrapper.slideToggle('fast');
		}
	});
	
	//alert('/wp-content/plugins/funcionalidades/zazu_notificacoes_commander.php');
	
	function requisitarNovasNotificacoes() {
		//alert("requisitando");
		jQuery.ajax({
			url: ajaxAdmin.adminUrl,
        	data: {action: 'zazu_atualizar_notificacoes'},
        	type: 'POST'
		}).done(function(resultado) { jQuery('#area-notificacoes').html(resultado); });
	}
	
	function apagarLuzNotificacao() {
		jQuery('#notificacoes-link img').attr("src","../images/notificacoes_apagado.png");
	}
	
	function acenderLuzNotificacao() {
		jQuery('#notificacoes-link img').attr("src","../images/notificacoes_aceso.png");
	}

	function atualizarListaNotificacoes(){
		alert('garla');
		$.get('inc/header-notificacoes.php', function(resultado){
			$('#area-notificacoes').html(resultado);
		}).done(function() { alert("second success"); })
.fail(function() { alert("error"); })
.always(function() { alert("finished"); });
	}
		
	function atualizarNotificacoes(numeroNotificacoes) {
		alert("faraoh");
		//atualizarListaNotificacoes();
		
		if(numeroNotificacoes > 0){
			acenderLuzNotificacao();
		}else{
			apagarLuzNotificacao();
		}
	}
	
	//A cada 5 segundos busca novas notificações.
	requisitarNovasNotificacoes();
	setInterval(function () {
    	requisitarNovasNotificacoes();
	}, 5000);
});