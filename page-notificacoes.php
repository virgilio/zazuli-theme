<?php 
/*
 * Template Name: Notificacoes
 *
 */
 
 get_header(); ?>
	<div id="content">
		<div class="container content-list">
			<h1><?php the_title(); ?></h1>
			<?php zazu_mostrar_notificacoes(get_current_user_id()); ?>
		</div>
	</div>
<?php get_footer(); ?>