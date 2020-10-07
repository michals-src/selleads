/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

import variations from './columns/variations';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit1 from './column/edit';
import save1 from './column/save';

import edit from './columns/ColumnsEdit';
import save from './columns/save2';

import edit3 from './dotted-labels/edit';
import save3 from './dotted-labels/save';
 
// import Edit3 from './edit';
// import save3 from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'selleads/column', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Selleads', 'Selleads column' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'selleads'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'design',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'smiley',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		content: {
			type: 'string',
			selector: 'p',
		},
		picture: {
			id: {
				type: 'number'
			},
			url: {
				type: 'string'
			}
		},
		bgColor: {
			type: 'string',
		},
		borderRadius:{
			type: 'number'
		},
		alignSelf: {
			type: 'string',
			default: "center"
		},
		padding: {
			type: "number",
			default: "30"
		},
		width: {
			type: "number"
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit1,

	/**
	 * @see ./save.js
	 */
	save1,
} );

registerBlockType( 'selleads/columns', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Selleads columns', 'Selleads Columns' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'selleads'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'design',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'smiley',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		"html": false,
		"anchor": true,
	},

	attributes: {
		columns: {
			type: "number",
			default: "2"
		},
		colorParent: {
			type: "string"
		},
		colorColumns: {
			type: "string"
		}, 
		radiusParent: {
			type: "number"
		}, 
		radiusColumns: {
			type: "number"
		}, 
		paddingParent: {
			type: "number",
			default: 0
		}, 
		paddingColumns: {
			type: "number",
			default: 0
		},
		className: {
			type: "string",
			default: "aaaaaaaaaaa"
		}
	},

	// getEditWrapperProps(props) {
	// 	return {
	// 		className: 'abc'
	// 	}
	// },

	/**
	 * @see ./edit.js
	 */
	edit: edit,

	/**
	 * @see ./save.js
	 */
	save
} );

registerBlockType( 'selleads/label', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Selleads label', 'Selleads' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'',
		'selleads'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'design',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'smiley',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		
	},

	/**
	 * @see ./edit.js
	 */
	edit: edit3,

	/**
	 * @see ./save.js
	 */
	save3,
} );