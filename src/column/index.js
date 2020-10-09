import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';


export const name = "selleads/column";

export const settings = {
	title: __( 'Selleads - Kolumna' ),
	description: __( 'Kolumna' ),
	keywords: [
		__( 'selleads' ),
		__( 'column' ),
    ],
    "category": "design",
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
	"supports": {
		"html": false
	},
	// icon,
	// transforms,
	// deprecated,
	edit,
	save,
};
