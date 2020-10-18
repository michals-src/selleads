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
	ColorPicker 
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

const INNER_BLOCKS_TEMPLATE = [
    [
		'core/heading',
		{
			level: 6,
            placeholder: 'OPIS',
            className: 'selleads-label--header',
		},
	],
	[
		'core/heading',
		{
			level: 4,
            placeholder: 'Nagłówek',
            className: 'selleads-label--header',
		},
    ],
];

function Text({
    attributes,
    setAttributes
}) {

    const {
		content,
		contentFontSize
    } = attributes;



	const fontSizes = [
		{
			name: __( 'Small' ),
			slug: 'small',
			size: 16,
		},
		{
			name: __( 'Big' ),
			slug: 'big',
			size: 18,
		},
		{
			name: __( 'Large' ),
			slug: 'Large',
			size: 21,
		},
		{
			name: __( 'Huge' ),
			slug: 'Extra',
			size: 24,
		},
	];



    return (
        <>


        <InspectorControls>
			<PanelBody title="Edycja tekstu" initialOpen={ false }>
				<PanelRow>
					<div>
						<div>
							<p>Rozmiar czcionki</p>
						</div>
						<div>
							<FontSizePicker
								fontSizes={ fontSizes }
								value={ contentFontSize }
								fallbackFontSize={14}
								onChange={ ( e ) => {
									setAttributes( { contentFontSize: e } );
								} }
							/>
						</div>
					</div>
				</PanelRow>
			</PanelBody>
		</InspectorControls>



            <div className="selleads-text-image--text-content">
                <div>
                    <header>
						<InnerBlocks
							templateLock="all"
							__experimentalPassedProps={ {
								// className: 'selleads-label--header',
							} }
							template={ INNER_BLOCKS_TEMPLATE }
						/>
                    </header>
                </div>
                <div>
                    <div>
                    	<RichText 
								style={{
									fontSize: `${contentFontSize}px`
								}}
								tagName="p"
								placeholder="Część opisowa"
								value={ content }
								onChange={ (e) => setAttributes({ 'content': e }) }
                            />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Text
