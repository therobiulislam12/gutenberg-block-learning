import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { images } = attributes;

	console.log(images);

	return (
		<div {...useBlockProps.save()}>
			{
				images?.map((img, i) => {
					return <div className="slide">
						<img src={img.url} alt="" />
					</div>
				})
			}
		</div>
	);
}
