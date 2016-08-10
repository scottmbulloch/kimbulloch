<?php
/**
 * The template for displaying pages.
 * @package highwind
 * @since 1.0
 */
?>

<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>

<header class="page-header">

	<?php highwind_content_header_top(); ?>

	<h2 class="page-title" data-text="<?php the_title_attribute(); ?>"><?php the_title(); ?></h2>

	<?php highwind_content_header_bottom(); ?>

</header><!-- /.page-header -->

<section class="article-content">

	<?php

		highwind_content_entry_top();

		the_content();

		highwind_content_entry_bottom();

	?>

</section><!-- /.article-content -->