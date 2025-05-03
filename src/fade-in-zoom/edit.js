import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import "./editor.scss";
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const ALLOWED_MEDIA_TYPES = ["image"];

	const { images } = attributes;

	console.log(images)

	return (
		<div {...useBlockProps()}>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => setAttributes({ images: media })}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					multiple
					addToGallery
					gallery
					value={images?.map((img) => img.id)}
					render={({ open }) => (
						<Button onClick={open} variant="primary">
							Open Media Library
						</Button>
					)}
				/>
			</MediaUploadCheck>

			{
				images.map()
			}
		</div>
	);
}
