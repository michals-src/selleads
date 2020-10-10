import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/cover";

export const settings = {
	title: __( 'Selleads - nakładka' ),
	description: __( 'Element z tłem oraz tekstem' ),
	keywords: [
		__( 'selleads' ),
		__( 'cover' ),
    ],
    "category": "design",
	"attributes": {
		"align": {
			"type": "string",
			"default": 'full'
		},
		"headerTitle" : {
			"type": "string",
			"selector": "h1"
		},
		"headerSubTitle" : {
			"type": "string",
			"selector": "h5"
		},
		"titleFontSize" : {
			"type": "number",
			"default": "48"
		},
		"subTitleFontSize" : {
			"type": "number"
		},
		"url": {
			"type": "string"
		},
		"id": {
			"type": "number"
		},
		"overlayColor": {
			"type": "string"
		},
		"backgroundType": {
			"type": "string",
			"default": "image"
		},
		"focalPoint": {
			"type": "object"
		},
		"minHeight": {
			"type": "number"
		},
		"contentPosition": {
			"type": "string"
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
