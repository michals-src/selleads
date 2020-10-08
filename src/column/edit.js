import { __ } from '@wordpress/i18n';


import { 
	PanelBody, RangeControl, Notice, Placeholder, 
	Toolbar, ToolbarButton, ToolbarGroup, Button, ColorPalette, SelectControl
} from '@wordpress/components';
import {
    withState
} from '@wordpress/compose';

import {
    useState
} from '@wordpress/element';

import {
    MediaUpload,
	InspectorControls,
    InnerBlocks,
    RichText,
	BlockControls,
	BlockVerticalAlignmentToolbar,
	__experimentalBlockVariationPicker,
	__experimentalUseBlockWrapperProps as useBlockWrapperProps,
} from '@wordpress/block-editor';

import { createBlock } from '@wordpress/blocks';

import { useSelect } from '@wordpress/data';

import { withFilters } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { compose, withInstanceId, useInstanceId, createHigherOrderComponent} from '@wordpress/compose';


const INNER_BLOCKS_TEMPLATE = [
    [
		'core/heading',
		{
			level: 6,
            placeholder: __( 'Label' ),
            className: 'is-uppercase is-sub_title',
		},
    ],
    [
		'core/heading',
		{
			level: 4,
			placeholder: __( 'Custome title' ),
		},
    ],
];

const MyColorPalette = ( { onChange, value } ) => {

    const color = value ? value : '#f00';
    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
    ];

    return (
        <ColorPalette
            colors={ colors }
            value={ color }
            onChange={ ( color ) => onChange( { color } ) }
        />
    )
};

const MyBorderRadiusRange = ( { onChange, value } ) => {
    return (
        <RangeControl
            label="Zaokrąglenie"
            value={ value }
            onChange={ ( columns ) => onChange( columns ) }
            min={ 0 }
            max={ 50 }
        />
    )
}


function Column({
    attributes,
    setAttributes,
    ...props
}) {

    const { content, picture, bgColor, borderRadius, alignSelf, padding, width } = attributes;
    const isPicture = picture ? true : false;

    const handleColor = (color) => setAttributes({bgColor: color});
    const handleBorderRadius = (radius) => setAttributes({borderRadius: radius});


    const handlePicture = (e) => setAttributes({picture: { ...picture, id: e.id, url: e.url}});
    const handleText = () => setAttributes({ picture: null });

    const containerStyle = {
        width: '100%',
        padding: '30px',
        borderRadius: `${borderRadius}px`,
        padding: `${padding}px`,
    };

    const parentStyle = {
        alignSelf: alignSelf
    }

    if( ! picture && bgColor ){
        containerStyle.backgroundColor = bgColor?.color;
    }

    // if( width !== null && width !== undefined ){
    //     parentStyle.flex = `0 0 ${width}%`;
    // }

    const ColumnContentText = () => {
        return (
            <>
                <header>
                    <InnerBlocks
                        templateLock="all"
                        __experimentalPassedProps={ {
                            className: 'columns-item-heading',
                        } }
                        template={ INNER_BLOCKS_TEMPLATE }
                    />
                </header>
                <div className="columns-item-content">
                    <RichText
                        identifier="content"
                        tagName="p"
                        value={ content }
                        onChange={ ( value ) => setAttributes( { content: value } ) }
                        onSplit={ ( value ) => {
                            if ( ! value ) {
                                return createBlock( 'core/paragraph' );
                            }

                            return createBlock( 'core/heading', {
                                ...attributes,
                                content: value,
                            } );
                        } }
                        placeholder={ __( 'Simple text filling the column ...' ) }
                        // { ...blockWrapperProps }
                    />
                </div>
            </>
        );
    }

    const ColumnContentPicture = () => {
        return (
            <figure>
                <img src={picture?.url} />
            </figure>
        );
    }

    const ColumnContent = () => {
        if( isPicture ){
            return <ColumnContentPicture />
        }else{
            return <ColumnContentText />
        }
    }


    
    
    return (
        <>

        <BlockControls>
            <Toolbar>
                { !picture && <MediaUpload
                    label="Dodaj grafikę"
                    multiple={false}
                    onSelect={ (e) => handlePicture(e) }
                    render={ ( { open } ) => {
                        return (
                            <ToolbarButton
                                onClick={ ( event ) => {
                                    event.stopPropagation();
                                    open();
                                } }
                            >
                                Zamień na obraz 
                            </ToolbarButton>
                        );
                    } }
                /> }
                { picture && <ToolbarButton
                                onClick={ ( event ) => {
                                    event.stopPropagation();
                                    handleText();
                                } }
                            >
                                Zamień na tekst 
                            </ToolbarButton> 
                }
            </Toolbar>
        </BlockControls>

        <InspectorControls>
            <PanelBody>
                <RangeControl
                    label="Szerokość kolumny"
                    value={ width }
                    onChange={ ( value ) => setAttributes( { width: value } ) }
                    min={ 10 }
                    max={ 100 }
                />
                <MyColorPalette onChange={handleColor} value={bgColor} />
                <MyBorderRadiusRange onChange={handleBorderRadius} value={borderRadius} />
                <div>
                    <p>Pionowe położenie kolumny</p>
                    <SelectControl
                        value={ alignSelf }
                        options={ [
                            { label: 'Góra', value: 'flex-start' },
                            { label: 'Środek', value: 'center' },
                            { label: 'Dół', value: 'flex-end' },
                        ] }
                        onChange={ ( value ) => { setAttributes( { alignSelf: value } ) } }
                    />
                </div>
                
                <RangeControl
                    label="Wgłębienie"
                    value={ padding }
                    onChange={ ( value ) => { setAttributes( { padding: value } ) } }
                    min={ 0 }
                    max={ 60 }
                />

            </PanelBody>
        </InspectorControls>
       
        <div className="columns-item"
            style={parentStyle} identifier="content">
            <div className="columns-item-container" 
            style={containerStyle}>
                <ColumnContent />
            </div>
        </div>
    </>
    )
}

const withClientIdClassName = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

		if ( props.name !== 'selleads/column' ) {
			return <BlockListBlock { ...props } />
		}

        console.log(props.attributes.width);
        const wrapperProps = {};
        wrapperProps.style = {
            flex: `0 0 ${props.attributes.width}%`
        }
        return <BlockListBlock { ...props } className={ "block-" + props.clientId } wrapperProps={wrapperProps}
        />;
    };
}, 'withClientIdClassName' );
 
addFilter( 'editor.BlockListBlock', 'my-plugin/with-client-id-class-name', withClientIdClassName );

export default withFilters( 'editor.BlockListBlock' )( Column )
