<?php
// This file is generated. Do not modify it manually.
return array(
	'polaroid-generator' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/polaroid-generator',
		'version' => '0.1.0',
		'title' => 'Polaroid Generator',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'color' => array(
				'background' => true,
				'text' => false,
				'gradients' => true
			)
		),
		'attributes' => array(
			'photos' => array(
				'type' => 'number',
				'default' => 6
			)
		),
		'textdomain' => 'polaroid-generator',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
