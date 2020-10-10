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

function Text({
    attributes,
    setAttributes
}) {

    const {
        subtitle,
		title,
		paragraph
    } = attributes;


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



    return (
        <>


        <InspectorControls>
			<PanelBody title="Edycja podpisu" initialOpen={ false }>
				<PanelRow>
					<div>
						<div>
							<p>Rozmiar czcionki</p>
						</div>
						<div>
							<FontSizePicker
								fontSizes={ subTitleFontSizes }
								value={ subtitle?.fontSize }
								fallbackFontSize={18}
								onChange={ ( e ) => {
									setAttributes( { subtitle: { ...subtitle, fontSize: e } } );
								} }
							/>
						</div>
					</div>
				</PanelRow>
				<PanelRow>
					<div>
						<p>Kolor tekstu</p>
						<ColorPicker
							color={ subtitle?.color }
							onChangeComplete={ ( e ) => setAttributes( { subtitle: { ...subtitle, color: e } } ) }
							disableAlpha
						/>
					</div>
				</PanelRow>
			</PanelBody>

			<PanelBody title="Edycja nagłówka" initialOpen={ false }>
				<PanelRow>
					<div>
						<div>
							<p>Rozmiar czcionki</p>
						</div>
						<div>
							<FontSizePicker
								fontSizes={ titleFontSizes }
								value={ title?.fontSize }
								fallbackFontSize={24}
								onChange={ ( e ) => {
									setAttributes( { title: { ...title, fontSize: e } } );
								} }
							/>
						</div>
					</div>
				</PanelRow>
				<PanelRow>
					<div>
						<p>Kolor tekst</p>
						<ColorPicker
							color={ title?.color }
							onChangeComplete={ ( e ) => setAttributes( { title: { ...title, color: e } } ) }
							disableAlpha
						/>
					</div>
				</PanelRow>
			</PanelBody>

			<PanelBody title="Edycja tekstu" initialOpen={ false }>

				<PanelRow>
					<div>
						<div>
							<p>Rozmiar czcionki</p>
						</div>
						<div>
							<FontSizePicker
								fontSizes={ subTitleFontSizes }
								value={ paragraph?.fontSize }
								fallbackFontSize={14}
								onChange={ ( e ) => {
									setAttributes( { paragraph: { ...paragraph, fontSize: e } } );
								} }
							/>
						</div>
					</div>
				</PanelRow>
				<PanelRow>
					<ColorPicker
							color={ paragraph?.color }
							onChangeComplete={ ( e ) => setAttributes( { paragraph: { ...paragraph, color: e } } ) }
							disableAlpha
						/>
				</PanelRow>

			</PanelBody>

			<PanelBody title="Ustawienia obrazu" initialOpen={ false }>
				{/* <FocalPointPicker
					label={ __( 'Focal point picker' ) }
					url={ url }
					value={ focalPoint }
					onChange={ ( newFocalPoint ) =>
						setAttributes( {
							focalPoint: newFocalPoint,
						} )
					}
				/> */}

				<p>Rozmiar dolnego tekstu</p>
				<PanelRow>
					<FontSizePicker
						fontSizes={ titleFontSizes }
						value={ title?.fontSize }
						fallbackFontSize={24}
						onChange={ ( e ) => {
							setAttributes( { title: { ...title, fontSize: e } } );
						} }
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>



            <div className="selleads-text-image--text-content">
                <div>
                    <header>
                        <RichText
                                style={{
                                    fontSize: `${subtitle?.fontSize}px`,
									color: subtitle?.color?.hex
                                }}
                                tagName="h6"
                                placeholder="subtitle"
                                value={subtitle?.value}
                                onChange={ (e) => setAttributes({ subtitle: { ...subtitle, 'value': e } }) }
                                ></RichText>
                        <RichText 
                                style={{
                                    fontSize: `${title?.fontSize}px`,
									color: title?.color?.hex
                                }}
                                tagName="h3"
                                placeholder="Title"
                                value={title?.value}
                                onChange={ (e) => setAttributes({ title: { ...title, 'value': e } }) }
                                ></RichText>
                    </header>
                </div>
                <div>
                    <div>
                    <RichText 
							style={{
								fontSize: `${paragraph?.fontSize}px`,
								color: paragraph?.color?.hex
							}}
                            tagName="p"
                            placeholder="Paragraph"
                            value={paragraph?.value}
                            onChange={ (e) => setAttributes({ 'paragraph': { 'value': e } }) }
                            ></RichText>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Text
