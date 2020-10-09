import { 
	PanelBody, 
	RangeControl, 
	PanelRow,
	Placeholder, 
	Toolbar, 
	ToolbarButton, 
	ToolbarGroup, 
	Button,
	ColorPalette,
	ColorPicker,
	SelectControl
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
		alignItems,
		image,
		color,
		padding,
		borderRadius,
		borderWidth,
		borderColor
	} = attributes;

	let styling = {
		backgroundColor: color,
		padding: `${padding}px`,
		borderRadius: `${borderRadius}px`,
		border: `${borderWidth}px solid ${borderColor}`,
		alignItems: alignItems,
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
				<PanelBody title="Zarządzanie tłem">
					<RangeControl
						label="Zaokrąglenie"
						value={ borderRadius }
						onChange={ ( e ) => setAttributes( { borderRadius: e } ) }
						min={ 0 }
						max={ 50 }
					/>
					<RangeControl
						label="Grubość ramki"
						value={ borderWidth }
						onChange={ ( e ) => setAttributes( { borderWidth: e } ) }
						min={ 0 }
						max={ 50 }
					/>
					<PanelRow>
						<label className="components-custom-select-control__label">
							Kolor obramowania
						</label>
					</PanelRow>
					<ColorPicker
						color={ borderColor ? borderColor : '#fff' }
						onChangeComplete={ ( e ) => setAttributes( { borderColor: e.hex } ) }
					/>
				</PanelBody>
				<PanelBody title="Zarządzanie treścią">
					<RangeControl
						label="Wgłębienie treści"
						value={ padding }
						onChange={ ( e ) => setAttributes( { padding: e } ) }
						min={ 0 }
						max={ 50 }
					/>
					<SelectControl
						label="Pozycja treści"
						value={ alignItems }
						options={ [
							{ label: 'Góra', value: 'flex-start' },
							{ label: 'Środek', value: 'center' },
							{ label: 'Dół', value: 'flex-end' },
						] }
						onChange={ ( e ) => { setAttributes( { alignItems: e } ) } }
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