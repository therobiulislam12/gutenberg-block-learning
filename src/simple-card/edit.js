import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { heading, description, image } = attributes;

	console.log(image);

	return (
		<div {...useBlockProps()}>
			{image && image?.url ? (
				<div>
					<img src={image.url} alt={image.url} />
				</div>
			) : (
				<MediaPlaceholder
					onSelect={(img) => {
						setAttributes({
							image: {
								id: img.id,
								alt: img.alt,
								url: img.url,
							},
						});
					}}
					allowedTypes={["image"]}
					multiple={false}
					labels={{ title: "Upload Card Image" }}
				/>
			)}
			<RichText
				tagName="h2"
				value={heading}
				onChange={(val) => setAttributes({ heading: val })}
				placeholder={__("Enter heading...", "simple-card")}
			/>
			<RichText
				tagName="p"
				value={description}
				onChange={(val) => setAttributes({ description: val })}
				placeholder={__("Enter description...", "simple-card")}
			/>
		</div>
	);
}
