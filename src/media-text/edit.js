/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import Text from './text';

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
export default function Edit( { 
	attributes,
	setAttributes,
	className 
} ) {

	const {
		picture
	} = attributes;
	
	console.log(attributes)

	const imageContainer = () => {
		if( ! picture?.url ){
			return (
				<MediaPlaceholder 
					onSelect={ (e) => setAttributes({ picture: { ...picture, url: e.url, id: e.id } }) }
					allowedTypes={ ['image'] }
					accept="image/*"
					labels={ {
						title: "Tło nagłówka",
						instructions: __(
							'Wybierz lub prześlij obraz'
						),
					} }
				/>
			)
		}else{
			return (
				<>
					<BlockControls>
						<MediaReplaceFlow
								mediaId={ picture?.id }
								mediaURL={ picture?.url }
								allowedTypes={ ['image'] }
								accept="image/*"
								onSelect={ (e) => setAttributes({ picture: { ...picture, url: e.url, id: e.id } }) }
							/>
					</BlockControls>
					<figure>
						<img src={picture?.url}></img>
					</figure>
				</>
			);
		}
	}

	return (
		<>
			<div className="selleads-text-image"> 
				<div className="selleads-text-image--container">
					<div className="selleads-text-image--text"> {/* Text */}
						<Text attributes={attributes} setAttributes={setAttributes}></Text>
					</div>
					<div className="selleads-text-image--image"> {/* Image */}
						<div>
							{ imageContainer() }
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
