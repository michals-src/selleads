import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/columns";

export const settings = {
	title: __( 'Selleads - Kolumny' ),
	description: __( 'Element, który umożliwia wstawianie wybranych elementów (Kolumny tekstowe, Etykiety, Etykiety numeryczne) w strukturze kolumn' ),
	keywords: [
		__( 'selleads' ),
		__( 'section' ),
    ],
    "category": "design",
	"attributes": {
		"columns": {
			type: "number",
			default: 1
		},
		"backgroundColor": {
			type: "string",
			default: "transparent"
		},
		"borderRadius": {
			type: "number",
			default: 5
		},
		"padding": {
			type: "number",
			default: 0
		}
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
