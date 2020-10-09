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

import edit3 from './dotted-label/edit';
import save3 from './dotted-label/save';
 
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
		"background": {
			"color": {
				"type": "string",
				"default": "#ffffff"
			},
			"image": {
				"type": "string",
			}
		},
		border: {
			radius: {
				type: "number",
				default: 5
			},
			width: {
				type: "number",
				default: 1
			},
			color: {
				type: "string",
				default: "#ffffff"
			}
		},
		padding: {
			inner: {
				type: "number",
				default: 25
			},
			outer: {
				type: "number",
				default: 15
			}
		},
		dot: {
			color: {
				type: "string",
				default: "#ffffff"
			},
			width: {
				type: "string",
				default: "#ffffff"
			},
		},
		content: {
			type: "string",
			selector: "p"
		},
		heading: {
			type: "string",
			selector: "h1,h2,h3,h4,h5,h6"
		}
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


/**
 * WordPress dependencies
 */
import '@wordpress/core-data';
import '@wordpress/notices';
import '@wordpress/block-editor';
import {
	registerBlockType,
	setDefaultBlockName,
	setFreeformContentHandlerName,
	setUnregisteredTypeHandlerName,
	setGroupingBlockName,
	unstable__bootstrapServerSideBlockDefinitions, // eslint-disable-line camelcase
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as paragraph from './paragraph';
import * as image from './image';
import * as heading from './heading';
import * as quote from './quote';
import * as gallery from './gallery';
import * as archives from './archives';
import * as audio from './audio';
import * as buttons from './buttons';
import * as button from './button';
import * as calendar from './calendar';
import * as categories from './categories';
import * as code from './code';
import * as columns from './columns';
import * as column from './column';
import * as cover from './cover';
import * as embed from './embed';
import * as file from './file';
import * as html from './html';
import * as mediaText from './media-text';
import * as navigation from './navigation';
import * as navigationLink from './navigation-link';
import * as latestComments from './latest-comments';
import * as latestPosts from './latest-posts';
import * as list from './list';
import * as missing from './missing';
import * as more from './more';
import * as nextpage from './nextpage';
import * as preformatted from './preformatted';
import * as pullquote from './pullquote';
import * as reusableBlock from './block';
import * as rss from './rss';
import * as search from './search';
import * as group from './group';
import * as separator from './separator';
import * as shortcode from './shortcode';
import * as spacer from './spacer';
import * as subhead from './subhead';
import * as table from './table';
import * as textColumns from './text-columns';
import * as verse from './verse';
import * as video from './video';
import * as tagCloud from './tag-cloud';
import * as classic from './classic';
import * as socialLinks from './social-links';
import * as socialLink from './social-link';

// Full Site Editing Blocks
import * as siteLogo from './site-logo';
import * as siteTagline from './site-tagline';
import * as siteTitle from './site-title';
import * as templatePart from './template-part';
import * as query from './query';
import * as queryLoop from './query-loop';
import * as queryPagination from './query-pagination';
import * as postTitle from './post-title';
import * as postContent from './post-content';
import * as postAuthor from './post-author';
import * as postComment from './post-comment';
import * as postCommentAuthor from './post-comment-author';
import * as postCommentContent from './post-comment-content';
import * as postCommentDate from './post-comment-date';
import * as postComments from './post-comments';
import * as postCommentsCount from './post-comments-count';
import * as postCommentsForm from './post-comments-form';
import * as postDate from './post-date';
import * as postExcerpt from './post-excerpt';
import * as postFeaturedImage from './post-featured-image';
import * as postHierarchicalTerms from './post-hierarchical-terms';
import * as postTags from './post-tags';

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
	const { metadata, settings, name } = block;
	if ( metadata ) {
		unstable__bootstrapServerSideBlockDefinitions( { [ name ]: metadata } );
	}
	registerBlockType( name, settings );
};

/**
 * Function to register core blocks provided by the block editor.
 *
 * @example
 * ```js
 * import { registerCoreBlocks } from '@wordpress/block-library';
 *
 * registerCoreBlocks();
 * ```
 */
export const registerCoreBlocks = () => {
	[
		// Common blocks are grouped at the top to prioritize their display
		// in various contexts — like the inserter and auto-complete components.
		paragraph,
		image,
		heading,
		gallery,
		list,
		quote,

		// Register all remaining core blocks.
		shortcode,
		archives,
		audio,
		button,
		buttons,
		calendar,
		categories,
		code,
		columns,
		column,
		cover,
		embed,
		file,
		group,
		window.wp && window.wp.oldEditor ? classic : null, // Only add the classic block in WP Context
		html,
		mediaText,
		latestComments,
		latestPosts,
		missing,
		more,
		nextpage,
		preformatted,
		pullquote,
		rss,
		search,
		separator,
		reusableBlock,
		socialLinks,
		socialLink,
		spacer,
		subhead,
		table,
		tagCloud,
		textColumns,
		verse,
		video,
	].forEach( registerBlock );

	setDefaultBlockName( paragraph.name );
	if ( window.wp && window.wp.oldEditor ) {
		setFreeformContentHandlerName( classic.name );
	}
	setUnregisteredTypeHandlerName( missing.name );
	setGroupingBlockName( group.name );
};

/**
 * Function to register experimental core blocks depending on editor settings.
 *
 * @param {Object} settings Editor settings.
 *
 * @example
 * ```js
 * import { __experimentalRegisterExperimentalCoreBlocks } from '@wordpress/block-library';
 *
 * __experimentalRegisterExperimentalCoreBlocks( settings );
 * ```
 */
export const __experimentalRegisterExperimentalCoreBlocks =
	process.env.GUTENBERG_PHASE === 2
		? ( settings ) => {
				const { __experimentalEnableFullSiteEditing } = settings;

				[
					navigation,
					navigationLink,

					// Register Full Site Editing Blocks.
					...( __experimentalEnableFullSiteEditing
						? [
								siteLogo,
								siteTagline,
								siteTitle,
								templatePart,
								query,
								queryLoop,
								queryPagination,
								postTitle,
								postContent,
								postAuthor,
								postComment,
								postCommentAuthor,
								postCommentContent,
								postCommentDate,
								postComments,
								postCommentsCount,
								postCommentsForm,
								postDate,
								postExcerpt,
								postFeaturedImage,
								postHierarchicalTerms,
								postTags,
						  ]
						: [] ),
				].forEach( registerBlock );
		  }
		: undefined;
