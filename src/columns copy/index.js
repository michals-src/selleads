import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/columns";

export const settings = {
	title: __( 'Selleads - Kolumny' ),
	description: __( 'Element, który umożliwia wstawianie kolumn' ),
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
