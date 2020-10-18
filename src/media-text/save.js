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
export default function save({
	attributes
}) {

	const {
		subtitle,
		title,
		paragraph,
		picture
	} = attributes;

	return (
		<>
		<div className="selleads-text-image"> 
			<div className="selleads-text-image--container">
				<div className="selleads-text-image--text"> {/* Text */}
					<div className="selleads-text-image--text-content">
						<div>
							<header>
								<RichText.Content
										tagName="h6"
										placeholder="SUBTITLE"
										value={subtitle?.value}
										/>
								<RichText.Content tagName="h3"
										placeholder="Title"
										value={title?.value}
										/>
							</header>
						</div>
						<div>
							<div>
							<RichText.Content tagName="p"
									placeholder="Paragraph"
									value={paragraph?.value}
									/>
							</div>
						</div>
					</div>
				</div>
				<div className="selleads-text-image--image"> {/* Image */}
					<div>
						<figure>
							<img src={picture?.url}></img>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</>
	);
}
