/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';

import ColumnsCovering from './components/ColumnsCovering';
import Columns from './components/Columns';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { className, attributes, setAttributes } ) {

	const items = [1,2,3,4,5,6];

	return (
		<>

		<Columns attributes={attributes} setAttributes={setAttributes}></Columns>
		<ColumnsCovering></ColumnsCovering>
		
		


			<div className="columns-parent">
				<div className="columns-container">
					{
						items.map((x) => {
							return (
								<div className="columns-item">
									<div className="columns-item-container">
										<header>
											<h6 className="columns-item-heading is-uppercase">Lorem ipsum</h6>
											<h5 className="columns-item-heading is-uppercase">Lorem ipsum {x}</h5>
											{/* <h4 className="columns-item-heading is-uppercase">Lorem ipsum</h4>
											<h3 className="columns-item-heading">Lorem ipsum</h3>
											<h2 className="columns-item-heading">Lorem ipsum</h2>
											<h1 className="columns-item-heading">Lorem ipsum</h1> */}
										</header>
										<div className="columns-item-content">
											<p>
												The rest of it went in a doublet of fine cloth and velvet breeches and shoes to match for holidays, while on week-days he made a brave figure in his best homespun.
											</p>
										</div>
									</div>
								</div>
							);
						})
					}

				</div>
			</div>

		</>
	);
}
