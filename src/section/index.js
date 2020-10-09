import { __ } from '@wordpress/i18n';
// import { audio as icon } from '@wordpress/icons';

import edit from './edit';
import save from './save';

export const name = "selleads/section";

export const settings = {
	title: __( 'Selleads - sekcja elementów' ),
	description: __( 'Element, który tworzy zbiornik dla elementów w nim umieszczonych' ),
	keywords: [
		__( 'selleads' ),
		__( 'section' ),
    ],
    "category": "design",
	"attributes": {
		"align": {
			"type": "string",
			"default": 'full'
		},
		"image": {
			"type": "string",
		},
		"color": {
			"type": "string",
			"default": "#fff"
		},
		"radius": {
			"type": "number",
			"default": 5
		},
		"padding": {
			"type": "number",
			"default": 25
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
