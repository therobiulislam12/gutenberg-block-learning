import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { heading, description, image, style } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{image && image?.url ? (
				<div className="tt-simple-card-image">
					<img
						src={image.url}
						alt={image.url}
						style={{
							minHeight: style?.dimensions.minHeight,
							aspectRatio: style?.dimensions.aspectRatio,
						}}
					/>
				</div>
			) : (
				""
			)}
			<RichText.Content tagName="h2" value={heading} />
			<RichText.Content tagName="p" value={description} />
		</div>
	);
}
