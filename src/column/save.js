/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
    InnerBlocks,
    RichText,
	__experimentalBlockVariationPicker,
	__experimentalUseBlockWrapperProps as useBlockWrapperProps,
} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save({
    attributes,
    ...props
}) {

    const { content, picture, bgColor, borderRadius, alignSelf, padding, width } = attributes;
    const isPicture = picture ? true : false;

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
                    <InnerBlocks.Content />
                </header>
                <div className="columns-item-content">
                    <RichText.Content />
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
			<header>
				<InnerBlocks.Content />
			</header>
			<div className="columns-item-content">
				<RichText.Content />
			</div>
		</>
    )
}

export default save;
