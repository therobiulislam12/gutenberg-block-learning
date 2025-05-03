import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Fade In Zoom – hello from the saved content!' }
		</p>
	);
}
