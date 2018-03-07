<?php
/**
 * Register plugin blocks
 *
 * @package rtBlocks
 */

namespace rtBlocks\Gutenblocks;

/**
 * Class Register_Blocks
 *
 * @package rtBlocks\Gutenblocks
 */
class Register_Blocks {

	use \rtBlocks\Traits\Singleton;

	/**
	 * Initialize Block.
	 */
	protected function init() {

		add_action( 'enqueue_block_editor_assets', array( $this, 'register_editor_block' ) );
		add_action( 'enqueue_block_assets', array( $this, 'register_frontend_block' ) );
	}

	function register_editor_block() {
		wp_enqueue_script( 'rt-blocks-js', RT_BLOCKS_DIR_URL . '/blocks/build/build.js', array( 'wp-blocks', 'wp-i18n', 'wp-element' ), RT_BLOCKS_VER );
	}

	function register_frontend_block() {
		if ( ! is_admin() ) {
			wp_enqueue_style( 'rt-blocks-css', RT_BLOCKS_DIR_URL . '/blocks/build/style.css', array(), RT_BLOCKS_VER );
		}
	}
}

add_action( 'plugins_loaded', function () {
	Register_Blocks::get_instance();
} );
