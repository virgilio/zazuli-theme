<?php get_header(); ?>
	<div id="description" class="highlighted-text-box">
		<div class="container highlighted-text-box">
			<div class="one-third columns"><p class="highlighted-text"><?php echo esc_attr("Um espaço para jornalismo coletivo."); ?></p></div>
			<div class="one-third columns"><p class="light-highlighted-text"><?php echo esc_attr("Produzido, discutido e moderado pela comunidade."); ?></p></div>
		</div>
	</div>

        <div id="steps-wrapper" class="top-shadow">
           <div id="steps" class="container">
               <h1>Como funciona?</h1>
                <div class="first-step step columns"><img src="<?php bloginfo("template_directory");?>/images/passo1_maquina.png" /></div>
                <div class="column arrow"><img src="<?php bloginfo("template_directory");?>/images/seta_direita.png" /></div>
                <div class="second-step step columns"><img src="<?php bloginfo("template_directory");?>/images/passo2_teia_ponto.png" /></div>
                <div class="column arrow"><img src="<?php bloginfo("template_directory");?>/images/seta_direita.png" /></div>
                <div class="third-step step columns"><img src="<?php bloginfo("template_directory");?>/images/passo3_teia_complexa.png" /></div>
                <div id="steps-description" class="row column">
                    <h2 class="first-step step-description step-active">1. Você escreve ou compartilha imagens, vídeos e áudios</h2>
                    <p class="first-step step-description light-highlighted-text step-active">Após cadastrar-se, você pode compartilhar conteúdo em formato de texto, imagem, video e audio.</p>
                    <h2 class="second-step step-description">2. Sua postagem se trama junto às outras</h2>
                    <p class="second-step step-description light-highlighted-text">Através de tags e relacionamento entre conteúdos o seu texto se torna parte de uma trama, onde outra pessoas interferem – debatendo, tagueando, pontuando e compartilhando.</p>
                    <h2 class="third-step step-description">3. A trama ganha vida</h2>
                    <p class="third-step step-description light-highlighted-text">Sua postagem flui pela trama, gerando novos significados jornalísticos ao se relacionarem com outros conteúdos.</p>
                </div>
            </div>
        </div>
	<div id="content" class="top-shadow">
		<div class="container">
                    <h2><?php echo esc_attr("Artigos mais recentes"); ?></h2>
                        <?php zazu_mar_de_noticias(18); ?>
                    <h3 class="centered-text"><a href="<?php get_permalink(get_page_by_title('Mar de postagens')); ?>">Ver mais</a></h3>
		</div><!-- fim de #container -->
	</div><!-- fim de #content -->
<?php get_footer(); ?>