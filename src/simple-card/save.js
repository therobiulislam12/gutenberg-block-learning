import { useBlockProps, RichText} from '@wordpress/block-editor';

export default function save({attributes}) {
	const { heading, description, image } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content tagName="h2" value={heading} />
			<RichText.Content tagName="p" value={description} />
		</div>
	);
}
