import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaUpload,
} from "@wordpress/block-editor";
import "./editor.scss";
import { Toolbar, ToolbarButton } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { heading, description, image, style } = attributes;

	// console.log(attributes);

	return (
		<>
			<BlockControls>
				{image && image?.url ? (
					<MediaUpload
						onSelect={(img) => {
							setAttributes({
								image: {
									id: img.id,
									alt: img.alt,
									url: img.url,
								},
							});
						}}
						value={image?.id}
						allowedTypes={["image"]}
						multiple={false}
						render={({ open }) => (
							<ToolbarButton
								icon="format-image"
								label={__("Upload Image", "simple-card")}
								onClick={open}
							/>
						)}
					/>
				) : (
					""
				)}
			</BlockControls>

			<div {...useBlockProps()}>
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
		</>
	);
}
