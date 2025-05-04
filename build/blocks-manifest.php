<?php
// This file is generated. Do not modify it manually.
return array(
	'fade-in-zoom' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'techtuzzlefadeinzoom/fade-in-zoom',
		'version' => '0.1.0',
		'title' => 'Fade In Zoom',
		'category' => 'widgets',
		'icon' => 'admin-users',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'dimensions' => array(
				'aspectRatio' => true,
				'minHeight' => true
			)
		),
		'attributes' => array(
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			)
		),
		'textdomain' => 'fade-in-zoom',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
