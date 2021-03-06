
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
    ColorPicker,
    Toolbar, ToolbarButton, ToolbarGroup,
} from "@wordpress/components";

import { compose, withInstanceId, useInstanceId, createHigherOrderComponent} from '@wordpress/compose';
import { withDispatch, useDispatch, useSelect } from '@wordpress/data';

import { withFilters } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

const INNER_BLOCKS_TEMPLATE = [
    [
		'core/heading',
		{
			level: 5,
            placeholder: 'Nagłówek',
            className: 'selleads-label--header',
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
    clientId,
    ...props
}) {

    
    const {
        background,
        border,
        padding,
        dot,
        content
    } = attributes;

    const {parentsId, neighbours} = useSelect( (select) => {

        let parents = select('core/block-editor').getBlockParents(clientId);

        return {
            parentsId: parents,
            neighbours: select('core/block-editor').getBlocks(parents[parents.length - 1])
        }
    },[clientId]);
    const { replaceInnerBlocks } = useDispatch('core/block-editor');

    let wrapperStyle = {
        "padding": `${padding?.outer?.value}px`,
    };

    let itemStyle = {
        "padding": `${padding?.inner?.value}px`,
        "borderRadius": `${border?.radius?.value}px`,
        "borderWidth": `${border?.width?.value}px`,
        "borderColor": border?.color?.value,
    };

    if(background?.image){
        itemStyle.background = `${background?.color.value} url(${background.image.value}) center/center no-repeat`
    }else{
        itemStyle.backgroundColor = background?.color.value;
    }

    let dotStyle = {
        padding: `${dot?.width?.value}px`,
    }

    const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
    ];

    let dotBeforeStyle = {
        width: `${dot?.width?.value}px`,
        height: `${dot?.width?.value}px`,
        backgroundColor: dot?.color?.value
    }
    if( dot?.color ){
        let hex2rgb = hex_to_rgb(dot?.color.value);
        dotStyle.backgroundColor = `rgba(${hex2rgb[0]},${hex2rgb[1]},${hex2rgb[2]},0.5)`;
    }

    return (
        <>

        <BlockControls>
            <Toolbar>
                <ToolbarButton
                    onClick={ ( event ) => {
                        event.stopPropagation();
                        
                        let innerBlocks = [];

                        neighbours.map( (e) => {
                            console.log(e.clientId !== clientId);
                            if( e.clientId !== clientId ) return innerBlocks.push(e);
                        });

                        replaceInnerBlocks( parentsId[parentsId.length-1], innerBlocks, false );

                    } }
                >
                    Usuń
                </ToolbarButton> 
            </Toolbar>
        </BlockControls>

        <InspectorControls>
          
            <PanelBody title="Zarządanie tłem" initialOpen={false}>
                <PanelRow>
                    <label className="components-custom-select-control__label">
                        Kolor tła
                    </label>
                </PanelRow>
                <ColorPicker
                    color={ background?.color?.value }
                    onChangeComplete={ ( e ) => setAttributes( { background: { ...background, color: {value: e.hex} }} ) }
                />
            </PanelBody>
            
            <PanelBody title="Obramowanie" initialOpen={false}>
                <RangeControl
					label="Zaokrąglenie"
					value={ border?.radius?.value }
					onChange={ ( e ) => setAttributes( { border: { ...border, radius: {value: e} }} ) }
					min={ 0 }
					max={ 50 }
				/>
                <RangeControl
					label="Grubość ramki"
					value={ border?.width?.value }
					onChange={ ( e ) => setAttributes( { border: { ...border, width: {value: e} }} ) }
					min={ 0 }
					max={ 50 }
				/>
                <PanelRow>
                    <label className="components-custom-select-control__label">
                        Kolor obramowania
                    </label>
                </PanelRow>
                <ColorPicker
                    color={ border?.color?.value }
                    onChangeComplete={ ( e ) => setAttributes( { border: { ...border, color: {value: e.hex} }} ) }
                />
            </PanelBody>

            <PanelBody title="Wgłębienie" initialOpen={false}>
                <RangeControl
					label="Zewnętrzne"
					value={ padding?.outer?.value }
					onChange={ ( e ) => setAttributes( { padding: { ...padding, outer: {value: e} }} ) }
					min={ 0 }
					max={ 50 }
				/>
                <RangeControl
					label="Wewnętrzne"
					value={ padding?.inner?.value }
					onChange={ ( e ) => setAttributes( { padding: { ...padding, inner: {value: e} }} ) }
					min={ 0 }
					max={ 50 }
				/>
            </PanelBody>

            <PanelBody title="Ustawienia kropki" initialOpen={false}>
                <PanelRow>
                    <label className="components-custom-select-control__label">
                        Kolor
                    </label>
                </PanelRow>
                <ColorPicker
                    color={ dot?.color?.value }
                    onChangeComplete={ ( e ) => setAttributes( { dot: { ...dot, color: {value: e.hex} }} ) }
                />
                 <RangeControl
					label="Rozmiar"
					value={ dot?.width?.value }
					onChange={ ( e ) => setAttributes( { dot: { ...dot, width: {value: e} }} ) }
					min={ 10 }
					max={ 50 }
				/>
            </PanelBody>

        </InspectorControls>
                <div className="selleads-label--wrapper"
                    style={wrapperStyle}>
                    <div className="selleads-label--item"
                         style={itemStyle}>
                        <div className="selleads-label-dot"
                             style={dotStyle}>
                                 <div className="selleads-label-dot--pseudo-before"
                                      style={dotBeforeStyle}><span>Dot before</span></div>
                             </div>
                        <div className="selleads-label-container">
                            
                                <InnerBlocks
                                    templateLock="all"
                                    __experimentalPassedProps={ {
                                        // className: 'selleads-label--header',
                                    } }
                                    template={ INNER_BLOCKS_TEMPLATE }
                                />
                            
                            
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
                                    placeholder={ 'Simple text filling the column ...' }
                                    className="selleads-label--header"
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
