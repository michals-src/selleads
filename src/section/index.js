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
		"alignItems":{
			"type": "string",
			"default": "center"
		},
		"image": {
			"type": "string",
		},
		"color": {
			"type": "string",
			"default": "transparent"
		},
		"padding": {
			"type": "number",
			"default": 25
		},
		"borderRadius": {
			"type": "number",
			"default": 5
		},
		"borderWidth": {
			"type": "number",
			"default": 0
		},
		"borderColor": {
			"type": "string",
			"default": null
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
