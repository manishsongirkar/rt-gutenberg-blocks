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

	/**
	 * Register Scripts.
	 */
	public function register_editor_block() {
		wp_enqueue_script(
			'rt-blocks-js',
			RT_BLOCKS_DIR_URL . 'blocks/build/build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
			filemtime( RT_BLOCKS_DIR_PATH . 'blocks/build/build.js' )
		);

		wp_enqueue_style(
			'rt-blocks-backend-css',
			RT_BLOCKS_DIR_URL . 'blocks/build/editor.css',
			array(),
			filemtime( RT_BLOCKS_DIR_PATH . 'blocks/build/editor.css' )
		);
	}

	/**
	 * Register Styles.
	 */
	public function register_frontend_block() {
		if ( ! is_admin() ) {
			wp_enqueue_style(
				'rt-blocks-frontend-css',
				RT_BLOCKS_DIR_URL . 'blocks/build/style.css',
				array(),
				filemtime( RT_BLOCKS_DIR_PATH . 'blocks/build/style.css' )
			);
		}
	}
}

add_action( 'plugins_loaded', function () {
	Register_Blocks::get_instance();
} );
