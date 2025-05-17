<?php

$photos = $attributes['photos'];

?>
<section <?php echo get_block_wrapper_attributes(); ?>>
	<div class="polaroid-container">
		<?php for($i = 1; $i <= $photos; $i++) : ?>
			<div className="polaroid">
					<img 
						width="200"
						loading="lazy"
						alt=""
						src="<?php echo esc_url(add_query_arg('random', $i, 'https://picsum.photos/200/150')) ?>"
					/>
			</div>
		<?php endfor; ?>
	</div>
</section>
