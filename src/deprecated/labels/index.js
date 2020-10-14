import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/labels";

export const settings = {
	title: __( 'Selleads - Etykiety' ),
	description: __( 'Element zawierający etykiety (bloki z kropkami)' ),
	keywords: [
		__( 'selleads' ),
		__( 'section' ),
    ],
    "category": "design",
	"attributes": {
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
	},
	"supports": {
		"anchor": true,
		"align": ["full","wide"],
		"html": false
	},
	// icon,
	// transforms,
	// deprecated,
	edit,
	save,
};
