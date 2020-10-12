/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';


import * as section from './section';
import * as column from './column';
import * as columns from './columns';
import * as label from './label';
import * as labels from './labels';
import * as label_numeric from './label-numeric';
import * as labels_numeric from './labels-numeric';
import * as cover from './cover';
import * as media_text from './media-text';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	
	const { settings, name } = block;
	// if ( metadata ) {
	// 	unstable__bootstrapServerSideBlockDefinitions( { [ name ]: metadata } );
	// }
	registerBlockType( name, settings );
};

const registerSelleadsBlocks = (blocks) => {

	if(!blocks) return;


		// Common blocks are grouped at the top to prioritize their display
		// in various contexts — like the inserter and auto-complete components.
		blocks.forEach( registerBlock );

	// setDefaultBlockName( paragraph.name );
	// if ( window.wp && window.wp.oldEditor ) {
	// 	setFreeformContentHandlerName( classic.name );
	// }
	// setUnregisteredTypeHandlerName( missing.name );
	// setGroupingBlockName( group.name );
};

registerSelleadsBlocks([
	section,
	column,
	columns,
	label,
	labels,
	label_numeric,
	labels_numeric,
	cover,
	media_text
]);


/**
 * Internal dependencies
 */
// import Edit1 from './column/edit';
// import save1 from './column/save';

// import edit from './columns/ColumnsEdit';
// import save from './columns/save2';

// import edit3 from './dotted-label/edit';
// import save3 from './dotted-label/save';
 
// import Edit3 from './edit';
// import save3 from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
// registerBlockType( 'selleads/column', {
// 	/**
// 	 * This is the display title for your block, which can be translated with `i18n` functions.
// 	 * The block inserter will show this name.
// 	 */
// 	title: __( 'Selleads', 'Selleads column' ),

// 	/**
// 	 * This is a short description for your block, can be translated with `i18n` functions.
// 	 * It will be shown in the Block Tab in the Settings Sidebar.
// 	 */
// 	description: __(
// 		'Example block written with ESNext standard and JSX support – build step required.',
// 		'selleads'
// 	),

// 	/**
// 	 * Blocks are grouped into categories to help users browse and discover them.
// 	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
// 	 */
// 	category: 'design',

// 	/**
// 	 * An icon property should be specified to make it easier to identify a block.
// 	 * These can be any of WordPress’ Dashicons, or a custom svg element.
// 	 */
// 	icon: 'smiley',

// 	/**
// 	 * Optional block extended support features.
// 	 */
// 	supports: {
// 		// Removes support for an HTML mode.
// 		html: false,
// 	},

// 	attributes: {
// 		content: {
// 			type: 'string',
// 			selector: 'p',
// 		},
// 		picture: {
// 			id: {
// 				type: 'number'
// 			},
// 			url: {
// 				type: 'string'
// 			}
// 		},
// 		bgColor: {
// 			type: 'string',
// 		},
// 		borderRadius:{
// 			type: 'number'
// 		},
// 		alignSelf: {
// 			type: 'string',
// 			default: "center"
// 		},
// 		padding: {
// 			type: "number",
// 			default: "30"
// 		},
// 		width: {
// 			type: "number"
// 		}
// 	},

// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: Edit1,

// 	/**
// 	 * @see ./save.js
// 	 */
// 	save1,
// } );

// registerBlockType( 'selleads/columns', {
// 	/**
// 	 * This is the display title for your block, which can be translated with `i18n` functions.
// 	 * The block inserter will show this name.
// 	 */
// 	title: __( 'Selleads columns', 'Selleads Columns' ),

// 	/**
// 	 * This is a short description for your block, can be translated with `i18n` functions.
// 	 * It will be shown in the Block Tab in the Settings Sidebar.
// 	 */
// 	description: __(
// 		'Example block written with ESNext standard and JSX support – build step required.',
// 		'selleads'
// 	),

// 	/**
// 	 * Blocks are grouped into categories to help users browse and discover them.
// 	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
// 	 */
// 	category: 'design',

// 	/**
// 	 * An icon property should be specified to make it easier to identify a block.
// 	 * These can be any of WordPress’ Dashicons, or a custom svg element.
// 	 */
// 	icon: 'smiley',

// 	/**
// 	 * Optional block extended support features.
// 	 */
// 	supports: {
// 		// Removes support for an HTML mode.
// 		"html": false,
// 		"anchor": true,
// 	},

// 	attributes: {
// 		columns: {
// 			type: "number",
// 			default: "2"
// 		},
// 		colorParent: {
// 			type: "string"
// 		},
// 		colorColumns: {
// 			type: "string"
// 		}, 
// 		radiusParent: {
// 			type: "number"
// 		}, 
// 		radiusColumns: {
// 			type: "number"
// 		}, 
// 		paddingParent: {
// 			type: "number",
// 			default: 0
// 		}, 
// 		paddingColumns: {
// 			type: "number",
// 			default: 0
// 		},
// 		className: {
// 			type: "string",
// 			default: "aaaaaaaaaaa"
// 		}
// 	},

// 	// getEditWrapperProps(props) {
// 	// 	return {
// 	// 		className: 'abc'
// 	// 	}
// 	// },

// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: edit,

// 	/**
// 	 * @see ./save.js
// 	 */
// 	save
// } );

// registerBlockType( 'selleads/label', {
// 	/**
// 	 * This is the display title for your block, which can be translated with `i18n` functions.
// 	 * The block inserter will show this name.
// 	 */
// 	title: __( 'Selleads label', 'Selleads' ),

// 	/**
// 	 * This is a short description for your block, can be translated with `i18n` functions.
// 	 * It will be shown in the Block Tab in the Settings Sidebar.
// 	 */
// 	description: __(
// 		'',
// 		'selleads'
// 	),

// 	/**
// 	 * Blocks are grouped into categories to help users browse and discover them.
// 	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
// 	 */
// 	category: 'design',

// 	/**
// 	 * An icon property should be specified to make it easier to identify a block.
// 	 * These can be any of WordPress’ Dashicons, or a custom svg element.
// 	 */
// 	icon: 'smiley',

// 	/**
// 	 * Optional block extended support features.
// 	 */
// 	supports: {
// 		// Removes support for an HTML mode.
// 		html: false,
// 	},

// 	attributes: {
// 		"background": {
// 			"color": {
// 				"type": "string",
// 				"default": "#ffffff"
// 			},
// 			"image": {
// 				"type": "string",
// 			}
// 		},
// 		border: {
// 			radius: {
// 				type: "number",
// 				default: 5
// 			},
// 			width: {
// 				type: "number",
// 				default: 1
// 			},
// 			color: {
// 				type: "string",
// 				default: "#ffffff"
// 			}
// 		},
// 		padding: {
// 			inner: {
// 				type: "number",
// 				default: 25
// 			},
// 			outer: {
// 				type: "number",
// 				default: 15
// 			}
// 		},
// 		dot: {
// 			color: {
// 				type: "string",
// 				default: "#ffffff"
// 			},
// 			width: {
// 				type: "string",
// 				default: "#ffffff"
// 			},
// 		},
// 		content: {
// 			type: "string",
// 			selector: "p"
// 		},
// 		heading: {
// 			type: "string",
// 			selector: "h1,h2,h3,h4,h5,h6"
// 		}
// 	},

// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: edit3,

// 	/**
// 	 * @see ./save.js
// 	 */
// 	save3,
// } );


/**
 * WordPress dependencies
 */
// import {
// 	// registerBlockType,
// 	setDefaultBlockName,
// 	setFreeformContentHandlerName,
// 	setUnregisteredTypeHandlerName,
// 	setGroupingBlockName,
// 	unstable__bootstrapServerSideBlockDefinitions, // eslint-disable-line camelcase
// } from '@wordpress/blocks';

