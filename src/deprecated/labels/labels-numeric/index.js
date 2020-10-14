import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/labels-numeric";

export const settings = {
	title: __( 'Selleads - Etykiety liczbowe' ),
	description: __( 'Element zawierający etykiety (bloki z numerami)' ),
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
		"html": false
	},
	// icon,
	// transforms,
	// deprecated,
	edit,
	save,
};
