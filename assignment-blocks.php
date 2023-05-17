<?php
/*
 * Plugin Name:		Assignment Blocks
 * Version:			1.00
 * Author:			Towfiqul Islam
 * Description:     Assignment Blocks
 * Author Uri:      https://facebook.com/towfiq1997
 */


 final class AssignmentBlocks{
    
    private function __construct(){
        define('PLUGIN_PATH',plugin_dir_path( __FILE__ ));
        define('PLUGIN_URI',plugin_dir_url( __FILE__ ));
        
        add_action('init',[$this,'blocksinit']);
        add_filter('render_block', [$this,'conditonalassetloading'],10,2);

    }
   
    public static function init()
	{
		static $instance = false;

		if (!$instance) {
			$instance = new self();
		}

		return $instance;
	}

    public function blocksinit(){
        
        wp_register_script('user_table', PLUGIN_URI.'assets/usertable.js');
        register_block_type(PLUGIN_PATH.'build/usertable');

    }

    public function conditonalassetloading($block_content, $block){
        if($block['blockName']=='assignment-blocks/usertable'){
            wp_enqueue_script('user_table');
        }
        return $block_content;
    }

 }

 function assignments_block_start()
{
	return AssignmentBlocks::init();
}

// Plugin Start
assignments_block_start();