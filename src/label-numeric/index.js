import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';


export const name = "selleads/label-numeric";

export const settings = {
	title: __( 'Selleads - Etykieta liczbowa' ),
	description: __( 'Etykieta z kolorową kropką' ),
	keywords: [
		__( 'selleads' ),
		__( 'label' ),
    ],
    "category": "design",
	attributes: {
		"backgroundColor": {
			"type": "string",
			"default": "transparent"
		},
		"borderRadius": {
			type: "number",
			default: 5
		},
		"borderWidth": {
			type: "number",
			default: 0
		},
		"borderColor": {
			type: "string",
			default: "#ffffff"
		},
		"padding": {
			type: "number",
			default: 25
		},
		"content": {
			type: "string",
			selector: "p"
		},
		"heading": {
			type: "string",
			selector: "h1,h2,h3,h4,h5,h6"
		},
		"withNumber": {
			type: "number"
		}
	},
	"supports": {
		"html": false
	},
	// icon,
	// transforms,
	// deprecated,
	edit,
	save,
};
