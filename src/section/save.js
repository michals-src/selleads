/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({
	attributes
}) {

	// Hello 

	const {
		align,
		alignItems,
		image,
		color,
		padding,
		borderRadius,
		borderWidth,
		borderColor
	} = attributes;

	let styling = {
		backgroundColor: color,
		padding: `${padding}px`,
		borderRadius: `${borderRadius}px`,
		border: `${borderWidth}px solid ${borderColor}`,
		alignItems: alignItems,
	};

	return (
		<div className={`selleads-section align${align}`} style={styling}>
				<div className="selleads-section-container">
					<InnerBlocks.Content />
				</div>
			</div>
	);
}
