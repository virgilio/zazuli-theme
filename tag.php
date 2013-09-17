<?php get_header(); ?>
	<div id="content">
		<div class="container content-list">
			<div class="twelve columns">
				<?php if (have_posts()) : ?>
                                    <div class="tag-cover-wrapper sixteen columns">
                                        <div class="tag-cover" style="background-image: url(<?php echo get_random_image_from_tag(single_tag_title('', false)); ?>);">
                                            <?php /* If this is a tag archive */ if (is_tag()) { ?>
                                                <h1 class="tag-title"><?php single_tag_title('Fluxo: '); ?></h1>
                                            <?php } ?>
                                        </div>
                                    </div>
                                        <h2>Mais populares</h2>
                                        <?php
                                        ecs_slider_from_tag('tag-slider', 9, single_tag_title('', false));
                                        ?>
                                        <h2>Mais recentes</h2>
                                        <?php
                                        zazu_mar_de_noticias_tag(18, single_tag_title('', false));
                                        ?>       
						
				<?php else : ?>
					<h2>Nothing found</h2>
				<?php endif; ?>
			</div>
			<?php //include (TEMPLATEPATH . '/inc/register.php' ); ?>
		</div>
	</div>

<?php get_footer(); ?>
