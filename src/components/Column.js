import { __ } from '@wordpress/i18n';
import {
    InnerBlocks,
    RichText
} from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';

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


function Columns({
    attributes,
    setAttributes
}) {

    const { content, align } = attributes;

    return (
        <div className="columns-item"
                style={{
                
            }}
        >
            <div className="columns-item-container" 
            style={{
                padding: '30px',
                backgroundColor: 'transparent'
            }}>
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
                        textAlign={ align }
                        // { ...blockWrapperProps }
                    />
                </div>
            </div>
        </div>

    )
}

export default Columns
