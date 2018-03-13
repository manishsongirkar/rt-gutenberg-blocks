<?php
/**
 * Plugin Name: rtBlocks - Manish
 * Description: Timeline - Gutenberg Block.
 * Author: rtCamp, Manish
 * Author URI: https://rtcamp.com/
 * Version: 0.1
 * License: GPLv2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: rt-blocks
 *
 * @package rtBlocks
 */

if ( ! defined( 'RT_BLOCKS_VER' ) ) {
	define( 'RT_BLOCKS_VER', '0.1' );
}

if ( ! defined( 'RT_BLOCKS_DIR' ) ) {
	define( 'RT_BLOCKS_DIR', __DIR__ );
}

if ( ! defined( 'RT_BLOCKS_DIR_URL' ) ) {
	define( 'RT_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! defined( 'RT_BLOCKS_DIR_PATH' ) ) {
	define( 'RT_BLOCKS_DIR_PATH', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

require_once RT_BLOCKS_DIR . '/trait-singleton.php';
require_once RT_BLOCKS_DIR . '/class-register-blocks.php';
