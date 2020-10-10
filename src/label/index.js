import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';


export const name = "selleads/label";

export const settings = {
	title: __( 'Selleads - Etykieta' ),
	description: __( 'Etykieta z kolorową kropką' ),
	keywords: [
		__( 'selleads' ),
		__( 'label' ),
    ],
    "category": "design",
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
	"supports": {
		"html": false
	},
	// icon,
	// transforms,
	// deprecated,
	edit,
	save,
};
