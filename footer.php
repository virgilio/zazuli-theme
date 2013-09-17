
		<div id="footer">
			<div class="container">
				<?php wp_nav_menu( array( 'menu' => 'rodape' ) ); ?>
				<div class="footer-icons">
					<ul>
						<li><a href="http://pt.wordpress.org/"><img src="<?php bloginfo('template_directory'); ?>/images/wordpress_logo.png" /></a></li>
						<li><a href="<?php echo get_permalink( get_page_by_path( 'copyleft' ) ); ?>"><img src="<?php bloginfo('template_directory'); ?>/images/copyleft.png" /></a></li>
						<li><a href="https://github.com/evandrocruz/zazuli/"><img src="<?php bloginfo('template_directory'); ?>/images/octocat.png" /></a></li>
					</ul>
				</div>
			</div>
		</div>
</div> <!-- #wrapper -->
	<?php wp_footer(); ?>
	
	<!-- Don't forget analytics -->
	
</body>

</html>
