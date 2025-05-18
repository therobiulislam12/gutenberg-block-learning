<?php
// This file is generated. Do not modify it manually.
return array(
	'simple-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/simple-card',
		'version' => '0.1.0',
		'title' => 'Simple Card',
		'category' => 'text',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'dimensions' => array(
				'aspectRatio' => true,
				'minHeight' => true
			),
			'align' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'image' => array(
				'type' => 'object',
				'default' => array(
					'id' => 0,
					'alt' => '',
					'url' => ''
				)
			)
		),
		'textdomain' => 'simple-card',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
