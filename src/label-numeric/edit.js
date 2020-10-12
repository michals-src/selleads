
import './edit.css'

import {
    InspectorControls,
    InnerBlocks,
    BlockControls,
    MediaUpload,
    RichText,
	__experimentalBlockVariationPicker,
	__experimentalUseBlockWrapperProps as useBlockWrapperProps,
} from "@wordpress/block-editor";

import {
    PanelBody,
    PanelRow,
    RangeControl,
    Placeholder,
    Button,
    ColorPalette,
    ColorPicker
} from "@wordpress/components";

import { compose, withInstanceId, useInstanceId, createHigherOrderComponent} from '@wordpress/compose';

import { withFilters } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

const INNER_BLOCKS_TEMPLATE = [
    [
		'core/heading',
		{
			level: 5,
            placeholder: 'Nagłówek',
            className: 'selleads-label-numeric--header',
		},
    ],
];


const hex_to_rgb = (hex) => {
    const normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (normal) return normal.slice(1).map(e => parseInt(e, 16));
    const shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (shorthand) return shorthand.slice(1).map(e => 0x11 * parseInt(e, 16));
    return null;
  }

function edit({
    attributes,
    setAttributes,
    ...props
}) {

    
    const {
        backgroundColor,
        borderRadius,
        borderWidth,
        borderColor,
        padding,
        withNumber,
        content
    } = attributes;

    let wrapperStyle = {
        "backgroundColor": backgroundColor,
    };

    let itemStyle = {
        "padding": `${padding}px`,
        "borderRadius": `${borderRadius}px`,
        "borderWidth": `${borderWidth}px`,
        "borderColor": borderColor,
    };

    const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
    ];

    return (
        <>
        <InspectorControls>
          
            <PanelBody title="Zarządanie tłem" initialOpen={false}>
                <PanelRow>
                    <label className="components-custom-select-control__label">
                        Kolor tła
                    </label>
                </PanelRow>
                <ColorPicker
                    color={ backgroundColor }
                    onChangeComplete={ ( e ) => setAttributes( { backgroundColor: e.hex } ) }
                />
            </PanelBody>
            
            <PanelBody title="Obramowanie" initialOpen={false}>
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
                    color={ borderColor }
                    onChangeComplete={ ( e ) => setAttributes( { borderColor: e.hex } ) }
                />
            </PanelBody>

            <PanelBody title="Wgłębienie" initialOpen={false}>
                <RangeControl
					value={ padding }
					onChange={ ( e ) => setAttributes( { padding: e } ) }
					min={ 0 }
					max={ 50 }
				/>
            </PanelBody>

        </InspectorControls>
                <div className="selleads-label-numeric-numeric--wrapper"
                    style={wrapperStyle}>
                    <div className="selleads-label-numeric--item"
                         style={itemStyle}>
                            <div className="selleads-label-numeric-number">
                                 <div className="selleads-label-numeric-number--pseudo-before">
                                    <h1>{ withNumber ? withNumber : "1" }</h1>
                                 </div>
                             </div>
                        <div className="selleads-label-numeric-container">

                                <RichText
                                    identifier="content"
                                    tagName="p"
                                    value={ content }
                                    onChange={ ( value ) => setAttributes( { content: value } ) }
                                    placeholder={ 'Simple text filling the column ...' }
                                    className="selleads-label-numeric--content"
                                    // { ...blockWrapperProps }
                                />
                            
                        </div>
                    </div>
                </div>
        </>
    )
}

const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

		if ( props.name !== 'selleads/label' ) {
			return <BlockListBlock { ...props } />
		}

        // console.log(props.attributes.width);
        const wrapperProps = {};
        wrapperProps.style = {
            flexBasis: `50%`
        }
        return <BlockListBlock { ...props } className={ "block-" + props.clientId } wrapperProps={wrapperProps}
        />;
    };
}, 'withClientIdClassName' );
 
addFilter( 'editor.BlockListBlock', 'my-plugin/with-client-id-class-name', withClientIdClassName );

export default withFilters( 'editor.BlockListBlock' )( edit )
