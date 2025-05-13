import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

import "./editor.scss";

const renderPhotos = ( count ) =>{
	const photosArray = [];

	for(let i = 0; i < count; i++){
		photosArray.push(
			<div className="polaroid" key={i}>
				<img 
					width="200"
					loading="lazy"
					alt=""
					src={`https://picsum.photos/200/150.webp?random=${i}`}
				/>
			</div>
		)
	}

	return photosArray;
}


export default function Edit({attributes, setAttributes}) {
	const { photos } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__("Photos", "polaroid-generator")}
						value={photos}
						onChange={(value) => setAttributes({photos: value})}
						min={3}
						max={12}
						__nextHasNoMarginBottom
					/>
				</PanelBody>
			</InspectorControls>
			
			<div className="polaroid">
				{
					renderPhotos(photos)
				}
			</div>
		</div>
	);
}
