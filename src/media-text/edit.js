/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import Text from './text';
import colors from '.././colors.js';
import {
	ItemControls,
	BackgroundColor
} from '.././block-controls';

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
	ToolbarButton,
	Toolbar
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
	ColorPicker,
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
export default function Edit(props) {
	
	const {
		attributes,
		setAttributes
	} = props;

	const {
		backgroundColor,
		padding,
		borderRadius,
		imageId,
		imageUrl,
		transform
	} = attributes;

	const imageContainer = () => {
		if( ! imageUrl ){
			return (
				<MediaPlaceholder 
					onSelect={ (e) => setAttributes({ imageUrl: e.url, imageId: e.id  }) }
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
								mediaId={ imageId }
								mediaURL={ imageUrl }
								allowedTypes={ ['image'] }
								accept="image/*"
								onSelect={ (e) => setAttributes({ imageUrl: e.url, imageId: e.id  }) }
							/>
					</BlockControls>
					<figure>
						<img src={imageUrl}></img>
					</figure>
				</>
			);
		}
	}

	return (
		<>
			<BlockControls>
				<Toolbar>
					<ToolbarButton
						onClick={() => {
							setAttributes({
								'transform': ( transform === 'normal' ) ? 'reverse' : 'normal'
							})
						}}
					>
						Odbij w poziomie
					</ToolbarButton>
				</Toolbar>
			</BlockControls>

			<InspectorControls>
				<PanelBody title="Ustawienia główne" initialOpen={ false }>
					<PanelRow>
						<PanelRow>
						<label className="components-custom-select-control__label">
							Kolor tła
						</label>
						</PanelRow>
						<ColorPalette
							label="Kolor tła zbiornika"
							colors={ colors }
							value={ backgroundColor }
							onChange={ ( color ) => setAttributes( { backgroundColor: color } ) }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Wgłębienie"
							value={ padding }
							onChange={ ( e ) => setAttributes( { padding: e } ) }
							min={ 0 }
							max={ 50 }
						/>
						<RangeControl
							label="Zaokrąglenie"
							value={ borderRadius }
							onChange={ ( e ) => setAttributes( { borderRadius: e } ) }
							min={ 0 }
							max={ 50 }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			
			{/* {
				['BackgroundColor', 'BorderRadius', 'Padding'].map( (Control) => {
					return (
						<Control clientId={clientId} />
					)
				})
			} */}

			<ItemControls>
				<BackgroundColor />
			</ItemControls>

			<div className="selleads-text-image"> 
				<div className={`selleads-text-image--container is-${transform}`}>

					{
						(transform === 'normal') && (
							<div className="selleads-text-image--text"
								style={{
									backgroundColor: backgroundColor,
									padding: padding
								}}> {/* Text */}
									<Text {...props}></Text>
							</div>
						)
					}
					
					<div className="selleads-text-image--image"> {/* Image */}
						<div>
							{ imageContainer() }
						</div>
					</div>
					
					{
						(transform === 'reverse') && (
							<div className="selleads-text-image--text"> {/* Text */}
								
								<Text {...props}></Text>
							</div>
						)
					}

				</div>
			</div>
		</>
	);
}
