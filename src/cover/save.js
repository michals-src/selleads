/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(
	attributes
) {

	const {
		url,
		headerTitle,
		headerSubTitle,
		titleFontSize,
		subTitleFontSize
	} = attributes;

	return (
		<>
		<div className="selleads-header"
		
			 style={{
				 backgroundColor: "#fff",
				 backgroundImage: url,
				 backgroundRepeat: 'no-repeat',
				 backgroundPosition: 'center'
			 }}>
			<div className="selleads-header--container">
				<div className="selleads-header--captions">
					<div className="selleads-header--title">
						<RichText.Content 
							style={{
								fontSize: `${titleFontSize}px`
							}}
							tagName="h1" value={ headerTitle } />
					</div>
					<div className="selleads-header--sub_title">
						<RichText.Content 
							style={{
								fontSize: `${subTitleFontSize}px`
							}}
							tagName="h5" value={ headerSubTitle } />
					</div>
				</div>
			</div>
		</div>
		</>
	);
}
