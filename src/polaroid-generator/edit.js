import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit({attributes, setAttributes}) {
	const {photos} = attributes;
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
			{__("Polaroid Generator – hello from the editor!", "polaroid-generator")}
		</div>
	);
}
