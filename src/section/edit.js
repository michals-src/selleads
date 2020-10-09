import { 
	PanelBody, 
	RangeControl, 
	Placeholder, 
	Toolbar, 
	ToolbarButton, 
	ToolbarGroup, 
	Button,
	ColorPalette,
	ColorPicker
} from '@wordpress/components';

import {
	RichText,
	InspectorControls,
	InnerBlocks,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	__experimentalBlockVariationPicker,
	__experimentalUseBlockWrapperProps as useBlockWrapperProps,
} from '@wordpress/block-editor';

import './editor.css';

const edit = ({
	attributes,
	setAttributes
}) => {

	const {
		align,
		image,
		color,
		radius,
		padding
	} = attributes;

	let styling = {
		backgroundColor: color,
		padding: `${padding}px`,
		borderRadius: `${radius}px`,
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Zarządzanie tłem">
					<ColorPicker
						color={ color }
						onChangeComplete={ ( e ) => setAttributes({ color: e.hex} ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={`selleads-section is-${align}`} style={styling}>
				<div className="selleads-section-container">
					<InnerBlocks />
					{/* Inner blocks */}
				</div>
			</div>
		</>
	)
}

export default edit