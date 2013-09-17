jQuery(document).ready(function() {

	jQuery('body').on('click', '.pontuacao-post li a', function(e) {
		e.preventDefault();
		var idPost = jQuery(this).parent().parent().siblings('.pontuacao-post-id').val();
		var valorPontuacao = jQuery(this).text();
		atualizarPontuacaoPost(idPost, valorPontuacao);
		
		var pontosAtualizados = parseInt(jQuery('.pontuacao').text()) - parseInt(jQuery('.destaque-regua a').text()) + parseInt(valorPontuacao);
		jQuery('.pontuacao').text(pontosAtualizados);
	});
	
	jQuery('body').on('click', '.pontuacao-comentario li a', function(e) {
		e.preventDefault();
		var idComentario = jQuery(this).parent().parent().siblings('p').children('.pontuacao-comentario-id').val();
		var valorPontuacao = jQuery(this).text();
		atualizarPontuacaoComentario(idComentario,valorPontuacao);
	});
	
	function atualizarPontuacaoPost(idPost, valorPontuacao) {
		jQuery.ajax({
			url: ajaxAdmin.adminUrl,
        	data: {action: 'zazu_atualizar_pontuacao_post',
        			id_post: idPost,
        			valor: valorPontuacao},
        	type: 'POST'
		}).done(function(resultado) {
				atualizarRegua(valorPontuacao);
			 });
	}
	
	function atualizarPontuacaoComentario(idComentario, valorPontuacao) {
		//var valorElemento = elementoListaPontuacao.val();
		alert('comn: ' + idComentario);
		jQuery.ajax({
			url: ajaxAdmin.adminUrl,
        	data: {action: 'zazu_atualizar_pontuacao_comentario',
        			id_comentario: idComentario,
        			valor: valorPontuacao},
        	type: 'POST'
		}).done(function(resultado) {
				//alert(resultado);
			 });
	}
	
	function atualizarRegua(valorPontuacao){
		jQuery('.pontuacao-regua li').removeClass('destaque-regua');
		switch(valorPontuacao){
			case '-1':
				jQuery('.pontuacao-regua li:nth-child(1)').addClass('destaque-regua');
				break;
			
			case '0':
				jQuery('.pontuacao-regua li:nth-child(2)').addClass('destaque-regua');
				break;
			
			case '+1':
				jQuery('.pontuacao-regua li:nth-child(3)').addClass('destaque-regua');
				break;
			
			case '+2':
				jQuery('.pontuacao-regua li:nth-child(4)').addClass('destaque-regua');
				break;
		}
		
	}
	
});