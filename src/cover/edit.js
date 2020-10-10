/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import classnames from 'classnames';
// import FastAverageColor from 'fast-average-color';
// import tinycolor from 'tinycolor2';


import { __ } from '@wordpress/i18n';
import { useEffect, useRef, useState } from '@wordpress/element';

import {
	BaseControl,
	Button,
	FocalPointPicker,
	PanelBody,
	PanelRow,
	FontSizePicker,
	RangeControl,
	ResizableBox,
	ToggleControl,
	withNotices,
} from '@wordpress/components';

import { compose, withInstanceId, useInstanceId } from '@wordpress/compose';
import {
	BlockControls,
	BlockIcon,
	InnerBlocks,
	InspectorControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	withColors,
	ColorPalette,
	RichText
} from '@wordpress/block-editor';
import { withDispatch } from '@wordpress/data';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';




const RESIZABLE_BOX_ENABLE_OPTION = {
	top: false,
	right: false,
	bottom: true,
	left: false,
	topRight: false,
	bottomRight: false,
	bottomLeft: false,
	topLeft: false,
};




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
function Edit( 
	{ 
		attributes,
		setAttributes,
		isSelected,
		noticeUI,
		overlayColor,
		setOverlayColor,
		toggleSelection,
		noticeOperations,
	 } 
) {

	const {
		//container
		minHeight,
		//bg
		id,
		url,
		focalPoint,
		backgroundType,
		//text
		headerTitle,
		headerSubTitle,
		titleFontSize,
		subTitleFontSize,

		// _non-functional
		//contentPosition,
		dimRatio,

		
	} = attributes;


	if( ! url ){

		return (
			<MediaPlaceholder 
				onSelect={ (e) => setAttributes({url: e.url, id: e.id}) }
				allowedTypes={ ['image'] }
				accept="image/*"
				labels={ {
					title: "Tło nagłówka",
					instructions: __(
						'Wybierz lub prześlij obraz'
					),
				} }
			/>
		);

	}

	const bgPos = focalPoint ?
			{
				'backgroundPosition': `${(focalPoint.x)*100}% ${(focalPoint.y)*100}%`,
			} :
			{
				backgroundPosition: 'center'
			};

	const titleFontSizes = [
		{
			name: __( 'Small' ),
			slug: 'small',
			size: 48,
		},
		{
			name: __( 'Big' ),
			slug: 'big',
			size: 60,
		},
		{
			name: __( 'Large' ),
			slug: 'Large',
			size: 72,
		},
		{
			name: __( 'Large' ),
			slug: 'Extra',
			size: 82,
		},
	];

	const subTitleFontSizes = [
		{
			name: __( 'Small' ),
			slug: 'small',
			size: 16,
		},
		{
			name: __( 'Big' ),
			slug: 'big',
			size: 21,
		},
		{
			name: __( 'Large' ),
			slug: 'Large',
			size: 32,
		},
		{
			name: __( 'Large' ),
			slug: 'Extra',
			size: 44,
		},
	];

	const fallbackFontSize = 16;
	const addError = () => noticeOperations.createErrorNotice( 'Error message' )

	return (
		<>
		
		<BlockControls>
				<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ ['image'] }
						accept="image/*"
						onSelect={ (e) => setAttributes({ url: e.url, id: e.id }) }
					/>
		</BlockControls>

		<InspectorControls>
			<PanelBody title="Ustawienia obrazu">
				<FocalPointPicker
					label={ __( 'Focal point picker' ) }
					url={ url }
					value={ focalPoint }
					onChange={ ( newFocalPoint ) =>
						setAttributes( {
							focalPoint: newFocalPoint,
						} )
					}
				/>
				<p>Rozmiar górnego tekstu</p>
				<PanelRow>
					<FontSizePicker
						fontSizes={ titleFontSizes }
						value={ titleFontSize }
						fallbackFontSize={ fallbackFontSize }
						onChange={ ( newFontSize ) => {
							setAttributes( { titleFontSize: newFontSize } );
						} }
					/>
				</PanelRow>
				<p>Rozmiar dolnego tekstu</p>
				<PanelRow>
					<FontSizePicker
						fontSizes={ subTitleFontSizes }
						value={ subTitleFontSize }
						fallbackFontSize={ fallbackFontSize }
						onChange={ ( newFontSize ) => {
							setAttributes( { subTitleFontSize: newFontSize } );
						} }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>

		{ noticeUI }
        <Button isSecondary onClick={ addError }>Add error</Button>


		<div className="selleads-header"
			 style={{ ... bgPos,
				 backgroundColor: "#fff",
				 backgroundImage: `url(${url})`,
				 backgroundRepeat: 'no-repeat'
			 }}>

			<div className="selleads-header--container">
				<div className="selleads-header--captions">
					<div className="selleads-header--title">
						<RichText
							style={{
								fontSize: `${titleFontSize}px`
							}}
							tagName="h1"
							placeholder="Custome title"
							value={headerTitle}
							onChange={(e) => setAttributes({ headerTitle: e }) }
						/>
					</div>
					<div className="selleads-header--sub_title">
						<RichText
							style={{
								fontSize: `${subTitleFontSize}px`
							}}
							tagName="h5"
							placeholder="Custome sub-title"
							value={headerSubTitle}
							onChange={(e) => setAttributes({ headerSubTitle: e }) }
						/>
					</div>
					{/* <InnerBlocks /> */}
				</div>
			</div>
		</div>
		</>
	);
}

export default compose( [
	withNotices
] )( Edit );