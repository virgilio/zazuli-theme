<?php get_header(); ?>
	<div id="content" class="news">
		<div class="container content-list">
			<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

			<div <?php post_class() ?> id="post-<?php the_ID(); ?>">
				
				<h1><?php the_title(); ?></h1>
				<?php zazu_adicionar_lista_pontuacao_post(); ?>
				<?php include (TEMPLATEPATH . '/inc/meta.php' ); ?>

				<div class="entry">
					
					<?php the_content(); ?>

					<?php wp_link_pages(array('before' => 'Pages: ', 'next_or_number' => 'number')); ?>
					
                                        <div class="tags-wrapper">
                                            <h3 class="tags"><?php the_tags( 'Tags: ', ', ', ''); ?></h3>
                                        </div>
                                        
                                        <?php if(is_user_logged_in()): ?>
                                        <div class="add-tags-wrapper">
                                            <h3>+ Adicionar tags: </h3>
                                            <form class="add-tags-form clearfix" method="post" action="#">
                                                <input type="text" value="Tags separadas por vírgulas" name="new-tags" class="add-tags column"/>
                                                <input type="hidden" class="add-tags-post-id" value="<?php the_ID(); ?>">
                                                <input type="submit" value="Enviar" class="add-tags-send column"/>
                                            </form>
                                         </div>
                                        <?php endif; ?>

				</div>
				
				<?php edit_post_link('Edit this entry','','.'); ?>
				
			</div>
			<?php comments_template(); ?>

			<?php endwhile; endif; ?>
		</div>
	</div>
<?php get_footer(); ?>